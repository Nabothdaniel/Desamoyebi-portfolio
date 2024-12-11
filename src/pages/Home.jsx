// import React from 'react'

// const Home = () => {
//   return (
//     <section className='relative home '>
//         <div className='image_container'>
//             <img src="/img/hero.png" alt="hero" className='image' />
//             <div className='overlay'></div>
//             <div className="container">
//             <div className='text-content'>
//                 <h1 className='h1'>Welcome to<br /> Desamoyebiz</h1>
//             </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Home
import React from "react";
import Hero from "../sections/Hero";
import Welcom from "../sections/Welcom";
import LogoSection from "../sections/LogoSection";
import ProductSection from "../sections/ProductSection";
import WebdesignSection from "../sections/WebdesignSection";
import Service from "../sections/Service";
import Works from "../sections/Works";
import AboutSection from "../sections/AboutSection";

// import Connect from "../components/Connect";

const Home = () => {
  return (
    <>
        <Hero />
        <Welcom />
        <LogoSection />
        <ProductSection />
        <WebdesignSection />
        <Service />
        <Works />
        <AboutSection />
        {/* <Connect /> */}
    </>
  );
};

export default Home;
