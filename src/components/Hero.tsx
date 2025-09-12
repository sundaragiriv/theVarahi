import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import networkAnimation from '../assets/network-animation.json';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden hero-gradient grid-pattern">
      {/* Floating background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Enterprise CX & AI—</span>
              <span className="block bg-gradient-to-r from-sap-light-blue to-sap-white bg-clip-text text-transparent">
                Built for Outcomes
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-white/90 leading-relaxed max-w-2xl font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Strategic roadmaps, enterprise implementations, and SAP CX integrations that deliver measurable business outcomes.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#consult"
                className="btn-primary inline-flex items-center justify-center text-lg px-10 py-5 glow-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.a>
              <motion.a
                href="#"
                className="btn-secondary inline-flex items-center justify-center text-lg px-10 py-5 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Capability Deck
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:pl-12"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full max-w-2xl mx-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sap-light-blue/20 to-accent/20 rounded-full blur-3xl"></div>
              <Lottie
                animationData={networkAnimation}
                loop={true}
                className="w-full h-auto relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;