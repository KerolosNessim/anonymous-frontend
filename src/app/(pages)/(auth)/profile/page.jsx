import AlertWarning from '@/components/shared/alert-warning';
import PageHeader from '@/components/shared/page-header'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaHome, FaShieldVirus } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

const ProfilePage = () => {
  return (
    <section className='space-y-10'>
      <PageHeader title={"Profile"} />
      <div className='container grid grid-cols-12 gap-4'>
        {/* user information */}
        <div className='col-span-12 md:col-span-4 bg-[#152E3A] border border-primary rounded-xl p-6'>

          <div className='space-y-2'>
            <Image src="/home/profile.jpg" alt="profile" width={500} height={500} className='size-40 object-cover rounded-full mx-auto ' />
            <div className='text-center space-y-1'>
              <h2 className='text-primary font-bold md:text-2xl text-xl'>kerolos Nessim</h2>
              <p className='text-gray-400 '>keroNessim@gmail.com</p>
            </div>
            <Separator className="bg-primary mt-4" />
          </div>

          <ul className='my-6 space-y-4'>
            <li>
              <Link href={'/'} className='flex items-center gap-2 p-2 text-xl font-bold  hover:bg-primary hover:text-white rounded-md transition-all duration-300 '>
                <FaHome size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link href={'/analysis'} className='flex items-center gap-2 p-2 text-xl font-bold  hover:bg-primary hover:text-white rounded-md transition-all duration-300 '>
                <FaShieldVirus size={20} />
                Analysis
              </Link>
            </li>
            <li>
              <button className='flex items-center w-full gap-2 p-2 text-xl font-bold  hover:bg-primary hover:text-white rounded-md transition-all duration-300 '>
                <IoLogOutSharp size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* user sampels */}
        <div className='col-span-12 md:col-span-8 bg-[#152E3A] border border-primary rounded-xl p-6'>
          <AlertWarning>
            No samples found
          </AlertWarning>
        </div>
      </div>

    </section>
  )
}

export default ProfilePage
