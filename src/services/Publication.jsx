import React from 'react'
import { motion } from 'framer-motion'
import { layout } from '../style'
import Button from '../components/Button'

const Publication = () => {
  return (
    <section className='container my-28'>
    <div className={`${layout.sectionReverse}`}>
        <div className={layout.sectionImgReverse}>
            <img src="/img/pub.png" className='w-[100%] h-[100%] relative z-[5]' alt="l7" />
        </div>
        <div className={`${layout.sectionInfo} max-lg:px-6`}>
        <motion.h2
          className="text-5xl max-lg:text-4xl font-poppins font-bold text-white mb-5 xs:leading-[76.8px] leading-[66.8px] w-full"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
          Publication Design
        </motion.h2>
                <p className='paragraph'>We will meticulously craft layouts and typography for your books and magazines that not only tell stories but create immersive reading experiences.
                </p>
                <Button to={'/contact'} >Get Started</Button>
            </div>
    </div >
    </section>
  )
}

export default Publication