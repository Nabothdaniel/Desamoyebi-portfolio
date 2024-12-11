import React from 'react'
import { services } from '../constant'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const Service = () => {
  return (
    <section className='relative py-32 max-lg:py-12 '>
        <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-2 mb-10">
          <span className="h-1 w-44 bg-red-600"></span>
          <span className="h-1 w-12 bg-yellow-500"></span>
        </div>
        <motion.h1
          className="h1 text-center"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
          Services
        </motion.h1>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-center justify-center max-w-[1000px] mt-12 '>
                {services.map(({ id, title, image })=>(
                    <div key={id} className='relative flex flex-col items-center justify-center px-6 cursor-pointer transition ease duration-500 service_item'>
                        <img src={image} alt={title} className='object-fit' />
                        <h5 className='font-poppins font-bold text-xl mt-10 text_change'>{title}</h5>
                    </div>
                ))}
            </div>
           <div className='mt-28 flex flex-col items-center justify-center'>
           <p className='text-sm font-poppins font-light text-white mb-5 text-center'>Learn more about our services</p>
           <Button to='/service'>Our Services</Button>
           </div>
        </div>
    </section>
  )
}

export default Service