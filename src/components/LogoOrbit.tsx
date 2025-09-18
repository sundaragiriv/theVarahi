import React from "react";
import "./logo-orbit.css";

/**
 * Varahi wordmark with a thin diagonal ellipse.
 * A small blue dot glides back-and-forth along the ellipse.
 * (Motion respects prefers-reduced-motion.)
 */
export default function LogoOrbit({
  size = 200,
  tilt = -18,
  color = "#0F172A",
  ringColor = "rgba(0,112,242,.18)",
  dotColor = "#0070F2",
  speedSec = 6,
}: {
  size?: number;
  tilt?: number;
  color?: string;
  ringColor?: string;
  dotColor?: string;
  speedSec?: number;
}) {
  const h = size * 0.33;          // wordmark box height
  const rx = size * 0.57;         // ellipse radii
  const ry = h * 0.95;
  const dotR = Math.max(2, Math.round(size * 0.018));
  const d = `M ${-rx} 0 a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`;

  return (
    <svg
      width={size}
      height={h}
      viewBox={`${-size / 2} ${-h / 2} ${size} ${h}`}
      role="img"
      aria-label="Varahi"
      style={{ display: "block", ["--orbit-speed" as any]: `${speedSec}s` }}
    >
      {/* Ellipse */}
      <g transform={`rotate(${tilt})`}>
        <path d={d} fill="none" stroke={ringColor} strokeWidth={1} />
      </g>

      {/* Comet trail and dot */}
      <g transform={`rotate(${tilt})`}>
        {/* Comet trail */}
        <circle
          r={dotR * 2.5}
          className="orbit-dot"
          fill="url(#cometGradient)"
          opacity="0.6"
          style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
        />
        <circle
          r={dotR * 1.8}
          className="orbit-dot"
          fill="url(#cometGradient2)"
          opacity="0.8"
          style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
        />
        {/* Main comet dot */}
        <circle
          r={dotR}
          className="orbit-dot"
          fill={dotColor}
          style={{ 
            offsetPath: `path('${d}')`,
            filter: 'drop-shadow(0 0 8px rgba(0,112,242,0.6))'
          } as React.CSSProperties}
        />
      </g>

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0070F2" />
          <stop offset="50%" stopColor="#0854A0" />
          <stop offset="100%" stopColor="#74B3F7" />
        </linearGradient>
        <radialGradient id="cometGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0070F2" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#74B3F7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#74B3F7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cometGradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0070F2" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0854A0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0854A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Wordmark with gradient */}
      <text
        x="0" y="0.34em" textAnchor="middle"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        fontWeight={800}
        fontSize={h * 0.56}
        letterSpacing="0.4px"
        fill="url(#logoGradient)"
      >
        Varahi
      </text>
    </svg>
  );
}