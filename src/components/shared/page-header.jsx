import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='bg-no-repeat bg-cover  xl:h-[40vh] h-[20vh] ' style={{ backgroundImage: "url(/home/page-header.jpg)" }}>
      <div className=' bg-background/80 h-full '>
        <div className='container h-full  flex items-center max-md:justify-center'>
          <h2 className='xl:text-6xl md:text-5xl text-4xl font-bold '>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
