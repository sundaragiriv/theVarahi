import React from "react";

interface LogoOrbitProps {
  size?: number;
}

const LogoOrbit: React.FC<LogoOrbitProps> = ({ size = 160 }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Mark */}
      <div className="relative" style={{ width: size * 0.25, height: size * 0.25 }}>
        <svg
          width={size * 0.25}
          height={size * 0.25}
          viewBox="0 0 40 40"
          className="hover:scale-110 transition-transform duration-300"
        >
          {/* Professional V Symbol */}
          <g className="drop-shadow-sm">
            {/* Clean geometric V */}
            <path
              d="M12 10 L20 26 L28 10 L25 10 L20 20 L15 10 Z"
              fill="#0070F2"
            />
            {/* Subtle base line */}
            <rect
              x="10"
              y="28"
              width="20"
              height="2"
              fill="#0070F2"
              opacity="0.3"
            />
          </g>
          
          {/* Subtle orbital ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="#0070F2"
            strokeWidth="0.5"
            opacity="0.15"
            className="animate-spin"
            style={{ animationDuration: '20s' }}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
      
      {/* Wordmark */}
      <div className="flex flex-col">
        <span 
          className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-300"
          style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.2em' }}
        >
          VARAHI
        </span>
      </div>
    </div>
  );
};

export default LogoOrbit;