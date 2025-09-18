import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OutcomesStrip: React.FC = () => {
  const outcomes = [
    {
      metric: 'Cycle Time ↓ 60%',
      description: 'API-first designs and automation remove handoffs',
      link: '/resources/case-studies'
    },
    {
      metric: 'Integration Velocity 3×',
      description: 'Reusable connectors for SAP CX, S/4HANA, CPQ',
      link: '/resources/case-studies'
    },
    {
      metric: 'Support Tickets ↓ 35%',
      description: 'Telemetry + AI triage + guardrails',
      link: '/resources/case-studies'
    },
    {
      metric: 'NPS ↑ +18',
      description: 'Journey fixes prioritized by cost/impact',
      link: '/resources/case-studies'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Proven Outcomes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Measurable results from our enterprise implementations</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-8 text-center group hover:shadow-sap-xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                {outcome.metric}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{outcome.description}</p>
              <Link 
                to={outcome.link}
                className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group-hover:translate-x-1 transform duration-300"
              >
                View Proof 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesStrip;