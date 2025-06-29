import { contacts } from '@/data/shared'
import Image from 'next/image'
import React from 'react'
import ContactForm from '../shared/contact-form'

const Contact = () => {
  return (
    <section className='container grid grid-cols-12 gap-8 items-center '>
      {/* content */}
      <div className=' col-span-12 md:col-span-6 space-y-6 max-md:text-center'>
        <p className='font-bold text-primary ' style={{ letterSpacing: '6px' }}>contact us</p>
        <h2 className='xl:text-4xl  text-3xl font-bold leading-tight'>Get In Touch</h2>
        <p className='text-sm  text-gray-500'>Have questions, feedback, or a partnership inquiry? We would love to hear from you.</p>
        {/* icons */}
        <div className='grid grid-cols-12 items-center gap-8'>
          {contacts.map((item, idx) => (
            <div key={idx} className='col-span-6 flex items-center gap-4'>
              <Image src={item.img} alt={item.title} width={50} height={50} />
              <div>
                <p className='font-bold xl:text-xl text-lg'>{item.title}</p>
                <p className='text-xs text-gray-500'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* form */}
      <ContactForm/>
    </section>
  )
}

export default Contact
