import React from 'react'
import { footer, social } from '../constant'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='relative py-28'>
        <div className="container flex flex-col items-start">
            <div className="flex flex-col">
                <img src="/img/logo_white.png" alt="logo"  width={100} height={55}  />
                <p className='text-sm font-poppins pt-6 max-w-[450px]'>Desamoyebiz makes branding easy, fulfilling and rewarding for you. Our sole aim is to see to the growth of your business and organization by providing you with innovative, relevant and result generating branding services.</p>
            </div>
            <div className='grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-5 gap-32 w-full mt-28'>
                {footer.map((footerlink)=>(
                    <div className='flex flex-col ss:my-0 my-4 '>
                        <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerlink.title}</h4>
                        <ul className='list-none mt-12'>
                            {footerlink.links.map((link, index)=>(
                                <li key={link.name} className={`font-poppins font-normaltext-[16px] leading-[24px] text-[#AFC3C9] hover:text-white cursor-pointer ${index !== footerlink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                                {link.to ? <Link to={link.to}>{link.name}</Link> : <a href={link.href}>{link.name}</a>}
                              </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='h-0.5 w-full bg-[#363636] mt-16'></div>
            <div className='w-full flex max-lg:flex-col items-center justify-between mt-16'>
                <div className='flex items-center  gap-5'>
                    {social.map(({ id,icon, link})=>(
                        <a href={link} target='_blank' key={id} className='text-2xl bg-border p-2 rounded-full cursor-pointer icon'>{icon}</a>
                    ))}
                </div>
                <p className='text-xl max-lg:text-[18px] text-center max-lg:mt-5 font-poppins font-medium text-white'>© 2024 The Desamoyebiz Designs. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer