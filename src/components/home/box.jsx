import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import AnalysisLink from '../shared/analysis-link';
import { features } from '@/data/shared';

const Box = ( {withBg=true}) => {
  return (
    <section className={` py-20 ${withBg ? "bg-gradient-to-b from-white/5 to-background" : ""}`}>
      <div  style={{ backgroundImage: "url(/home/box-bg.jpg)" }} className='container  overflow-hidden rounded-3xl bg-no-repeat bg-cover bg-center'>
        <div className=' bg-background/80 h-full p-8  md:p-20'>
          <div className=' xl:max-w-[75%] space-y-6'>
            <p className='font-bold text-primary max-md:text-sm' style={{ letterSpacing: '6px' }}>Why Choose Anonymous?</p>
            <h2 className='xl:text-4xl  text-xl font-bold leading-tight'>Born from Academia, Built for the Real World.</h2>
            <p className='text-sm  text-gray-300'>Redefining malware defense through speed and intelligence.
              AI that sees beyond signatures. Thinks. Adapts. Protects..</p>
            <ul className=' flex flex-col md:flex-row md:items-center gap-4'>
              {features.map((feature, idx) => (
                
              <li key={idx} className='flex items-center gap-2 text-xs'><FaCircleCheck size={14} className='text-primary' /> <p>{feature}</p></li>
              ))}
          </ul>
          <AnalysisLink/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Box
