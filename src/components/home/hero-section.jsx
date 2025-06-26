import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative xl:mt-24 mt-16'>
      <div className=" container flex flex-col-reverse md:flex md:flex-row items-center justify-between   ">
        <div className=' max-md:text-center space-y-12 xl:max-w-3/5'>
          <h1 className=' leading-snug  font-bold xl:text-6xl md:text-4xl text-3xl'>Empowering You in the Digital Age</h1>
          <p className=' font-semibold text-sm leading-snug text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus quis, ullamcorper non metus. </p>
          <Link className=' hover:shadow-md hover:shadow-primary transation-all duration-300 bg-primary text-white px-12 py-4 rounded-md font-[family-name:var(--font-fira)] font-semibold' href={"/analysis"}>GET STARTED </Link>
        </div>
        <Image className=' max-md:w-[300px] max-xl:w-[350px] drop-shadow-2xl drop-shadow-primary' src="/home/hero/hero-img.svg" alt="Hero Image" width={400} height={400} />
      </div>
    </section>
  )
}

export default HeroSection
