import { NavigationSettingsStoryblok } from '@/component-types-sb'
import { getSettings } from '@/lib/storyblok'
import { ISbStoryData } from '@storyblok/react/rsc'
import { FC } from 'react'

export const Navbar: FC = async () => {
  const { content }: ISbStoryData<NavigationSettingsStoryblok> =
    await getSettings('navigation')

  return (
    <nav>
      <div className="flex space-x-4">
        {/* TODO: create link component */}
        {content.navigation_item_list?.map((item) => (
          <div key={item._uid}>{item.label}</div>
        ))}
      </div>
    </nav>
  )
}
