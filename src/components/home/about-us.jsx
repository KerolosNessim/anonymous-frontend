"use client"
import { aboutCards } from '@/data/shared'
import Image from 'next/image'
import Link from 'next/link'


const AboutUs = () => {
 
  return (
    <section style={{
      backgroundImage: "url(/home/about/about-background.svg)"
    }} className='   bg-cover  bg-no-repeat bg-left  py-24 '>
      <div className='container  grid grid-cols-12 gap-8 '>
    
        {/* content */}
        <div className='xl:col-span-5 col-span-12 space-y-6'>
          <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>WHY CHOOSE US</p>
          <h2 className='xl:text-5xl  text-3xl font-bold '>A Scalable and Cost Effective</h2>
          <p className='text-sm font-bold text-gray-500'>Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper. Vivamus eleifend velit ac lobortis fringilla.</p>
          <p className='text-sm font-bold text-gray-500'>Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.</p>
          <Link href='/about' className={`capitalize size-12 flex items-center justify-center w-fit  text-lg font-bold font-[family-name:var(--font-fira)]  px-6  border-2 border-primary hover:bg-primary hover:text-white rounded-md transition-all duration-300  `}>
            Read more
          </Link>
        </div>
        {/* grid */}
        <div className='xl:col-span-7 col-span-12 grid grid-cols-12 gap-4'>
          {aboutCards.map((item, idx) => (
            <div key={idx} className=' col-span-12 md:col-span-6 space-y-4 border border-primary rounded-xl p-6'>
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <h3 className=' font-bold text-primary text-xl'>{item.title}</h3>
              <p className=' '>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
