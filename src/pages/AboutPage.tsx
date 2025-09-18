import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollSpyNav from '../components/ScrollSpyNav';

const AboutPage: React.FC = () => {
  const sections = [
    { id: 'company-overview', label: 'Company Overview' },
    { id: 'leadership-team', label: 'Leadership Team' },
    { id: 'company-culture', label: 'Culture & Values' },
    { id: 'careers-growth', label: 'Careers & Growth' }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      background: 'Former VP of AI Strategy at Microsoft, 15+ years in enterprise technology',
      expertise: 'AI Strategy, Digital Transformation'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      background: 'Ex-SAP Principal Architect, led 200+ S/4HANA implementations',
      expertise: 'SAP Architecture, Cloud Platforms'
    },
    {
      name: 'Dr. James Park',
      role: 'Chief AI Officer',
      background: 'Former Research Director at IBM Watson, PhD in Machine Learning',
      expertise: 'Machine Learning, AI Governance'
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Operating Officer',
      background: 'Former McKinsey Partner, 20+ years in management consulting',
      expertise: 'Operations Excellence, Change Management'
    }
  ];

  const values = [
    {
      title: 'Innovation Excellence',
      description: 'Pushing the boundaries of what\'s possible with enterprise AI and SAP technology',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Measuring our success by the tangible outcomes we deliver for our clients',
      icon: '🎯'
    },
    {
      title: 'Ethical AI',
      description: 'Building responsible AI solutions with transparency, fairness, and accountability',
      icon: '⚖️'
    },
    {
      title: 'Continuous Learning',
      description: 'Staying ahead of technology trends and continuously expanding our expertise',
      icon: '📚'
    }
  ];

  return (
    <div className="pt-20">
      <ScrollSpyNav sections={sections} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              About Varahi
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leading enterprise transformation through innovative AI and SAP solutions that deliver measurable business outcomes. 
              We're not just consultants—we're transformation partners committed to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="company-overview" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transforming Enterprise Technology</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Varahi has emerged as a trusted partner for Fortune 500 companies seeking to harness 
                the power of AI and modernize their SAP landscapes. Our unique approach combines deep technical expertise 
                with strategic business acumen to deliver transformations that stick.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 500 successful implementations and $50M+ in documented client savings, we've proven that 
                the right combination of technology, methodology, and partnership can drive extraordinary results.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
                  <div className="text-sm text-gray-600">Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Innovation at Scale</h3>
                <p className="text-gray-600">Delivering Enterprise Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership-team" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry veterans with deep expertise in enterprise technology, AI innovation, and business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.role}</p>
                  <p className="text-gray-600 mb-3">{leader.background}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.split(', ').map((skill, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/about/our-team" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Meet the Full Team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section id="company-culture" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Culture & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values shape how we work, how we innovate, and how we partner with our clients to achieve extraordinary results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers & Growth */}
      <section id="careers-growth" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              We're always looking for exceptional talent to join our team. If you're passionate about enterprise technology 
              and want to shape the future of AI, we'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-white/80">Continuous learning and career advancement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge Projects</h3>
              <p className="text-white/80">Work on the latest AI and SAP technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact & Purpose</h3>
              <p className="text-white/80">Make a meaningful difference for enterprise clients</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/about/careers" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;