import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Resources' },
    { id: 'whitepapers', label: 'Intelligence Reports' },
    { id: 'guides', label: 'Transformation Guides' },
    { id: 'webinars', label: 'Expert Sessions' },
    { id: 'tools', label: 'Assessment Tools' }
  ];

  const resources = [
    {
      type: 'whitepapers',
      title: 'Enterprise AI Transformation: 2024 Strategic Intelligence Report',
      description: 'Comprehensive analysis of AI adoption trends, ROI metrics, and implementation strategies across Fortune 500 enterprises.',
      category: 'Strategic Intelligence',
      readTime: '18 min read',
      downloads: '2.8K',
      gradient: 'from-emerald-500 to-teal-600',
      icon: '📊',
      featured: true
    },
    {
      type: 'guides',
      title: 'SAP S/4HANA Cloud Migration: Executive Transformation Playbook',
      description: 'Complete step-by-step methodology for successful ERP transformation with risk mitigation strategies and ROI optimization.',
      category: 'Executive Playbook',
      readTime: '32 min read',
      downloads: '2.1K',
      gradient: 'from-teal-500 to-emerald-600',
      icon: '🚀',
      featured: true
    },
    {
      type: 'webinars',
      title: 'AI Orchestration Masterclass: From Vision to Value Realization',
      description: 'Expert-led deep dive into building intelligent automation workflows that deliver measurable business outcomes.',
      category: 'Masterclass Series',
      readTime: '60 min session',
      downloads: '3.7K',
      gradient: 'from-emerald-600 to-green-700',
      icon: '🎯',
      featured: false
    },
    {
      type: 'tools',
      title: 'Enterprise Digital Maturity Assessment: Comprehensive Analyzer',
      description: 'Advanced diagnostic tool to evaluate your organization\'s digital transformation readiness across 12 key dimensions.',
      category: 'Assessment Platform',
      readTime: '15 min assessment',
      downloads: '4.2K',
      gradient: 'from-green-500 to-emerald-600',
      icon: '⚡',
      featured: false
    },
    {
      type: 'whitepapers',
      title: 'Customer Experience Revolution: The Intelligence-Driven CX Paradigm',
      description: 'Data-driven insights on transforming customer interactions with AI-powered platforms and predictive service models.',
      category: 'CX Intelligence',
      readTime: '22 min read',
      downloads: '2.3K',
      gradient: 'from-emerald-400 to-teal-500',
      icon: '💡',
      featured: false
    },
    {
      type: 'guides',
      title: 'SAP Joule Enablement: Complete AI Assistant Integration Blueprint',
      description: 'Comprehensive guide to deploying SAP Joule across your enterprise ecosystem with user adoption strategies.',
      category: 'Implementation Guide',
      readTime: '28 min read',
      downloads: '1.6K',
      gradient: 'from-teal-600 to-emerald-700',
      icon: '🧠',
      featured: false
    },
    {
      type: 'webinars',
      title: 'Enterprise CX Transformation: Service Excellence Through Intelligence',
      description: 'Strategic session on leveraging AI and automation to create exceptional customer experiences at scale.',
      category: 'Strategy Session',
      readTime: '45 min session',
      downloads: '2.9K',
      gradient: 'from-emerald-500 to-green-600',
      icon: '🎆',
      featured: false
    },
    {
      type: 'tools',
      title: 'ROI Calculator: SAP Transformation Investment Analyzer',
      description: 'Interactive calculator to project ROI, cost savings, and business value from your SAP transformation initiative.',
      category: 'ROI Calculator',
      readTime: '8 min calculation',
      downloads: '3.1K',
      gradient: 'from-teal-500 to-emerald-500',
      icon: '💰',
      featured: false
    },
    {
      type: 'guides',
      title: 'Enterprise Infrastructure Modernization: Cloud-First Strategy Guide',
      description: 'Strategic framework for modernizing SAP infrastructure with cloud-native approaches and hybrid architectures.',
      category: 'Strategy Framework',
      readTime: '35 min read',
      downloads: '1.4K',
      gradient: 'from-emerald-600 to-teal-700',
      icon: '☁️',
      featured: false
    }
  ];

  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
        
        {/* Enhanced Animated Background */}
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
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
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
              Enterprise Intelligence Center
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
            >
              Knowledge Hub for
              <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text"> Digital Leaders</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Access cutting-edge insights, proven methodologies, and expert guidance to accelerate your digital transformation journey with <strong className="text-emerald-600">actionable intelligence</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6 justify-center text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>50+ Expert Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Free Access</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-sm border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Resources */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">Featured Resources</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {filteredResources.filter(resource => resource.featured).map((resource, index) => (
                <motion.div
                  key={`featured-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-200 overflow-hidden hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{resource.icon}</div>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{resource.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="font-medium">{resource.readTime}</span>
                      <span className="font-medium">{resource.downloads} downloads</span>
                    </div>
                    
                    <a href="/blog/ai-transformation-guide" className="block w-full bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                      Access Premium Resource
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.filter(resource => !resource.featured).map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden hover:-translate-y-1"
              >
                {/* Enhanced Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{resource.icon}</div>
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                      {resource.category}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-blue-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{resource.readTime}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <a href="/blog/sap-s4hana-migration" className="block w-full bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg text-center">
                    Access Resource
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
            Stay Ahead of the Intelligence Curve
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Get weekly insights, exclusive reports, and early access to our latest resources delivered to your inbox with <strong className="text-white">actionable intelligence</strong>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
            />
            <button className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe Now
            </button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-emerald-200 text-sm mt-4"
          >
            Join 5,000+ digital leaders. Unsubscribe anytime.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Resources;