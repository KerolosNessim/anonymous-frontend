import AnalysisLink from '@/components/shared/analysis-link'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div style={{ backgroundImage: "url(/home/services/services-bg.svg)" }} className='w-full h-[90vh] flex items-center justify-center bg-cover '>
      <div className='md:max-w-xl  text-center space-y-6'>
        <h1 className=' text-7xl md:text-[100px] font-bold font-[family-name:var(--font-fira)]'>404</h1>
        <h2 className='xl:text-5xl  text-4xl font-bold leading-tight'>Get In Touch</h2>
        <p className='text-sm  text-gray-500 '>We couldn’t find the page you’re looking for.

          It might have been moved, deleted, or the link you followed may be broken.</p>
        <Link href='/' className={`mx-auto size-12 flex items-center justify-center w-fit  text-lg font-bold font-[family-name:var(--font-fira)]  px-6  border-2 border-primary hover:bg-primary hover:text-white rounded-md transition-all duration-300 `}>
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default NotFound
