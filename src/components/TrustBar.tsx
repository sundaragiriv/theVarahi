import React from 'react';
import { motion } from 'framer-motion';
import '../styles/animations.css';

const TrustBar: React.FC = () => {
  const metrics = [
    { value: '50+', label: 'Enterprise Clients' },
    { value: '16 Years', label: 'Experience' },
    { value: '200+', label: 'SAP Projects' },
    { value: '15-35%', label: 'Efficiency Gains*' },
    { value: '3-9 Months', label: 'Time to Value*' },
    { value: '24/7', label: 'Global Support' },
    { value: '85%', label: 'Client Retention' },
    { value: '4', label: 'Industry Verticals' }
  ];

  return (
    <section className="relative pb-16 overflow-hidden">
      {/* Premium Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)] animate-pulse" style={{animationDuration: '4s'}} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_60%)] animate-pulse" style={{animationDuration: '6s'}} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/15 to-purple-300/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300/10 to-blue-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8">
          <motion.p 
            className="text-sm font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proven Enterprise Results
          </motion.p>
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Measurable Impact Across Industries
          </motion.h2>
        </div>

        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
        >
            {metrics.map((metric, index) => (
              <motion.div 
                key={metric.label} 
                className="relative text-center group cursor-pointer"
                initial={{ opacity: 0, y: 40, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-50/60 to-purple-50/40 backdrop-blur-lg rounded-2xl border border-white/40 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative p-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-white/50 group-hover:border-white/40 group-hover:shadow-2xl transition-all duration-500">
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-purple-800 transition-all duration-500"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-xs text-gray-600 font-semibold mt-2 group-hover:text-gray-800 transition-colors duration-500 tracking-wide leading-tight">{metric.label}</div>
                </div>
              </motion.div>
            ))}
        </motion.div>
        
        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            *Results based on client mix and may vary. Metrics reflect team aggregate experience since 2009.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;