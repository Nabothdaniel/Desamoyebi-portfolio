import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

const Connect = () => {
  return (
    <section className='relative w-full pt-0 bg-cover bg-center connect'>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="container flex flex-col items-start pt-28 relative z-4">
                <div className="flex space-x-2 mb-10 relative z-4">
                    <span className="h-2 w-44 bg-red-600"></span>
                    <span className="h-2 w-12 bg-yellow-500"></span>
                </div>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 1.5, ease: "easeOut" }} 
                  className="h1"
                >
                  Let's Connect
            </motion.h1>
                <p className='paragraph max-w-[450px] max-lg:w-full'>Creating compelling branding solutions is what we love doing. Influencing the growth of your business with the compelling branding is our delight. Let’s connect and make a positive impact.</p>
                <div className='relative z-4'>
                <Button>Contact Us</Button>
                </div>
            </div>
    </section>
  )
}

export default Connect