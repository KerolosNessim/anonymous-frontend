import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import AnalysisLink from '../shared/analysis-link';

const Box = ( {withBg=true}) => {
  return (
    <section className={` py-20 ${withBg ? "bg-gradient-to-b from-white/5 to-background" : ""}`}>
      <div  style={{ backgroundImage: "url(/home/box-bg.jpg)" }} className='container  overflow-hidden rounded-3xl bg-no-repeat bg-cover bg-center'>
        <div className=' bg-background/80 h-full p-8  md:p-20'>
          <div className=' xl:max-w-[75%] space-y-6'>
            <p className='font-bold text-primary max-md:text-sm' style={{ letterSpacing: '6px' }}>INTERA PROMOTION</p>
            <h2 className='xl:text-4xl  text-xl font-bold leading-tight'>Why Not Check Out These Resources to Help You Security Solution</h2>
            <p className='text-sm  text-gray-300'>Promotion dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.</p>
            <ul className=' flex flex-col md:flex-row md:items-center gap-6'>
              <li className='flex items-center gap-2 text-xs'><FaCircleCheck size={14} className='text-primary' /> <p>NetFlow and IPFIX basics</p></li>
              <li className='flex items-center gap-2 text-xs'><FaCircleCheck size={14} className='text-primary' /> <p>Network anomaly detection</p></li>
          </ul>
          <AnalysisLink/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Box
