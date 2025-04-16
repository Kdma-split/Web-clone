// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create context
// const LightDarkModeContext = createContext();

// // Theme settings for light and dark modes
// const themes = {
//   light: {
//     headingText: 'text-black',
//     paragraphText: 'text-gray-700',
//     // baseColor: 'bg-blue-50',
//     baseColor: 'bg-white',
//     boxShadow: 'shadow-gray-300',
//     containerColor: 'bg-white',
//   },
//   dark: {
//     headingText: 'text-white',
//     paragraphText: 'bg-blue-50',
//     baseColor: 'bg-gray-900',
//     boxShadow: 'shadow-neutral-300',
//     containerColor: 'bg-gray-700',
//   }
// };

// // Provider component
// export const LightDarkModeProvider = ({ children }) => {
//   // Check if user has previously set preference in localStorage
// //   const getInitialMode = () => {
// //     if (typeof window !== 'undefined' && window.localStorage) {
// //       const storedPreference = window.localStorage.getItem('darkMode');
// //       if (typeof storedPreference === 'string') {
// //         return storedPreference === 'true';
// //       }
      
// //       // If no preference is stored, use system preference
// //       return window.matchMedia('(prefers-color-scheme: dark)').matches;
// //     }
    
// //     // Default to light mode
// //     return false;
// //   };

// //   const [darkMode, setDarkMode] = useState(getInitialMode());
//   const [darkMode, setDarkMode] = useState(false);
//   const [aptTheme, setAptTheme] = useState(null);
  
//   // Toggle between dark and light mode
//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode);
//   };
  
//   // Update localStorage when mode changes
//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
    
//     // Apply theme class to docume
//     // nt body
//     if (darkMode) {
//       setAptTheme(themes.dark);
//       console.log(darkMode, themes)
//     } else {
//         setAptTheme(themes.light);
//         console.log(darkMode, themes)
//     }
//   }, [darkMode]);
  
// //   // Current theme based on mode
// //   const theme = darkMode ? themes.dark : themes.light;
  
//   return (
//     <LightDarkModeContext.Provider value={{ darkMode, toggleDarkMode, aptTheme }}>
//       {children}
//     </LightDarkModeContext.Provider>
//   );
// };

// // Custom hook for using the theme context
// export const useLightDarkMode = () => {
//   const context = useContext(LightDarkModeContext);
//   if (context === undefined) {
//     throw new Error('useLightDarkMode must be used within a LightDarkModeProvider');
//   }
//   return context;
// };









import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const LightDarkModeContext = createContext();

// Theme settings for light and dark modes
const themes = {
  light: {
    headingText: 'text-black',
    paragraphText: 'text-gray-700',
    baseColor: 'bg-blue-50',
    boxShadow: 'shadow-gray-300',
    containerColor: 'bg-blue-50',
    containerColor2: 'bg-white',
    containerColor3: 'bg-blue-50',
    containerColor4: 'bg-white',
    textColor: 'text-gray-500',
    textColor2: 'text-gray-600',
  },
  dark: {
    headingText: 'text-white',
    paragraphText: 'bg-blue-50',
    baseColor: 'bg-gray-900',
    boxShadow: 'shadow-stone-900',
    containerColor: 'bg-gray-800',
    containerColor2: 'bg-gray-800/30',
    containerColor3: 'bg-gray-800/30',
    containerColor4: 'bg-gray-800',
    textColor: 'text-gray-400',
    textColor2: 'text-gray-300'
  }
};

// Helper to get initial mode
const getInitialMode = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPreference = window.localStorage.getItem('darkMode');
    if (storedPreference !== null) {
      return storedPreference === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false; // default to light mode
};

// Provider component
export const LightDarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialMode);
  const [aptTheme, setAptTheme] = useState(() =>
    getInitialMode() ? themes.dark : themes.light
  );

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Update theme and localStorage when mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    setAptTheme(darkMode ? themes.dark : themes.light);
  }, [darkMode]);

  return (
    <LightDarkModeContext.Provider value={{ darkMode, toggleDarkMode, aptTheme }}>
      {children}
    </LightDarkModeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useLightDarkMode = () => {
  const context = useContext(LightDarkModeContext);
  if (context === undefined) {
    throw new Error('useLightDarkMode must be used within a LightDarkModeProvider');
  }
  return context;
};
