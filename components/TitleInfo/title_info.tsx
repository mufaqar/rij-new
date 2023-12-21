'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '../UI/container';
import { storyblokEditable } from '@storyblok/react';

const TitleInfo = ({ blok }: any) => {
     const controls = useAnimation();
     const ref = useRef(null)
     const isInView = useInView(ref)

     useEffect(() => {
          if (isInView) {
               controls.start('visible'); // Use 'visible' as the state name
          }
     }, [controls, isInView]);

     const fadeInLeft = {
          visible: { opacity: 1, transform: "translateX(0)", transition: { duration: 1 } },
          hidden: { opacity: 0, transform: "translateX(-100%)" }
     };
     return (
          <>
               <div {...storyblokEditable(blok)} className='bg-gray-100 pt-16 pb-6'>
               <Container>
                    <motion.h3
                         // animate={controls}
                         // initial='hidden'
                         // variants={fadeInLeft}
                         className='text-xl font-bold text-primary '
                    >
                         {blok?.sub_title}
                    </motion.h3>
                    <motion.h2
                         // animate={controls}
                         // initial='hidden'
                         // variants={fadeInLeft}
                         className='md:text-5xl text-2xl font-extrabold text-slate-950 mb-6'
                    >
                         {blok?.title}
                    </motion.h2>
               </Container>
               </div>
          </>
     )
}

export default TitleInfo