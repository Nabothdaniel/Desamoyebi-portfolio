import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className='bg-primary'>
        <div className="container">
            <h1 className='text-6xl max-lg:text-3xl text-center py-28'>
            <Typewriter
                words={["Welcome to Desamoyebiz", "We're happy that you're here "]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </h1>
            
        </div>
    </section>
  )
}

export default Hero