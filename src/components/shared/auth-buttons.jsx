
import Link from 'next/link'
import React from 'react'

const AuthButtons = () => {
  return (
    <div className=' flex items-center gap-2'>
      <Link href={'/sign-up'} className={` flex items-center justify-center w-fit   font-bold font-[family-name:var(--font-fira)]  px-4 py-2 border-2 border-primary bg-primary hover:bg-transparent hover:text-white rounded-md transition-all duration-300  `}>Sign Up</Link>
      <Link href={'/login'} className={` flex items-center justify-center w-fit   font-bold font-[family-name:var(--font-fira)]  px-4 py-2  border-2 border-primary hover:bg-primary hover:text-white rounded-md transition-all duration-300 `}>Login</Link>
      
    </div>
  )
}

export default AuthButtons


