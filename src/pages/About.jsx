import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const About = () => {
  return (
    <section className='relative'>
      <img src="/img/about.jpg" alt="about" className='w-full h-[70vh] max-lg:h-[50vh] '/>
      <div className="container flex flex-col items-center">
      <div className='flex flex-col items-start  max-lg:w-full mt-16'>
            <div className="flex space-x-2 mb-10 max-lg:mb-6">
                <span className="h-2 w-44 max-lg:w-24 bg-red-600"></span>
                <span className="h-2 w-12 max-lg:w-10 bg-yellow-500"></span>
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
                What sets Desamoyebiz apart is not just the dedication to aesthetics, but the emphasis on collaboration. I believe in a partnership where your ideas meet my creativity, resulting in designs that not only meet but exceed your expectations.

                As a graphic designer catering to an international audience, I understand the importance of simplicity and clarity in communication. My design philosophy revolves around creating visuals that transcend language barriers, ensuring that the essence of your brand is understood and appreciated by all.

                Beyond the pixels and colour palettes, I'm here to make your design journey enjoyable and stress-free. Let's embark on a visual adventure together, where your brand story unfolds with every stroke and click. Welcome to Desamoyebiz – where creativity speaks louder than words.
               </p>
            </div>
      </div>
    </section>
  )
}

export default About