import React from 'react';
import { motion } from 'framer-motion';

const WhatWeBuild: React.FC = () => {
  const solutions = [
    {
      title: 'AI Orchestration Platform',
      description: 'Intelligent automation that learns and adapts to your enterprise workflows',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill="url(#aiGrad)" opacity="0.2" />
          <circle cx="32" cy="32" r="20" fill="url(#aiGradient)" opacity="0.3" />
          <path d="M32 16L40 24L32 32L24 24Z" fill="#10b981" />
          <path d="M32 32L40 40L32 48L24 40Z" fill="#34d399" />
          <circle cx="32" cy="32" r="4" fill="white" />
        </svg>
      )
    },
    {
      title: 'Connected Enterprise Systems',
      description: 'Seamless integration across SAP, cloud, and legacy infrastructure',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="connectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="16" height="16" rx="4" fill="url(#connectGrad)" />
          <rect x="40" y="8" width="16" height="16" rx="4" fill="url(#connectGrad)" />
          <rect x="8" y="40" width="16" height="16" rx="4" fill="url(#connectGrad)" />
          <rect x="40" y="40" width="16" height="16" rx="4" fill="url(#connectGrad)" />
          <line x1="24" y1="16" x2="40" y2="16" stroke="#10b981" strokeWidth="2" />
          <line x1="24" y1="48" x2="40" y2="48" stroke="#10b981" strokeWidth="2" />
          <line x1="16" y1="24" x2="16" y2="40" stroke="#10b981" strokeWidth="2" />
          <line x1="48" y1="24" x2="48" y2="40" stroke="#10b981" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Predictive Experience Layer',
      description: 'Real-time insights that anticipate customer needs and market changes',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="predictGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="24" fill="url(#predictGrad)" opacity="0.2" />
          <path d="M16 40 Q24 24 32 32 Q40 40 48 24" stroke="#10b981" strokeWidth="3" fill="none" />
          <circle cx="20" cy="36" r="3" fill="#34d399" />
          <circle cx="32" cy="32" r="3" fill="#10b981" />
          <circle cx="44" cy="28" r="3" fill="#6ee7b7" />
        </svg>
      )
    },
    {
      title: 'Automation & Intelligence Frameworks',
      description: 'Self-optimizing processes that scale with your business growth',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="40" height="40" rx="8" fill="url(#autoGrad)" opacity="0.2" />
          <path d="M20 24 L32 20 L44 24 L40 32 L32 36 L24 32 Z" fill="#10b981" />
          <circle cx="32" cy="28" r="6" fill="#34d399" />
          <circle cx="32" cy="28" r="2" fill="white" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            What We Build
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade solutions that transform how businesses operate with <strong className="text-emerald-600">intelligent automation</strong> and proven methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 h-full bg-white border border-gray-200 rounded-2xl hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;