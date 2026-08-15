import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const editorial = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-editorial',
  display: 'swap',
})

const clean = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-clean',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TattooBySoul — Art Etched Into Soul',
  description:
    'TattooBySoul (@tattoobysoul) — luxury contemporary tattoo artist specializing in blackwork, fine line, realism, geometric and ornamental custom ink. Book a private studio session.',
  generator: 'v0.app',
  keywords: [
    'tattoo artist',
    'blackwork',
    'fine line tattoo',
    'custom tattoo',
    'contemporary tattoo',
    'TattooBySoul',
  ],
  openGraph: {
    title: 'TattooBySoul — Art Etched Into Soul',
    description:
      'Luxury contemporary tattoo artist. Blackwork, fine line, realism, geometric, ornamental & custom ink.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171717',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${editorial.variable} ${clean.variable}`}>
      <body className="antialiased grain-fixed">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
