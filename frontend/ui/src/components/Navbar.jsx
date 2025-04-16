import { useState } from 'react';
import LightDarkModeButton from './LightDarkModeButton.jsx';
import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';
import { AnimatedNavbar } from './Animatiion.jsx';
import { motion } from 'framer-motion';

function Navbar({ setShowLoginModal, setShowSignupModal }) {
  const { aptTheme } = useLightDarkMode();
  const [activeItem, setActiveItem] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'problem', label: 'Problem' },
    { id: 'traction', label: 'Traction' }
  ];

  return (
    <AnimatedNavbar>
      <nav className={`${aptTheme.containerColor4} bg-opacity-80 backdrop-blur-md shadow-sm z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">MemoTag</span>
              </div>
              
              {/* Navigation items */}
              <div className="hidden md:ml-8 md:flex md:space-x-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`inline-flex items-center px-1 pt-1 ${
                      activeItem === item.id 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : `${aptTheme.textColor} border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600`
                    }`}
                    onClick={() => setActiveItem(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <motion.button
                  className={`${aptTheme.textColor} p-2 rounded-md focus:outline-none`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Login and Signup Buttons */}
              <motion.button 
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
              <motion.button 
                onClick={() => setShowSignupModal(true)}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
              <LightDarkModeButton />
            </div>
          </div>
        </div>         
      </nav>
    </AnimatedNavbar>
  );
}

export default Navbar;