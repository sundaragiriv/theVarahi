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
      <section className="py-32 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-emerald-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-40, 40, -40],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-8xl mx-auto px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-semibold text-base">Enterprise Intelligence Leaders Since 2009</span>
            </motion.div>
            
            <h1 className="text-8xl font-bold mb-12 text-blue-800" style={{lineHeight: '1.05'}}>
              Our <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text">Intelligence</span>
            </h1>
            <p className="text-3xl text-gray-600 max-w-6xl mx-auto leading-relaxed mb-16">
              We're not just consultants—we're <strong className="text-blue-800">transformation architects</strong> who design and deliver 
              measurable business outcomes through cutting-edge AI and enterprise solutions.
            </p>
            
            {/* Key Differentiators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-blue-800 font-semibold">Enterprise Clients</div>
                <div className="text-gray-500 text-sm">Fortune 1000 Companies</div>
              </motion.div>
              
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                <div className="text-blue-800 font-semibold">Client Savings</div>
                <div className="text-gray-500 text-sm">Documented ROI</div>
              </motion.div>
              
              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">16+</div>
                <div className="text-blue-800 font-semibold">Years Experience</div>
                <div className="text-gray-500 text-sm">Industry Leadership</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="company-overview" className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-8xl mx-auto px-8 relative z-10">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl font-bold mb-8 text-blue-800">Who We Are</h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Enterprise transformation architects delivering measurable AI and SAP solutions 
              that create <strong className="text-emerald-600">sustainable competitive advantages</strong> since 2009
            </p>
          </motion.div>

          {/* Enhanced Story Cards */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <motion.div 
              className="group bg-white p-12 rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Transform Fortune 1000 enterprises through intelligent AI and SAP solutions that deliver 
                measurable business outcomes and create sustainable competitive advantages in the digital economy.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white p-12 rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Combine deep technical expertise with strategic business acumen and human-centered design. 
                We don't just implement technology—we architect transformations that drive lasting value.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-white p-12 rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Over $50M in documented client savings across 500+ implementations with 16+ years of proven results. 
                We measure success by the tangible outcomes we deliver for our transformation partners.
              </p>
            </motion.div>
          </div>

          {/* Premium Stats Section */}
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-16 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">Proven Enterprise Excellence</h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">16 years of delivering measurable transformation outcomes for Fortune 1000 companies</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-12 text-center">
                <div>
                  <div className="text-5xl font-bold mb-3">500+</div>
                  <div className="text-white/90 font-semibold text-lg">Enterprise Clients</div>
                  <div className="text-white/70 text-sm mt-2">Fortune 1000 Companies</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-3">$50M+</div>
                  <div className="text-white/90 font-semibold text-lg">Client Savings</div>
                  <div className="text-white/70 text-sm mt-2">Documented ROI</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-3">99.9%</div>
                  <div className="text-white/90 font-semibold text-lg">Uptime SLA</div>
                  <div className="text-white/70 text-sm mt-2">Enterprise Grade</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-3">16+</div>
                  <div className="text-white/90 font-semibold text-lg">Years Experience</div>
                  <div className="text-white/70 text-sm mt-2">Industry Leadership</div>
                </div>
              </div>
            </div>
          </motion.div>
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