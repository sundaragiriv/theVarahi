import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import WordMark from './WordMark';

const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

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

  return (
    <header className="fixed top-4 left-4 right-4 z-[9999]">
      <div 
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl border ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-xl border-gray-200/50 shadow-lg' 
            : 'bg-white/90 backdrop-blur-md border-white/20 shadow-md'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center group">
            <WordMark 
              animated 
              size="md" 
              theme={isScrolled || !isHomePage ? 'light' : 'dark'} 
              className="transition-all duration-300" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setOpenPanel('whoWeAre')}
              onMouseLeave={() => {
                setTimeout(() => setOpenPanel(null), 150);
              }}
            >
              <button 
                className={`text-base font-medium transition-all duration-200 px-4 py-3 relative group flex items-center rounded-lg ${
                  isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50' : 'text-blue-800 hover:text-emerald-700 hover:bg-white/10'
                }`}
                onFocus={() => setOpenPanel('whoWeAre')}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                    setTimeout(() => setOpenPanel(null), 150);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setOpenPanel(null);
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const firstItem = e.currentTarget.parentElement?.querySelector('[role="menu"] a') as HTMLElement;
                    firstItem?.focus();
                  }
                }}
                aria-expanded={openPanel === 'whoWeAre'}
                aria-haspopup="true"
              >
                <span>Our Intelligence</span>
                <svg className="w-3 h-3 inline-block ml-1 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
                </svg>
              </button>
              {openPanel === 'whoWeAre' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-300/60 rounded-xl shadow-2xl overflow-hidden z-[9999]"
                  style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                  onMouseEnter={() => setOpenPanel('whoWeAre')}
                  onMouseLeave={() => {
                    setTimeout(() => setOpenPanel(null), 100);
                  }}
                  role="menu"
                  aria-labelledby="whoWeAre-button"
                >
                  <div className="p-3">
                    <Link to="/about/our-story" className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-blue-50/50 rounded-lg transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-blue-500 group-hover:bg-brand-600 transition-colors" />
                        <div>
                          <div className="font-semibold">Our Story</div>
                          <div className="text-xs text-gray-500 mt-0.5">16 years of enterprise excellence</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about/our-team" className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-blue-50/50 rounded-lg transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-green-500 group-hover:bg-brand-600 transition-colors" />
                        <div>
                          <div className="font-semibold">Leadership Team</div>
                          <div className="text-xs text-gray-500 mt-0.5">Meet our executive leadership</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about/careers" className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-blue-50/50 rounded-lg transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-purple-500 group-hover:bg-brand-600 transition-colors" />
                        <div>
                          <div className="font-semibold">Careers</div>
                          <div className="text-xs text-gray-500 mt-0.5">Join our growing team</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/about/partnerships" className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-gradient-to-r hover:from-brand-50 hover:to-blue-50/50 rounded-lg transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-amber-500 group-hover:bg-brand-600 transition-colors" />
                        <div>
                          <div className="font-semibold">Partnerships</div>
                          <div className="text-xs text-gray-500 mt-0.5">Strategic alliances & integrations</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setOpenPanel('whatWeDo')}
              onMouseLeave={() => {
                setTimeout(() => setOpenPanel(null), 150);
              }}
            >
              <button 
                className={`text-base font-medium transition-all duration-200 px-4 py-3 relative group flex items-center rounded-lg ${
                  isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50' : 'text-blue-800 hover:text-emerald-700 hover:bg-white/10'
                }`}
                onFocus={() => setOpenPanel('whatWeDo')}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                    setTimeout(() => setOpenPanel(null), 150);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setOpenPanel(null);
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const firstItem = e.currentTarget.parentElement?.querySelector('[role="menu"] a') as HTMLElement;
                    firstItem?.focus();
                  }
                }}
                aria-expanded={openPanel === 'whatWeDo'}
                aria-haspopup="true"
              >
                <span>Amplify</span>
                <svg className="w-3 h-3 inline-block ml-1 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
                </svg>
              </button>
              {openPanel === 'whatWeDo' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-300/60 rounded-xl shadow-2xl overflow-hidden z-[9999]"
                  style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                  onMouseEnter={() => setOpenPanel('whatWeDo')}
                  onMouseLeave={() => {
                    setTimeout(() => setOpenPanel(null), 100);
                  }}
                  role="menu"
                  aria-labelledby="whatWeDo-button"
                >
                  <div className="p-3">
                    <Link 
                      to="/services/sap-solutions" 
                      className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-50/50 rounded-lg transition-all duration-200"
                      role="menuitem"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setOpenPanel(null);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-emerald-600 transition-colors" />
                        <div>
                          <div className="font-semibold">SAP Solutions & S/4HANA</div>
                          <div className="text-xs text-gray-500 mt-0.5">ERP transformation & cloud migration</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      to="/services/enterprise-cx" 
                      className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-50/50 rounded-lg transition-all duration-200"
                      role="menuitem"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setOpenPanel(null);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-emerald-700 transition-colors" />
                        <div>
                          <div className="font-semibold">Enterprise Customer Experience</div>
                          <div className="text-xs text-gray-500 mt-0.5">Service, Sales & Field Service platforms</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      to="/services/ai-orchestration" 
                      className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-50/50 rounded-lg transition-all duration-200"
                      role="menuitem"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setOpenPanel(null);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors" />
                        <div>
                          <div className="font-semibold">AI Orchestration & Automation</div>
                          <div className="text-xs text-gray-500 mt-0.5">RAG, predictive analytics & conversational AI</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      to="/services/joule-enablement" 
                      className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-50/50 rounded-lg transition-all duration-200"
                      role="menuitem"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setOpenPanel(null);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-emerald-600 transition-colors" />
                        <div>
                          <div className="font-semibold">SAP Joule Enablement</div>
                          <div className="text-xs text-gray-500 mt-0.5">AI assistant integration & user training</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      to="/services/upgrade-sap" 
                      className="group block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-50/50 rounded-lg transition-all duration-200"
                      role="menuitem"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setOpenPanel(null);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-700 group-hover:bg-emerald-800 transition-colors" />
                        <div>
                          <div className="font-semibold">Upgrade SAP Infrastructure</div>
                          <div className="text-xs text-gray-500 mt-0.5">Managed services & 24/7 support</div>
                        </div>
                      </div>
                    </Link>
                    <div className="border-t border-gray-200/50 mt-3 pt-3">
                      <Link to="/solutions" className="block px-3 py-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/80 rounded-lg transition-all duration-200 font-medium text-sm">
                        <div className="flex items-center justify-between">
                          <span>View All Solutions</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/resources/case-studies" className={`text-base font-medium transition-all duration-200 px-4 py-3 relative group rounded-lg ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50' : 'text-blue-800 hover:text-emerald-700 hover:bg-white/10'
            }`}>
              Success Stories
            </Link>

            <Link to="/resources" className={`text-base font-medium transition-all duration-200 px-4 py-3 relative group rounded-lg ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50' : 'text-blue-800 hover:text-emerald-700 hover:bg-white/10'
            }`}>
              Knowledge Hub
            </Link>
          </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
            isScrolled || !isHomePage
              ? 'text-text hover:bg-gray-100' 
              : 'text-blue-800 hover:bg-white/10'
          }`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-8">
            <Link
              to="/contact"
              className="px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200 text-white bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          id="mobile-menu"
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="px-6 py-6 space-y-6">
            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-brand-50 to-accent-50 p-4 rounded-lg border border-brand-200">
              <div className="text-center">
                <div className="text-brand-700 text-sm font-medium bg-brand-100 px-3 py-1 rounded-full inline-block">
                  Q1 2025 Implementation Slots Available
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              <Link 
                to="/about" 
                className="flex items-center justify-between py-3 px-4 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>About</span>
                <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="space-y-1">
                <div className="text-text font-medium py-2 px-4 text-sm text-gray-500">
                  Services
                </div>
                <Link 
                  to="/services/sap-solutions" 
                  className="flex items-center justify-between py-3 px-4 ml-2 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>SAP Solutions & S/4HANA</span>
                </Link>
                <Link 
                  to="/services/enterprise-cx" 
                  className="flex items-center justify-between py-3 px-4 ml-2 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Enterprise Customer Experience</span>
                </Link>
                <Link 
                  to="/services/ai-orchestration" 
                  className="flex items-center justify-between py-3 px-4 ml-2 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>AI Orchestration & Automation</span>
                </Link>
                <Link 
                  to="/services/joule-enablement" 
                  className="flex items-center justify-between py-3 px-4 ml-2 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>SAP Joule Enablement</span>
                </Link>
                <Link 
                  to="/services/upgrade-sap" 
                  className="flex items-center justify-between py-3 px-4 ml-2 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Upgrade SAP Infrastructure</span>
                </Link>
                <Link 
                  to="/services" 
                  className="flex items-center justify-between py-3 px-4 ml-2 text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>View All Services →</span>
                </Link>
              </div>
              <Link 
                to="/resources/case-studies" 
                className="flex items-center justify-between py-3 px-4 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Case Studies</span>
                <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/resources" 
                className="flex items-center justify-between py-3 px-4 text-text hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Resources</span>
                <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-border">
              <Link 
                to="/contact" 
                className="group flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-center rounded-lg hover:from-brand-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Free Strategy Call</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="text-center text-xs text-text-light pt-2">
              <div>✓ 200+ SAP Projects Since 2009</div>
              <div>✓ 15-35% Efficiency Gains Typical*</div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default HeaderNav;