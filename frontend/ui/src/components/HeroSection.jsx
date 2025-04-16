//  {/* Hero Section */}
import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';

function HeroSection() {
  const { aptTheme } = useLightDarkMode();  

  return (
    // <div className='relative overflow-hidden bg-color-50'>
    <div className={`relative overflow-hidden ${aptTheme.baseColor} z-40`}>
        <div className="max-w-7xl mx-auto">
          {/* <div className='relative z-10 pb-8 bg-color-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'> */}
          <div className={`relative z-10 pb-8 ${aptTheme.baseColor} sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 sm:px-6 lg:px-8"
          >
            <div className="sm:text-center lg:text-left">
              {/* <h1 className='text-4xl text-black tracking-tight font-extrabold  sm:text-5xl md:text-6xl'> */}
              <h1 className={`text-4xl tracking-tight font-extrabold ${aptTheme.headingText} sm:text-5xl md:text-6xl`}>
                <span className="block xl:inline">AI for</span>{' '}
                <span className="block text-blue-600  xl:inline">Dementia Care</span>
              </h1>
              <h2 className="mt-1 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">A pledge to make this world a better place for the patients diagnosed with Dimentia</h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Supporting memory, enhancing independence, and bringing peace of mind to dementia patients and their caregivers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/join-community" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Join the community
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/solution" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                   Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
     </div>
     <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
       {/* <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-blue-50 flex items-center justify-center"
       > */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full ${aptTheme.baseColor} flex items-center justify-center`}
       >
         <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" fill="#E8EDFF" />
            <path d="M65 35L35 65" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
            <path d="M35 35L65 65" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="30" r="6" fill="#8FA7FA" />
            <circle cx="30" cy="50" r="6" fill="#8FA7FA" />
            <circle cx="70" cy="50" r="6" fill="#8FA7FA" />
            <circle cx="50" cy="70" r="6" fill="#8FA7FA" />
            <circle cx="50" cy="50" r="10" fill="#2563EB" />
            <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection;