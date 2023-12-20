import Link from 'next/link'
import React from 'react'

const Nav = ({nav}:any) => {
     return (
          <ul className='hidden lg:flex items-center gap-8 font-semibold text-black'>
               {
                    navLinks?.map((item: any, idx: number) => (
                         <li key={idx} className={navLinks.length === idx + 1 ? 'bg-primary text-white p-3 rounded-md hover:bg-black  px-6' : 'hover:underline'}><Link href={item?.link || `/`}>{item?.name}</Link></li>
                    ))
               }
          </ul>
     )
}

export default Nav


export const navLinks = [
     {
          name: "START",
          link: "#"
     },
     {
          name: "OVER ONS",
          link: "#"
     },
     {
          name: "THEORIE",
          link: "#"
     },
     {
          name: "PRAKTIJK",
          link: "#"
     },
     {
          name: "TARIEVEN",
          link: "#"
     },
     {
          name: "INSCHRIJVING",
          link: "#"
     },
     {
          name: "CONTACT",
          link: "#"
     },
     {
          name: "TE HUUR/TE KOOP",
          link: "#"
     }
]