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
            Success Stories
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
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
              <div className="p-6 bg-gray-900 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full mb-3">
                  {case_.category}
                </span>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {case_.title}
                </h3>
                
                <p className="text-text-light text-sm leading-relaxed">
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