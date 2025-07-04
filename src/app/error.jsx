'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { BiErrorAlt } from "react-icons/bi";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div style={{ backgroundImage: "url(/home/services/services-bg.svg)" }} className='w-full min-h-[90vh] flex items-center justify-center bg-cover '>
      <div className='container  text-center space-y-6'>
        <BiErrorAlt className='text-7xl text-primary mx-auto' />
        <h1 className=' xl:text-4xl  text-3xl  font-bold font-[family-name:var(--font-fira)] '> Oops! Something Went Wrong.</h1>
        <h2 className='xl:text-3xl  text-xl font-bold leading-tight'>Get In Touch</h2>
        <p className='text-sm  text-gray-400 '>We couldn’t find the page you’re looking for.

          It might have been moved, deleted, or the link you followed may be broken.</p>
        <button onClick={() => reset()} className={`mx-auto size-12 flex items-center justify-center w-fit  text-lg font-bold font-[family-name:var(--font-fira)]  px-6  border-2 border-primary hover:bg-primary hover:text-white rounded-md transition-all duration-300 `}>
          Reset
        </button>

      </div>
    </div>
  )
}