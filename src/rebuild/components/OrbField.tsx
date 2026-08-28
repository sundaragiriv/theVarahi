/**
 * OrbField — the slow colour atmosphere behind a hero.
 *
 * One component, a different palette and placement per page, so no two pages
 * share the same background. Everything is CSS: three divs on long unequal
 * periods, no rAF loop and nothing for React to re-render.
 *
 * See src/styles/orb-field.css for the per-page variants.
 */
import React from 'react';
import '../../styles/orb-field.css';

export type OrbVariant = 'home' | 'practice' | 'approach';

const OrbField: React.FC<{ variant: OrbVariant }> = ({ variant }) => (
  <div className={`vn-orbs vn-orbs--${variant}`} aria-hidden="true">
    <span className="vn-orbs__o" />
    <span className="vn-orbs__o" />
    <span className="vn-orbs__o" />
  </div>
);

export default OrbField;
