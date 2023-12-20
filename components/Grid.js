'use client';

import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Grid = ({ blok }) => {
  return (
    <div className="" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
