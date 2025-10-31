import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinquickHero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    'CX & AI Solutions',
    'Digital Transformation',
    'SAP S/4HANA Excellence',
    'Intelligent Automation'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      
      {/* Enhanced Animated Blinds Background */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {/* Vertical Blinds Animation - Enhanced with Blue */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`blind-${i}`}
            className="absolute top-0 bottom-0 bg-gradient-to-b from-emerald-300/60 via-blue-400/50 to-purple-300/55"
            style={{
              left: `${(i * 100) / 12}%`,
              width: `${100 / 12}%`,
            }}
            animate={{
              scaleY: [1, 0.1, 1],
              opacity: [0.5, 0.9, 0.5],
              rotateY: [0, 25, 0],
              scaleX: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Horizontal Ripple Lines - Enhanced with Blue */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute left-0 right-0 bg-gradient-to-r from-transparent via-blue-500/45 to-transparent"
            style={{
              top: `${(i * 100) / 6}%`,
              height: '3px',
              boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
            }}
            animate={{
              x: ['-120%', '120%'],
              opacity: [0, 0.8, 0],
              scaleX: [0.2, 2, 0.2],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 8,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Diagonal Sweep Effect - Enhanced with Blue */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`sweep-${i}`}
            className="absolute w-full h-full bg-gradient-to-br from-emerald-400/35 via-blue-500/25 to-purple-400/30"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: 'center',
              filter: 'blur(1px)'
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.6, 1.4, 0.6],
              rotate: [i * 45, i * 45 + 10, i * 45],
            }}
            transition={{
              duration: 10,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating Particles - Enhanced with Blue */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-6 h-6 rounded-full ${
              i % 3 === 0 ? 'bg-blue-500/70' : i % 3 === 1 ? 'bg-emerald-500/70' : 'bg-purple-500/70'
            }`}
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${15 + (i * 6)}%`,
              boxShadow: i % 3 === 0 
                ? '0 0 15px rgba(59, 130, 246, 0.6)' 
                : i % 3 === 1 
                ? '0 0 15px rgba(16, 185, 129, 0.6)' 
                : '0 0 15px rgba(147, 51, 234, 0.6)'
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-25, 25, -25],
              scale: [1, 2, 1],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-clean-50/90 to-gradient-finquick-50/90 border border-green-clean-200 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="h-4 w-4 text-green-clean-600" />
            <span className="text-sm text-finquick-text-medium font-medium">
              Trusted by Fortune 500 Companies
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-normal mb-6">
              <span className="text-gray-900 block mb-2">Enterprise</span>
              <span className="block my-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="font-bold text-emerald-600"
                    style={{ fontWeight: '800' }}
                  >
                    {rotatingTexts[currentText]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-gray-900 block mt-2">That Deliver Results</span>
            </h1>
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your enterprise with our proven customer experience and AI implementations. 
            <span className="text-blue-800 font-semibold"> Average 40% ROI improvement</span> in 90 days or less.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 10px 25px rgba(4, 120, 87, 0.25)",
                  "0 15px 35px rgba(4, 120, 87, 0.4)",
                  "0 10px 25px rgba(4, 120, 87, 0.25)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <span>Get Free Strategy Call</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                borderColor: [
                  "rgba(107, 114, 128, 0.3)",
                  "rgba(4, 120, 87, 0.5)",
                  "rgba(107, 114, 128, 0.3)"
                ]
              }}
              transition={{ 
                borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/90 border-2 border-finquick-border text-finquick-text-dark font-semibold rounded-xl hover:bg-finquick-soft/90 transition-all duration-300 backdrop-blur-sm"
              >
                <span>View Case Studies</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Cards */}
      <div className="relative z-10 container mx-auto px-6 pb-16 -mt-4">
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
          {/* 35+ Projects Card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2, scale: 1.02 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text mb-1">
                35+
              </div>
              <div className="text-gray-600 font-medium text-xs">
                Projects Delivered
              </div>
            </div>
          </motion.div>

          {/* 98% Satisfaction Card */}
          <motion.div
            className="bg-gradient-to-br from-emerald-50/90 to-blue-50/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text mb-1">
                98%
              </div>
              <div className="text-gray-600 font-medium text-xs">
                Client Satisfaction
              </div>
            </div>
          </motion.div>

          {/* 16+ Years Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-50/90 to-purple-50/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text mb-1">
                16+
              </div>
              <div className="text-gray-600 font-medium text-xs">
                Years Experience
              </div>
            </div>
          </motion.div>

          {/* 40% ROI Card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text mb-1">
                40%
              </div>
              <div className="text-gray-600 font-medium text-xs">
                Avg ROI Boost
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default FinquickHero;