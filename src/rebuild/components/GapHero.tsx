/**
 * GapHero — the Practice page.
 *
 * Practice owns the gap. The thesis used to sit on About, which is the least
 * visited page on the site, while five other pages repeated a slogan about one
 * backlog. This puts the argument where somebody evaluating the firm will
 * actually meet it.
 *
 * The four rows are the second thesis paragraph, split into the four
 * competitor types it names. Four rows, because the geometry is built on four.
 */
import React from 'react';
import { thesis } from '../../data/varahiVision';
import VortexFigure from './geometry/VortexFigure';
import OrbField from './OrbField';
import '../../styles/page-hero.css';

const CLAIM = ['Everyone else', 'solves a third', 'of it.'];

/**
 * From thesis[1] — kept as structured rows rather than one paragraph so each
 * competitor type can be read, and hovered, on its own.
 */
const FOUR = [
  { who: 'The big SI firms', miss: 'compete on hours, not architecture.' },
  { who: 'The strategy houses', miss: 'make decks.' },
  { who: 'The pure-play AI shops', miss: "don't know how to ship inside an enterprise estate." },
  { who: 'The CX studios', miss: "don't know what an iFlow is." },
];

const GapHero: React.FC = () => (
  <section className="vn-ph vn-hero-bleed" aria-label="Why Varahi exists">
    <OrbField variant="practice" />
    <VortexFigure />

    <div className="vn-ph__stage">
      <p className="vn-ph__eyebrow">The practice</p>

      <h1 className="vn-ph__claim">
        {CLAIM.map((line, i) => (
          <span className="vn-ph__line" key={line}>
            <span style={{ '--wait': `${0.1 + i * 0.09}s` } as React.CSSProperties}>{line}</span>
          </span>
        ))}
      </h1>

      <p className="vn-ph__beat">Varahi exists in the gap.</p>

      <p className="vn-ph__support">{thesis[0]}</p>

      <div className="vn-ph__four">
        {FOUR.map((row) => (
          <div className="vn-ph__row" key={row.who}>
            <span className="vn-ph__who">{row.who}</span>
            <span className="vn-ph__miss">{row.miss}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GapHero;
