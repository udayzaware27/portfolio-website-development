import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://udayzaware.in'),
  title: 'Udaykumar Zaware | Data Analytics, AI & Computer Vision',
  description: 'Explore the portfolio of Udaykumar Zaware, a Computer Engineering student working across Data Analytics, Artificial Intelligence, and Computer Vision.',
  openGraph: {
    title: 'Udaykumar Zaware | Data Analytics, AI & Computer Vision',
    description: 'Turning data into insights. Building intelligence with AI.',
    url: 'https://udayzaware.in',
    siteName: 'Udaykumar Zaware',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Udaykumar Zaware | Data Analytics, AI & Computer Vision', description: 'Turning data into insights. Building intelligence with AI.' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#0b0d0f', colorScheme: 'dark' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
