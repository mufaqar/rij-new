'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'


/** 2. Import your components */
import { Page } from "@/components/Page";
import Grid from "./Grid";
import Hero from './Hero';
import Slider from './Slider'

// import Services from "./services";
// import Full_Content_Block from "./Full_Content_Block";
// import Brand_Slider from './brand-slider'
// import Client_Logos from "./clients";
// import Half_Content_Block from "./half-content-block";


/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    "grid": Grid,
     "hero_secton": Hero,
     "Slider":Slider
    // "Services Block": Services,
    // "text_block": Full_Content_Block,
    // "text_block_half": Half_Content_Block,
    // "Work": Brand_Slider,
    // "Clients Section": Client_Logos
  },
});


export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
