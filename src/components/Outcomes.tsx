import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from './StatCounter';

const Outcomes: React.FC = () => {
  const stats = [
    { value: 18, label: 'Win Rate Increase', suffix: '%', prefix: '+', color: 'text-sap-green' },
    { value: 22, label: 'Handle Time Reduction', suffix: '%', prefix: '−', color: 'text-sap-orange' },
    { value: 30, label: 'First-Time Fix Rate', suffix: '%', prefix: '+', color: 'text-primary' },
    { value: 90, label: 'Days to Value', suffix: ' Days', prefix: '<', color: 'text-secondary' }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-white to-secondary/5">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Proven Outcomes
          </h2>
          <p className="text-2xl text-gray max-w-4xl mx-auto font-light leading-relaxed">
            Measurable results from Fortune 500 implementations across manufacturing, financial services, and technology sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-10 text-center group hover:shadow-sap-xl"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <span className={`text-3xl font-bold ${stat.color} mr-2`}>
                  {stat.prefix}
                </span>
                <StatCounter 
                  end={stat.value}
                  className={`text-5xl lg:text-6xl font-bold ${stat.color}`}
                />
                <span className={`text-3xl font-bold ${stat.color} ml-2`}>
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray font-semibold text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;