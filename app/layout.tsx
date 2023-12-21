import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/components/StoryblokProvider'
import Header  from '@/components/header/header'

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rijschool Menig',
  description: 'Rijschool Menig',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang="fr">
        <body>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  )
}
