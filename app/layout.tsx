import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://udayzaware.in'),
  title: 'Udaykumar Zaware — Data, AI & Computer Vision',
  description: 'Udaykumar Zaware is a Computer Engineering student in Pune exploring data analytics, business intelligence, and practical computer vision.',
  openGraph: {
    title: 'Udaykumar Zaware — Data, AI & Computer Vision',
    description: 'A portfolio of analytics, business intelligence, and applied AI projects by Udaykumar Zaware.',
    url: 'https://udayzaware.in',
    siteName: 'Udaykumar Zaware',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Udaykumar Zaware — Data, AI & Computer Vision', description: 'Analytics, business intelligence, and applied AI projects.' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#f4f1e7', colorScheme: 'light' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
