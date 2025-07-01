import PageHeader from '@/components/shared/page-header'
import SideBlog from '@/components/shared/side-blog'
import { blogs } from '@/data/shared'
import Image from 'next/image'
import React from 'react'

const SingleBlogPage = ({ params }) => {
  const id = params?.id
  const blog = blogs?.find((item) => item.id === Number(id))
  const otherBlogs = blogs?.filter((item) => item.id !== Number(id))
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10  '>
      <PageHeader title={'Blog Detailes'} />
      <div className='container grid grid-cols-12 xl:gap-x-10 gap-y-12 '>
        {/* content */}
        <div className='col-span-12 xl:col-span-8 space-y-6'>
          <h1 className='xl:text-4xl text-3xl font-bold leading-tight'>{blog?.title}</h1>
          <Image src={blog?.img} alt="blog" width={500} height={500} className="object-cover w-full h-[45vh] rounded-xl " />
          <div className='  text-gray-400 font-semibold space-y-6'>
            <p>{blog?.content}</p>
          </div>
          <div className="mt-4">
            <h3 className=" mb-2 text-primary font-bold text-3xl">References:</h3>
            <div className=" space-y-2">
              {blog?.references.map((ref, refIndex) => (
                <a
                  key={refIndex}
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#152E3A]  p-3 rounded-md block hover:bg-primary/80 transition-all duration-300"
                >
                  {ref.title}-{ref.source}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* author & related */}
        <div className='col-span-12 xl:col-span-4 space-y-6'>
          <div className='flex items-center gap-4  border-b-primary border-b-2 pb-4'>
            <Image src="/logo.png" alt="author" width={100} height={100} className="object-contain p-2 bg-[#152E3A]  rounded-md size-24" />
            <div>
              <p className='font-bold  text-primary text-lg'>By:</p>
              <p className='font-bold text-lg'>{blog?.author}</p>
              <p className='text-sm text-gray-400'>Created at : {blog?.date}</p>
            </div>
          </div>
          <div className='space-y-6'>
            <h2 className=' text-2xl font-bold text-primary'>Related Blogs</h2>
            <SideBlog blogs={otherBlogs} />

          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage