import React, { useState } from 'react';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  );

  const [show, setShow] = useState(false);

  return (
    <>
      <RouterProvider router={router} />
      <div className='relative'>
        <button
          className='fixed bottom-10 z-10 right-10 bg-[#01A782] p-3 rounded-full'
          onClick={() => setShow(true)}
        >
          <img src="/img/whatsapp.svg" alt="whatsap" className='w-[40px]' />
        </button>
        <div className={`${show ? "block" : "hidden"} bg-white fixed bottom-10 z-20 max-sm:right-0 right-5 min-w-[350px] rounded-[20px] transition-all duration-500`}>
          <div className='bg-[#01A782] w-full flex items-center justify-between p-4 rounded-t-[20px]'>
            <div>
              <img src="/img/whatsapp.svg" alt="whatsap" className='w-[30px]' />
            </div>
            <IoCloseSharp 
              className='bg-[#01644E] text-2xl rounded-full p-1 cursor-pointer'
              onClick={() => setShow(false)} 
            />
          </div>
          <div className='flex mt-10 mx-4'>
            <div className='bg-white p-3 rounded-3xl message'>
              <p className='text-secondary font-light'>
                Hello 👋 <br /> Do you need my assistance?
              </p>
            </div>
          </div>
          <div className='flex items-center justify-end mt-12 mb-3 mx-5'>
            <a
              href="https://wa.link/cuivov"
              target='_blank'
              className='bg-[#01A782] flex items-center gap-5 rounded-full p-3'
              rel="noopener noreferrer"
            >
              <span>Open chat</span>
              <FaRegPaperPlane className='text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
