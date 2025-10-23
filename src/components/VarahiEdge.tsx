import React from 'react';
import { motion } from 'framer-motion';

const VarahiEdge: React.FC = () => {
  const edges = [
    {
      title: 'Deep SAP + AI Expertise',
      description: 'Certified architects with 15+ years in enterprise SAP and emerging AI technologies',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="sapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0070F2" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#74B3F7" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill="url(#sapGrad)" opacity="0.1" />
          <circle cx="32" cy="32" r="20" fill="url(#sapGrad)" opacity="0.2" />
          <path d="M24 20 L40 20 L44 32 L40 44 L24 44 L20 32 Z" fill="#0070F2" opacity="0.8" />
          <circle cx="32" cy="32" r="8" fill="#8B5CF6" />
          <circle cx="32" cy="32" r="4" fill="white" />
        </svg>
      )
    },
    {
      title: 'Accelerated Integration Blueprints',
      description: 'Pre-built frameworks that reduce implementation time by 60% with proven methodologies',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#74B3F7" />
              <stop offset="50%" stopColor="#0070F2" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#blueprintGrad)" opacity="0.1" />
          <rect x="12" y="16" width="40" height="4" fill="#0070F2" opacity="0.6" />
          <rect x="12" y="24" width="32" height="4" fill="#8B5CF6" opacity="0.6" />
          <rect x="12" y="32" width="36" height="4" fill="#74B3F7" opacity="0.6" />
          <rect x="12" y="40" width="28" height="4" fill="#0070F2" opacity="0.6" />
          <circle cx="48" cy="18" r="4" fill="#8B5CF6" />
          <circle cx="44" cy="26" r="4" fill="#0070F2" />
          <circle cx="48" cy="34" r="4" fill="#74B3F7" />
        </svg>
      )
    },
    {
      title: 'Enterprise-Ready, Future-Focused',
      description: 'Scalable solutions designed for Fortune 500 complexity with tomorrow\'s technology',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="enterpriseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#74B3F7" />
              <stop offset="100%" stopColor="#0070F2" />
            </linearGradient>
          </defs>
          <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="url(#enterpriseGrad)" opacity="0.2" />
          <polygon points="32,16 40,22 40,38 32,44 24,38 24,22" fill="#0070F2" opacity="0.6" />
          <circle cx="32" cy="30" r="6" fill="#8B5CF6" />
          <circle cx="32" cy="30" r="2" fill="white" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-800">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Varahi
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Enterprise expertise meets cutting-edge innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="p-6 bg-gray-900 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {edge.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {edge.description}
                    </p>
                  </div>
                  
                  <div className="ml-6">
                    {edge.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VarahiEdge;