import React from 'react'
import { layout } from '../style'
import Button from '../components/Button'
import { motion } from 'framer-motion';

const ProductSection = () => {
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
          Packaging Design
        </motion.h2>
            <p className='paragraph'>Say goodbye to old-modern photoshoots. Our 3D product packaging designs seamlessly blend realism and affordability. From concept to creation, we craft a realistic visually compelling and market-savvy packaging that tells your unique story. This is our core niche and you will be glad to work with us.</p>
            <Button to={'/contact'} >Get Started</Button>
        </div>
        <div className={layout.sectionImg}>
            <img src="/img/product/p1.png" alt="product" className='w-[100%]' />
        </div>
    </div>
    </section>
  )
}

export default ProductSection