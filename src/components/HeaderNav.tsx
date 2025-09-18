import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoOrbit from './LogoOrbit';
import MegaPanel from './nav/MegaPanel';

const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenPanel(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenPanel(null);
        setIsMobileMenuOpen(false);
        setFocusedIndex(-1);
      }
      if (openPanel && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        const menuItems = document.querySelectorAll(`[data-menu="${openPanel}"] a`);
        if (e.key === 'ArrowDown') {
          setFocusedIndex(prev => (prev + 1) % menuItems.length);
        } else {
          setFocusedIndex(prev => prev <= 0 ? menuItems.length - 1 : prev - 1);
        }
      }
      if (e.key === 'Enter' && focusedIndex >= 0) {
        const menuItems = document.querySelectorAll(`[data-menu="${openPanel}"] a`);
        (menuItems[focusedIndex] as HTMLElement)?.click();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openPanel, focusedIndex]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sap-lg border-b border-gray/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <LogoOrbit size={200} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 relative" role="menubar">
            {/* SAP Services - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => { setOpenPanel('sap'); setFocusedIndex(-1); }}
              onMouseLeave={() => { setOpenPanel(null); setFocusedIndex(-1); }}
            >
              <button
                className="nav-pill flex items-center gap-1"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openPanel === 'sap'}
              >
                SAP Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPanel === 'sap' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300"
                  data-menu="sap"
                  role="menu"
                  aria-label="SAP Services Menu"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">SAP Services</h3>
                    <p className="text-blue-100 text-sm mt-1">Enterprise transformation solutions</p>
                  </div>
                  <div className="p-2">
                    <Link to="/solutions#erp-transformation" className="group block p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">ERP Transformation</h4>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">Popular</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">S/4HANA migration & integration services</p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">⏱️ 8-16 weeks</span>
                            <span className="text-blue-600 font-medium">Starting at $50K</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/solutions#enterprise-cx" className="group block p-4 rounded-xl hover:bg-green-50 transition-all duration-200 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Enterprise CX</h4>
                          <p className="text-sm text-gray-600 mb-2">Sales, Service & Marketing Cloud solutions</p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">⏱️ 6-12 weeks</span>
                            <span className="text-green-600 font-medium">Starting at $35K</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/solutions#cx-toolkit" className="group block p-4 rounded-xl hover:bg-purple-50 transition-all duration-200 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">CX Toolkit</h4>
                          <p className="text-sm text-gray-600 mb-2">Commerce, CPQ, CDC & FSM platforms</p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">⏱️ 4-8 weeks</span>
                            <span className="text-purple-600 font-medium">Starting at $25K</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/solutions#joule" className="group block p-4 rounded-xl hover:bg-orange-50 transition-all duration-200 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 text-orange-600 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Joule</h4>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">New</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">AI-powered SAP assistant & automation</p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">⏱️ 2-4 weeks</span>
                            <span className="text-orange-600 font-medium">Starting at $15K</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <Link to="/solutions" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">View all SAP services →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* AI Strategy - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenPanel('ai')}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                className="nav-pill flex items-center gap-1"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openPanel === 'ai'}
              >
                AI Strategy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPanel === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">AI Strategy</h3>
                    <p className="text-purple-100 text-sm mt-1">End-to-end AI transformation</p>
                  </div>
                  <div className="p-2">
                    <Link to="/solutions/ai-strategy-transformations#assessment-strategy" className="group block p-4 rounded-xl hover:bg-purple-50 transition-all duration-200 hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 text-purple-600 group-hover:pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Assessment & Strategy</h4>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Recommended</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">AI maturity assessment & roadmap development</p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">⏱️ 3-6 weeks</span>
                            <span className="text-purple-600 font-medium">Starting at $20K</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/solutions/ai-strategy-transformations#implementation" className="group block p-4 rounded-xl hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Implementation</h4>
                          <p className="text-sm text-gray-600 mt-1">ML, analytics & conversational AI deployment</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/solutions/ai-strategy-transformations#sap-integration" className="group block p-4 rounded-xl hover:bg-green-50 transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">SAP Integration</h4>
                          <p className="text-sm text-gray-600 mt-1">RAG/RASP & Joule AI integration services</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/solutions/ai-strategy-transformations#monitoring" className="group block p-4 rounded-xl hover:bg-orange-50 transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Monitoring</h4>
                          <p className="text-sm text-gray-600 mt-1">Telemetry, guardrails & performance evaluation</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-600">M</span>
                        </div>
                        <span className="text-xs text-gray-600">"Transformed our AI capabilities in 6 months" - Microsoft</span>
                      </div>
                    </div>
                    <Link to="/solutions/ai-strategy-transformations" className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">View AI strategy services →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenPanel('industries')}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                className="nav-pill flex items-center gap-1"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openPanel === 'industries'}
              >
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPanel === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">Industries</h3>
                    <p className="text-indigo-100 text-sm mt-1">Sector-specific expertise & solutions</p>
                  </div>
                  <div className="p-4">
                    <div className="relative mb-3">
                      <input 
                        type="text" 
                        placeholder="Search industries..."
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="px-2 max-h-80 overflow-y-auto">
                    <Link to="/industries#manufacturing" className="group block p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Manufacturing</h4>
                          <p className="text-xs text-gray-600">Smart factory & supply chain</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/industries#financial-services" className="group block p-3 rounded-xl hover:bg-green-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Financial Services</h4>
                          <p className="text-xs text-gray-600">Banking & insurance solutions</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/industries#healthcare" className="group block p-3 rounded-xl hover:bg-red-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">Healthcare</h4>
                          <p className="text-xs text-gray-600">Patient care & operations</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/industries#retail-cpg" className="group block p-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Retail & CPG</h4>
                          <p className="text-xs text-gray-600">Commerce & brand experience</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/industries#utilities-energy" className="group block p-3 rounded-xl hover:bg-yellow-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">Utilities & Energy</h4>
                          <p className="text-xs text-gray-600">Grid modernization & sustainability</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/industries#automotive" className="group block p-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2 2H8a2 2 0 01-2-2v0a2 2 0 01-2-2V9a2 2 0 012-2h2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Automotive</h4>
                          <p className="text-xs text-gray-600">Connected vehicles & mobility</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600">🏆 Trusted by 500+ enterprises across 6 industries</span>
                    </div>
                    <Link to="/industries" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">View all industries →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenPanel('resources')}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                className="nav-pill flex items-center gap-1"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openPanel === 'resources'}
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPanel === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">Resources</h3>
                    <p className="text-emerald-100 text-sm mt-1">Knowledge center & insights</p>
                  </div>
                  <div className="p-2">
                    <Link to="/resources#case-studies" className="group block p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 hover:shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                          <svg className="w-4 h-4 text-blue-600 group-hover:rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Case Studies</h4>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">25+</span>
                          </div>
                          <p className="text-xs text-gray-600">Success stories & ROI outcomes</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/resources#thought-leadership" className="group block p-3 rounded-xl hover:bg-green-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Thought Leadership</h4>
                          <p className="text-xs text-gray-600">Industry insights & trends</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/resources#research-reports" className="group block p-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Research & Reports</h4>
                          <p className="text-xs text-gray-600">Market analysis & whitepapers</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/resources#events-webinars" className="group block p-3 rounded-xl hover:bg-orange-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Events & Webinars</h4>
                          <p className="text-xs text-gray-600">Live sessions & conferences</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600">📚 150+ resources | Updated weekly</span>
                    </div>
                    <Link to="/resources" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">View all resources →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenPanel('about')}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                className="nav-pill flex items-center gap-1"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openPanel === 'about'}
              >
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPanel === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">About Us</h3>
                    <p className="text-amber-100 text-sm mt-1">Our story, team & culture</p>
                  </div>
                  <div className="p-2">
                    <Link to="/about#company-overview" className="group block p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Company Overview</h4>
                          <p className="text-xs text-gray-600">Mission, vision & values</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about#leadership-team" className="group block p-3 rounded-xl hover:bg-green-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Leadership Team</h4>
                          <p className="text-xs text-gray-600">Executive profiles & expertise</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about#culture-values" className="group block p-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Culture & Values</h4>
                          <p className="text-xs text-gray-600">What drives our team</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about#careers-growth" className="group block p-3 rounded-xl hover:bg-orange-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Careers & Growth</h4>
                          <p className="text-xs text-gray-600">Join our team & opportunities</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <Link to="/about" className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">Learn more about us →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenPanel('contact')}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <button
                className="nav-pill flex items-center gap-1"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openPanel === 'contact'}
              >
                Contact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPanel === 'contact' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">Contact</h3>
                    <p className="text-cyan-100 text-sm mt-1">Get in touch with our team</p>
                  </div>
                  <div className="p-2">
                    <Link to="/contact#get-started" className="group block p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Get Started</h4>
                          <p className="text-xs text-gray-600">Book assessment & consultation</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/contact#office-locations" className="group block p-3 rounded-xl hover:bg-green-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Office Locations</h4>
                          <p className="text-xs text-gray-600">Global presence & local support</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/contact/general-inquiry" className="group block p-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">General Inquiry</h4>
                          <p className="text-xs text-gray-600">Questions & information requests</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/contact/support" className="group block p-3 rounded-xl hover:bg-orange-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Support</h4>
                          <p className="text-xs text-gray-600">Technical assistance & help</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <Link to="/contact" className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors">View all contact options →</Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 mr-2">
              <a
                href="https://linkedin.com/company/varahi-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/varahiconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            
            <Link
              to="/contact/sales-inquiry"
              className="btn-accent px-4 py-2 rounded-lg shadow-sap-md transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Book Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link to="/solutions" className="block py-2 text-gray-700 hover:text-blue-600">SAP Services</Link>
            <Link to="/solutions/ai/assessment" className="block py-2 text-gray-700 hover:text-blue-600">AI Strategy</Link>
            <Link to="/industries" className="block py-2 text-gray-700 hover:text-blue-600">Industries</Link>
            <Link to="/resources" className="block py-2 text-gray-700 hover:text-blue-600">Resources</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/contact/sales-inquiry" className="block py-2 btn-accent text-center rounded-lg">Book Assessment</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;