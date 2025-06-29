import Box from '@/components/home/box'
import Services from '@/components/home/services'
import PageHeader from '@/components/shared/page-header'
import React from 'react'

const ServicesPage
 = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'Services'} />
      <Services />
      <Box withBg={false}/>
    </div>
  )
}

export default ServicesPage

