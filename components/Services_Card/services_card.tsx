'use client'
import React, { FC, useEffect, useRef, useState } from 'react';
// import Container from './UI/container';
// import ServiceBox from './service-box';
// import { Services_Data } from '@/const/services';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';


const fadeInLeft = {
    visible: { opacity: 1, transform: "translateX(0)", transition: { duration: 1 } },
    hidden: { opacity: 0, transform: "translateX(-100%)" }
};

export interface IService {
    icon: string,
    link: string,
    info: string,
    title: string,
}[]

const ServicesCard = ({ blok }: any) => {
    return(
        blok?.icon_position === 'top'? <ServicesBox blok={blok}/> : <LocationBox blok={blok}/>
    )
};

export default ServicesCard;


function ServicesBox({blok}:any) {
    const [expand, setExpand] = useState(false)

    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start('visible'); // Use 'visible' as the state name
        }
    }, [controls, isInView]);
    return (
        <section ref={ref} className=''>
            <motion.div
                animate={controls}
                initial='hidden'
                variants={fadeInLeft}
            >
                <div className='px-4 mb-6 cursor-pointer _cardcontent' onClick={() => setExpand(!expand)}>
                    <div className='relative rounded-2xl border bg-white group' onMouseLeave={() => setExpand(false)}>
                        <div className='bg-[url("/images/servicebg.png")] bg-primary bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 h-0 group-hover:h-full delay-150 duration-300 ease-in-out w-full rounded-2xl z-auto'></div>
                        <div className='h-full w-full py-9 px-7 relative z-[1] '>
                            <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-[80px] h-[80px] mx-auto rounded-full bg-white p-3 border  text-primary text-6xl group-hover:text-white group-hover:bg-primary flex items-center justify-center delay-150 duration-300 ease-in-out'>
                                <Image src={blok.Icon.filename} width={40} height={40} alt="icon" />
                            </div>
                            <h3 className='text-xl font-medium text-center group-hover:text-white mt-4 delay-150 duration-300 ease-in-out'>
                                {blok?.title}
                            </h3>
                            {expand === true ? (<p className='text-base font-normal text-center group-hover:text-white max-w-[300px] mx-auto my-4 delay-150 duration-300 ease-in-out'>
                                <div>{render(blok.info)}</div>
                            </p>) :
                                (<div className='text-base font-normal text-center group-hover:text-white max-w-[280px] mx-auto my-4 delay-150 duration-300 ease-in-out'>
                                    <div className=''>{render(blok.info)}</div>
                                </div>)
                            }
                            {
                                blok?.icon_position === 'top' && <button onClick={() => setExpand(true)} className='text-sm font-medium text-center group-hover:text-white border-b-2 border-black group-hover:border-white uppercase w-fit mx-auto flex gap-2 items-center delay-150 duration-300 ease-in-out'>
                                    View More <FaArrowRightLong />
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function LocationBox({ blok }: any) {
    return (
        <div className='px-4 cursor-pointer pl-12 md:pl-0'>
            <div className='relative rounded-2xl border bg-white group'>
                <div className='bg-[url("/images/servicebg.png")] bg-primary bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 h-0 group-hover:h-full delay-150 duration-300 ease-in-out w-full rounded-2xl z-auto'></div>
                <div className='h-full w-full py-9 px-7 relative z-[1] min-h-[364px]'>
                    <div className='absolute -left-10 top-1/2 -translate-y-1/2 w-[80px] h-[80px] mx-auto rounded-full bg-white p-3 border  text-primary text-6xl group-hover:text-white group-hover:bg-primary flex items-center justify-center delay-150 duration-300 ease-in-out'>
                        <Image src={blok.Icon.filename} width={40} height={40} alt="icon" />
                    </div>
                    <h3 className='text-xl font-medium text-center group-hover:text-white mt-4 delay-150 duration-300 ease-in-out'>
                        {blok?.title}
                    </h3>
                    <div className='text-base font-normal text-center group-hover:text-white max-w-[300px] mx-auto my-4 delay-150 duration-300 ease-in-out'>
                        <div className=''>{render(blok.info)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}