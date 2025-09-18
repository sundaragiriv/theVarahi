import React from 'react';
import ScrollSpyNav from '../../components/ScrollSpyNav';

const InvestorsPage: React.FC = () => {
  const sections = [
    { id: 'financial-highlights', label: 'Financial Highlights' },
    { id: 'investor-resources', label: 'Investor Resources' },
    { id: 'governance', label: 'Corporate Governance' },
    { id: 'contact-ir', label: 'Contact IR' }
  ];

  const financialData = [
    { metric: 'Revenue Growth', value: '300%', period: 'YoY 2023' },
    { metric: 'ARR', value: '$75M', period: 'Q4 2023' },
    { metric: 'Gross Margin', value: '85%', period: 'Q4 2023' },
    { metric: 'Client Retention', value: '98%', period: '2023' },
    { metric: 'Enterprise Clients', value: '500+', period: 'Active' },
    { metric: 'Employees', value: '250+', period: 'Global' }
  ];

  const investors = [
    {
      name: 'Andreessen Horowitz',
      type: 'Lead Series B',
      description: 'Leading venture capital firm focused on enterprise technology'
    },
    {
      name: 'Sequoia Capital',
      type: 'Series A Lead',
      description: 'Premier venture capital partnership with portfolio companies'
    },
    {
      name: 'SAP Ventures',
      type: 'Strategic Investor',
      description: 'Corporate venture capital arm of SAP SE'
    },
    {
      name: 'Microsoft Ventures',
      type: 'Strategic Investor',
      description: 'Strategic investment arm of Microsoft Corporation'
    }
  ];

  return (
    <div className="pt-20">
      <ScrollSpyNav sections={sections} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Varahi is transforming enterprise AI and SAP landscapes with proven results, strong growth, 
              and backing from world-class investors who believe in our vision.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section id="financial-highlights" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Financial Highlights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strong financial performance driven by enterprise demand for AI transformation and SAP modernization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {financialData.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{item.metric}</div>
                <div className="text-sm text-gray-500">{item.period}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Investment Thesis</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Market Opportunity</h4>
                <p className="text-gray-600 text-sm">$150B+ enterprise AI market with 25% CAGR through 2028</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Competitive Advantage</h4>
                <p className="text-gray-600 text-sm">Unique SAP + AI expertise with proven implementation methodology</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Scalable Model</h4>
                <p className="text-gray-600 text-sm">High-margin services with recurring revenue and expansion opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section id="investor-resources" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Investor Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access the latest financial reports, presentations, and regulatory filings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Q4 2023 Earnings</h3>
              <p className="text-sm text-gray-600 mb-4">Latest quarterly financial results and management commentary</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Download PDF →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Investor Presentation</h3>
              <p className="text-sm text-gray-600 mb-4">Company overview, strategy, and financial outlook</p>
              <a href="#" className="text-green-600 hover:text-green-700 text-sm font-medium">View Slides →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">SEC Filings</h3>
              <p className="text-sm text-gray-600 mb-4">10-K, 10-Q, 8-K and other regulatory documents</p>
              <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">View Filings →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Earnings Calls</h3>
              <p className="text-sm text-gray-600 mb-4">Webcast recordings and transcripts</p>
              <a href="#" className="text-orange-600 hover:text-orange-700 text-sm font-medium">Listen Now →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section id="governance" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Corporate Governance</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Varahi is committed to the highest standards of corporate governance, transparency, and accountability 
                to our shareholders, employees, and stakeholders.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Board of Directors</h3>
                  <p className="text-gray-600">Independent board with diverse expertise in technology, finance, and governance</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Audit Committee</h3>
                  <p className="text-gray-600">Oversight of financial reporting, internal controls, and risk management</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Compensation Committee</h3>
                  <p className="text-gray-600">Executive compensation aligned with performance and shareholder interests</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Investors</h3>
              {investors.map((investor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg">{investor.name}</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{investor.type}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{investor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section id="contact-ir" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Investor Relations Contact</h2>
          <p className="text-xl mb-12 leading-relaxed">
            For questions about our financial performance, strategy, or investment opportunities, 
            please contact our Investor Relations team.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Sarah Mitchell</h3>
                <p className="text-white/80 mb-4">VP, Investor Relations</p>
                <div className="space-y-2">
                  <a href="mailto:investors@varahi.com" className="block text-white/90 hover:text-white">
                    investors@varahi.com
                  </a>
                  <a href="tel:+1-415-555-0150" className="block text-white/90 hover:text-white">
                    +1 (415) 555-0150
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Quarterly Calls</h3>
                <p className="text-white/80 mb-4">Next earnings call: April 25, 2024</p>
                <div className="space-y-2">
                  <p className="text-white/90">Time: 5:00 PM ET</p>
                  <p className="text-white/90">Dial-in: +1 (800) 555-0199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;