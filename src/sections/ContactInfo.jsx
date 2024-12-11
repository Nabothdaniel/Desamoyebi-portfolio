import React from 'react'
import { contact_info } from '../constant'

const ContactInfo = () => {
  return (
    <section className='relative bg-secondary'>
        <div className='container max-xl:px-10 max-lg:px-6 max-sm:px-4'>
            <div className='flex items-start max-md:flex-col max-sm:justify-start justify-between py-32'>
                <div className='flex flex-col items-start max-md:items-end '>
                    <div className="flex space-x-2 mb-10">
                        <span className="h-2 w-44 bg-red-600"></span>
                        <span className="h-2 w-12 bg-yellow-500"></span>
                    </div>
                    <h1 className='h1'><span className='ml-32 max-md:ml-0'>Let's</span> <br className='max-md:hidden' />Connect</h1>
                </div>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 justify-start gap-y-5 '>
                    {contact_info.map(({id, num, text, href, name})=>(
                        <div key={id} className='flex flex-col gap-3 items-center'>
                            <span className='text-[72px] font-bold font-poppins text-[#6E6E6E] max-sm:text-[40px]'>{`0${num}.`}</span>
                            <h4 className='text-[#C9C9C9] text-3xl max-sm:text-xl font-medium font-poppins'>{text}</h4>
                            <a href={href} target='_blank' className='text-[#C9C9C9] maxdm font-normal'>{name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo