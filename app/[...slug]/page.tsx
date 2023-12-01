import { getLinks } from '@/lib/storyblok'
import {
  ISbStoriesParams,
  ISbStory,
  StoryblokStory,
  getStoryblokApi,
  storyblokInit,
} from '@storyblok/react/rsc'

export const revalidate = 0

type Paths = {
  slug: string[]
}

export async function generateStaticParams() {
  const links = await getLinks()
  const paths: Paths[] = []

  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === 'home') {
      return
    }

    const slug = links[linkKey].slug
    let splittedSlug = slug.split('/')
    paths.push({ slug: splittedSlug })
  })

  return paths
}

export default async function Page({ params }: { params: Paths }) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  const { data }: ISbStory = await fetchData(slug)

  return (
    <>
      <StoryblokStory story={data.story} />
    </>
  )
}

async function fetchData(slug: string) {
  const sbParams: ISbStoriesParams = {
    version: process.env.STORYBLOK_VERSION as ISbStoriesParams['version'],
  }

  let storyblokApi = getStoryblokApi()

  if (!storyblokApi) {
    storyblokInit()
    storyblokApi = getStoryblokApi()
  }

  return storyblokApi?.get(`cdn/stories/${slug}`, sbParams)
}
