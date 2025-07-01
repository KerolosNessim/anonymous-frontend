import { blogs } from '@/data/shared'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const Blogs = () => {
  return (
    <section className='py-10 bg-gradient-to-t from-white/5 to-background'>
      <div className='container space-y-10'>
        {/* content */}
        <div className='text-center xl:max-w-xl xl:mx-auto space-y-6'>
          <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>LATEST NEWS</p>
          <h2 className='xl:text-4xl  text-3xl font-bold '>Our News From Anonymous</h2>
          <p className='text-sm  text-gray-500'>Detect, analyze, and neutralize cyber threats instantly—protecting your data with smart, reliable, real-time defense</p>
        </div>
        {/* grid */}
        <div className='grid grid-cols-12 gap-4'>
          {blogs.map((item, idx) => (
            <article key={idx} className=' col-span-12 md:col-span-6 xl:col-span-4 space-y-4 border border-primary rounded-xl overflow-hidden'>
              <figure className='h-52 relative'>
                <Image src={item?.img} alt={item?.title} fill className='object-cover' />
              </figure >
              <div className='px-4 py-6 space-y-4'>
                <h3 className=' font-bold line-clamp-2 xl:text-2xl text-xl'>{item?.title}</h3>
                <p className='text-gray-400 line-clamp-3'>{item?.content}</p>
                <Link href={`/blogs/${item?.id}`} className='text-primary flex items-center  gap-2 font-bold capitalize hover:gap-4 hover:text-white transition-all duration-300 '>
                  learn more <MdKeyboardDoubleArrowRight size={20} />
                </Link>
              </div>
              <div className='p-4 border-t border-primary text-sm  flex items-center gap-3'>
                <div className='size-2 bg-primary rounded-full'></div>
                <p>{item?.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
