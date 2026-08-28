/**
 * AxisFigure — the Home page construction.
 *
 * Perfect bilateral and four-fold symmetry: three concentric circles, a square
 * inscribed at 45 degrees, and four radial arms ending in the F/O/R/M nodes.
 * The headline sits inside it rather than beside it, which is the part nobody
 * else in this sector does — everyone runs text-left, picture-right.
 *
 * It draws itself once on mount and then stops. Nothing here loops.
 */
import React from 'react';
import { methodSteps } from '../../../data/varahiVision';
import '../../../styles/geometry.css';

const C = 400;
const R_OUT = 340;
const R_MID = 250;
const R_IN = 150;

/** Unit vectors, clockwise from the top — one per FORM step. */
const ARMS = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
] as const;

/** Where each letter sits, just outside its node. */
const LABEL_OFFSET = 34;

type Props = { className?: string };

const AxisFigure: React.FC<Props> = ({ className }) => {
  // the square that touches the outer circle at its four corners
  const side = R_OUT * Math.SQRT2;

  return (
    <svg
      className={`vn-fig vn-fig--axis ${className ?? ''}`}
      viewBox="0 0 800 800"
      aria-hidden="true"
    >
      {[R_OUT, R_MID, R_IN].map((r, i) => (
        <circle
          key={r}
          className={`vn-fig__s${i === 1 ? ' vn-fig__s--faint' : ''}`}
          cx={C}
          cy={C}
          r={r}
          style={{ '--len': 2 * Math.PI * r, '--wait': `${0.2 + i * 0.14}s` } as React.CSSProperties}
        />
      ))}

      <rect
        className="vn-fig__s vn-fig__s--faint"
        x={C - side / 2}
        y={C - side / 2}
        width={side}
        height={side}
        transform={`rotate(45 ${C} ${C})`}
        style={{ '--len': side * 4, '--wait': '0.6s' } as React.CSSProperties}
      />

      {ARMS.map(([dx, dy], i) => {
        const step = methodSteps[i];
        const hold = i === ARMS.length - 1;
        return (
          <g key={step.letter}>
            <line
              className="vn-fig__s"
              x1={C + dx * R_IN}
              y1={C + dy * R_IN}
              x2={C + dx * R_OUT}
              y2={C + dy * R_OUT}
              style={{ '--len': R_OUT - R_IN, '--wait': `${0.85 + i * 0.09}s` } as React.CSSProperties}
            />
            <circle
              className={`vn-fig__n${hold ? ' vn-fig__n--hold' : ''}`}
              cx={C + dx * R_OUT}
              cy={C + dy * R_OUT}
              r={hold ? 10 : 6}
              style={{ '--wait': `${1.3 + i * 0.1}s` } as React.CSSProperties}
            />
            <text
              className={`vn-fig__l${hold ? ' vn-fig__l--hold' : ''}`}
              x={C + dx * (R_OUT + LABEL_OFFSET)}
              y={C + dy * (R_OUT + LABEL_OFFSET) + (dy === 0 ? 5 : dy < 0 ? -4 : 14)}
              textAnchor="middle"
              style={{ '--wait': `${1.45 + i * 0.1}s` } as React.CSSProperties}
            >
              {step.letter}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default AxisFigure;
