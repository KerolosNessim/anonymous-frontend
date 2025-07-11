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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProgressCircle from '@/components/analysis/progress-circle';
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
        <div className=' space-y-3 col-span-12 md:col-span-8 bg-[#152E3A] border border-primary rounded-xl p-6'>
          {user?.history?.length == 0 ?
            <AlertWarning>
              No samples found
            </AlertWarning> :
            user?.history?.map((sample, idx) => (
              <Dialog key={idx} >
                <DialogTrigger className="w-full text-start cursor-pointer border border-primary rounded-md">
                  <div className='rounded-md bg-background/20 p-6 '>
                    <ul className='space-y-3 break-words'>
                      <li className=' break-all'><span className="font-bold text-primary ">File Name:</span> {sample?.name}</li>
                      <li className=' break-all'><span className="font-bold text-primary ">Analysis Time :</span> {formatDate(sample?.uploadDate)}</li>
                      <li className=' break-all'><span className="font-bold text-primary ">Family :&nbsp;
                      </span>{sample?.family.length == 0 ? <span className='text-yellow-400'>No Family Found</span> : sample?.family[0] == "Unknown" ? <span className='bg-primary  px-3 py-1,5 rounded-md my-1'>Unknown</span> : sample?.family?.map((family, idx) => <span key={idx} className='bg-primary  px-3 py-1,5 rounded-md'>{family}</span>)}  </li>
                      {sample?.family[0] === "Unknown" && <li className='break-all'><span className=" text-yellow-400">Note: possibly fork of {sample?.family[1]}, Highly matches {sample?.family[2]}, {sample?.family[3]} family name</span></li>}
                    </ul>
                  </div>
                </DialogTrigger>
                <DialogContent className={"border border-primary bg-[#152E3A] min-w-[50%]"}>
                  <DialogTitle></DialogTitle>
                  <DialogHeader>
                    <div className={"text-white text-start"} >
                      <div className='xl:w-1/4 w-1/3 mx-auto aspect-square'>
                        <ProgressCircle percentage={(sample?.report?.probability_file * 100).toFixed(2)} strokeWidth={10} color={sample?.report?.predictions_file == "Benign" ? "#22c55e" : " #fb2c36"} />
                      </div>
                      <div className={`mt-2 text-xl font-bold text-center ${sample?.report?.predictions_file == "Benign" ? "text-green-500" : "text-red-500"} `}>{sample?.report?.predictions_file}</div>
                      <ul className="p-6 space-y-3 break-words">
                        <li className=' break-all'><span className="font-bold text-primary ">File Name:</span> {sample?.name}</li>
                        <li className='break-all'><span className={`font-bold text-primary  text-lg `}>File Id :</span> {sample?.report?.fileId}</li>
                        <li className='break-all'><span className="font-bold text-primary text-lg">Analysis Time :</span> {formatDate(sample?.report?.analysisDate)}</li>
                        <li className='break-all'><span className="font-bold text-primary text-lg">Family :&nbsp;
                        </span>{sample?.report?.predictions_family.length == 0 ? <span className='text-yellow-400'>No Family Found</span> : sample?.report?.predictions_family[0] == "Unknown" ? <span className='bg-primary  px-3 py-1,5 rounded-md my-1'>Unknown</span> : sample?.report?.predictions_family?.map((family, idx) => <span key={idx} className='bg-primary  px-3 py-1,5 rounded-md'>{family}</span>)}  </li>
                        {sample?.report?.predictions_family[0] === "Unknown" && <li className='break-all'><span className=" text-yellow-400">Note: possibly fork of {sample?.report?.predictions_family[1]}, Highly matches {sample?.report?.predictions_family[2]}, {sample?.report?.predictions_family[3]} family name</span></li>}

                      </ul>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
