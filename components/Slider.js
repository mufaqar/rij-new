'use client';

import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Slider = ({ blok }) => {
  return (
    <div className="" {...storyblokEditable(blok)}>
      {blok.slider.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Slider;
