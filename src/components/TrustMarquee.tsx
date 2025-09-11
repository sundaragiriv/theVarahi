import React from 'react';
import { motion } from 'framer-motion';

const TrustMarquee: React.FC = () => {
  const clients = [
    'Microsoft', 'SAP', 'Salesforce', 'Adobe', 'Oracle', 'IBM', 
    'Accenture', 'Deloitte', 'PwC', 'KPMG', 'EY', 'Capgemini'
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-12 bg-paper/30 border-y border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-ink/60 text-sm font-medium mb-8 uppercase tracking-wider"
        >
          Trusted by Enterprise Leaders
        </motion.p>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-16 items-center"
            variants={marqueeVariants}
            animate="animate"
            style={{ width: 'calc(200% + 4rem)' }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 text-ink/40 font-semibold text-lg hover:text-brand transition-colors duration-200"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;