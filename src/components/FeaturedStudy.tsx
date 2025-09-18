import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedStudy: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/5 -z-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl bg-blue-400/5 -z-10"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              Manufacturing • Fortune 500
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-8 leading-tight">
              Fortune 500 Manufacturing: 30% Efficiency Gain
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-700">QC bottlenecks; manual triage; unclear root causes.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-700">SAP Service Cloud + RASP inside SAP flows; telemetry dashboards; automated RCA suggestions.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Stack</h4>
                <p className="text-gray-700">SAP Service Cloud, SAP BTP, SAP CDC, CPQ; Vector DB; Azure OpenAI/Joule.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {[
                { value: '–30%', label: 'Downtime' },
                { value: '+25%', label: 'Quality' },
                { value: '$2M/yr', label: 'Saved' },
                { value: '14 weeks', label: 'Timeline' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/resources/case-studies"
                className="btn-primary inline-flex items-center text-lg px-8 py-4"
              >
                Read Full Case Study
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-10 bg-gradient-to-br from-blue-50/50 to-blue-100/30 hover:shadow-sap-xl transition-all duration-300">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-dark">Project Timeline</div>
                  <div className="text-sm text-gray-600 bg-white/50 px-3 py-1 rounded-full">Blueprint → Pilot → Scale</div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { phase: 'Blueprint (2 weeks)', color: 'bg-primary' },
                    { phase: 'Pilot (6 weeks)', color: 'bg-secondary' },
                    { phase: 'Scale (6 weeks)', color: 'bg-accent' }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.phase}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className={`w-4 h-4 rounded-full ${item.color} shadow-lg`}></div>
                      <span className="text-gray-700 font-medium">{item.phase}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-blue-200/50">
                  <div className="text-sm text-gray-600 mb-3 font-semibold">Team Composition</div>
                  <div className="text-gray-700 font-medium bg-white/30 p-3 rounded-lg">1 Architect, 2 Eng, 1 Data, 1 PM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStudy;