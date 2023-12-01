import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/components/StoryblokProvider'
import { Navbar } from '@/components/Navbar'

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Big Consult',
  description: 'Your partner in accounting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang="fr">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </StoryblokProvider>
  )
}
