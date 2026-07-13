import type React from 'react';

interface WordMarkProps {
  className?: string;
  /** 'group' renders "Varahi Group" — footer / parent-company contexts only. */
  variant?: 'practice' | 'group';
  size?: number;
}

/**
 * The Varahi mark — exact geometry from the master logo, flattened.
 *
 * The master is a dark-background SVG with three gradients, a drop shadow and a
 * floor glow. Those don't survive: they're invisible on the light default and
 * turn to mush below ~40px. The PATHS are kept verbatim; only the fills change.
 *
 *   bracket    -> var(--vn-teal)  (the action blue, both modes)
 *   V + notch  -> currentColor    (silver in the master; inverts with the theme)
 *
 * Keep the master (with gradients) for decks, LinkedIn and anywhere it sits on
 * a dark field. This is the UI cut.
 */
const VarahiMark: React.FC<{ size?: number }> = ({ size = 30 }) => (
  <svg
    height={size}
    viewBox="0 0 250 292"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={{ width: 'auto', flexShrink: 0 }}
  >
    <path d="M0 0 H250 V42 H42 V250 H185 V292 H0 Z" fill="var(--vn-teal)" />
    <path d="M208 208 H250 V292 H166 V250 H208 Z" fill="currentColor" />
    <path d="M77 76 H125 L151 182 L179 76 H226 L174 215 H128 Z" fill="currentColor" />
  </svg>
);

const WordMark: React.FC<WordMarkProps> = ({ className = '', variant = 'practice', size = 30 }) => (
  <span
    className={`vn-wordmark ${className}`.trim()}
    aria-label={variant === 'group' ? 'Varahi Group' : 'Varahi'}
  >
    <VarahiMark size={size} />
    <span className="vn-wordmark__text">
      <strong>Varahi</strong>
      {/* Turmeric full stop. The only warm colour in the system, and the only place
          it appears in the lockup. It says "sentence finished" — and it stops the
          wordmark from being three shades of blue and nothing else. */}
      <span className="vn-wordmark__dot" aria-hidden="true" />
      {variant === 'group' && <span className="vn-wordmark__sub">Group</span>}
    </span>
  </span>
);

export default WordMark;
