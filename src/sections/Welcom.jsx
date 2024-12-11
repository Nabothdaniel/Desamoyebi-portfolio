import React from 'react'
import { motion } from 'framer-motion';
const Welcom = () => {
  return (
    <section className='relative py-28'>
        <div className="container flex items-start max-md:flex-row max-sm:flex-col">
            <div className='flex flex-col items-start  '>
            <motion.h1
          className="h1"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
         Welcome
        </motion.h1>
                <p className='paragraph max-w-[500px]'>I'm Desamoye, a seasoned graphic designer specializing in creating stunning vituals for businesses worldwide with many years of experice and over 300 satisfied clients. I turn idea into impactful designs. Explore my portfolio and let's embark on a visual journey that transforms ideas into captivating designs. Start creating your visual story with us today.</p>
            </div>
            <div className='relative'>
            <img src="/img/welcome.png" alt="girl" className='w-[500px] relative z-10' />
              <motion.img
              whileInView={{scale: [0, 1]}}
              transition={{duration: 1, ease: 'easeInOut'}}
              src='/img/circle.png'
              alt='circle'
              className='overlay_circle'
              ></motion.img>
            </div>
        </div>
    </section>
  )
}

export default Welcom