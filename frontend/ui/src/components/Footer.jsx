// {/* Footer */}
import React from 'react'
import { Link } from 'react-router-dom';
// import AnimatedSection from './Animatiion.jsx';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">MemoTag</span>
            </div>
            <p className="text-gray-300 text-base">
              Transforming dementia care through AI and continuous monitoring.
            </p>
            <div className="flex space-x-6">
              <Link to="https://www.instagram.com/memotag.io/?locale=en-us&hl=ja" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104390402&keywords=memotag&origin=RICH_QUERY_SUGGESTION&position=0&searchId=407cd0c0-1b7a-4380-b6fc-7580b01b8bc1&sid=Py)&spellCorrectionEnabled=false" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      For Caregivers
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      For Healthcare Providers
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.memotag.io/mindmap" className="text-base text-gray-300 hover:text-white">
                      Research
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-base text-gray-300 hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="https://www.memotag.io/mindmap" className="text-base text-gray-300 hover:text-white">
                      Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.memotag.io/mindmap" className="text-base text-gray-300 hover:text-white">
                      Webinars
                    </Link>
                    </li>
                    <li>
                      <Link to="https://www.memotag.io/mindmap" className="text-base text-gray-300 hover:text-white">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.memotag.io/mindmap" className="text-base text-gray-300 hover:text-white">
                        Documentation
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} MemoTag, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;