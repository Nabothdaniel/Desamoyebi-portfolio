
import React, { useState } from 'react';
import { navlinks } from '../constant';
import { NavLink } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const linkclass = ({ isActive }) =>
        isActive
            ? "font-poppins font-normal text-[18px] mr-10 text-border cursor-pointer"
            : "font-poppins font-normal text-[18px] mr-10 text-white cursor-pointer";
    
    const linkclassmobile = ({ isActive }) =>
        isActive
            ? "font-poppins font-normal text-[18px] mr-10 text-border2 cursor-pointer"
            : "font-poppins font-normal text-[18px] mr-10 text-white cursor-pointer hover:text-border";

    // Framer Motion Variants
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        },
    };

    return (
        <header className='sticky top-0 w-full z-50 py-5 border-0 transition-all duration-500 max-lg:py-4 bg-primary'>
            <div className="max-xl:px-10 max-lg:px-6 max-sm:px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/"><img src="/img/logo_white.png" alt="logo" width={100} height={55} />
                </a>
                {/* Desktop Links */}
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navlinks.map(({ id, link, to }) => (
                        <NavLink key={id} to={to} className={linkclass}>{link}</NavLink>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div
                    className='sm:hidden flex flex-1 justify-end mr-4 items-center cursor-pointer hover:text-border'
                    onClick={() => setToggle((prev) => !prev)}
                >
                    {toggle ? (
                        <IoCloseSharp className='text-4xl font-bold' />
                    ) : (
                        <GiHamburgerMenu className='text-3xl font-bold' />
                    )}

                    {/* Mobile Menu */}
                    {toggle && (
                        <motion.div
                            className="w-full items-start bg-primary fixed top-28 right-0"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                        >
                            <ul className='list-none flex flex-col justify-end items-start flex-1 p-6 gap-10'>
                                {navlinks.map(({ id, link, to }) => (
                                    <NavLink key={id} to={to} className={linkclassmobile}>
                                        {link}
                                    </NavLink>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
