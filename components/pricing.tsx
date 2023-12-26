import React, { useEffect, useRef, useState } from 'react'
import Container from './UI/container'
import Inquiry from './inquiry'

import { motion, useAnimation, useInView } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react';

const fadeInUp = {
    visible: { opacity: 1, transform: "translateY(0)", transition: { duration: 1 } },
    hidden: { opacity: 0, transform: "translateY(50%)" }
};

function Pricing({ blok }: any) {
    const [inquiry, setinquriy] = useState(false)
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); // Use 'visible' as the state name
        }
    }, [controls, isInView]);
    return (
        <section className='py-16 relative' ref={ref} {...storyblokEditable(blok)} >
            <Container>
                <h3 className='text-xl font-bold text-primary text-center mb-4'>
                    {blok.title}
                </h3>
                <h2 className='md:text-5xl text-3xl font-extrabold text-slate-950 text-center'>

                    {blok.sub_title}
                </h2>
                <div className='mt-10'>
                    <div>

                        <motion.h3
                            animate={controls}
                            initial='hidden'
                            variants={fadeInUp}
                            className='text-xl font-bold text-primary text-center mb-5'>
                            {blok.short_info}
                        </motion.h3>
                        <ul className='grid md:grid-cols-2 gap-3'>

                            {blok?.listings?.map((item: any, idx: number) => {
                                return <motion.li key={idx}
                                    animate={controls}
                                    initial='hidden'
                                    variants={fadeInUp}
                                    className='border p-4 flex justify-between rounded-md shadow-[0px_0px_20px_rgba(186,186,186,0.15)] cursor-pointer ' onClick={() => setinquriy(true)}>
                                    <span className='text-base font-medium '>
                                        {item.name}
                                    </span>
                                    <span className='text-base font-medium text-primary'>
                                        {item.price}€
                                    </span>
                                </motion.li>
                            })}
                        </ul>
                    </div>

                </div>
            </Container>

            {inquiry && <div className='w-full bg-black/40 h-full absolute top-0' onClick={() => setinquriy(false)}>  <Inquiry inquiry={inquiry} setinquriy={setinquriy} /></div>}

        </section>
    )
}

export default Pricing

