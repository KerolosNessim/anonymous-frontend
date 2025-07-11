import Link from 'next/link'
import Globe from '../magicui/globe'

const HeroSection = () => {
  return (
    <section className='relative  xl:mt-12 mt-2 '>
      <div className=" container  grid grid-cols-12 max-xl:gap-y-4  items-center   ">
        <div className='  max-xl:text-center xl:space-y-8 space-y-6 col-span-12 xl:col-span-7 max-xl:order-2'>
          <h1 className='leading-snug  font-bold xl:text-[65px] font-[family-name:var(--font-fira)] md:text-4xl text-3xl'> Malwares hide, <br className='max-xl:hidden'/> We <span className='text-primary drop-shadow-2xl drop-shadow-primary'>shine</span></h1>
          <p className=' font-semibold text-sm leading-snug text-gray-400'>Next-generation threat detection powered by artificial intelligence. Anonymous scans, analyzes, and neutralizes sophisticated malware that traditional security misses. Upload a file and get your free analysis in seconds.</p>
          <Link className='block w-fit max-xl:mx-auto hover:shadow-md hover:shadow-primary transation-all duration-300 bg-primary text-white px-12 py-4 rounded-md font-[family-name:var(--font-fira)] font-semibold' href={"/analysis"}>GET STARTED </Link>
        </div>
        <div className="col-span-12 xl:col-span-5 max-xl:order-1 ">
          <Globe />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
