import PageHeader from '@/components/shared/page-header'
import SideBlog from '@/components/shared/side-blog'
import Image from 'next/image'
import React from 'react'

const SingleBlogPage = () => {
  return (
    <main className=' xl:space-y-24  md:space-y-16 space-y-10  '>
      <PageHeader title={'Blog Detailes'} />
        <div className='container grid grid-cols-12 xl:gap-x-10 gap-y-12 '>
          {/* content */}
          <div className='col-span-12 xl:col-span-8 space-y-6'>
            <h1 className='xl:text-4xl text-3xl font-bold leading-tight'>Using Blockchain Technology to Boost Cybersecurity </h1>
            <Image src="/home/box-bg.jpg" alt="blog" width={500} height={500} className="object-cover w-full h-[45vh] rounded-xl " />
            <div className=' text-sm text-gray-500 font-semibold space-y-6'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex leo, fringilla in molestie quis, porta vitae libero. In non erat consequat, feugiat massa blandit, varius lectus. Mauris sagittis sodales ex at tincidunt. Cras non felis et urna consequat dictum et vel est. Proin quis faucibus diam. Integer sed arcu in dolor gravida finibus. Vivamus non bibendum turpis. Cras dictum nulla et turpis lobortis tristique. Aliquam id massa leo. Praesent dapibus elit vitae urna iaculis, eu placerat tellus feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus consequat lectus lectus, quis pulvinar turpis condimentum et. Nunc maximus dolor sed viverra aliquam. Nunc sollicitudin, libero id condimentum tincidunt, mauris nulla efficitur risus, sed viverra nunc odio imperdiet dolor.</p>
              <p>Vivamus cursus eget nibh et efficitur. Mauris vitae lacus et lorem molestie ullamcorper a in nisi. Phasellus a aliquet lacus. Suspendisse facilisis tempor lectus vel tempus. Quisque non ex nisl. Fusce tincidunt convallis odio vitae vehicula. Mauris interdum molestie imperdiet. Cras accumsan quam nec blandit sodales.</p>
              <p>Phasellus quis justo volutpat, rhoncus ligula tempus, venenatis tortor. Sed aliquam ligula dolor, id facilisis lacus hendrerit ut. Curabitur elementum pellentesque odio, et lacinia mi blandit sit amet. Nullam blandit leo turpis, at tincidunt diam volutpat a. Aenean congue rutrum est, non elementum turpis pellentesque vitae. Proin viverra velit est, sit amet aliquam metus pellentesque ac. Vivamus nec ante vitae enim maximus fermentum vel sit amet est.</p>
            </div>
          </div>
          {/* author & related */}
          <div className='col-span-12 xl:col-span-4 space-y-6'>
            <div className='flex items-center gap-4  border-b-primary border-b-2 pb-4'>
              <Image src="/home/profile.jpg" alt="author" width={100} height={100} className="object-cover rounded-md size-24" />
              <div>
                <p className='font-bold  text-primary text-lg'>By:</p>
                <p className='font-bold text-lg'>John Doe</p>
                <p className='text-sm text-gray-500'>Created at : 01/01/2023</p>
              </div>
            </div>
            <div className='space-y-6'>
              <h2 className=' text-2xl font-bold text-primary'>Related Blogs</h2>
              <SideBlog />

            </div>

          </div>
        </div>
    </main>
  )
}

export default SingleBlogPage