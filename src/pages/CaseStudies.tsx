import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Legacy ERP system causing 40% operational inefficiencies',
      solution: 'SAP S/4HANA Cloud transformation with AI-powered analytics',
      results: ['65% faster order processing', '40% reduction in inventory costs', '90% improvement in reporting accuracy'],
      timeline: '8 months',
      investment: '$2.4M',
      roi: '340%',
      gradient: 'from-emerald-500 to-teal-600',
      icon: '🏭'
    },
    {
      company: 'TechFlow Solutions',
      industry: 'Technology Services',
      challenge: 'Fragmented customer service across multiple channels',
      solution: 'Unified CX platform with AI orchestration and Joule integration',
      results: ['85% customer satisfaction increase', '50% reduction in response time', '30% boost in agent productivity'],
      timeline: '6 months',
      investment: '$1.8M',
      roi: '280%',
      gradient: 'from-teal-500 to-emerald-600',
      icon: '💻'
    },
    {
      company: 'Healthcare Dynamics',
      industry: 'Healthcare',
      challenge: 'Manual processes causing patient care delays',
      solution: 'AI-powered workflow automation with predictive analytics',
      results: ['70% faster patient processing', '95% accuracy in diagnostics', '60% reduction in administrative tasks'],
      timeline: '10 months',
      investment: '$3.2M',
      roi: '420%',
      gradient: 'from-emerald-600 to-green-700',
      icon: '🏥'
    },
    {
      company: 'RetailMax Enterprise',
      industry: 'Retail',
      challenge: 'Disconnected supply chain and inventory management',
      solution: 'Integrated SAP ecosystem with real-time analytics',
      results: ['45% inventory optimization', '80% supply chain visibility', '25% increase in profit margins'],
      timeline: '12 months',
      investment: '$4.1M',
      roi: '380%',
      gradient: 'from-green-500 to-emerald-600',
      icon: '🛒'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
        
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0.7, 0.2],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-2 bg-emerald-100/80 border border-emerald-200/50 text-emerald-700 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              Real Results, Real Impact
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
            >
              Success Stories That
              <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text"> Inspire</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Discover how leading enterprises have transformed their operations and achieved remarkable results with our <strong className="text-emerald-600">intelligent solutions</strong> and proven methodologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6 justify-center text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>200+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Average 350% ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>98% Client Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden hover:-translate-y-1"
              >
                {/* Enhanced Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative grid md:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-1">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{study.icon}</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{study.company}</h3>
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-4">
                      {study.industry}
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-500">Timeline</div>
                        <div className="font-semibold text-gray-900 text-sm">{study.timeline}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Investment</div>
                        <div className="font-semibold text-gray-900 text-sm">{study.investment}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">ROI</div>
                        <div className="font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-lg">{study.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-blue-800 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold text-blue-800 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold text-blue-800 mb-2">Results</h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-3 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border border-emerald-100">
                            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium text-xs">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <a href="/case-study/fortune-500-manufacturer" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center gap-2 mt-6">
                      Read Full Case Study
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                x: [-15, 15, -15],
                opacity: [0.3, 1, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Your Success Story Starts Here
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to join the ranks of enterprises achieving <strong className="text-white">extraordinary results</strong>? Let's discuss your transformation journey and create your success story.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Strategy Session
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Download Success Guide
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;