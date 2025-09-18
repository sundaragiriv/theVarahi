import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-dark via-sap-navy to-dark text-white py-20">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-sap flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-sap-light-blue to-white bg-clip-text text-transparent">Varahi</span>
              </div>
              <p className="text-white/80 leading-relaxed max-w-lg text-lg font-light">
                Enterprise customer experience and AI consulting that delivers measurable business outcomes. 
                Specialized in SAP integrations, modern CX platforms, and intelligent automation solutions.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/varahi-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-sap hover:bg-blue-600 hover:shadow-glow transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/varahiconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-sap hover:bg-blue-400 hover:shadow-glow transition-all duration-300 group"
                aria-label="Twitter/X"
              >
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/varahiconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-sap hover:bg-blue-700 hover:shadow-glow transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/varahiconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-sap hover:bg-pink-600 hover:shadow-glow transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@varahiconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-sap hover:bg-red-600 hover:shadow-glow transition-all duration-300 group"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@varahi.com"
                className="p-3 bg-white/10 rounded-sap hover:bg-primary hover:shadow-glow transition-all duration-300 group"
                aria-label="Email"
              >
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-6 text-xl">SAP Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/solutions#erp-transformation" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>S/4HANA Migration</Link></li>
              <li><Link to="/solutions#enterprise-cx" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Enterprise CX</Link></li>
              <li><Link to="/solutions#cx-toolkit" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Commerce & CPQ</Link></li>
              <li><Link to="/solutions#joule" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Joule AI Assistant</Link></li>
            </ul>
            
            <h3 className="font-bold mb-6 text-xl mt-8">AI Strategy</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/solutions/ai-strategy-transformations#assessment-strategy" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>AI Assessment</Link></li>
              <li><Link to="/solutions/ai-strategy-transformations#implementation" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>ML & Analytics</Link></li>
              <li><Link to="/solutions/ai-strategy-transformations#sap-integration" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>RAG/RASP Integration</Link></li>
            </ul>
          </div>
          
          {/* Company & Resources */}
          <div>
            <h3 className="font-bold mb-6 text-xl">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/about#company-overview" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-green rounded-full"></span>About Us</Link></li>
              <li><Link to="/about#leadership-team" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-green rounded-full"></span>Leadership</Link></li>
              <li><Link to="/about#careers-growth" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-green rounded-full"></span>Careers</Link></li>
              <li><Link to="/contact/investors" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-green rounded-full"></span>Investors</Link></li>
            </ul>
            
            <h3 className="font-bold mb-6 text-xl mt-8">Resources</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/resources#case-studies" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-light-blue rounded-full"></span>Case Studies</Link></li>
              <li><Link to="/resources#thought-leadership" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-light-blue rounded-full"></span>Insights & Blog</Link></li>
              <li><Link to="/resources#research-reports" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-light-blue rounded-full"></span>Whitepapers</Link></li>
              <li><Link to="/resources#events-webinars" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sap-light-blue rounded-full"></span>Events</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-6 text-xl">Stay Updated</h3>
            <p className="text-white/80 mb-6 font-light">
              Get exclusive insights on CX trends, AI implementations, and SAP platform updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-sap text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-sap hover:bg-secondary hover:shadow-glow transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 8-16 8V4zm0 0l8 8" /></svg>
                </button>
              </div>
              {isSubscribed && (
                <p className="text-sap-green font-medium transition-opacity duration-300">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Block */}
        <div className="border-t border-white/20 pt-10 pb-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Enterprise?</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">Join 500+ enterprises who trust Varahi for their SAP and AI transformation journey. Get expert consultation and measurable ROI within 90 days.</p>
              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sap-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sap-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sap-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Global Delivery</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link 
                to="/contact/sales-inquiry"
                className="bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-secondary hover:shadow-glow transition-all duration-300 text-center group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free Assessment
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/contact/general-inquiry"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                General Inquiry
              </Link>
              <div className="text-center text-white/60 text-sm mt-2">
                <span>📞 US: +1-610-457-3193</span><br/>
                <span>📞 India: +91-8074926638</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70 text-center md:text-left font-light text-sm">
            <p>© 2025 Varahi. All rights reserved.</p>
            <p className="mt-1">SAP, S/4HANA, BTP, and other SAP products are trademarks of SAP SE. Varahi is an independent consulting firm.</p>
          </div>
          <div className="flex items-center space-x-6 text-white/70 text-sm">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;