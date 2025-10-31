import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridBackgroundProps {
  className?: string;
  opacity?: number;
  gridSize?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  variant?: 'dots' | 'lines' | 'squares' | 'hexagons';
}

const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  className = '',
  opacity = 0.1,
  gridSize = 'md',
  animated = true,
  variant = 'dots'
}) => {
  const gridSizes = {
    sm: '20px',
    md: '40px',
    lg: '60px'
  };

  const size = gridSizes[gridSize];

  const generateDotPattern = () => (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern
          id={`dot-grid-${gridSize}`}
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={parseInt(size) / 2}
            cy={parseInt(size) / 2}
            r="1"
            fill="currentColor"
            opacity={opacity}
          />
        </pattern>
        
        {/* Animated gradient overlay */}
        <radialGradient id="grid-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      
      <rect width="100%" height="100%" fill={`url(#dot-grid-${gridSize})`} />
      
      {animated && (
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid-gradient)"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </svg>
  );

  const generateLinePattern = () => (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern
          id={`line-grid-${gridSize}`}
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M 0 0 L ${size} 0 M 0 0 L 0 ${size}`}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity={opacity}
          />
        </pattern>
        
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill={`url(#line-grid-${gridSize})`} />
      
      {animated && (
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#line-gradient)"
          initial={{ x: '-100%' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </svg>
  );

  const generateSquarePattern = () => (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern
          id={`square-grid-${gridSize}`}
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="2"
            y="2"
            width={parseInt(size) - 4}
            height={parseInt(size) - 4}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity={opacity}
          />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill={`url(#square-grid-${gridSize})`} />
    </svg>
  );

  const generateHexagonPattern = () => (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern
          id={`hex-grid-${gridSize}`}
          x="0"
          y="0"
          width={parseInt(size) * 1.5}
          height={parseInt(size) * Math.sqrt(3)}
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="15,5 25,5 30,15 25,25 15,25 10,15"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity={opacity}
          />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill={`url(#hex-grid-${gridSize})`} />
    </svg>
  );

  const renderPattern = () => {
    switch (variant) {
      case 'lines':
        return generateLinePattern();
      case 'squares':
        return generateSquarePattern();
      case 'hexagons':
        return generateHexagonPattern();
      default:
        return generateDotPattern();
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden text-blue-500/20 ${className}`}>
      {animated ? (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {renderPattern()}
        </motion.div>
      ) : (
        renderPattern()
      )}
      
      {/* Additional floating elements */}
      {animated && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedGridBackground;