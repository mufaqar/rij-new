'use client';

import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Grid = ({ blok }) => {
  return (
    <div className='pb-16 bg-gray-100 ' {...storyblokEditable(blok)}>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3" >
        {blok.columns.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
