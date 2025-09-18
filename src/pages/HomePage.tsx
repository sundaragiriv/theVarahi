import React from 'react';
import { Link } from 'react-router-dom';
import TrustBar from '../components/TrustBar';
import OutcomesStrip from '../components/OutcomesStrip';
import WhatWeDoGrid from '../components/WhatWeDoGrid';
import FeaturedStudy from '../components/FeaturedStudy';
import LatestInsights from '../components/LatestInsights';
import AboutBlurb from '../components/AboutBlurb';
import Contact from '../components/Contact';
import HeroFloatingElements from '../components/HeroFloatingElements';
import '../styles/grid.css';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="grid-bg pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column: heading/CTAs */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">Trusted by 500+ Enterprises</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">300% Avg ROI</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block">Enterprise CX & AI—</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Built for Outcomes
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 leading-relaxed max-w-2xl font-medium">
                  Transform your enterprise with SAP S/4HANA, AI-powered CX platforms, and intelligent automation that delivers 
                  <span className="text-blue-600 font-semibold"> measurable ROI within 90 days</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-6 max-w-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">90 Days</div>
                    <div className="text-sm text-gray-600">To ROI Realization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Global Support</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact/sales-inquiry"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white inline-flex items-center justify-center text-lg px-10 py-5 rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span>Book Free Assessment</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/resources#case-studies"
                  className="border-2 border-blue-600 text-blue-600 inline-flex items-center justify-center text-lg px-10 py-5 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <span>View Success Stories</span>
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
              
              <div className="flex items-center gap-8 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Risk-free pilot</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Guaranteed outcomes</span>
                </div>
              </div>
            </div>

            {/* Right column: Floating Animation */}
            <div className="hidden md:flex items-center justify-center relative h-[600px] z-30 overflow-visible">
              <HeroFloatingElements />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <OutcomesStrip />
      <WhatWeDoGrid />
      <FeaturedStudy />
      <LatestInsights />
      <AboutBlurb />
      <Contact />
    </main>
  );
};

export default HomePage;