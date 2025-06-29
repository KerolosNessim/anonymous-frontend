import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { BsCalendarDate } from "react-icons/bs";

const SideBlog = ({blogs}) => {
  return (
    <div className=' space-y-6'>
      {blogs?.map((item, idx) => (
        <article key={idx} className='flex items-center gap-4'>
          <figure className=' size-32 relative flex-shrink-0 rounded-md overflow-hidden'>
              <Image src={item?.img} alt="blog"  fill className="  object-cover  " />
          </figure>
          <div className='space-y-2'>
            <h3 className='font-bold text-lg line-clamp-2'>{item?.title}</h3>
            <p className='text-sm text-gray-500 flex items-center gap-2'>
              <BsCalendarDate className='text-primary' size={14}/>
              {item?.date} </p>
            <Link href={`/blogs/${item?.id}`} className='text-primary flex items-center  gap-2 font-bold capitalize hover:gap-4 hover:text-white transition-all duration-300 '>
              learn more <MdKeyboardDoubleArrowRight size={20} />
            </Link>
          </div>
        </article>

      ))}

    </div>
  )
}

export default SideBlog
