// {/* Solution Section */}
import React from 'react';
import { AnimatedSection } from './Animatiion.jsx';
import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';
import { MovingBlobBackground, TiltCard } from './Animatiion.jsx';

function Solution() {
  const { aptTheme } = useLightDarkMode(); 

  return (
    <section id="solution" className={`${aptTheme.baseColor} py-16 z-40`}>
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <MovingBlobBackground position='-top-1/8'/>
      </div>
      {/* Foreground Content */}
      <div className={`${aptTheme.boxShadow} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative`}>
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Our Solution</h2>
            <p className={`${aptTheme.headingText} mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight`}>
              Introducing <span className="text-blue-600">MemoTag</span>
            </p>
            <p className={`max-w-xl mt-5 mx-auto text-xl ${aptTheme.textColor}`}>
              An AI-powered platform that transforms dementia care through continuous monitoring and personalized support.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mt-16">
          <AnimatedSection delay={0.2}>
            <div className={`${aptTheme.containerColor3} ${aptTheme.boxShadow} rounded-xl overflow-hidden shadow-xl`}>
              <div className="p-8">
                <h3 className={`${aptTheme.headingText} text-2xl font-bold mb-6`}>How MemoTag Works</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TiltCard>
                  <div className={`${aptTheme.containerColor} p-6 rounded-lg shadow-md border border-2 border-blue-500 hover:shadow-blue-600 hover:shadow-lg`}>
                    <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Physical Tracking</h4>
                    <p className={`mt-2 ${aptTheme.textColor}`}>
                      Smart sensors track movement patterns, sleep, and daily activities to detect changes that may indicate cognitive decline.
                    </p>
                  </div>
                  </TiltCard>

                  <TiltCard>
                  <div className={`${aptTheme.containerColor} p-6 rounded-lg shadow-md border border-2 border-blue-500 hover:shadow-blue-600 hover:shadow-lg`}>
                    <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Cognitive Assessment</h4>
                    <p className={`mt-2 ${aptTheme.textColor}`}>
                      AI algorithms analyze speech patterns, memory tests, and digital interactions to evaluate cognitive function over time.
                    </p>
                  </div>
                  </TiltCard>

                  <TiltCard>
                  <div className={`${aptTheme.containerColor} p-6 rounded-lg shadow-md border border-2 border-blue-500 hover:shadow-blue-600 hover:shadow-lg`}>
                    <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Personalized Care Plans</h4>
                    <p className={`mt-2 ${aptTheme.textColor}`}>
                      Using collected data, MemoTag generates tailored recommendations for caregivers and healthcare providers.
                    </p>
                  </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          </AnimatedSection>
        
          <AnimatedSection delay={0.4}>
            <div className={`${aptTheme.containerColor} ${aptTheme.boxShadow} mt-12 overflow-hidden shadow-xl rounded-lg z-100`}>
              <div className="p-8">
                <h3 className={`${aptTheme.headingText} text-2xl font-bold mb-6`}>Key Features</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`${aptTheme.containerColor} flex rounded-xl p-2`}>
                <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Early Detection</h4>
                      <p className={`mt-2 ${aptTheme.textColor2}`}>
                        Identifies subtle changes in behavior and cognition up to 18 months earlier than traditional methods.
                      </p>
                    </div>
                  </div>

                  <div className={`${aptTheme.containerColor} flex rounded-xl p-2`}>
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Continuous Monitoring</h4>
                      <p className={`mt-2 ${aptTheme.textColor2}`}>
                        24/7 passive monitoring provides comprehensive data without disrupting daily life.
                      </p>
                    </div>
                  </div>

                  <div className={`${aptTheme.containerColor} flex rounded-xl p-2`}>
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Care Coordination</h4>
                      <p className={`mt-2 ${aptTheme.textColor2}`}>
                        Connects family caregivers with healthcare providers through a unified platform for better decision-making.
                      </p>
                    </div>
                  </div>

                  <div className={`${aptTheme.containerColor} flex rounded-xl p-2`}>
                    <div className="flex-shrink-0">
                      <div className={`bg-white h-12 w-12 rounded-md flex items-center justify-center`}>
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className={`${aptTheme.headingText} text-lg font-medium`}>Clinical Insights</h4>
                    <p className={`mt-2 ${aptTheme.textColor2}`}>
                      Generates detailed reports and analytics for healthcare professionals to optimize treatment plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </section>    
  )
}

export default Solution



