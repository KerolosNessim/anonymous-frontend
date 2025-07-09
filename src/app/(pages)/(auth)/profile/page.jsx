"use client"
import AlertWarning from '@/components/shared/alert-warning';
import PageHeader from '@/components/shared/page-header'
import { Separator } from '@/components/ui/separator'
import { deleteToken } from '@/lib/cookies';
import { useUserStore } from '@/stores/user';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaHome, FaShieldVirus } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

const ProfilePage = () => {
  const { user, clearUser } = useUserStore();
  const router = useRouter();
  function logout() {
    router.push('/');
    clearUser();
    deleteToken();
  }
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    };
    return date.toLocaleString("en-US", options).replace(",", " -");
  };


  return (
    <section className='space-y-10'>
      <PageHeader title={"Profile"} />
      <div className='container grid grid-cols-12 gap-4'>
        {/* user information */}
        <div className='col-span-12 md:col-span-4 bg-[#152E3A] border border-primary rounded-xl p-6'>

          <div className='space-y-2'>
            <Image src="/profile-placeholder.jpg" alt="profile" width={500} height={500} className='size-40 object-cover rounded-full mx-auto ' />
            <div className='text-center space-y-1'>
              <h2 className='text-primary font-bold md:text-2xl text-xl'>{user?.user?.name}</h2>
              <p className='text-gray-400 '>{user?.user?.email}</p>
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
              <button onClick={logout} className='flex items-center w-full gap-2 p-2 text-xl font-bold  hover:bg-primary hover:text-white rounded-md transition-all duration-300 '>
                <IoLogOutSharp size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* user sampels */}
        <div className='col-span-12 md:col-span-8 bg-[#152E3A] border border-primary rounded-xl p-6'>
          {user?.history?.length == 0 ?
            <AlertWarning>
              No samples found
            </AlertWarning> :
            user?.history?.map((sample, idx) => (
              <div key={idx} className='rounded-md bg-background p-6'>
                <ul className='space-y-3'>
                  <li><span className="font-bold text-primary ">File Name:</span> {sample?.name}</li>
                  <li ><span className="font-bold text-primary ">Analysis Time :</span> {formatDate(sample?.uploadDate)}</li>
                  <li ><span className="font-bold text-primary ">Family :
                  </span>{sample?.family?.length == 0 ? <span className='text-yellow-400'>No Family Found</span> : sample?.family?.map((family,idx)=><span key={idx} className="bg-primary px-3 py-1.5 text-sm  rounded-md mx-1">{family}</span>) }</li>
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
