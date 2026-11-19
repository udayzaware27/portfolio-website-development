import { Resend } from 'resend'

export const runtime = 'nodejs'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

const submissionsByIp = new Map<string, { count: number; resetAt: number }>()

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[character]
  })
}

function getRetryAfter(ip: string, now: number) {
  const current = submissionsByIp.get(ip)

  if (current && current.resetAt > now) {
    if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
      return Math.max(1, Math.ceil((current.resetAt - now) / 1000))
    }

    current.count += 1
    return null
  }

  if (submissionsByIp.size >= 1000) {
    for (const [key, entry] of submissionsByIp) {
      if (entry.resetAt <= now) submissionsByIp.delete(key)
    }

    if (submissionsByIp.size >= 1000) submissionsByIp.clear()
  }

  submissionsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
  return null
}

function jsonError(error: string, status: number, headers?: HeadersInit) {
  return Response.json({ error }, { status, headers })
}

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return jsonError('Send the contact form as JSON.', 415)
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return jsonError('The contact form could not be read.', 400)
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return jsonError('The contact form data is invalid.', 400)
  }

  const fields = payload as Record<string, unknown>
  const name = typeof fields.name === 'string' ? fields.name.trim() : ''
  const email = typeof fields.email === 'string' ? fields.email.trim() : ''
  const phone = typeof fields.phone === 'string' ? fields.phone.trim() : ''
  const message = typeof fields.message === 'string' ? fields.message.trim() : ''
  const website = typeof fields.website === 'string' ? fields.website.trim() : ''

  if (website) return jsonError('Unable to process this message.', 400)
  if (!name || name.length > 100) return jsonError('Enter a name of 1 to 100 characters.', 400)
  if (!EMAIL_PATTERN.test(email) || email.length > 254) return jsonError('Enter a valid email address.', 400)
  if (phone.length > 40) return jsonError('The phone number must be 40 characters or fewer.', 400)
  if (!message || message.length > 5000) return jsonError('Enter a message of 1 to 5000 characters.', 400)

  const now = Date.now()
  const ip = (request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown')
    .split(',')[0]
    .trim() || 'unknown'
  const retryAfter = getRetryAfter(ip, now)

  if (retryAfter) {
    return jsonError('Too many messages. Please try again in a few minutes.', 429, { 'Retry-After': String(retryAfter) })
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_EMAIL
  const sender = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !recipient || !sender) {
    return jsonError('Email delivery is not configured. Please try again later.', 503)
  }

  const submittedAt = new Date(now).toISOString()
  const safeName = name.replace(/[\r\n]+/g, ' ').trim()
  const safeMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, '<br />')
  const html = `
    <h1>New Portfolio Enquiry</h1>
    <p><strong>Visitor name:</strong> ${escapeHtml(safeName)}</p>
    <p><strong>Visitor email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone number:</strong> ${escapeHtml(phone || 'Not provided')}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
    <p><strong>Submission timestamp (UTC):</strong> ${submittedAt}</p>
  `
  const text = [
    'New Portfolio Enquiry',
    `Visitor name: ${safeName}`,
    `Visitor email: ${email}`,
    `Phone number: ${phone || 'Not provided'}`,
    'Message:',
    message,
    `Submission timestamp (UTC): ${submittedAt}`,
  ].join('\n\n')

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `New Portfolio Enquiry from ${safeName}`,
      html,
      text,
    })

    if (error || !data?.id) {
      return jsonError('We could not deliver your message. Please try again shortly.', 502)
    }

    return Response.json({ success: true, id: data.id })
  } catch {
    return jsonError('We could not deliver your message. Please try again shortly.', 502)
  }
}
