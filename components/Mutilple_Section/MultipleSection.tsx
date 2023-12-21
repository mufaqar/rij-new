'use client'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import React from 'react'

const MultipleSection = ({ blok }: any) => {
     return (
          <div className="" {...storyblokEditable(blok)} >
               {blok.section.map((nestedBlok: any, idx:number) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} idx={idx}/>
               ))}
          </div>

     )
}

export default MultipleSection