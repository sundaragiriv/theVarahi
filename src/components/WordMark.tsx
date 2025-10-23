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
        iconBg: 'bg-blue-600',
        iconBorder: 'border-blue-400',
        shadow: 'shadow-blue-500/20',
        accent: 'bg-blue-400'
      };
    }
    return {
      text: 'text-slate-900',
      iconBg: 'bg-blue-600', 
      iconBorder: 'border-blue-600',
      shadow: 'shadow-blue-600/15',
      accent: 'bg-blue-600'
    };
  };

  const config = sizeConfig[size];
  const themeClasses = getThemeClasses();



  // Clean Outline Corporate Icon Design
  const CorporateIcon = () => (
    <div className={`relative group ${config.icon}`}>
      {/* Transparent box with outline */}
      <div className={`
        w-full h-full border-2 ${themeClasses.iconBorder}
        rounded-lg shadow-sm ${themeClasses.shadow}
        flex items-center justify-center relative
        transition-all duration-300 group-hover:scale-105
        bg-transparent
      `}>
        {/* Clean V monogram */}
        <svg 
          viewBox="0 0 24 24" 
          className={`w-3/5 h-3/5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} font-bold`}
          fill="currentColor"
        >
          <path d="M3 4L12 20L21 4H17L12 16L7 4H3Z" />
        </svg>
      </div>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-lg bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  // Print-Friendly Typography 
  const CorporateText = () => (
    <div className="relative corporate-wordmark">
      {/* Main text with solid colors */}
      <span 
        className={`
          ${config.text} ${config.letterSpacing}
          ${themeClasses.text}
          font-black uppercase relative logo-futuristic
          transition-all duration-300 hover:scale-105
          select-none cursor-default text-shadow-corporate
        `}
      >
        VARAHI
        {/* Subtle thin underline accent */}
        <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${themeClasses.accent} opacity-60`}></div>
      </span>
      
      {/* Corporate tagline for larger sizes */}
      {(size === 'lg' || size === 'xl') && (
        <div className="absolute -bottom-5 left-0 text-xs text-gray-600 uppercase tracking-[0.2em] font-semibold">
          Enterprise Solutions
        </div>
      )}
    </div>
  );

  const LogoContent = () => {
    if (variant === 'icon-only') {
      return <CorporateIcon />;
    }
    
    if (variant === 'text-only') {
      return <CorporateText />;
    }

    return (
      <div className={`inline-flex items-center ${config.gap} ${className}`}>
        <CorporateIcon />
        <CorporateText />
      </div>
    );
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