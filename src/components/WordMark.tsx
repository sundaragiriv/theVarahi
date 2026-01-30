import React from 'react';
import { motion } from 'framer-motion';

interface WordMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'homepage';
  animated?: boolean;
  theme?: 'light' | 'dark' | 'auto';
  variant?: 'full' | 'icon-only' | 'text-only';
}

const WordMark: React.FC<WordMarkProps> = ({
  size = 'md',
  animated = false,
  theme = 'auto',
}) => {
  const sizeConfig = {
    sm: { 
      text: 'text-xl', 
      icon: 'w-24 h-24', 
      gap: 'gap-2',
      letterSpacing: 'tracking-[0.15em]'
    },
    md: { 
      text: 'text-2xl', 
      icon: 'w-32 h-32', 
      gap: 'gap-3',
      letterSpacing: 'tracking-[0.2em]'
    },
    lg: { 
      text: 'text-4xl', 
      icon: 'w-40 h-40', 
      gap: 'gap-4',
      letterSpacing: 'tracking-[0.25em]'
    },
    xl: { 
      text: 'text-5xl', 
      icon: 'w-48 h-48', 
      gap: 'gap-5',
      letterSpacing: 'tracking-[0.3em]'
    },
    homepage: { 
      text: 'text-6xl', 
      icon: 'w-64 h-64', 
      gap: 'gap-6',
      letterSpacing: 'tracking-[0.35em]'
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
  // Theme classes available for future use
  void getThemeClasses;



  // Logo Image Only
  const LogoContent = () => (
    <div className="relative logo-container">
      <img 
        src="/logos/Varahi9.png" 
        alt="Varahi"
        className={`
          ${config.icon}
          transition-all duration-300 hover:scale-105
          select-none cursor-default
          object-contain
        `}
        style={{
          backgroundColor: 'transparent',
          mixBlendMode: 'multiply'
        }}
        onError={(e) => {
          console.error('Logo failed to load:', e);
          // Fallback to text if image fails
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Fallback text logo if image fails */}
      <div className="hidden fallback-logo text-blue-800 font-bold text-xl">
        varahi
      </div>
    </div>
  );

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