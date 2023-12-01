import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface HeroStoryblok {
  background_image?: AssetStoryblok;
  title: string;
  description?: string;
  cta_label: string;
  cta_link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface ImageWithTextStoryblok {
  image: AssetStoryblok;
  image_position: "" | "left" | "right";
  title: string;
  description: string;
  cta_label?: string;
  cta_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "image_with_text";
  [k: string]: any;
}

export interface NavigationItemStoryblok {
  label: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "navigation_item";
  [k: string]: any;
}

export interface NavigationSettingsStoryblok {
  logo_desktop: AssetStoryblok;
  logo_mobile: AssetStoryblok;
  navigation_item_list?: NavigationItemStoryblok[];
  cta_label?: string;
  cta_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "navigation_settings";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | HeroStoryblok
    | ImageWithTextStoryblok
    | NavigationItemStoryblok
    | NavigationSettingsStoryblok
    | PageStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
