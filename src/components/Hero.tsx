import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import networkAnimation from '../assets/network-animation.json';

// Floating particles component
const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated grid lines
const AnimatedGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(116, 179, 247, 0.3)" strokeWidth="1"/>
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 112, 242, 0.1)" />
            <stop offset="50%" stopColor="rgba(116, 179, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(0, 112, 242, 0.1)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#gridGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

// Shimmer text effect
const ShimmerText: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
      {children}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden hero-gradient grid-pattern">
      {/* Floating background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      
      {/* Animated background elements */}
      <FloatingParticles />
      <AnimatedGrid />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-pulse-glow" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-white/10 rotate-45 animate-float" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-sap-light-blue/30 to-transparent rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <ShimmerText>
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
            </ShimmerText>
            
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
            {/* Additional floating elements around the animation */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 border-2 border-white/20 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-lg"
              animate={{
                rotate: [0, -360],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
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