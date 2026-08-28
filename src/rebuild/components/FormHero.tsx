/**
 * FormHero — the Approach page.
 *
 * The only hero on the site where the drawing carries the argument instead of
 * setting a tone. The tail figure below the copy shows a statement of work
 * ending at go-live and the engagement continuing past it, off the edge of the
 * screen — which is the claim the Home page makes in words, proved here in
 * the shape of the method.
 */
import React from 'react';
import { operatingPrinciples } from '../../data/varahiVision';
import TailFigure from './geometry/TailFigure';
import OrbField from './OrbField';
import '../../styles/page-hero.css';

const CLAIM = ['We give the program', 'its FORM.'];

const FormHero: React.FC = () => (
  <section className="vn-ph vn-ph--form vn-hero-bleed" aria-label="The FORM method">
    <OrbField variant="approach" />

    <div className="vn-ph__stage">
      <p className="vn-ph__eyebrow">The approach</p>

      <h1 className="vn-ph__claim">
        {CLAIM.map((line, i) => (
          <span className="vn-ph__line" key={line}>
            <span style={{ '--wait': `${0.1 + i * 0.09}s` } as React.CSSProperties}>
              {i === CLAIM.length - 1 ? (
                <>
                  its <span className="vn-ph__word">FORM</span>.
                </>
              ) : (
                line
              )}
            </span>
          </span>
        ))}
      </h1>

      <p className="vn-ph__beat">And then we stay.</p>

      <p className="vn-ph__support">
        Frame, Orchestrate, Realize, Maintain. Three of those four are what every firm sells you.
        The fourth is where the value either sticks or quietly erodes, and it is the one the
        contract usually stops short of.
      </p>

      <div className="vn-ph__four">
        {operatingPrinciples.map((line) => (
          <div className="vn-ph__row" key={line}>
            <span className="vn-ph__miss" style={{ gridColumn: '1 / -1' }}>
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>

    <TailFigure />
  </section>
);

export default FormHero;
