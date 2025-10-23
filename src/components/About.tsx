import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50 pt-20">
      {/* Compact Dashboard Layout */}
      <div className="container mx-auto px-6 py-8">
        
        {/* Header Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-accent-600 rounded-full"></span>
              <span className="text-sm text-accent-700 font-medium uppercase tracking-wider">Who We Are</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent">
              Varahi Systems
            </h1>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-brand-600">500+</div>
            <div className="text-sm text-text-light">Enterprise Clients</div>
          </div>
        </motion.div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:h-[calc(100vh-200px)]">
          
          {/* Left Column - Core Info */}
          <div className="lg:col-span-8 space-y-4 lg:space-y-6">
            
            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-border h-fit"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-3">Our Mission</h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      Engineers, architects, and thinkers who see technology as a <strong>living system</strong> — one that learns, protects, and amplifies human intelligence.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-brand-600 to-accent-600 rounded-xl p-4 lg:p-6 text-white h-fit"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Varahi Group</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      The <strong>connective layer between strategy and execution</strong> — where ideas become architecture, and architecture becomes intelligence.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-border"
            >
              <h3 className="font-bold text-text mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600 mb-1">85%</div>
                  <div className="text-xs text-text-light">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600 mb-1">16</div>
                  <div className="text-xs text-text-light">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-turmeric-600 mb-1">15-35%</div>
                  <div className="text-xs text-text-light">Efficiency Gains*</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-700 mb-1">3-9</div>
                  <div className="text-xs text-text-light">Months to Value*</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Navigation & CTA */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-4 shadow-lg border border-border"
            >
              <h3 className="font-bold text-text mb-4 text-sm">Explore More</h3>
              <div className="space-y-2">
                <Link to="/leadership" className="flex items-center justify-between p-3 hover:bg-brand-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-brand-600" />
                    <span className="text-sm font-medium">Leadership</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-text-light group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                </Link>
                
                <Link to="/careers" className="flex items-center justify-between p-3 hover:bg-accent-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-accent-600" />
                    <span className="text-sm font-medium">Careers</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-text-light group-hover:text-accent-600 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link to="/partnerships" className="flex items-center justify-between p-3 hover:bg-turmeric-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-turmeric-600" />
                    <span className="text-sm font-medium">Partnerships</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-text-light group-hover:text-turmeric-600 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link to="/investor-relations" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium">Investors</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-text-light group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="block bg-gradient-to-br from-brand-600 to-accent-600 rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ready to Connect?</h3>
                    <p className="text-sm opacity-90">Free Strategy Call</p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;