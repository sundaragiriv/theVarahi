import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const FeaturedStudy: React.FC = () => {
  return (
    <section id="customer-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Featured Customer Study
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            How we transformed customer experience for a Fortune 500 manufacturing company.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
              Manufacturing • Fortune 500
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-ink">
              25% Reduction in Service Costs with SAP Service Cloud Integration
            </h3>
            
            <p className="text-lg text-ink/70 leading-relaxed">
              A global manufacturing leader needed to consolidate 14 regional service systems 
              into a unified platform. Our team designed and implemented a comprehensive 
              SAP CX solution that integrated Service Cloud, Field Service Management, and 
              Customer Data Platform.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand">25%</div>
                <div className="text-sm text-ink/70">Cost Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand">40%</div>
                <div className="text-sm text-ink/70">Faster Resolution</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand">95%</div>
                <div className="text-sm text-ink/70">User Adoption</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand">60 Days</div>
                <div className="text-sm text-ink/70">To Go-Live</div>
              </div>
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center space-x-2 text-brand font-semibold hover:text-brand/80 transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              <span>Read the full case study</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="card p-8 bg-gradient-to-br from-brand/5 to-brand/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-ink">System Architecture</div>
                  <TrendingUp className="h-6 w-6 text-brand" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-brand"></div>
                    <span className="text-ink/70">SAP Service Cloud</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-brand/70"></div>
                    <span className="text-ink/70">Field Service Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-brand/50"></div>
                    <span className="text-ink/70">Customer Data Platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-brand/30"></div>
                    <span className="text-ink/70">Analytics & Reporting</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink/10">
                  <div className="text-sm text-ink/60">Integration Timeline</div>
                  <div className="w-full bg-ink/10 rounded-full h-2 mt-2">
                    <motion.div
                      className="bg-brand h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-xs text-ink/60 mt-1">60 days to completion</div>
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