import React, { useRef } from 'react';
import { AnimatedSection, AdvancedTiltCard } from './Animatiion.jsx';
import { useLightDarkMode } from '../contexts/LightDarkMode.context.jsx';
import { motion } from 'framer-motion';

function Testimonials() {
  const { aptTheme } = useLightDarkMode();
  const scrollContainerRef = useRef(null);

  // Testimonial data
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Neurologist, Boston Medical",
      quote: "MemoTag has revolutionized how we monitor cognitive changes. The AI model catches subtle patterns that traditional assessments often miss."
    },
    {
      name: "Michael Rodriguez",
      role: "Caregiver for Father with Dementia",
      quote: "The peace of mind MemoTag gives our family is invaluable. I can check in on dad remotely, and the care suggestions have improved his quality of life."
    },
    {
      name: "Emily Chen",
      role: "Director of Memory Care, Sunnyvale Center",
      quote: "We've implemented MemoTag across our facility and seen a 40% reduction in emergency incidents. The data insights help us tailor care plans with precision."
    },
    {
      name: "James Wilson",
      role: "Healthcare Technology Consultant",
      quote: "MemoTag represents the future of dementia care. Its predictive analytics and ease of use put it leagues ahead of other solutions I've evaluated."
    },
    {
      name: "Linda Patel",
      role: "Family Caregiver",
      quote: "The medication reminders and daily check-ins have given my mother more independence while giving me peace of mind. Worth every penny."
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`${aptTheme.baseColor} py-8`}>
      <div className={`${aptTheme.containerColor2} ${aptTheme.boxShadow} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4`}>
        <AnimatedSection>
          <div className="text-center">
            <h2 className={`${aptTheme.headingText} text-3xl font-extrabold tracking-tight sm:text-4xl`}>
              What Our Users Say
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto text-xl ${aptTheme.textColor}`}>
              From caregivers to healthcare professionals, MemoTag is making a difference.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 relative">
          {/* Scroll buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('left')}
              className={`${aptTheme.containerColor4} ${aptTheme.boxShadow} p-2 rounded-full`}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('right')}
              className={`${aptTheme.containerColor4} ${aptTheme.boxShadow} p-2 rounded-full`}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <AnimatedSection delay={0.2}>
            <motion.div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 px-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <AdvancedTiltCard 
                  key={index} 
                  className={`${aptTheme.containerColor4} ${aptTheme.boxShadow} rounded-lg p-6 flex-shrink-0 w-80`}
                  tiltMaxAngle={15}
                  scale={1.03}
                  reflectionOpacity={0.15}
                >
                  <div className="flex items-start h-full">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className={`${aptTheme.headingText} text-lg font-medium`}>{testimonial.name}</h4>
                      <p className={`text-sm ${aptTheme.textColor}`}>{testimonial.role}</p>
                      <div className="mt-1 flex">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <svg key={rating} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className={`mt-3 ${aptTheme.textColor2}`}>
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </AdvancedTiltCard>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;