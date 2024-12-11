import React from 'react'
import { layout } from '../style'
import Button from '../components/Button'
import { motion } from 'framer-motion';

const LogoSection = () => {
  return (
    <section className={`${layout.sectionReverse} bg-secondary`}>
        <div className={layout.sectionImgReverse}>
            <img src="/img/logo/l3.png" className='w-[100%] h-[100%] relative z-[5]' alt="l7" />
        </div>
        <div className={`${layout.sectionInfo} max-lg:px-6`}>
        <motion.h2
          className="text-5xl max-lg:text-4xl font-poppins font-bold text-white mb-5 xs:leading-[76.8px] leading-[66.8px] w-full"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
          Logo Design & Identity
        </motion.h2>
                <p className='paragraph'>We specialize in crafting visual narratives that not only captivate but also resonate with your target audience. From concept to creation, we infuse cultural richness and contemporary flair, ensuring your brand stands out in the competitive landscape</p>
                <Button to={'/contact'} >Get Started</Button>
            </div>
    </section >
  )
}

export default LogoSection