import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatWeDoGrid: React.FC = () => {
  const services = [
    {
      title: 'SAP S/4HANA Migration',
      subtitle: 'Enterprise ERP transformation with zero business disruption',
      description: 'Seamless migration from legacy systems to modern S/4HANA platform with proven methodology and 40% faster implementation.',
      metrics: ['8-16 weeks', '300% ROI', '99.9% uptime'],
      icon: '🔗',
      link: '/solutions#erp-transformation'
    },
    {
      title: 'AI Strategy & Implementation',
      subtitle: 'End-to-end AI transformation with measurable outcomes',
      description: 'From assessment to deployment, we deliver AI solutions that integrate seamlessly with your SAP landscape.',
      metrics: ['3-6 weeks', '50% productivity', 'Enterprise-grade'],
      icon: '🤖',
      link: '/solutions/ai-strategy-transformations'
    },
    {
      title: 'Enterprise CX Platforms',
      subtitle: 'Sales, Service & Marketing Cloud integration',
      description: 'Unified customer experience across all touchpoints with personalized journeys and omnichannel support.',
      metrics: ['6-10 weeks', '45% satisfaction', '60% productivity'],
      icon: '🎯',
      link: '/solutions#enterprise-cx'
    },
    {
      title: 'Commerce & CPQ Solutions',
      subtitle: 'Configure, Price, Quote automation with SAP integration',
      description: 'Streamline complex product configuration and pricing with automated workflows and approval processes.',
      metrics: ['4-8 weeks', '70% faster quotes', 'Real-time pricing'],
      icon: '💰',
      link: '/solutions#cx-toolkit'
    },
    {
      title: 'Joule AI Assistant',
      subtitle: 'SAP\'s conversational AI for enterprise automation',
      description: 'Natural language processing for SAP systems with intelligent automation and contextual insights.',
      metrics: ['2-4 weeks', '50% efficiency', '20+ languages'],
      icon: '⚡',
      link: '/solutions#joule'
    },
    {
      title: 'Data & AI Governance',
      subtitle: 'Responsible AI with compliance and risk management',
      description: 'Enterprise-grade AI governance framework with built-in compliance, audit trails, and risk mitigation.',
      metrics: ['Compliance ready', 'Audit trails', 'Risk mitigation'],
      icon: '🛡️',
      link: '/solutions/ai-strategy-transformations#monitoring'
    }
  ];

  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">What We Do</h2>
          <p className="text-2xl text-gray max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive enterprise solutions engineered for scale and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="glass-card p-6 block group cursor-pointer hover:shadow-sap-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-sap bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-bold text-dark text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-4 font-medium">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.metrics.map((metric, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold text-sm">Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoGrid;