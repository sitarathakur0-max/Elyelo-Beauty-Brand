import type { Metadata } from 'next'
import { inter, playfair } from './fonts'
import './globals.css'
import { AnnouncementMarquee } from '@/components/global/AnnouncementMarquee'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'
import { SITE } from '@/lib'

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <AnnouncementMarquee />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}