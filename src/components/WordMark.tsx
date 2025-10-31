import React from 'react';
import { motion } from 'framer-motion';

interface WordMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  theme?: 'light' | 'dark' | 'auto';
  variant?: 'full' | 'icon-only' | 'text-only';
}

const WordMark: React.FC<WordMarkProps> = ({ 
  className = '', 
  size = 'md', 
  animated = false,
  theme = 'auto',
  variant = 'full'
}) => {
  const sizeConfig = {
    sm: { 
      text: 'text-xl', 
      icon: 'w-8 h-8', 
      gap: 'gap-2',
      letterSpacing: 'tracking-[0.15em]'
    },
    md: { 
      text: 'text-2xl', 
      icon: 'w-10 h-10', 
      gap: 'gap-3',
      letterSpacing: 'tracking-[0.2em]'
    },
    lg: { 
      text: 'text-4xl', 
      icon: 'w-12 h-12', 
      gap: 'gap-4',
      letterSpacing: 'tracking-[0.25em]'
    },
    xl: { 
      text: 'text-5xl', 
      icon: 'w-16 h-16', 
      gap: 'gap-5',
      letterSpacing: 'tracking-[0.3em]'
    }
  };

  const getThemeClasses = () => {
    if (theme === 'dark') {
      return {
        text: 'text-white',
        iconBg: 'bg-emerald-600',
        iconBorder: 'border-emerald-400',
        shadow: 'shadow-emerald-500/20',
        accent: 'bg-emerald-400'
      };
    }
    return {
      text: 'text-slate-900',
      iconBg: 'bg-emerald-600', 
      iconBorder: 'border-emerald-600',
      shadow: 'shadow-emerald-600/15',
      accent: 'bg-emerald-600'
    };
  };

  const config = sizeConfig[size];
  const themeClasses = getThemeClasses();



  // Unique Watermark Typography
  const WatermarkText = () => (
    <div className="relative watermark-logo">
      <span 
        className={`
          ${config.text} ${config.letterSpacing}
          text-blue-800
          font-black lowercase relative
          transition-all duration-300 hover:scale-105
          select-none cursor-default
          watermark-text
        `}
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '900',
          textShadow: theme === 'dark' ? '0 0 20px rgba(16, 185, 129, 0.3)' : 'none'
        }}
      >
        varah<span className="relative">i<span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full"></span></span>
      </span>
    </div>
  );

  const LogoContent = () => {
    return <WatermarkText />;
  };

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="cursor-pointer"
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
};

export default WordMark;