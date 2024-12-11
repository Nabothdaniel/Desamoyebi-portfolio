import React from 'react'
import { social } from '../constant'

const ContactHero = () => {
  return (
    <section className='relative'>
      <div className='flex items-center justify-between max-sm:flex-col max-xl:px-10 max-lg:px-6 max-sm:px-4'>
        <div className='flex items-start gap-36 py-32'>
          <div className="flex flex-col gap-5  max-md:flex max-sm:hidden">
            {social.map(({id, icon, link})=>(
              <a href={link} target='_blank' key={id} className='text-2xl cursor-pointer'>{icon}</a>
            ))}
          </div>
          <div className='flex flex-col'>
            <div className="flex space-x-2 mb-10">
                <span className="h-2 w-44 max-lg:w-28 bg-red-600"></span>
                <span className="h-2 w-12 bg-yellow-500"></span>
              </div>
            <h1 className='h1'>Contact Us</h1>
            <p className='text-2xl max-w-[450px] max-md:max-w-[300px] max-md:text-xl max-sm:text-[18px] max-sm:max-w-full'>We are incredibly responsive to your requests and value your questions.</p>
          </div>
        </div>
        {/* img */}
        <img src="/img/contact.png" alt="contact_img" className='w-1/2 object-fit max-sm:w-full' />
      </div>
    </section>
  )
}

export default ContactHero