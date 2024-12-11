import React, { useState } from 'react';
import { portfolio } from '../constant';
import { motion } from 'framer-motion';

const PortfolioItem = () => {
  const [filter, setFilter] = useState('All');

  const filterItem = filter === 'All' 
    ? 
      portfolio.reduce((acc, item) => {
        const categoryItems = acc[item.category] || [];
        if (categoryItems.length < 3) {
          acc[item.category] = [...categoryItems, item];
        }
        return acc;
      }, {})
    : 
      portfolio.filter((item) => item.category === filter);

  const itemsToRender = filter === 'All' 
    ? Object.values(filterItem).flat() 
    : filterItem;

  return (
    <section className="relative bg-secondary py-28">
      <div className="container">
        <div className="flex max-sm:flex-col items-center justify-center gap-5 text-white text-[20px] font-poppins font-medium cursor-pointer">
          <p onClick={() => setFilter('All')} className={`${filter === "All" ? "text-border" : "text-white"}`} >All</p>
          <p onClick={() => setFilter('package')} className={`${filter === "package" ? "text-border" : "text-white"}`} >Packaging Design</p>
          <p onClick={() => setFilter('Logo')} className={`${filter === "Logo" ? "text-border" : "text-white"}`} >Logo and Identity</p>
          <p onClick={() => setFilter('printing')} className={`${filter === "printing" ? "text-border" : "text-white"}`} >Printing Services</p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 pt-16">
          {itemsToRender.map((item) => (
           <div key={item.id}>
           <motion.img
               whileInView={{scale: [0, 1]}}
               transition={{duration: 1, ease: 'easeInOut'}}
               src={item.img}
               alt='circle'
               className='cursor-pointer'
            ></motion.img>
       </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioItem;
