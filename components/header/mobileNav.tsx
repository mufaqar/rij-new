import React from 'react'
import { navLinks } from './nav'
import Link from 'next/link'
import useHeader from './useHeader'

const MobileNav = ({isMobile, nav}:any) => {
  return (
    <ul className={` 
     transition-all duration-300 ease-linear z-10
     ${isMobile ? 'top-[90px]' : '-top-[100%]'}
     w-full bg-primary text-white font-bold absolute justify-center flex flex-col items-center gap-5 py-8`}>
     {
          nav?.map((nav:any,idx:number)=>(
              nav.component === "Link" &&  <li key={idx}><Link href={nav.URL}>{nav.Name}</Link></li>
          ))
     }
    </ul>
  )
}

export default MobileNav