import { features } from "@/data/shared";
import { FaCircleCheck } from "react-icons/fa6";
import AnalysisLink from "../shared/analysis-link";
import Image from "next/image";


const Welcome = () => {
  return (
    <section className='container  grid grid-cols-12 gap-8 '>
      {/* image */}
      <div className='md:col-span-5 col-span-12 relative max-md:hidden  '>
        <Image src="/home/about/about-us.svg" alt="About Us Image" fill className="object-cover rounded-xl " />

      </div>
      {/* content */}
      <div className='md:col-span-7 col-span-12 space-y-6'>
        <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>Welcome to Anonymous</p>
        <h2 className='xl:text-5xl  text-3xl font-bold '>The future of malware defense</h2>
        <p className='text-sm font-bold text-gray-400'>Redefining malware defense through speed and intelligence.
          AI that sees beyond signatures. Thinks. Adapts. Protects.
        </p>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className='flex items-center gap-2' ><FaCircleCheck className='text-primary' />{feature}</li>
          ))}
        </ul>
        <AnalysisLink isSheet />
      </div>
    </section>
  )
}

export default Welcome
