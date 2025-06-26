import React from 'react'
import Contact from '@/components/home/contact'
import PageHeader from '@/components/shared/page-header'
import Box from '@/components/home/box'
const ContactPage = () => {
  return (
    <main className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'Contact Us'} />
      <Contact />
      <Box withBg={false} />
    </main>
  )
}

export default ContactPage
