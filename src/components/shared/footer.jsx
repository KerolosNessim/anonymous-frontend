import { links, socialIcons } from '@/data/shared'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className=' py-12 xl:mt-28 mt-20 '>
      <div className=' container  flex flex-wrap flex-col md:flex-row max-md:space-y-6 items-center lg:justify-between md:justify-around md:gap-6'>
        <Link href={'/'} className='md:order-1 '>
          <Image src="/logo.png" alt="Logo" width={150} height={100} /></Link> 
        {/* links */}
        <ul className='md:order-2 lg:order-1 md:mx-auto   flex flex-col md:flex-row  items-center gap-6  '>
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href} className='block text-lg font-medium text-primary  hover:scale-105 transition-all duration-300'>
                {link.label}
              </Link>
            </li>
          ))}

        </ul>
        {/* icons */}
          <ul className='md:order-1 flex items-center gap-4'>
            {socialIcons.map((icon, idx) => (
              <li key={idx}>
                <Link href={icon.href} className='flex items-center justify-center hover:scale-105 text-white size-10 rounded-full bg-primary   transition-all duration-300'>
                  {icon.icon}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className=' container h-[2px] bg-primary my-10'></div>
      <p className='text-center text-gray-400 text-sm'>Copyright © 2025 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
