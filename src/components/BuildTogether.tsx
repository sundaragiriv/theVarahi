import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

const BuildTogether: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Ready to Achieve <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">40% ROI</span> in 90 Days?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join <strong className="text-white">500+ enterprise leaders</strong> who've transformed their operations with our proven CX & AI implementations. 
            <br />Get your <strong className="text-emerald-400">complimentary ROI analysis</strong> and strategic roadmap today.
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
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
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-emerald-400/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300"
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