import React from 'react'
import Contact from '@/components/home/contact'
import PageHeader from '@/components/shared/page-header'
import Box from '@/components/home/box'
const ContactPage = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'Contact Us'} />
      <Contact />
      <Box withBg={false} />
    </div>
  )
}

export default ContactPage
