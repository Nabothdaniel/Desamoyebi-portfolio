import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section className="relative w-full h-[90vh] pt-0 bg-cover bg-center home" >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="flex flex-col items-start justify-center h-full relative z-20 pt-96 px-8 md:px-20 lg:px-32">
      <div className="flex space-x-2 mb-12">
          <span className="h-1 w-44 bg-red-600"></span>
          <span className="h-1 w-12 bg-yellow-500"></span>
        </div>
        <motion.h1
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 1.5, ease: "easeOut" }} 
      className="h1"
    >
      Welcome to<br className='max-lg:hidden block' /> Desamoyebiz
    </motion.h1>
        <p className="text-lg md:text-xl text-white mb-6">Where Creativity Meets Culture!</p>
       
      </div>
    </section>
  )
}

export default Hero