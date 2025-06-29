import React from 'react'
import PageHeader from '@/components/shared/page-header'
import Welcome from '@/components/home/welcome'
import AboutUs from '@/components/home/about-us'
import Box from '@/components/home/box'
const AboutPage = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'About Us'} />
      <Welcome />
      <AboutUs />
      <Box withBg={false}/>
    </div>
  )
}

export default AboutPage
