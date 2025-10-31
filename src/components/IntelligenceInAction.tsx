import React from 'react';
import { motion } from 'framer-motion';

const IntelligenceInAction: React.FC = () => {
  const cases = [
    {
      title: 'AI-Powered Service Automation',
      description: 'Reduced service ticket resolution time by 75% through intelligent routing and predictive maintenance',
      category: 'Service Intelligence'
    },
    {
      title: 'Commerce to Field Service Sync',
      description: 'Real-time synchronization between e-commerce orders and field service operations',
      category: 'Connected Operations'
    },
    {
      title: 'Predictive Supply Chain Optimization',
      description: 'Machine learning algorithms that predict demand fluctuations 90 days in advance',
      category: 'Supply Intelligence'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from AI-powered enterprise transformations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-6 bg-white border border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative overflow-hidden group">
                {/* Subtle hover animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-3 relative z-10">
                  {case_.category}
                </span>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 relative z-10">
                  {case_.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {case_.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceInAction;