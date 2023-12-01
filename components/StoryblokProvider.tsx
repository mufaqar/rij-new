'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Hero, Page } from '@/components'

const components = {
  page: Page,
  hero: Hero,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
})

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
