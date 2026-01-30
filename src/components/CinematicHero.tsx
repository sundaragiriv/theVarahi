import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';
import FluidTypography from './FluidTypography';
import SophisticatedButton from './SophisticatedButton';

// Constant array moved outside component to avoid dependency issues
const TYPING_WORDS = ['AI', 'Automation', 'Integration', 'Intelligence'];

const CinematicHero: React.FC = () => {
  const [typingText, setTypingText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let charIndex = 0;

    const typeTimer = setInterval(() => {
      if (charIndex <= word.length) {
        setTypingText(word.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeTimer);
  }, [wordIndex]);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-brand-900">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Optimized Video Element with Accessibility */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          onError={(e) => {
            console.error('Video loading failed, showing fallback background');
            // Hide video and show fallback background
            (e.target as HTMLVideoElement).style.display = 'none';
            const fallback = document.querySelector('.video-fallback') as HTMLElement;
            if (fallback) {
              fallback.classList.remove('hidden');
            }
          }}
          aria-hidden="true"
          role="presentation"
        >
          <source src="/ai2.mp4" type="video/mp4" />
          {/* Fallback message for browsers that don't support video */}
          <p className="sr-only">Decorative background video showing technology themes</p>
        </video>
        
        {/* Fallback Background Image (shows if video fails to load or reduced motion is preferred) */}
        <div 
          className="video-fallback absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 motion-reduce:block hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
          aria-hidden="true"
        />
        
        {/* Dark Overlay for Text Readability - Balanced for video visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/20 to-accent-900/20" />
        
        {/* Subtle Grid Background */}
        <AnimatedGridBackground 
          opacity={0.15} 
          gridSize="md" 
          variant="dots" 
          animated={true}
          className="z-10"
        />
      </div>

      {/* Animated Tech Background */}
      <div className="absolute inset-0 z-10">
        {/* Animated particles/dots */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 animate-pulse" 
             style={{ animationDuration: '4s' }} />
      </div>

      {/* Vertical Stats Column - Right Side Alignment */}
      <div className="absolute inset-0 z-30 pointer-events-none hidden lg:block">
        {/* First stat - Top position */}
        {/* 98% Client Satisfaction */}
        <motion.div
          className="absolute top-[15%] right-[5%] w-32 h-32"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 0.7,
            y: [0, -8, 0],
            scale: 1
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 1.2 },
            scale: { duration: 1.2, delay: 1.2 },
            y: { 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-brand-400/35 via-blue-500/30 to-brand-600/25 backdrop-blur-xl rounded-full border-2 border-brand-300/60 shadow-2xl shadow-brand-500/20 flex items-center justify-center ring-2 ring-brand-200/30 relative overflow-hidden">
            {/* Inner highlight */}
            <div className="absolute inset-3 bg-gradient-to-br from-white/15 to-transparent rounded-full"></div>
            <div className="text-center relative z-10">
              <div className="text-xl font-bold text-white mb-1 drop-shadow-lg tracking-wide">98%</div>
              <div className="text-xs text-white/95 font-semibold leading-tight tracking-wider">Client<br/>Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Second stat - Middle position */}
        {/* 15+ Years Experience */}
        <motion.div
          className="absolute top-[35%] right-[5%] w-32 h-32"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 0.7,
            y: [0, -6, 0],
            scale: 1
          }}
          transition={{ 
            opacity: { duration: 1.6, delay: 1.6 },
            scale: { duration: 1.3, delay: 1.6 },
            y: { 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-accent-400/25 via-green-500/20 to-emerald-600/18 backdrop-blur-xl rounded-full border-2 border-accent-300/40 shadow-2xl shadow-accent-500/15 flex items-center justify-center ring-2 ring-accent-200/25 relative overflow-hidden">
            {/* Inner highlight */}
            <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
            <div className="text-center relative z-10">
              <div className="text-lg font-bold text-white mb-1 drop-shadow-lg tracking-wide">15+</div>
              <div className="text-xs text-white/90 font-semibold leading-tight tracking-wider">Years<br/>Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Third stat - Lower middle position */}
        {/* 500+ Projects Delivered */}
        <motion.div
          className="absolute top-[55%] right-[5%] w-32 h-32"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 0.7,
            y: [0, -10, 0],
            scale: 1
          }}
          transition={{ 
            opacity: { duration: 1.8, delay: 2.0 },
            scale: { duration: 1.4, delay: 2.0 },
            y: { 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 4
            }
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-turmeric-400/25 via-turmeric-500/20 to-amber-600/18 backdrop-blur-xl rounded-full border-2 border-turmeric-300/40 shadow-2xl shadow-turmeric-500/15 flex items-center justify-center ring-2 ring-turmeric-200/25 relative overflow-hidden">
            {/* Inner highlight */}
            <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
            <div className="text-center relative z-10">
              <div className="text-xl font-bold text-white mb-1 drop-shadow-lg tracking-wide">500+</div>
              <div className="text-xs text-white/90 font-semibold leading-tight tracking-wider">Projects<br/>Delivered</div>
            </div>
          </div>
        </motion.div>

        {/* Fourth stat - Bottom position */}
        {/* 40% ROI Boost */}
        <motion.div
          className="absolute top-[75%] right-[5%] w-32 h-32"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 0.7,
            y: [0, -8, 0],
            scale: 1
          }}
          transition={{ 
            opacity: { duration: 2.0, delay: 2.4 },
            scale: { duration: 1.5, delay: 2.4 },
            y: { 
              duration: 9, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 5
            }
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-turmeric-500/25 via-orange-400/20 to-amber-600/18 backdrop-blur-xl rounded-full border-2 border-turmeric-200/40 shadow-2xl shadow-turmeric-400/15 flex items-center justify-center ring-2 ring-turmeric-100/25 relative overflow-hidden">
            {/* Inner highlight */}
            <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
            <div className="text-center relative z-10">
              <div className="text-xl font-bold text-white mb-1 drop-shadow-lg tracking-wide">40%</div>
              <div className="text-xs text-white/90 font-semibold leading-tight tracking-wider">Avg ROI<br/>Boost</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center h-full px-6 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="w-full max-w-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Credibility Badge */}
              <motion.div
                className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CheckCircle className="h-3.5 w-3.5 text-accent-300" />
                <span className="text-xs text-white/90 font-normal tracking-wide">
                  Trusted by Fortune 500 Companies
                </span>
              </motion.div>

              {/* Main Headline - Junos-inspired fluid typography */}
              <div className="mb-8">
                <FluidTypography
                  variant="heading"
                  animation="stagger"
                  delay={0.2}
                  staggerChildren={0.08}
                  className="text-white drop-shadow-lg mb-4"
                >
                  Enterprise CX & AI Solutions
                </FluidTypography>
                
                <FluidTypography
                  variant="subheading"
                  animation="slide-in"
                  delay={0.8}
                  className="text-transparent bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text font-medium"
                >
                  {typingText || 'That Deliver Results'}
                </FluidTypography>
              </div>

              {/* Value Proposition */}
              <FluidTypography
                variant="body"
                animation="fade-up"
                delay={1.2}
                duration={0.8}
                className="text-white/80 mb-10 max-w-2xl drop-shadow-md font-light"
              >
                Transform your enterprise with our proven customer experience and AI implementations. 
                <span className="text-brand-200 font-medium"> Average 40% ROI improvement</span> in 90 days or less.
              </FluidTypography>

              {/* CTA Buttons - Sophisticated Junos-inspired */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <SophisticatedButton
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  className="font-semibold"
                >
                  Free Strategy Call
                </SophisticatedButton>
                
                <SophisticatedButton
                  to="/case-studies"
                  variant="ghost"
                  size="lg"
                  className="font-medium"
                >
                  Case Studies
                </SophisticatedButton>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs text-white/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-accent-300" />
                  <span className="tracking-wide">noCommitmentRequired</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-accent-300" />
                  <span className="tracking-wide">24hourResponse</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-accent-300" />
                  <span className="tracking-wide">enterpriseSecurity</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Clean space for stats circles to flow naturally */}
            <div className="hidden lg:block relative w-full h-96">
              {/* This space is intentionally clean to let the floating stats circles move freely across the entire right area */}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CinematicHero;