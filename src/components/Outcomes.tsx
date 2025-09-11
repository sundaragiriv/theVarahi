import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from './StatCounter';

const Outcomes: React.FC = () => {
  const stats = [
    { value: 18, label: 'Win Rate Increase', suffix: '%', prefix: '+' },
    { value: 22, label: 'Handle Time Reduction', suffix: '%', prefix: '−' },
    { value: 30, label: 'First-Time Fix Rate', suffix: '%', prefix: '+' },
    { value: 90, label: 'Days to Value', suffix: ' Days', prefix: '<' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-brand/5 to-paper/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Proven Outcomes
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            Real metrics from enterprise implementations across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-8 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand mr-1">
                  {stat.prefix}
                </span>
                <StatCounter 
                  end={stat.value}
                  className="text-4xl lg:text-5xl font-bold text-brand"
                />
                <span className="text-2xl font-bold text-brand ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-ink/70 font-medium">
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