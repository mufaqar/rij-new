'use client'
import React, { useEffect, useRef } from 'react'
import Container from './UI/container'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

import { motion, useAnimation, useInView } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react'


const fadeInUp = {
    visible: { opacity: 1, transform: "translateY(0)", transition: { duration: 1 } },
    hidden: { opacity: 0, transform: "translateY(100%)" }
};

function CallToAction({ blok }: any) {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); // Use 'visible' as the state name
        }
    }, [controls, isInView]);

    return (
        <section ref={ref} {...storyblokEditable(blok)} className='py-16 bg-[url("/images/cta.jpg")] bg-bottom bg-cover bg-no-repeat mix-blend-multiply p-3' style={{ backgroundImage: `url(${blok.background_image?.filename})` }}>
            <Container className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center bg-black/50 !md:p-10 !p-6 rounded-2xl">
                <div className=''>
                    <motion.h2
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className='md:text-4xl text-2xl font-extrabold text-white mb-5'>
                        {blok?.title}
                    </motion.h2>
                    <motion.p
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className='text-base font-medium text-white'>
                        {blok?.info}
                    </motion.p>
                </div>
                <div className=''>
                    {
                        blok?.buttons?.map((btn:any, idx:number) => (
                            <motion.div
                                animate={controls}
                                initial='hidden'
                                key={idx}
                                variants={fadeInUp}>
                                <Link href={btn?.button_link} className='text-base font-medium text-white hover:text-black text-center flex items-center justify-center gap-2 max-w-[330px] md:mr-0 mr-auto ml-auto py-7 px-7 rounded-md bg-primary hover:bg-white mt-5'>
                                    {btn?.button_text} <FaArrowRightLong />
                                </Link>
                            </motion.div>
                        ))
                    }

                </div>
            </Container>
        </section>
    )
}

export default CallToAction