import React, { useEffect, useRef } from 'react'
import Container from './UI/container'
import Image from 'next/image'
import { useAnimation, useInView, motion } from 'framer-motion';
import { storyblokEditable } from '@storyblok/react';

const fadeInUp = {
  visible: { opacity: 1, transform: "translateY(0)", transition: { duration: 1 } },
  hidden: { opacity: 0, transform: "translateY(50%)" }
};

function Gallary({blok}:any) {
  const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); // Use 'visible' as the state name
        }
    }, [controls, isInView]);
  return (
    <section ref={ref} className='py-16' {...storyblokEditable(blok)} >
      <Container className="grid md:grid-cols-3 grid-cols-1 gap-7">
        {blok?.gallary_list?.map((item: any, idx: number) => {
          return <motion.div key={idx}
            animate={controls}
            initial='hidden'
            variants={fadeInUp}
            className='rounded-[10px] relative group overflow-hidden'>
            <Image src={`${item?.Image?.filename}`} alt='gallery/1' width={600} height={600} className='object-contain rounded-[10px]' />
            <div className='p-7 bg-gradient-to-t from-black bg-black/30 flex flex-col justify-end absolute -bottom-full group-hover:bottom-0 left-0 right-0 h-0 group-hover:h-full delay-150 duration-300 ease-in-out w-full rounded-2xl z-auto'>
              <h5 className='text-xl font-medium !text-primary o'>
                {item?.title}
              </h5>
              <p className='text-base font-medium text-white mt-5'>
                {item?.info}
              </p>
            </div>
          </motion.div>
        })}

      </Container>
    </section>
  )
}

export default Gallary