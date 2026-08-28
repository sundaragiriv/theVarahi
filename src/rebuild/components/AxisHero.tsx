/**
 * AxisHero — the Home page.
 *
 * The homepage owns exactly one thing: the promise. It does not preview the
 * method, the record or the practice — it links to them. That is what stops
 * this page being a smaller copy of every other page on the site.
 *
 * The claim is Territory D. The construction behind it is four-fold because
 * the method is FORM, and the fourth node — Maintain — is the turmeric one,
 * because Maintain is the step the headline is about.
 *
 * Depth opens in a sheet rather than below the fold, so the hero is exactly
 * one screen tall and never asks you to scroll to find the argument.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { locations, methodSteps, operatingPrinciples } from '../../data/varahiVision';
import AxisFigure from './geometry/AxisFigure';
import OrbField from './OrbField';
import DetailSheet from './DetailSheet';
import '../../styles/hero-axis.css';

/** Broken where the line should break, not where the container decides. */
const CLAIM = ['Most transformations die', 'the day the', 'consultants leave.'];

const AxisHero: React.FC = () => {
  const [openMethod, setOpenMethod] = useState(false);

  return (
    <section className="vn-axh vn-hero-bleed" aria-label="Transformations that outlive the engagement">
      <OrbField variant="home" />
      <AxisFigure />

      <div className="vn-axh__stage">
        <p className="vn-axh__eyebrow">{locations.join(' · ')}</p>

        <h1 className="vn-axh__claim">
          {CLAIM.map((line, i) => (
            <span className="vn-axh__line" key={line}>
              <span style={{ '--wait': `${0.1 + i * 0.09}s` } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>

        <p className="vn-axh__beat">Ours don&rsquo;t.</p>

        <p className="vn-axh__support">
          We stay through hypercare into managed evolution. The platform is handed over when it is
          genuinely yours &mdash; not when the statement of work runs out.
        </p>

        <div className="vn-axh__acts">
          <button className="vn-axh__cta" type="button" onClick={() => setOpenMethod(true)}>
            <span>How we stay</span>
            <ArrowRight size={17} strokeWidth={2} />
          </button>
          <Link className="vn-axh__quiet" to="/engage">
            Start a conversation
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      <div className="vn-axh__rail">
        {operatingPrinciples.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>

      <DetailSheet
        open={openMethod}
        onClose={() => setOpenMethod(false)}
        kicker="The FORM method"
        title="Four steps. The fourth is the one nobody sells you."
      >
        <div className="vn-form-grid">
          {methodSteps.map((step, i) => (
            <article
              key={step.letter}
              className={`vn-form-step${i === methodSteps.length - 1 ? ' vn-form-step--hold' : ''}`}
            >
              <span className="vn-form-step__letter">{step.letter}</span>
              <h3>{step.label}</h3>
              <p className="vn-form-step__meta">{step.meta}</p>
              <p>{step.text}</p>
              <p className="vn-form-step__gets">{step.gets}</p>
              <p className="vn-form-step__risk">{step.risk}</p>
            </article>
          ))}
        </div>
        <p className="vn-form-note">
          The whole method, in order, on{' '}
          <Link to="/approach" onClick={() => setOpenMethod(false)}>
            the Approach page
          </Link>
          .
        </p>
      </DetailSheet>
    </section>
  );
};

export default AxisHero;
