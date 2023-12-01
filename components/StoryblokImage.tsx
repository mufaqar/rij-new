import React, { forwardRef } from 'react'
import Image, { ImageProps } from 'next/image'
import { extractDimensionsFromStoryblokURL } from '@/lib/storyblok'

// Usage:
// - Set fill and width/height to get a responsive image with focal point
// height={300}
// width={600}
// fill
//
// - No params will render the original image
// - Set only width or height to get a responsive image with no focal point

export interface StoryblokImageProps
  extends Omit<ImageProps, 'width' | 'height'> {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  imageObject?: {
    focus?: string
    // Include any other properties from the blok.background_image object
  }
  darkness?: number
  isSvg?: boolean
}

const StoryblokImage = forwardRef<HTMLImageElement, StoryblokImageProps>(
  function StoryblokImage(
    { src, alt, fill, width, height, imageObject, darkness, isSvg, ...rest },
    ref
  ) {
    const { width: originalWidth, height: originalHeight } =
      extractDimensionsFromStoryblokURL(src)

    // Set width and height to undefined if fill is true
    const imageWidth = fill ? undefined : width || originalWidth
    const imageHeight = fill ? undefined : height || originalHeight

    // Update resize parameters based on provided width and height
    let resizeParam = ''
    if (typeof width === 'number' && typeof height === 'number') {
      resizeParam = `${width}x${height}`
    } else if (typeof width === 'number') {
      resizeParam = `${width}x0`
    } else if (typeof height === 'number') {
      resizeParam = `0x${height}`
    }

    // Apply focal filter if focus is present in imageObject
    let filterParams: string[] = []
    if (imageObject?.focus) {
      filterParams.push(`focal(${imageObject.focus})`)
    }

    // Combine filter parameters
    let filterParam = ''
    if (filterParams.length > 0) {
      filterParam = `filters:${filterParams.join(':')}`
    }

    // Combine resize and filter parameters
    let imageParams = `${resizeParam ? `${resizeParam}/` : ''}${filterParam}`

    const webpSrc = isSvg ? src : `${src}/m/${imageParams}`

    return (
      <>
        <Image
          ref={ref}
          src={webpSrc}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          fill={fill}
          {...rest}
        />
        {darkness && (
          <div
            style={{ backgroundColor: `rgb(0 0 0 / ${darkness / 100})` }}
            className="absolute inset-0 -z-10 bg-black/30"
          ></div>
        )}
      </>
    )
  }
)

StoryblokImage.displayName = 'StoryblokImage'
export default StoryblokImage
