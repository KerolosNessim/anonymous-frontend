import PageHeader from '@/components/shared/page-header'
import SideServices from '@/components/shared/side-services'
import { services } from '@/data/shared'
import Image from 'next/image'

const SingleServicePage =  ({ params }) => {
  const id = params?.id
  const serv = services?.find((item) => item.id === Number(id))
  const otherServices=services?.filter((item) => item.id !== Number(id))
  return (
    <div className=' xl:space-y-24  md:space-y-16 space-y-10  '>
      <PageHeader title={'Service Detailes'} />
      <div className='container grid grid-cols-12 xl:gap-x-10 gap-y-12 '>
        {/* other service */}
        <div className='col-span-12 xl:col-span-4 space-y-6 max-xl:order-2'>
          {/* related */}
          <div className='space-y-6'>
            <h2 className=' text-2xl font-bold text-primary'>Other Services</h2>
            <SideServices services={otherServices} />
          </div>
        </div>
        {/* content */}
        <div className='col-span-12 xl:col-span-8 space-y-6 max-xl:order-1'>
          <Image src={serv?.img} alt="blog" width={500} height={500} className="object-cover w-full h-[45vh] rounded-xl " />
          <h1 className='xl:text-4xl text-3xl font-bold leading-tight ps-3 border-s-2 border-primary'>{serv?.title}</h1>
          <div className=' text-gray-400 font-semibold space-y-6'>
            <p>{serv?.desc}</p>
            <div dangerouslySetInnerHTML={{ __html: serv?.details }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleServicePage
