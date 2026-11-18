import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://udayzaware.in'),
  title: 'Udaykumar Zaware — Data Analytics & Computer Vision',
  description: 'Udaykumar Zaware is a Computer Engineering student in Pune focused on data analytics, business intelligence, and hands-on computer vision projects.',
  openGraph: {
    title: 'Udaykumar Zaware — Data Analytics & Computer Vision',
    description: 'A portfolio of data analytics, business intelligence, and hands-on computer vision projects by Udaykumar Zaware.',
    url: 'https://udayzaware.in',
    siteName: 'Udaykumar Zaware',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Udaykumar Zaware — Data Analytics & Computer Vision', description: 'Data analytics, business intelligence, and hands-on computer vision projects.' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#090b10', colorScheme: 'dark' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
