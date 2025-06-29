import { services } from '@/data/shared'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Services = () => {
  return (
    <section style={{
      backgroundImage: "url(/home/services/services-bg.svg)"
    }} className='   bg-cover  bg-no-repeat bg-left  py-20 '>
      <div className='container space-y-10'>
        {/* content */}
        <div className='text-center xl:max-w-xl xl:mx-auto space-y-6'>
          <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>Our Services</p>
          <h2 className='xl:text-4xl  text-3xl font-bold '> Our Advanced Security Services</h2>
          <p className='text-sm  text-gray-500'>A Multi-Layered Approach to Malware Analysis.</p>
        </div>
        {/* grid */}
        <div className='grid grid-cols-12 gap-4'>
          {services.map((item, idx) => (
            <div key={idx} className='text-center col-span-12 md:col-span-6 xl:col-span-4 space-y-4 border border-primary rounded-xl px-6 py-10'>
              <Image src={item.icon} alt={item.title} width={60} height={60} className='mx-auto' />
              <h3 className=' font-bold text-primary xl:text-2xl text-xl '>{item.title}</h3>
              <p className=' '>{item.desc}</p>
              <Link href={`/services/${item.id}`} className='text-primary flex items-center justify-center gap-2 font-bold capitalize  hover:gap-4 hover:text-white transition-all duration-300 '>
              learn more <IoMdArrowDroprightCircle  />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Services
