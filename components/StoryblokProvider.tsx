'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'


/** 2. Import your components */
import { Page } from "@/components/Page";
import Grid from "./Grid";
import Slider from './Slider'
import ServicesCard from './Services_Card/services_card';
import MultipleSection from './Mutilple_Section/MultipleSection';
import About_Company from './about';
import CallToAction from './callToAction';
import TitleInfo from './TitleInfo/title_info';
import Pricing from './pricing';
import ContactForm from './contact-form';
import Gallary from './gallary';
import Testimonials from './testimonials'

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
    Slider: Slider,
    'services card': ServicesCard,
    'title info': TitleInfo,
    'multiple section': MultipleSection,
    "about card": About_Company,
    "call to action": CallToAction,
    "pricing": Pricing,
    "contact": ContactForm,
    "gallary": Gallary,
    "testimonials": Testimonials

  },
});


export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
