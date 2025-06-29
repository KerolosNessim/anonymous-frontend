import Box from '@/components/home/box'
import FaqAccordion from '@/components/shared/faq-accordion'
import PageHeader from '@/components/shared/page-header'
import { faqs, faqsTwo } from '@/data/shared'
import Image from 'next/image'

const FaqPage = () => {
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10'>
      <PageHeader title={'FAQ'} />
      <section style={{
        backgroundImage: "url(/home/services/services-bg.svg)"
      }} className='   bg-cover  bg-no-repeat bg-left  py-20 '>
        <div className='container  grid grid-cols-12 gap-8 '>
          {/* content */}
          <div className='md:col-span-6 col-span-12 space-y-6'>
            <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>FAQ</p>
            <h2 className='xl:text-5xl  text-3xl font-bold '>Frequently Asked Questions</h2>
            <p className='text-sm font-bold text-gray-500'>Redefining malware defense through speed and intelligence. AI that sees beyond signatures. Thinks. Adapts. Protects.</p>
            <FaqAccordion title={"About Intera"} faq={faqs}/>
            <FaqAccordion title={"We Save Every Data"} faq={faqsTwo}/>
          </div>
          {/* image */}
          <div className='md:col-span-6 col-span-12 relative max-md:hidden  '>
            <Image src="/home/about/about-us.svg" alt="About Us Image" fill className="object-cover rounded-xl " />
          </div>
        </div>
      </section>
      <Box withBg={false} />
    </div>
  )
}

export default FaqPage
