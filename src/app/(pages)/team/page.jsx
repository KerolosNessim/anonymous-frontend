import Box from '@/components/home/box'
import PageHeader from '@/components/shared/page-header'
import Image from 'next/image'
import React from 'react'
import { LuGithub } from "react-icons/lu";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { team } from '@/data/shared';

const TeamPage = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'Our Team'} />
      <div >
        <section className='py-10 bg-gradient-to-t from-white/5 to-background '>
          <div className='container space-y-10'>
            {/* content */}
            <div className='text-center xl:max-w-xl xl:mx-auto space-y-6'>
              <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>Anonymous TEAM</p>
              <h2 className='xl:text-4xl  text-3xl font-bold '>The Minds Behind Anonymous</h2>
              <p className='text-sm  text-gray-400'>Our team collaborated to develop a university capstone project focused on real-world cybersecurity threats and solutions.</p>
            </div>
            {/* grid */}
            <div className='grid grid-cols-12 gap-6'>
              {team.map((item, idx) => (
                <div key={idx} className='text-center col-span-12 md:col-span-6 xl:col-span-4 space-y-4 border border-primary rounded-xl overflow-hidden p-6'>
                  <Image src={item.img} alt='profile' width={500} height={500} className='mx-auto w-full h-60 rounded-xl object-contain' />
                  <div className='space-y-1'>
                    <h2 className='font-bold text-2xl text-primary'>{item.name}</h2>
                    <p className=' text-gray-400'>{item.role}</p>
                  </div >
                  {/* icons */}
                  <div className='flex items-center justify-center gap-4 '>
                    <a href={item.links.github} className='flex items-center justify-center   size-10 rounded-full bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300'>
                      <LuGithub size={20} />
                    </a>
                    <a href={item.links.linkedin} className='flex items-center justify-center   size-10 rounded-full bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300'>
                      <RiLinkedinFill size={20} />
                    </a>
                    <a href={item.links.facebook} className='flex items-center justify-center   size-10 rounded-full bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300'>
                      <FaFacebookF size={20} />
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Box />
      </div>
    </div>
  )
}

export default TeamPage
