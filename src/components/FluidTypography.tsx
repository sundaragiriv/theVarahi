import React from 'react';
import { motion } from 'framer-motion';

interface FluidTypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  animation?: 'fade-up' | 'slide-in' | 'stagger' | 'typewriter' | 'scale-in';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

const FluidTypography: React.FC<FluidTypographyProps> = ({
  children,
  className = '',
  variant = 'body',
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.1
}) => {
  
  const variantClasses = {
    heading: 'text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight',
    subheading: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug',
    body: 'text-base md:text-lg leading-relaxed',
    caption: 'text-sm md:text-base leading-normal'
  };

  const animationVariants = {
    'fade-up': {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    'slide-in': {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    'scale-in': {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, ease: "easeOut" }
    },
    'stagger': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { 
        duration: 0.1, 
        delay,
        staggerChildren,
        delayChildren: delay 
      }
    },
    'typewriter': {
      initial: { width: 0 },
      animate: { width: 'auto' },
      transition: { duration: duration * 2, delay, ease: 'easeInOut' }
    }
  };

  const currentVariant = animationVariants[animation];

  // Handle stagger animation for individual characters/words
  if (animation === 'stagger' && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <motion.div
        className={`${variantClasses[variant]} ${className}`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { 
            opacity: 1,
            transition: {
              staggerChildren: staggerChildren,
              delayChildren: delay
            }
          }
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
              }
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Handle typewriter animation
  if (animation === 'typewriter' && typeof children === 'string') {
    return (
      <div className={`${variantClasses[variant]} ${className}`}>
        <motion.div
          className="overflow-hidden whitespace-nowrap border-r-2 border-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: 'auto' }}
          viewport={{ once: true }}
          transition={{ duration: duration * 2, delay, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Standard animations
  return (
    <motion.div
      className={`${variantClasses[variant]} ${className}`}
      initial={currentVariant.initial}
      whileInView={currentVariant.animate}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FluidTypography;