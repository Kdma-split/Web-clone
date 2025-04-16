// import React from 'react';
// import { AnimatedSection, Counter, TiltCard } from "./Animatiion.jsx";
// import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';

// function ProblemSection() {
//   const { aptTheme, darkMode } = useLightDarkMode();

//   return (
//     <section id="problem" className={`py-12 ${aptTheme.baseColor} z-40`}>
//       <div className={`${aptTheme.containerColor2} shadow-2xl shadow-blue-600 py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
//         <AnimatedSection>
//           <div className="text-center">
//             <h2 className={`${aptTheme.headingText} text-3xl font-extrabold tracking-tight sm:text-4xl`}>
//               The <span className="text-blue-600">Dementia Crisis</span>
//             </h2>
//             <p className={`mt-4 max-w-2xl mx-auto text-xl ${aptTheme.textColor}`}>
//               Dementia affects millions worldwide, with growing challenges for patients, caregivers, and healthcare systems.
//             </p>
//           </div>
//         </AnimatedSection>
        
//         <div className="mt-16">
//           <AnimatedSection delay={0.2}>
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//               <TiltCard className={`${aptTheme.containerColor} ${aptTheme.boxShadow} overflow-hidden shadow-xl rounded-lg p-6`}>
//                 <div className="text-blue-600 text-5xl font-bold mb-4">
//                   <Counter end={55} /> 
//                 </div>
//                 <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Million People</h3>
//                 <p className={`mt-2 ${aptTheme.textColor}`}>Currently living with dementia worldwide, expected to triple by 2050.</p>
//               </TiltCard>
        
//               <TiltCard className={`${aptTheme.containerColor} ${aptTheme.boxShadow} overflow-hidden shadow-xl rounded-lg p-6`}>
//                 <div className="text-blue-600 text-5xl font-bold mb-4">
//                   <Counter end={60} />
//                 </div>
//                 <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Percent Undiagnosed</h3>
//                 <p className={`mt-2 ${aptTheme.textColor}`}>Of all dementia cases go undiagnosed, leading to delayed interventions.</p>
//               </TiltCard>
        
//               <TiltCard className={`${aptTheme.containerColor} ${aptTheme.boxShadow} overflow-hidden shadow-xl rounded-lg p-6`}>
//                 <div className="text-blue-600 text-5xl font-bold mb-4">$1.3T</div>
//                 <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Annual Cost</h3>
//                 <p className={`mt-2 ${aptTheme.textColor}`}>Global economic burden of dementia care and related expenses.</p>
//               </TiltCard>
//             </div>
//           </AnimatedSection>
        
//           <AnimatedSection delay={0.4}>
//             {/* <TiltCard className={`${aptTheme.containerColor2} mt-10 overflow-hidden shadow-xl rounded-lg`}> */}
//               <div className="p-6 mt-4 md:p-8 flex flex-col md:flex-row">
//                 <div className="md:w-1/2 md:pr-8">
//                   <h3 className={`${aptTheme.headingText} text-2xl font-bold`}>Key Challenges</h3>
//                   <ul className="mt-4 space-y-4">
//                     <li className="flex">
//                       <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       <span className={`ml-3 ${aptTheme.textColor2}`}>Delayed diagnosis and intervention</span>
//                     </li>
//                     <li className="flex">
//                       <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       <span className={`ml-3 ${aptTheme.textColor2}`}>Inconsistent cognitive monitoring</span>
//                     </li>
//                     <li className="flex">
//                       <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       <span className={`ml-3 ${aptTheme.textColor2}`}>Caregiver burnout and stress</span>
//                     </li>
//                     <li className="flex">
//                       <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       <span className={`ml-3 ${aptTheme.textColor2}`}>Limited continuous data for clinical decisions</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="mt-6 md:mt-0 md:w-1/2">
//                   <div className={`${aptTheme.containerColor} h-64 rounded-lg flex items-center justify-center`}>
//                     <svg width="80%" height="80%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <rect width="400" height="200" fill={darkMode ? `#1E2939` : '#F5F5F5'} rx="4" />
//                       <path d="M40,150 C100,130 150,170 200,130 C250,90 300,110 360,70" stroke="#2563EB" strokeWidth="3" fill="none" />
//                       <path d="M40,120 C100,100 150,140 200,100 C250,60 300,80 360,40" stroke="#8FA7FA" strokeWidth="3" fill="none" strokeDasharray="5,5" />
//                       <text x="20" y="180" fill="#99A1AF">2020</text>
//                       <text x="180" y="180" fill="#99A1AF">2030</text>
//                       <text x="340" y="180" fill="#99A1AF">2040</text>
//                       <text x="10" y="30" fill="#99A1AF">Dementia Cases</text>
//                       <text x="10" y="50" fill="#99A1AF">& Support Systems</text>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             {/* </TiltCard> */}
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProblemSection;





import React from 'react';
import { AnimatedSection, Counter, TiltCard, MovingBlobBackground } from "./Animatiion.jsx";
import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';

function ProblemSection() {
  const { aptTheme, darkMode } = useLightDarkMode();

  return (
    <section id="problem" className={`relative py-12 ${aptTheme.baseColor} z-40`}>
      {/* Added MovingBlobBackground with fixed positioning */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <MovingBlobBackground />
      </div>
      
      <div className={`relative z-10 ${aptTheme.containerColor2} shadow-2xl shadow-blue-600 py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <AnimatedSection>
          <div className="text-center">
            <h2 className={`${aptTheme.headingText} text-3xl font-extrabold tracking-tight sm:text-4xl`}>
              The <span className="text-blue-600">Dementia Crisis</span>
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto text-xl ${aptTheme.textColor}`}>
              Dementia affects millions worldwide, with growing challenges for patients, caregivers, and healthcare systems.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mt-16">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <TiltCard className={`${aptTheme.containerColor} ${aptTheme.boxShadow} overflow-hidden shadow-xl rounded-lg p-6`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">
                  <Counter end={55} /> 
                </div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Million People</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>Currently living with dementia worldwide, expected to triple by 2050.</p>
              </TiltCard>
        
              <TiltCard className={`${aptTheme.containerColor} ${aptTheme.boxShadow} overflow-hidden shadow-xl rounded-lg p-6`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">
                  <Counter end={60} />
                </div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Percent Undiagnosed</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>Of all dementia cases go undiagnosed, leading to delayed interventions.</p>
              </TiltCard>
        
              <TiltCard className={`${aptTheme.containerColor} ${aptTheme.boxShadow} overflow-hidden shadow-xl rounded-lg p-6`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">$1.3T</div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Annual Cost</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>Global economic burden of dementia care and related expenses.</p>
              </TiltCard>
            </div>
          </AnimatedSection>
        
          <AnimatedSection delay={0.4}>
            <div className="p-6 mt-4 md:p-8 flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <h3 className={`${aptTheme.headingText} text-2xl font-bold`}>Key Challenges</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className={`ml-3 ${aptTheme.textColor2}`}>Delayed diagnosis and intervention</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className={`ml-3 ${aptTheme.textColor2}`}>Inconsistent cognitive monitoring</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className={`ml-3 ${aptTheme.textColor2}`}>Caregiver burnout and stress</span>
                  </li>
                  <li className="flex">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className={`ml-3 ${aptTheme.textColor2}`}>Limited continuous data for clinical decisions</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <div className={`${aptTheme.containerColor} h-64 rounded-lg flex items-center justify-center`}>
                  <svg width="80%" height="80%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="200" fill={darkMode ? `#1E2939` : '#F5F5F5'} rx="4" />
                    <path d="M40,150 C100,130 150,170 200,130 C250,90 300,110 360,70" stroke="#2563EB" strokeWidth="3" fill="none" />
                    <path d="M40,120 C100,100 150,140 200,100 C250,60 300,80 360,40" stroke="#8FA7FA" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                    <text x="20" y="180" fill="#99A1AF">2020</text>
                    <text x="180" y="180" fill="#99A1AF">2030</text>
                    <text x="340" y="180" fill="#99A1AF">2040</text>
                    <text x="10" y="30" fill="#99A1AF">Dementia Cases</text>
                    <text x="10" y="50" fill="#99A1AF">& Support Systems</text>
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;