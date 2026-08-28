/**
 * TailFigure — the Approach page construction.
 *
 * The only figure on the site where the drawing carries the argument rather
 * than setting a tone. One axis, two spans: the pale one stops at go-live,
 * where a statement of work usually stops. The blue one keeps drawing, slower,
 * and runs off the right edge without ever closing.
 *
 * That is Maintain, which is the step the whole method is judged on.
 *
 * The labels ride in their own un-stretched svg so the type is never distorted
 * by the axis stretching to the width of the page.
 */
import React from 'react';
import { methodSteps } from '../../../data/varahiVision';
import '../../../styles/geometry.css';

const Y = 150;
const RUN_END = 1200;
const STOP_END = 720;

/** FORM, then the two markers the method is judged past. */
const STOPS = [
  { x: 40, label: methodSteps[0].label },
  { x: 250, label: methodSteps[1].label },
  { x: 480, label: methodSteps[2].label },
  { x: STOP_END, label: 'Go-live' },
  { x: 940, label: methodSteps[3].label },
  { x: 1160, label: 'Year five' },
];

type Props = { className?: string };

const TailFigure: React.FC<Props> = ({ className }) => (
  <div className={`vn-fig vn-fig--tail ${className ?? ''}`} aria-hidden="true">
    {/* stretched: the axis and the two spans */}
    <svg className="vn-fig__tailAxis" viewBox="0 0 1200 300" preserveAspectRatio="none">
      <line
        className="vn-fig__s vn-fig__s--faint"
        x1="0"
        y1={Y}
        x2={RUN_END}
        y2={Y}
        style={{ '--len': RUN_END, '--wait': '0.2s' } as React.CSSProperties}
      />
      <line
        className="vn-fig__s vn-fig__tailStop"
        x1="40"
        y1={Y - 26}
        x2={STOP_END}
        y2={Y - 26}
        style={{ '--len': STOP_END - 40, '--wait': '0.5s' } as React.CSSProperties}
      />
      <line
        className="vn-fig__s vn-fig__tailRun"
        x1="40"
        y1={Y + 26}
        x2={RUN_END}
        y2={Y + 26}
        style={{ '--len': RUN_END - 40, '--wait': '1.05s' } as React.CSSProperties}
      />
    </svg>

    {/* un-stretched: ticks, labels and the two nodes */}
    <svg className="vn-fig__tailMarks" viewBox="0 0 1200 300">
      {STOPS.map((stop, i) => (
        <g key={stop.label}>
          <line
            className="vn-fig__s vn-fig__s--faint"
            x1={stop.x}
            y1={Y - 8}
            x2={stop.x}
            y2={Y + 8}
            style={{ '--len': 16, '--wait': `${0.3 + i * 0.08}s` } as React.CSSProperties}
          />
          <text
            className={`vn-fig__l${i === 4 ? ' vn-fig__l--hold' : ''}`}
            x={stop.x}
            y={Y + 48}
            textAnchor={i === 0 ? 'start' : i === STOPS.length - 1 ? 'end' : 'middle'}
            style={{ '--wait': `${0.9 + i * 0.08}s` } as React.CSSProperties}
          >
            {stop.label}
          </text>
        </g>
      ))}

      {/* where most engagements end */}
      <circle
        className="vn-fig__n"
        cx={STOP_END}
        cy={Y - 26}
        r={5}
        style={{ '--wait': '1.3s' } as React.CSSProperties}
      />
      {/* where ours is still running */}
      <circle
        className="vn-fig__n vn-fig__n--hold"
        cx={940}
        cy={Y + 26}
        r={9}
        style={{ '--wait': '2.1s' } as React.CSSProperties}
      />
    </svg>
  </div>
);

export default TailFigure;
