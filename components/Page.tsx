import { PageStoryblok } from '@/component-types-sb'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { FC } from 'react'

type Props = {
  blok: PageStoryblok
}

export const Page: FC<Props> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
