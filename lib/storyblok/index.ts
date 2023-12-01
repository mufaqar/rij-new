import {
  ISbStoriesParams,
  StoryblokClient,
  getStoryblokApi,
} from '@storyblok/react/rsc'

export async function getSettings(type: string, locale?: string) {
  const { data } = await fetchData()

  async function fetchData() {
    const sbParams: ISbStoriesParams = {
      version: process.env.STORYBLOK_VERSION as ISbStoriesParams['version'],
      language: locale || 'default',
    }

    const storyblokApi: StoryblokClient = getStoryblokApi()
    return storyblokApi.get(`cdn/stories/settings/${type}`, sbParams)
  }

  return data.story
}

export function extractDimensionsFromStoryblokURL(url: string) {
  if (typeof url !== 'string' || !url.includes('/')) {
    return {
      width: undefined,
      height: undefined,
    }
  }

  const urlParts = url.split('/')
  if (urlParts.length < 6) {
    return {
      width: undefined,
      height: undefined,
    }
  }

  const dimensionString = urlParts[5]
  if (!dimensionString.includes('x')) {
    return {
      width: undefined,
      height: undefined,
    }
  }

  const [width, height] = dimensionString.split('x')

  if (
    !width ||
    !height ||
    isNaN(parseInt(width, 10)) ||
    isNaN(parseInt(height, 10))
  ) {
    return {
      width: undefined,
      height: undefined,
    }
  }

  return {
    width: parseInt(width, 10),
    height: parseInt(height, 10),
  }
}

export async function getLinks() {
  const sbParams: ISbStoriesParams = {
    version: process.env.storyblokVersion as ISbStoriesParams['version'],
    language: 'default',
  }

  const storyblokApi = getStoryblokApi()

  if (!storyblokApi) {
    return
  }
  const { data } = await storyblokApi.get('cdn/links', sbParams)
  const links = data ? data.links : null
  return links
}
