import React from 'react'

const ServiceHero = () => {
  return (
    <section className='relative py-36 max-lg:py-24 service_section'>
        <div className="container flex flex-col items-center max-lg:items-start">
          <div className='flex flex-col'>
            <div className="flex space-x-2 mb-10">
                <span className="h-2 w-36 bg-red-600"></span>
                <span className="h-2 w-12 bg-yellow-500"></span>
            </div>
            <h1 className='text-6xl max-lg:text-3xl max-lg:text-start font-poppins font-bold text-primary'>Our Services</h1>
          </div>
        </div>
    </section>
  )
}

export default ServiceHero