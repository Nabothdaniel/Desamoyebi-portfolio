import React from 'react'
import ServiceHero from '../services/ServiceHero'
import LogoSection from '../services/LogoSection'
import Consultation from '../services/Consultation'
import ProductSection from '../services/ProductSection'
import Adds from '../services/Adds'
import Publication from '../services/Publication'
import Printing from "../services/Printing"
import Webdesign from '../services/Webdesign'


const Services = () => {
  return (
    <>
      <ServiceHero />
      <Consultation />
      <ProductSection />
      <LogoSection />
      <Adds />
      <Publication />
      <Printing />
      <Webdesign />
    </>
  )
}

export default Services