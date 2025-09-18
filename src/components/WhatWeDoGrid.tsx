import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatWeDoGrid: React.FC = () => {
  const services = [
    {
      title: 'CX Architecture',
      subtitle: 'Reliable journeys, sane data flows',
      icon: '🎯',
      link: '/solutions'
    },
    {
      title: 'SAP Integration',
      subtitle: 'S/4HANA, CDC, BTP, CPQ',
      icon: '🔗',
      link: '/solutions'
    },
    {
      title: 'AI in SAP (RAG/RASP)',
      subtitle: 'Retrieval inside flows, safely',
      icon: '🤖',
      link: '/solutions/ai-strategy-transformations'
    },
    {
      title: 'Data & Governance',
      subtitle: 'Policy, risk, evaluation, audit',
      icon: '🛡️',
      link: '/solutions/ai-strategy-transformations'
    },
    {
      title: 'Commerce & CPQ',
      subtitle: 'Quotes, pricing, orchestration',
      icon: '💰',
      link: '/solutions'
    },
    {
      title: 'Service Clouds',
      subtitle: 'Telemetry, knowledge, automation',
      icon: '☁️',
      link: '/solutions'
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
                className="glass-card p-10 block group cursor-pointer hover:shadow-sap-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-sap bg-gradient-to-br from-primary/10 to-secondary/10 mb-8 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 text-3xl">
                  {service.icon}
                </div>
                <h3 className="font-bold text-dark text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray leading-relaxed text-lg">
                  {service.subtitle}
                </p>
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold">Learn More</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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