import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, DollarSign, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorRelations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50">
      {/* Back Navigation */}
      <div className="pt-6 pb-4">
        <div className="container mx-auto px-6">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to About Us
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-accent-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 border border-accent-300 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></span>
              <span className="text-sm text-accent-700 font-medium">
                Investment Opportunities
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent mb-6">
              Investor Relations
            </h1>
            
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with Varahi Systems as we shape the future of <strong className="text-accent-700">intelligent enterprise systems</strong> and drive sustainable growth in the digital transformation market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text mb-4">Investment Highlights</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Varahi Systems is positioned at the forefront of the intelligent systems revolution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">$50M+</h3>
              <p className="text-text-light">Annual Revenue Run Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">150%</h3>
              <p className="text-text-light">YoY Growth Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">500+</h3>
              <p className="text-text-light">Enterprise Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">98%</h3>
              <p className="text-text-light">Client Retention Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-12"
            >
              <h2 className="text-3xl font-bold text-text mb-6">Market Opportunity</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-brand-600 mb-4">Growing Market</h3>
                  <p className="text-text-light leading-relaxed mb-4">
                    The global enterprise AI market is projected to reach $50+ billion by 2027, with intelligent systems adoption accelerating across all industries.
                  </p>
                  <ul className="space-y-2 text-text-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></span>
                      Digital transformation spending exceeding $2.3 trillion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></span>
                      90% of enterprises prioritizing AI integration
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-600 mb-4">Competitive Advantage</h3>
                  <p className="text-text-light leading-relaxed mb-4">
                    Varahi Systems's unique approach to creating adaptive, learning systems positions us to capture significant market share.
                  </p>
                  <ul className="space-y-2 text-text-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></span>
                      Proprietary intelligent networking technology
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></span>
                      Proven enterprise deployment expertise
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-brand-600 to-accent-600 rounded-2xl shadow-xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in building the future of intelligent enterprise systems. Contact our investor relations team to learn more about opportunities.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Contact Investor Relations</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelations;