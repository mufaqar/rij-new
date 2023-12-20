import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import Container from '../UI/container';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";


import Link from 'next/link';


const TopBar = ({topBar}:any) => {
     const social = [
          {
               icon: <FaFacebookF />,
               link: topBar?.find((_:any,id:any) => id === 0)?.Facebook_Url
          },
          {
               icon: <FaInstagram />,
               link: topBar?.find((_:any,id:any) => id === 1)?.Instagram_Url
          },
          {
               icon: <IoLogoTwitter />,
               link: topBar?.find((_:any,id:any) => id === 2)?.Twitter_Url
          },
          {
               icon: <FaLinkedinIn />,
               link: topBar?.find((_:any,id:any) => id === 3)?.Linkedin_Url
          }
     ]
     return (
          <div className='py-1 md:py-3 bg-slate-900 z-50'>
               <Container className="flex items-center justify-between" >
                    <div className='flex gap-4'>
                         <div className='flex items-center gap-2 sm:border-r border-slate-700 pr-5'>
                              <div className='bg-primary p-1.5 text-xs sm:p-2 md:text-lg text-white rounded-full inline-block'><FaPhoneFlip /></div>
                              <span className='font-medium text-white text-xs sm:text-base'>014 74 92 63</span>
                         </div>
                         <div className='sm:flex hidden items-center gap-2 sm:border-r border-slate-700 pr-5'>
                              <div className='bg-primary p-1.5 text-xs sm:p-2 md:text-lg text-white rounded-full inline-block'><HiOutlineMail /></div>
                              <span className='font-medium text-white'>turnhout@rijschoolmenig.be</span>
                         </div>
                         <div className='lg:flex items-center gap-2 hidden'>
                              <div className='bg-primary p-1.5 text-xs sm:p-2 md:text-lg text-white rounded-full inline-block'><LuMapPin /></div>
                              <span className='font-medium text-white'>Turnhout (Erk.nr. 2804.03) Warandestraat 33</span>
                         </div>
                    </div>
                    <ul className='text-white md:text-lg flex items-center gap-2'>
                         {
                              social.map((item, idx) => (
                                   <li key={idx} className='border p-1.5 text-xs md:text-lg sm:p-2 rounded-full hover:bg-primary hover:border-primary border-slate-700'><Link href={item.link || `/`} target='_blank'>{item.icon}</Link></li>
                              ))
                         }
                    </ul>
               </Container>
          </div>
     )
}

export default TopBar


