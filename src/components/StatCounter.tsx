import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  end, 
  duration = 2, 
  className = '' 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, hasAnimated, end, duration]);

  return (
    <motion.span 
      ref={ref} 
      className={className}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};

export default StatCounter;