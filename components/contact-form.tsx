import React, { useEffect, useRef } from 'react'
import Container from './UI/container'
import { motion, useAnimation, useInView } from 'framer-motion'
import { storyblokEditable } from '@storyblok/react';


const fadeInUp = {
    visible: { opacity: 1, transform: "translateY(0)", transition: { duration: 1 } },
    hidden: { opacity: 0, transform: "translateY(50%)" }
};

function ContactForm({blok}:any) {

    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); // Use 'visible' as the state name
        }
    }, [controls, isInView]);

    return (
        <section ref={ref} {...storyblokEditable(blok)}  className='pt-20 md:pb-0 pb-20 bg-[url("/images/faq-bg.jpg")] bg-center bg-cover bg-no-repeat md:mb-10'>
            <Container className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center">
                <div>
                    <motion.h2
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className='md:text-5xl text-3xl font-extrabold text-white mb-5'>
                       {blok.title}
                    </motion.h2>
                    <motion.p
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className='text-base font-medium text-white'>
                       {blok.sub_title}  </motion.p>
                </div>
                <div>
                    <motion.form
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className="grid w-full gap-7 items-center bg-white md:p-12 p-10 rounded-[10px] shadow-[0px_10px_40px_rgba(191,191,191,0.3)] max-w-[530px] ml-auto md:mr-0 mr-auto md:-mb-7">
                        <div className="w-full">
                            <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
                            <input
                                className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-3 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                                type="text"
                                id='name'
                                placeholder="Geef uw naam en voornaam in ..." />
                        </div>
                        <div className="w-full">
                            <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                            <input
                                className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-3 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                                type="email"
                                id='email'
                                placeholder="Geef een geldig e-mailadres in ..." />
                        </div>
                        <div className="w-full">
                            <label htmlFor='detail' className="text-sm font-medium leading-none hidden">Project Detail</label>
                            <textarea
                                className="text-base font-normal shadow-[0px_0px_30px_rgba(191,191,191,0.3)] bg-white px-5 py-3 border border-transparent focus:border focus:border-black/10 outline-none rounded-[5px] w-full"
                                id='detail'
                                rows={5}
                                placeholder="Geef uw vraag in of boek uw rijles (theorie en/of praktijk) bij Rijschool Menig."></textarea>
                        </div>
                        <div className="w-full">
                            <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-black px-4 py-3 rounded-[5px] w-full">
                                SUBMIT
                            </button>
                        </div>
                    </motion.form>
                </div>
            </Container>
        </section>
    )
}

export default ContactForm