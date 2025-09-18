import React from 'react';
import { Link } from 'react-router-dom';
import ScrollSpyNav from '../components/ScrollSpyNav';

const ContactPage: React.FC = () => {
  const sections = [
    { id: 'get-started', label: 'Get Started' },
    { id: 'office-locations', label: 'Office Locations' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'investors', label: 'Investors' }
  ];

  const offices = [
    {
      city: 'Philadelphia',
      address: '123 Enterprise Way, Suite 500\nPhiladelphia, PA 19103',
      phone: '+1-610-457-3193',
      email: 'philadelphia@varahi.com',
      timezone: 'EST',
      isHeadquarters: true
    },
    {
      city: 'New York',
      address: '456 Business Plaza, Floor 25\nNew York, NY 10001',
      phone: '+1 (212) 555-0200',
      email: 'ny@varahi.com',
      timezone: 'EST'
    },
    {
      city: 'Mumbai',
      address: '789 Innovation Centre\nBandra Kurla Complex\nMumbai, Maharashtra 400051',
      phone: '+91-8074926638',
      email: 'mumbai@varahi.com',
      timezone: 'IST'
    },
    {
      city: 'Bangalore',
      address: 'Tech Park Plaza, Electronic City\nBangalore, Karnataka 560100',
      phone: '+91 (80) 4567-8900',
      email: 'bangalore@varahi.com',
      timezone: 'IST'
    }
  ];

  return (
    <div className="pt-20">
      <ScrollSpyNav sections={sections} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your enterprise with AI and SAP solutions? Our team of experts is here to help you 
              navigate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Can We Help?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the option that best describes your needs, and we'll connect you with the right expert.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/contact/sales-inquiry" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Book Assessment</h3>
              <p className="text-gray-600">Schedule a consultation to discuss your transformation needs</p>
            </Link>
            
            <Link to="/contact/general-inquiry" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">General Inquiry</h3>
              <p className="text-gray-600">Questions about our services, partnerships, or company</p>
            </Link>
            
            <Link to="/contact/support" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-600">Get help with existing implementations and services</p>
            </Link>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
              <p className="text-gray-600 mb-4">24/7 critical system support</p>
              <div className="space-y-2">
                <a href="tel:+1-610-457-3193" className="block text-orange-600 hover:text-orange-700 font-semibold">
                  US: +1-610-457-3193
                </a>
                <a href="tel:+91-8074926638" className="block text-orange-600 hover:text-orange-700 font-semibold">
                  India: +91-8074926638
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="office-locations" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Global Presence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices across three continents, we're positioned to serve enterprise clients worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                {office.isHeadquarters && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Headquarters
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  {office.city}
                  {office.isHeadquarters && (
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  )}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-700">{office.phone}</a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700">{office.email}</a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Business Hours: 8AM-6PM {office.timezone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Partnership Opportunities</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're always looking for strategic partners who share our commitment to enterprise excellence. 
                Whether you're a technology vendor, systems integrator, or consulting firm, let's explore how we can 
                create value together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Technology Partnerships</h3>
                    <p className="text-gray-600">Joint go-to-market strategies and solution development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Channel Partners</h3>
                    <p className="text-gray-600">Expand your service portfolio with our expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Alliance Programs</h3>
                    <p className="text-gray-600">Strategic alliances for market expansion</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about/partnerships" 
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Partnerships
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Strategic Alliances</h3>
                <p className="text-gray-600">Growing Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Investor Relations</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Varahi is backed by leading venture capital firms and strategic investors who share our vision 
              for the future of enterprise AI and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$50M</div>
              <div className="text-white/80">Series B Funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-white/80">YoY Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Enterprise Clients</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Financial Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Quarterly Financial Reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Annual Investor Presentations</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SEC Filings & Compliance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Investor Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-white/80">VP, Investor Relations</p>
                </div>
                <div className="space-y-2">
                  <a href="mailto:investors@varahi.com" className="block text-white/90 hover:text-white">
                    investors@varahi.com
                  </a>
                  <a href="tel:+1-415-555-0150" className="block text-white/90 hover:text-white">
                    +1 (415) 555-0150
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;