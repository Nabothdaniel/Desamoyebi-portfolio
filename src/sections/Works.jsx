import React from 'react'
import { work } from '../constant'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const Works = () => {
  return (
    <section className='relative bg-secondary py-28'>
        <div className="container flex flex-col items-start">
            <div className="flex space-x-2 mb-10">
                <span className="h-1 w-44 bg-red-600"></span>
                <span className="h-1 w-12 bg-yellow-500"></span>
            </div>
            <motion.h1
          className=" text-5xl font-bold text-start"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
         Some of Our<br className='block max-lg:hidden'/> Past Works
        </motion.h1>
            <div className='grid grid-cols-3 max-lg:grid-cols-2 gap-5 mt-28'>
                {work.map(({id, image})=>(
                    <div key={id}>
                        <motion.img
                            whileInView={{scale: [0, 1]}}
                            transition={{duration: 1, ease: 'easeInOut'}}
                            src={image}
                            alt='circle'
                            className='cursor-pointer'
              ></motion.img>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
           <Button to='/portfolio'>View Portfolio</Button>
           </div>
    </section>
  )
}

export default Works