import React from 'react'
import { layout } from '../style'
import Button from '../components/Button'
import { motion } from 'framer-motion'

const WebdesignSection = () => {
  return (
    <section className={`${layout.sectionReverse} bg-secondary`}>
        <div className={layout.sectionImgReverse}>
            <img src="/img/w1.png" className='w-[100%] h-[100%] relative z-[5]' alt="l7" />
        </div>
        <div className={`${layout.sectionInfo} max-lg:px-6`}>
        <motion.h2
          className="text-5xl max-lg:text-4xl font-poppins font-bold text-white mb-5 xs:leading-[76.8px] leading-[66.8px] w-full"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
          Web Design
        </motion.h2>
                <p className='paragraph'>We craft visually stunning websites that not only captivate your audience but also elevate your brand. From sleek aesthetics to seamless functionality, we bring your online vision to life. Contact us today redefine your digital presence together.
                </p>
                <Button to={'/contact'} >Get Started</Button>
            </div>
    </section >
  )
}

export default WebdesignSection