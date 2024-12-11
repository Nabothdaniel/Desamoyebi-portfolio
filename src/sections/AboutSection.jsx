import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className='relative py-28'>
        <div className="container flex flex-col items-start">
        <img src="/img/about.jpg" alt="about" className='w-1/2 max-lg:w-full' />
            <div className='flex flex-col items-start ml-64 max-lg:ml-0 max-w-[600px] max-lg:w-full mt-16'>
            <div className="flex space-x-2 mb-10">
                <span className="h-2 w-44 bg-red-600"></span>
                <span className="h-2 w-12 bg-yellow-500"></span>
            </div>
            <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 1.5, ease: "easeOut" }} 
                  className="h1"
                >
                  About Us
            </motion.h1>

                <p className='paragraph'>Step into the vibrant world of Desamoyebiz Design, a creative haven where imagination takes flight. As your dedicated graphic design virtuoso, I bring a wealth of passion and expertise to every pixel. I draw inspiration from diverse cultures to infuse uniqueness into my designs.

                With a keen eye for aesthetics and a knack for storytelling, I specialize in transforming concepts into visually compelling narratives. From crafting memorable logos to building intuitive websites, I'm committed to elevating your brand identity.
               </p>
               <Button to='/about'>Learn More</Button>
            </div>
        </div>
    </section>
  )
}

export default AboutSection