/**
 * VortexFigure — the Practice page construction.
 *
 * Fourteen squares on one centre, each rotated 7.5 degrees further and scaled
 * to 0.915 of the last. Four-fold symmetric like everything else in the system,
 * but the accumulating rotation reads as depth — which is the right note for
 * the page that argues about a gap nobody else is standing in.
 *
 * Draws itself once on mount, then holds.
 */
import React from 'react';
import '../../../styles/geometry.css';

const C = 400;
const BASE = 660;
const COUNT = 14;
const STEP_DEG = 7.5;
const SHRINK = 0.915;

type Props = { className?: string };

const VortexFigure: React.FC<Props> = ({ className }) => (
  <svg className={`vn-fig vn-fig--vortex ${className ?? ''}`} viewBox="0 0 800 800" aria-hidden="true">
    {Array.from({ length: COUNT }, (_, i) => {
      const size = BASE * Math.pow(SHRINK, i);
      return (
        <rect
          key={i}
          className={`vn-fig__s${i % 2 ? ' vn-fig__s--faint' : ''}`}
          x={C - size / 2}
          y={C - size / 2}
          width={size}
          height={size}
          transform={`rotate(${i * STEP_DEG} ${C} ${C})`}
          style={{ '--len': size * 4, '--wait': `${0.2 + i * 0.055}s` } as React.CSSProperties}
        />
      );
    })}

    {/* the two axes the construction is built on */}
    {[
      [C, 46, C, 754],
      [46, C, 754, C],
    ].map(([x1, y1, x2, y2], i) => (
      <line
        key={i}
        className="vn-fig__s vn-fig__s--faint"
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        style={{ '--len': 708, '--wait': `${1 + i * 0.1}s` } as React.CSSProperties}
      />
    ))}
  </svg>
);

export default VortexFigure;
