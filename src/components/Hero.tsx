import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import networkAnimation from '../assets/network-animation.json';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-paper/50 via-white to-brand/5">
      {/* Floating background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-ink leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Enterprise CX & AI—
              <span className="text-brand">Built for Outcomes</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-ink/70 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Roadmaps, implementations, and SAP CX integrations that move KPIs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#consult"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.a>
              <motion.a
                href="#"
                className="btn-secondary inline-flex items-center justify-center"
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
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full max-w-lg mx-auto"
            >
              <Lottie
                animationData={networkAnimation}
                loop={true}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;