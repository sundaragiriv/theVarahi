import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

const BuildTogether: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Urgency Indicator */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Clock className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              Limited Q1 2025 Implementation Slots - Act Now
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-blue-800 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Ready to Achieve <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text">40% ROI</span> in 90 Days?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join <strong className="text-blue-800">500+ enterprise leaders</strong> who've transformed their operations with our proven CX & AI implementations. 
            <br />Get your <strong className="text-emerald-600">complimentary ROI analysis</strong> and strategic roadmap today.
          </motion.p>

          {/* Enhanced CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                <span>Get My Free ROI Analysis</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 hover:border-emerald-600 transition-all duration-300"
              >
                <span>View Success Stories</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust & Risk Reduction */}
          <motion.div
            className="text-center text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>24-hour response guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildTogether;