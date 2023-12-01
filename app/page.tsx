import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbStory,
  storyblokInit,
  StoryblokStory,
} from '@storyblok/react/rsc'

export const revalidate = 0

export default async function Home() {
  const { data }: ISbStory = await fetchData()

  return (
    <>
      <StoryblokStory story={data.story} />
    </>
  )
}

async function fetchData() {
  const sbParams: ISbStoriesParams = {
    version: process.env.STORYBLOK_VERSION as ISbStoriesParams['version'],
  }

  let storyblokApi = getStoryblokApi()

  if (!storyblokApi) {
    storyblokInit()
    storyblokApi = getStoryblokApi()
  }

  return storyblokApi?.get(`cdn/stories/home`, sbParams)
}
