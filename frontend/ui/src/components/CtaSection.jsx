// CtaSection.jsx
import React, { useState } from 'react';
import { AnimatedSection } from './Animatiion.jsx';
import { motion, AnimatePresence } from 'motion/react'; 
import { insertContactMessage } from '../supabase_interactions/ctaFormDataQuery.js';

function CtaSection({ setErr, setSuccess }) {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('caregiver');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !userType || !message) return setErr("No fields can be empty !!!");
    if (!emailRegex.test(email)) return setErr("Invalid email format!");

    try {
      const { data, error } = await insertContactMessage({
        email,
        username: userType,
        message,
      });

      if (error) {
        setErr(prevErrors => ({
          ...prevErrors,
          event: 'cta_form',
          message: 'Oops! Something went wrong. Please try again later.'
        }));
      }
      if (data) {
        setFormSubmitted(true);
        setSuccess(prevSuccess => ({
          ...prevSuccess,
          event: 'cta_form',
          message: 'Thanks for reaching out! We’ll get back to you soon.'
        }));
      }

      setEmail('');
      setUserType('caregiver');
      setMessage('');
      setTimeout(() => setFormSubmitted(false), 3000);
    } catch (err) {
      console.error('Supabase error:', err.message);
    }
  };

  return (
    <section id="contact" className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-200">Get Started</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
              Ready to Transform Dementia Care?
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-blue-100">
              Join us in creating a world where dementia is detected earlier and managed better.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 sm:mx-auto sm:max-w-lg">
            <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
              <form onSubmit={handleSubmit} className="mb-0 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700">I am a:</label>
                  <div className="mt-1">
                    <select
                      id="userType"
                      name="userType"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="caregiver">Family Caregiver</option>
                      <option value="healthcare">Healthcare Professional</option>
                      <option value="partner">Potential Partner</option>
                      <option value="investor">Investor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optional)</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Tell us about your interest in MemoTag..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Join Waitlist
                  </button>
                </div>

                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-50 p-4 rounded-md border border-green-100"
                    >
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Thank you! We'll be in touch soon.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default CtaSection;
