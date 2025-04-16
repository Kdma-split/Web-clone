// {/* Traction Section */}

import React from 'react'
import { AnimatedSection, Counter } from './Animatiion.jsx'
import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';

function TractionSeection() {
  const { aptTheme } = useLightDarkMode();

  return (
    <section id="traction" className={`py-16 ${aptTheme.baseColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Our Traction</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Making Real Impact
            </p>
            <p className={`max-w-xl mt-5 mx-auto text-xl ${aptTheme.textColor}`}>
              MemoTag is already transforming dementia care across multiple institutions.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-16">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className={`${aptTheme.containerColor} ${aptTheme.boxShadow2} overflow-hidden shadow-xl rounded-lg p-6 text-center`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">
                  <Counter end={85} />
                </div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Accuracy Rate</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>In early detection of cognitive decline</p>
              </div>
              <div className={`${aptTheme.containerColor} ${aptTheme.boxShadow2} overflow-hidden shadow-xl rounded-lg p-6 text-center`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">
                  <Counter end={12} />+
                </div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium`}>Clinical Partners</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>Including major research hospitals</p>
              </div>
              <div className={`${aptTheme.containerColor} ${aptTheme.boxShadow2} overflow-hidden shadow-xl rounded-lg p-6 text-center`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">5K+</div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium `}>Patients</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>Currently using MemoTag technology</p>
              </div>
              <div className={`${aptTheme.containerColor} ${aptTheme.boxShadow2} overflow-hidden shadow-xl rounded-lg p-6 text-center`}>
                <div className="text-blue-600 text-5xl font-bold mb-4">$4.2M</div>
                <h3 className={`${aptTheme.headingText} text-xl font-medium`}>In Funding</h3>
                <p className={`mt-2 ${aptTheme.textColor}`}>From healthcare investors and grants</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className={`${aptTheme.containerColor2} ${aptTheme.boxShadow2} mt-12 overflow-hidden shadow-xl rounded-lg`}>
              <div className="p-8">
                <h3 className={`${aptTheme.headingText} text-2xl font-bold mb-6`}>Partnerships & Recognition</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className={`${aptTheme.containerColor} h-20 rounded-md flex items-center justify-center`}>
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                    <span className={`ml-2 font-medium ${aptTheme.textColor}`}>Health Innovation Award</span>
                  </div>
                  <div className={`${aptTheme.containerColor} h-20 rounded-md flex items-center justify-center`}>
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                    <span className={`ml-2 font-medium ${aptTheme.textColor}`}>Mayo Clinic Partnership</span>
                  </div>
                  <div className={`${aptTheme.containerColor} h-20 rounded-md flex items-center justify-center`}>
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                    <span className={`ml-2 font-medium ${aptTheme.textColor}`}>NIH Research Grant</span>
                  </div>
                  <div className={`${aptTheme.containerColor} h-20 rounded-md flex items-center justify-center`}>
                    <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                    <span className={`ml-2 font-medium ${aptTheme.textColor}`}>Tech for Good Finalist</span>
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

export default TractionSeection;
