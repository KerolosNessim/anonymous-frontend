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
        <div className="xl:w-48 xl:h-30 w-28 h-20 bg-primary absolute bottom-4 xl:-left-12 -left-6 rounded-xl shadow-xl flex items-center justify-center">
          <div className="text-center font-[family-name:var(--font-fira)]">
            <p className="xl:text-5xl text-2xl font-bold ">+1300</p>
            <p className=" font-light max-xl:text-sm ">Clients</p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className='md:col-span-7 col-span-12 space-y-6'>
        <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>Welcome TO INTERA</p>
        <h2 className='xl:text-5xl  text-3xl font-bold '>We AI-Powered Threat Detection System</h2>
        <p className='text-sm font-bold text-gray-500'>Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.</p>
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
