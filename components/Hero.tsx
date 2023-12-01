import { HeroStoryblok } from '@/component-types-sb'
import { storyblokEditable } from '@storyblok/react'
import { FC } from 'react'
import StoryblokImage from './StoryblokImage'

type Props = {
  blok: HeroStoryblok
}

export const Hero: FC<Props> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {/* This field is mandatory in Storyblok */}
      <div>{blok.title}</div>

      {/* This field is optional in Storyblok */}
      {blok.description && <div>{blok.description}</div>}

      {/* cta (todo: make cta component) */}
      {blok.cta_label && blok.cta_link.cached_url && (
        <a href={blok.cta_link.cached_url}>{blok.cta_label}</a>
      )}

      {/* image using Storyblok image service */}
      {blok.background_image && (
        <StoryblokImage
          src={blok.background_image.filename}
          alt={blok.background_image.alt || ''}
        />
      )}

      {/* image using Storyblok image service with set width */}
      {blok.background_image && (
        <StoryblokImage
          src={blok.background_image.filename}
          alt={blok.background_image.alt || ''}
          width={200}
        />
      )}

      {/* image using Storyblok image service with object cover*/}
      {blok.background_image && (
        <StoryblokImage
          src={blok.background_image.filename}
          alt={blok.background_image.alt || ''}
          className="max-h-[150px] object-cover"
        />
      )}
    </div>
  )
}
