import React from 'react'
import { layout } from '../style'
import Button from '../components/Button'
import { motion } from 'framer-motion';

const Adds = () => {
  return (
    <section className="container">
        <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo} pl-16 max-lg:px-6 max-w-[700px]`}>
        <motion.h2
          className="text-5xl max-lg:text-4xl font-poppins font-bold text-white mb-5 xs:leading-[76.8px] leading-[66.8px] w-full"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
        >
          Printing Services
        </motion.h2>
            <p className='paragraph'>Our printing services go beyond paper; we breathe life into your ideas. Whether it's business collateral, promotional materials, or bespoke creations, we ensure precision, quality, and impact in every print.

            </p>
            <Button to={'/contact'} >Get Started</Button>
        </div>
        <div className={layout.sectionImg}>
            <img src="/img/print.png" alt="adds" className='w-[100%]' />
        </div>
    </div>
    </section>
  )
}

export default Adds