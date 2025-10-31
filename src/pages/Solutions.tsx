import React from 'react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: '🚀',
      title: 'SAP Solutions & S/4HANA',
      description: 'ERP transformation & cloud migration with intelligent solutions that adapt to your business needs.',
      features: ['Cloud Migration', 'Process Optimization', 'Real-time Analytics', 'Mobile-First Design'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: '🎯',
      title: 'Enterprise Customer Experience',
      description: 'Service, Sales & Field Service platforms that deliver exceptional customer experiences.',
      features: ['Omnichannel Support', 'Predictive Service', 'Self-Service Portals', 'Field Service Excellence'],
      gradient: 'from-emerald-600 to-green-700'
    },
    {
      icon: '🧠',
      title: 'AI Orchestration & Automation',
      description: 'RAG, predictive analytics & conversational AI to automate processes and unlock business insights.',
      features: ['Conversational AI', 'Process Automation', 'Predictive Analytics', 'RAG Implementation'],
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: '⚡',
      title: 'SAP Joule Enablement',
      description: 'AI assistant integration & user training that transforms how work gets done.',
      features: ['Natural Language Queries', 'Workflow Automation', 'Contextual Insights', 'User Training'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: '🔧',
      title: 'Upgrade SAP Infrastructure',
      description: 'Managed services & 24/7 support to keep your SAP systems running at peak performance.',
      features: ['24/7 Monitoring', 'Performance Optimization', 'Security Updates', 'Disaster Recovery'],
      gradient: 'from-emerald-700 to-teal-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                x: [-15, 15, -15],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.5, 1],
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
              Enterprise Solutions Portfolio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
            >
              Amplify Your
              <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text"> Digital Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Transform your enterprise with intelligent solutions that drive growth, enhance customer experiences, and unlock the full potential of your data with <strong className="text-emerald-600">proven methodologies</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Solutions That <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text">Scale</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive enterprise solutions designed to accelerate your digital transformation journey with <strong className="text-emerald-600">measurable results</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-1"
              >
                {/* Enhanced Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-8 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center gap-2 text-sm">
                    Learn More
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Enhanced Floating Particles */}
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
            Ready to Amplify Your Enterprise?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join <strong className="text-white">500+ enterprises</strong> who have transformed their operations with our intelligent solutions and achieved <strong className="text-white">measurable results</strong>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;