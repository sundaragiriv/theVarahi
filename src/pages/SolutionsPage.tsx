import React from 'react';
import ScrollSpyNav from '../components/ScrollSpyNav';

const SolutionsPage: React.FC = () => {
  const sections = [
    { id: 'erp-transformation', label: 'ERP Transformation' },
    { id: 'enterprise-cx', label: 'Enterprise CX' },
    { id: 'cx-toolkit', label: 'CX Toolkit' },
    { id: 'joule', label: 'Joule' }
  ];

  return (
    <div className="pt-20">
      <ScrollSpyNav sections={sections} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">SAP Gold Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">500+ Implementations</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              SAP Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive SAP transformation across ERP, CX, and AI-powered solutions. From S/4HANA migration to 
              Joule AI integration, we deliver <span className="text-blue-600 font-semibold">measurable ROI within 90 days</span>.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8-16 Weeks</div>
                <div className="text-sm text-gray-600">Avg Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">300%</div>
                <div className="text-sm text-gray-600">Avg ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/sales-inquiry"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free Assessment
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="/resources#case-studies"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Transformation */}
      <section id="erp-transformation" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">ERP Transformation</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Starting at $50K</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modernize your enterprise with S/4HANA migration, cloud integration, and business process optimization. 
                Our proven methodology reduces implementation time by 40% while ensuring zero business disruption.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-blue-800">Success Guarantee:</span>
                </div>
                <p className="text-blue-700 text-sm">We guarantee measurable ROI within 90 days or your money back. Average client sees 300% ROI within first year.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">S/4HANA Migration & Modernization</h3>
                      <p className="text-gray-600 mb-2">Seamless transition from legacy ERP systems to modern S/4HANA platform with zero business disruption</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 8-16 weeks</span>
                        <span>💰 Starting at $50K</span>
                        <span>📈 300% avg ROI</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">BTP Integration & Cloud Platform</h3>
                      <p className="text-gray-600 mb-2">Cloud platform integration, API management, and hybrid cloud architecture design</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 4-8 weeks</span>
                        <span>💰 Starting at $25K</span>
                        <span>🔧 Custom APIs</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Business Process Optimization</h3>
                      <p className="text-gray-600 mb-2">Streamline workflows, automate processes, and optimize business operations for maximum efficiency</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 6-12 weeks</span>
                        <span>💰 Starting at $35K</span>
                        <span>📊 40% efficiency gain</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="/contact/sales-inquiry"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
                  >
                    Get ERP Assessment
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Enterprise ERP</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CX */}
      <section id="enterprise-cx" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Customer Experience</h3>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Enterprise CX</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">High ROI</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Starting at $35K</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transform customer relationships with integrated Sales, Service, and Marketing Cloud solutions. 
                Increase customer satisfaction by 45% and boost sales productivity by 60% with our proven CX methodology.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-800">Proven Results:</span>
                </div>
                <p className="text-green-700 text-sm">Our CX implementations deliver 45% increase in customer satisfaction and 60% boost in sales productivity.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Sales Cloud & Revenue Optimization</h3>
                      <p className="text-gray-600 mb-2">Streamline sales processes, automate lead management, and boost revenue growth with AI-powered insights</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 6-10 weeks</span>
                        <span>💰 Starting at $35K</span>
                        <span>📈 60% productivity boost</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Service Cloud & Support Excellence</h3>
                      <p className="text-gray-600 mb-2">Deliver exceptional customer service experiences with omnichannel support and AI-powered case resolution</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 4-8 weeks</span>
                        <span>💰 Starting at $30K</span>
                        <span>😊 45% satisfaction increase</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Marketing Cloud & Personalization</h3>
                      <p className="text-gray-600 mb-2">Create personalized customer journeys, automate campaigns, and drive engagement across all touchpoints</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 6-12 weeks</span>
                        <span>💰 Starting at $40K</span>
                        <span>🎯 3x engagement rates</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="/contact/sales-inquiry"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group"
                  >
                    Get CX Assessment
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CX Toolkit */}
      <section id="cx-toolkit" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">CX Toolkit & Specialized Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive suite of specialized tools for commerce, pricing, data management, and field service operations. 
              Each solution is designed to integrate seamlessly with your existing SAP landscape while delivering immediate business value.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Rapid deployment (4-8 weeks)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Pre-built integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Starting at $25K</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-lg">SAP Commerce Cloud</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">B2B/B2C e-commerce platform with omnichannel capabilities and AI-powered personalization</p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div>⏱️ 6-10 weeks implementation</div>
                <div>💰 Starting at $40K</div>
                <div>🛒 300% conversion increase</div>
              </div>
              <a href="/contact/sales-inquiry" className="text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:underline">Learn More →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-lg">SAP CPQ (Configure, Price, Quote)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Streamline complex product configuration and pricing with automated quote generation and approval workflows</p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div>⏱️ 4-8 weeks implementation</div>
                <div>💰 Starting at $30K</div>
                <div>⚡ 70% faster quotes</div>
              </div>
              <a href="/contact/sales-inquiry" className="text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:underline">Learn More →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-lg">SAP CDC (Customer Data Cloud)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Unified customer identity management with consent management and privacy compliance (GDPR/CCPA)</p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div>⏱️ 3-6 weeks implementation</div>
                <div>💰 Starting at $25K</div>
                <div>🔒 100% compliance ready</div>
              </div>
              <a href="/contact/sales-inquiry" className="text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:underline">Learn More →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-lg">SAP FSM (Field Service Management)</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Optimize field operations with intelligent scheduling, mobile workforce management, and IoT integration</p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div>⏱️ 5-10 weeks implementation</div>
                <div>💰 Starting at $35K</div>
                <div>📱 Mobile-first design</div>
              </div>
              <a href="/contact/sales-inquiry" className="text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Joule */}
      <section id="joule" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Joule</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">New Technology</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Starting at $15K</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SAP's revolutionary AI-powered digital assistant that transforms how users interact with enterprise applications. 
                Reduce training time by 80% and increase user productivity by 50% with natural language processing.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-orange-800">Early Adopter Advantage:</span>
                </div>
                <p className="text-orange-700 text-sm">Be among the first to implement Joule and gain competitive advantage. 50% productivity increase in pilot programs.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Natural Language Processing & Conversational AI</h3>
                      <p className="text-gray-600 mb-2">Interact with SAP systems using natural language - ask questions, get insights, and execute tasks through simple conversation</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 2-4 weeks setup</span>
                        <span>💰 Starting at $15K</span>
                        <span>🗣️ 20+ languages</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Intelligent Automation & Process Optimization</h3>
                      <p className="text-gray-600 mb-2">Automate routine tasks, streamline workflows, and optimize business processes with AI-powered decision making</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 3-6 weeks implementation</span>
                        <span>💰 Custom pricing</span>
                        <span>⚡ 50% productivity gain</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Contextual Insights & Predictive Analytics</h3>
                      <p className="text-gray-600 mb-2">Get real-time insights, predictive recommendations, and proactive alerts based on your business context and data patterns</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏱️ 4-8 weeks training</span>
                        <span>💰 Starting at $20K</span>
                        <span>📊 Real-time insights</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="/contact/sales-inquiry"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors group"
                  >
                    Get Joule Demo
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">AI Assistant</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;