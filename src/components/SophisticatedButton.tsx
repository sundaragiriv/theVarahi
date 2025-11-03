import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SophisticatedButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const SophisticatedButton: React.FC<SophisticatedButtonProps> = ({
  to,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = <ArrowRight className="h-4 w-4" />,
  disabled = false
}) => {
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-brand-600 to-brand-700 
      text-white border border-brand-500
      hover:from-brand-500 hover:to-brand-600
      shadow-lg shadow-brand-500/25
      hover:shadow-xl hover:shadow-brand-500/40
    `,
    secondary: `
      bg-gradient-to-r from-neutral-100 to-neutral-200 
      text-neutral-800 border border-neutral-300
      hover:from-neutral-200 hover:to-neutral-300
      shadow-lg shadow-neutral-500/25
      hover:shadow-xl hover:shadow-neutral-500/40
    `,
    ghost: `
      bg-white/10 backdrop-blur-md
      text-white border border-white/20
      hover:bg-white/20 hover:border-white/40
      shadow-lg shadow-black/20
      hover:shadow-xl hover:shadow-black/30
    `,
    gradient: `
      bg-gradient-to-r from-accent-600 via-brand-600 to-accent-600
      text-white border border-accent-500
      hover:from-accent-500 hover:via-brand-500 hover:to-accent-500
      shadow-lg shadow-accent-500/30
      hover:shadow-xl hover:shadow-accent-500/50
    `
  };

  const buttonClasses = `
    group inline-flex items-center gap-2 
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    rounded-full font-medium transition-all duration-300 
    transform hover:scale-105 hover:-translate-y-1
    backdrop-blur-sm
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const buttonContent = (
    <motion.div
      className={buttonClasses}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        y: disabled ? 0 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }}
      onClick={disabled ? undefined : onClick}
    >
      <motion.span
        className="relative z-10"
        initial={false}
        animate={{ x: 0 }}
        whileHover={{ x: disabled ? 0 : 2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {children}
      </motion.span>
      
      {icon && (
        <motion.div
          className="relative z-10"
          initial={false}
          animate={{ x: 0, rotate: 0 }}
          whileHover={{ 
            x: disabled ? 0 : 3, 
            rotate: disabled ? 0 : 5 
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>
      )}
      
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 rounded-full opacity-0"
        whileHover={{ opacity: disabled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default SophisticatedButton;