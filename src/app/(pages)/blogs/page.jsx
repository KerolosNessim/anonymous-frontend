import Blogs from '@/components/home/blogs'
import Box from '@/components/home/box'
import PageHeader from '@/components/shared/page-header'
import React from 'react'

const BlogsPage = () => {
  return (
    <main className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'Blogs'} />
      <div>
        <Blogs />
        <Box />
      </div>
    </main>
  )
}

export default BlogsPage
