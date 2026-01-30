import React from 'react';

interface GridBackgroundProps {
  className?: string;
  opacity?: number;
  gridSize?: number;
  strokeWidth?: number;
  color?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  className = '',
  opacity = 0.03,
  gridSize = 40,
  strokeWidth = 1,
  color = '#000000'
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: opacity,
        }}
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default React.memo(GridBackground);