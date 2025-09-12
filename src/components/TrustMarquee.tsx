import React from 'react';
import { motion } from 'framer-motion';

const TrustMarquee: React.FC = () => {
  const clients = [
    'Microsoft', 'SAP', 'Salesforce', 'Adobe', 'Oracle', 'IBM', 
    'Accenture', 'Deloitte', 'PwC', 'KPMG', 'EY', 'Capgemini',
    'Amazon', 'Google Cloud', 'ServiceNow', 'Workday'
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
    <section className="py-16 bg-white border-y border-gray/20">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray text-sm font-semibold mb-12 uppercase tracking-widest"
        >
          Trusted by Enterprise Leaders
        </motion.p>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-20 items-center"
            variants={marqueeVariants}
            animate="animate"
            style={{ width: 'calc(200% + 8rem)' }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 text-gray/60 font-bold text-xl hover:text-primary transition-colors duration-300"
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