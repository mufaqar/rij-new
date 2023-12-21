import React, { useEffect, useRef } from 'react'
import Container from './UI/container'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { render } from 'storyblok-rich-text-react-renderer';
import InfoCard from './infoCard'

const fadeInUp = {
    visible: { opacity: 1, transform: "translateY(0)", transition: { duration: 1 } },
    hidden: { opacity: 0, transform: "translateY(100%)" }
};

function About_Company({ blok, idx }: any) {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); // Use 'visible' as the state name
        }
    }, [controls, isInView]);
    return (
        <section ref={ref} className={`md:py-16 py-5 ${idx % 2 === 0 ? 'bg-right' : 'bg-left'} aboutBg bg-no-repeat bg-white`} style={{ backgroundSize: "50% 100%", backgroundImage: `url(${blok.image.filename})` }} >
            <Container className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center">
                <div className={`p-4 px-8 ${idx % 2 !== 0 && 'md:order-2'}`}>
                    {
                        blok.sub_title && <motion.h3
                            animate={controls}
                            initial='hidden'
                            variants={fadeInUp}
                            className='text-xl font-bold text-primary mb-4'>
                            {blok.sub_title}
                        </motion.h3>
                    }

                    <motion.h2
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className='md:text-4xl text-2xl font-extrabold text-black'>
                        {blok.title}
                    </motion.h2>
                    <motion.div
                        animate={controls}
                        initial='hidden'
                        variants={fadeInUp}
                        className='text-base font-normal text-black mt-5 _content'>
                        {
                            render(blok.info)
                        }
                    </motion.div>

                    {
                        blok?.button_link && <motion.div ref={ref}
                            animate={controls}
                            initial='hidden'
                            variants={fadeInUp}>
                            <Link href={blok?.button_link} className='text-sm font-medium text-white hover:text-black text-center flex items-center justify-center gap-2 max-w-[166px] py-5 px-7 rounded-md bg-black hover:bg-white mt-5'>
                                {blok?.button_text} <FaArrowRightLong />
                            </Link>
                        </motion.div>
                    }
                    {
                        blok?.info_card?.length > 0 && <motion.div
                            animate={controls}
                            initial='hidden'
                            variants={fadeInUp}
                            className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                            {blok?.info_card?.map((item: any, idx: number) => {
                                return <InfoCard key={idx} id={idx + 1} data={item} />
                            })}
                        </motion.div>
                    }

                </div>
                <div>
                    <Image src={blok.image.filename} alt="/images/school.jpg" width={1245} height={929} className='md:hidden h-[250px] object-cover md:h-auto block' />
                </div>
            </Container>
        </section>
    )
}

export default About_Company