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
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill="url(#sapGrad)" opacity="0.1" />
          <circle cx="32" cy="32" r="20" fill="url(#sapGrad)" opacity="0.2" />
          <path d="M24 20 L40 20 L44 32 L40 44 L24 44 L20 32 Z" fill="#10b981" opacity="0.8" />
          <circle cx="32" cy="32" r="8" fill="#34d399" />
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
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#blueprintGrad)" opacity="0.1" />
          <rect x="12" y="16" width="40" height="4" fill="#10b981" opacity="0.6" />
          <rect x="12" y="24" width="32" height="4" fill="#34d399" opacity="0.6" />
          <rect x="12" y="32" width="36" height="4" fill="#6ee7b7" opacity="0.6" />
          <rect x="12" y="40" width="28" height="4" fill="#10b981" opacity="0.6" />
          <circle cx="48" cy="18" r="4" fill="#34d399" />
          <circle cx="44" cy="26" r="4" fill="#10b981" />
          <circle cx="48" cy="34" r="4" fill="#6ee7b7" />
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
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="url(#enterpriseGrad)" opacity="0.2" />
          <polygon points="32,16 40,22 40,38 32,44 24,38 24,22" fill="#10b981" opacity="0.6" />
          <circle cx="32" cy="30" r="6" fill="#34d399" />
          <circle cx="32" cy="30" r="2" fill="white" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
      {/* Enhanced background animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-emerald-200/15 rounded-full blur-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [-20, 20, -20],
              y: [-15, 15, -15],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            The Varahi <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text">Edge</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise expertise meets cutting-edge innovation with <strong className="text-emerald-600">proven results</strong> and industry-leading methodologies.
          </p>
        </motion.div>

        <div className="space-y-6">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="p-6 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-2xl hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1">
                {/* Enhanced animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-blue-50/30 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="flex items-center relative z-10">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {edge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {edge.description}
                    </p>
                  </div>
                  
                  <div className="ml-6 group-hover:scale-110 transition-transform duration-300">
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