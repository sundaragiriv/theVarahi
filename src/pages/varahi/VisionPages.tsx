import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Layers3,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';
import {
  aiPrinciples,
  entryPoints,
  locations,
  marqueeClients,
  owner,
  principal,
  methodSteps,
  operatingPrinciples,
  pillarOrder,
  pillars,
  PillarKey,
  proofStandards,
  stats,
  testimonials,
  thesis,
  thinkingCategories,
} from '../../data/varahiVision';
import { allContent, caseStudies, insights } from '../../data/content.generated';
import type { CaseStudy, Insight } from '../../data/content.generated';

const pageTitle = (title: string) => `${title} | Varahi`;

const heroStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Seo: React.FC<{ title: string; description: string; path?: string }> = ({
  title,
  description,
  path = '',
}) => (
  <Helmet>
    <title>{pageTitle(title)}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://thevarahi.com${path}`} />
  </Helmet>
);

const ArrowLink: React.FC<{ to: string; children: React.ReactNode; variant?: 'primary' | 'quiet' }> = ({
  to,
  children,
  variant = 'quiet',
}) => (
  <Link className={`vn-button vn-button--${variant}`} to={to}>
    <span>{children}</span>
    <ArrowRight size={17} strokeWidth={1.8} />
  </Link>
);

const SectionIntro: React.FC<{
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'center' | 'split';
}> = ({ eyebrow, title, text, align = 'split' }) => (
  <div className={`vn-section-intro vn-section-intro--${align}`}>
    <div>
      {eyebrow && <p className="vn-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
    {text && <p>{text}</p>}
  </div>
);

const PillarGlyph: React.FC<{ pillar: PillarKey }> = ({ pillar }) => {
  const icons = {
    sap: Layers3,
    ai: Network,
    cx: Users,
  };
  const Icon = icons[pillar];
  return (
    <span className={`vn-glyph vn-glyph--${pillar}`} aria-hidden="true">
      <Icon size={22} strokeWidth={1.7} />
    </span>
  );
};

const PillarCards: React.FC = () => (
  <div className="vn-pillar-grid">
    {pillarOrder.map((key) => {
      const pillar = pillars[key];
      return (
        <Link className={`vn-pillar-card vn-pillar-card--${key}`} to={pillar.path} key={key}>
          <PillarGlyph pillar={key} />
          <p className="vn-card-kicker">{pillar.eyebrow}</p>
          <h3>{pillar.label}</h3>
          <p>{pillar.short}</p>
          <span className="vn-card-link">
            Explore {pillar.label}
            <ArrowRight size={16} />
          </span>
        </Link>
      );
    })}
  </div>
);

const Artifact: React.FC<{ title: string; rows: readonly string[]; tone?: PillarKey | 'neutral' }> = ({
  title,
  rows,
  tone = 'neutral',
}) => (
  <div className={`vn-artifact vn-artifact--${tone}`}>
    <div className="vn-artifact__head">
      <FileText size={17} strokeWidth={1.8} />
      <span>{title}</span>
    </div>
    <div className="vn-artifact__rows">
      {rows.map((row) => (
        <span key={row}>{row}</span>
      ))}
    </div>
  </div>
);

export const HomeVisionPage: React.FC = () => {
  const reduce = useReducedMotion();
  return (
  <>
    <Seo
      title="Enterprise Software That Thinks"
      description="Varahi engineers SAP, AI, and customer experience as one design problem — not three procurements. Service-led enterprise delivery across Raleigh, India, and Canada."
    />
    <section className="vn-hero">
      <div className="vn-hero-motion" aria-hidden="true">
        <span className="vn-hero-motion__band vn-hero-motion__band--one" />
        <span className="vn-hero-motion__band vn-hero-motion__band--two" />
        <span className="vn-hero-motion__mesh" />
        <span className="vn-hero-motion__pulse vn-hero-motion__pulse--one" />
        <span className="vn-hero-motion__pulse vn-hero-motion__pulse--two" />
      </div>
      <div className="vn-container vn-hero__stage">
        <motion.div
          className="vn-hero__topline"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="vn-eyebrow">Now operating · {locations.join(' · ')}</p>
          <dl className="vn-hero__meta">
            <div>
              <dt>Focus</dt>
              <dd>Service-led enterprise</dd>
            </div>
            <div>
              <dt>Sectors</dt>
              <dd>Utilities · Industrial · Manufacturing</dd>
            </div>
            <div>
              <dt>Model</dt>
              <dd>Principal-led delivery</dd>
            </div>
          </dl>
        </motion.div>
        <div className="vn-hero__grid">
          <motion.div
            className="vn-hero__copy"
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={heroStagger}
          >
            <motion.h1 variants={heroFadeUp}>Enterprise Software That Thinks.</motion.h1>
            <motion.p className="vn-hero__sub" variants={heroFadeUp}>
              SAP × AI × CX — engineered as one.
            </motion.p>
            <motion.p variants={heroFadeUp}>
              The firms that win the next decade will treat SAP, AI, and customer experience as
              one design problem, not three procurements. Varahi is the firm you call when all
              three need to land on the same calendar, with the same delivery lead.
            </motion.p>
            <motion.div className="vn-actions" variants={heroFadeUp}>
              <ArrowLink to="/practice" variant="primary">See the practice</ArrowLink>
              <ArrowLink to="/engage">Start a conversation</ArrowLink>
            </motion.div>
          </motion.div>

          <motion.aside
            className="vn-hero-stack"
            aria-label="The intelligent stack"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="vn-hero-stack__head">
              <span className="vn-hero-stack__label">The intelligent stack</span>
              <span className="vn-hero-stack__live"><i />running</span>
            </div>
            <div className="vn-hero-stack__body">
              <span className="vn-hero-stack__spine" aria-hidden="true">
                {!reduce && <span className="vn-hero-stack__pulse" />}
              </span>
              {pillarOrder.map((key, index) => {
                const pillar = pillars[key];
                return (
                  <motion.div
                    key={key}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link className="vn-hero-stack__layer" to={pillar.path}>
                      <span className="vn-hero-stack__glyph">
                        <PillarGlyph pillar={key} />
                      </span>
                      <span className="vn-hero-stack__text">
                        <strong>{pillar.label}</strong>
                        <small>{pillar.layer}</small>
                      </span>
                      <span className="vn-hero-stack__num">{String(index + 1).padStart(2, '0')}</span>
                      <ArrowRight className="vn-hero-stack__arrow" size={16} strokeWidth={1.9} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="vn-hero-stack__foot">
              <span>One backlog</span>
              <span>One delivery lead</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>

    <section className="vn-section vn-section--paper vn-cred">
      <div className="vn-container">
        <p className="vn-eyebrow">Built on a delivery record</p>
        <div className="vn-cred__stats">
          {stats.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
        <p className="vn-cred__label">Enterprises we&rsquo;ve architected for</p>
        <ul className="vn-cred__clients" aria-label="Enterprises architected for">
          {marqueeClients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="vn-section">
      <div className="vn-container">
        <SectionIntro
          eyebrow="What we do"
          title="Platform, cognition, human — engineered as one."
          text="SAP, AI, and CX are one design problem, not three procurements. Start with the layer that hurts; the rest joins the same backlog."
        />
        <PillarGateway />
        <div className="vn-section__more">
          <ArrowLink to="/practice">See the whole practice</ArrowLink>
        </div>
      </div>
    </section>

    <section className="vn-section vn-section--paper">
      <div className="vn-container">
        <SectionIntro
          eyebrow="Selected work"
          title="A delivery record you can check."
          text="Named clients, named roles, real numbers — programs we've architected across 23 years, from autonomous fleets to regulated medical equipment. Principal-led, so the work is checkable."
        />
        <div className="vn-thinking-grid">
          {caseStudies.slice(0, 3).map((entry) => (
            <ContentCard entry={entry} key={`${entry.kind}-${entry.slug}`} />
          ))}
        </div>
        <div className="vn-section__more">
          <ArrowLink to="/our-thinking?view=work">See all work</ArrowLink>
        </div>
      </div>
    </section>

    <section className="vn-section">
      <div className="vn-container">
        <SectionIntro
          eyebrow="From our thinking"
          title="Where SAP, AI, and CX actually meet."
          text="Points of view from 23 years in SAP service — and where most programs quietly go wrong before anyone writes code."
        />
        <div className="vn-thinking-grid">
          {insights.slice(0, 3).map((entry) => (
            <ContentCard entry={entry} key={`${entry.kind}-${entry.slug}`} />
          ))}
        </div>
        <div className="vn-section__more">
          <ArrowLink to="/our-thinking?view=insights">See all insights</ArrowLink>
        </div>
      </div>
    </section>

    <section className="vn-section vn-section--paper">
      <div className="vn-container vn-two-col">
        <SectionIntro
          eyebrow="How we work"
          title="FORM: Frame. Orchestrate. Realize. Maintain."
          text="We start with what hurts, prove it in software fast, build it for production, and stay long enough to be sure it sticks. One delivery lead, one backlog, one number to call."
        />
        <div className="vn-form-teaser">
          {methodSteps.map((step) => (
            <Link className="vn-form-teaser__item" to="/approach" key={step.letter}>
              <strong>{step.letter}</strong>
              <span>{step.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <FinalCta />
  </>
  );
};

const PillarGateway: React.FC = () => (
  <div className="vn-gateway-grid">
    {pillarOrder.map((key) => {
      const pillar = pillars[key];
      const entry = entryPoints.find((item) => item.path === pillar.path);
      return (
        <Link className={`vn-gateway-card vn-gateway-card--${key}`} to={pillar.path} key={key}>
          <span className="vn-gateway-card__icon" aria-hidden="true">
            <PillarGlyph pillar={key} />
          </span>
          <span>{entry?.prompt}</span>
          <h3>{pillar.label}</h3>
          <p>{pillar.short}</p>
          <strong>
            {entry?.response}
            <ArrowRight size={16} />
          </strong>
        </Link>
      );
    })}
    <Link className="vn-gateway-card vn-gateway-card--neutral" to="/engage">
      <span className="vn-gateway-card__icon" aria-hidden="true">
        <ShieldCheck size={20} strokeWidth={1.8} />
      </span>
      <span>I am not sure where to start.</span>
      <h3>Discovery</h3>
      <p>Bring the SAP estate, the AI ambition, or the customer journey you need to move.</p>
      <strong>
        Start here
        <ArrowRight size={16} />
      </strong>
    </Link>
  </div>
);


export const PillarVisionPage: React.FC<{ pillarKey: PillarKey }> = ({ pillarKey }) => {
  const pillar = pillars[pillarKey];

  return (
    <>
      <Seo title={pillar.label} description={pillar.headline} path={pillar.path} />
      <section className={`vn-page-hero vn-page-hero--${pillarKey}`}>
        <div className="vn-container vn-page-hero__grid">
          <div>
            <p className="vn-eyebrow">{pillar.layer}</p>
            <h1>{pillar.label}</h1>
            <p className="vn-page-hero__lede">{pillar.headline}</p>
            <div className="vn-signal-row">
              {pillar.signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
          <Artifact title="What you leave with" rows={pillar.deliverables.slice(0, 6)} tone={pillarKey} />
        </div>
      </section>

      <section className="vn-section">
        <div className="vn-container vn-two-col">
          <div>
            <p className="vn-eyebrow">Why it matters</p>
            <h2>{pillar.promise}</h2>
          </div>
          <div className="vn-check-list">
            {pillar.owns.map((item) => (
              <p key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <PillarSignature pillarKey={pillarKey} />

      <section className="vn-section vn-section--paper">
        <div className="vn-container">
          <SectionIntro
            eyebrow="Deliverables"
            title="Concrete outputs, not vague activity."
            text={`Every ${pillar.label} engagement leaves you with artifacts you can use, hand over, and defend at the audit committee — not a deck.`}
          />
          <div className="vn-deliverable-grid">
            {pillar.deliverables.map((item) => (
              <article key={item}>
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vn-section">
        <div className="vn-container vn-two-col">
          <SectionIntro
            eyebrow="Proof"
            title={`How we prove ${pillar.label} work.`}
            text="Every number we publish maps to a real engagement — the decision made, the system it touched, and the result once it reached production."
          />
          <Artifact title="What our proof shows" rows={pillar.proof} tone={pillarKey} />
        </div>
      </section>

      <section className="vn-section vn-section--ink">
        <div className="vn-container">
          <SectionIntro
            eyebrow="The whole practice"
            title="Start with this layer. The others join the same backlog."
            text="Most engagements begin with one layer and grow as the work earns it — SAP, AI, and CX under one delivery lead, one status, one number to call."
          />
          <PillarCards />
        </div>
      </section>

      <FinalCta />
    </>
  );
};

export const WhatWeDoPage: React.FC = () => {
  const [active, setActive] = useState<PillarKey>('sap');
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="The Practice"
        description="Varahi runs SAP, AI, and CX as three layers of one practice — platform, cognition, and human — on a single backlog with one delivery lead."
        path="/practice"
      />
      <section className="vn-what-we-do-hero">
        <div className="vn-container vn-what-we-do-hero__layout">
          <div className="vn-what-we-do-hero__intro">
            <p className="vn-eyebrow">The practice</p>
            <h1>One team. Three layers. A single backlog.</h1>
            <p>
              Platform, cognition, and human — SAP, AI, and CX, run by one team on one backlog.
              Open a layer to see what it covers; click through for the full picture.
            </p>
          </div>

          <div className="vn-layers-accordion" role="tablist" aria-label="The three layers">
            {pillarOrder.map((key, index) => {
              const pillar = pillars[key];
              const entry = entryPoints.find((item) => item.path === pillar.path);
              const isOpen = active === key;

              return (
                <div
                  key={key}
                  className={`vn-layer vn-layer--${key}${isOpen ? ' is-open' : ''}`}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isOpen}
                  aria-label={`${pillar.label} — ${pillar.layer}`}
                  onMouseEnter={() => setActive(key)}
                  onFocus={() => setActive(key)}
                  onClick={() => navigate(pillar.path)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      navigate(pillar.path);
                    }
                  }}
                >
                  <span className="vn-layer__spine" aria-hidden={isOpen}>
                    <span className="vn-layer__num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="vn-layer__spine-label">
                      {pillar.label} · {pillar.layer.replace('The ', '')}
                    </span>
                    <span className="vn-layer__spine-glyph">
                      <PillarGlyph pillar={key} />
                    </span>
                  </span>

                  <span className="vn-layer__body" aria-hidden={!isOpen}>
                    <span className="vn-layer__glyph">
                      <PillarGlyph pillar={key} />
                    </span>
                    <span className="vn-layer__kicker">{pillar.layer}</span>
                    <span className="vn-layer__name">{pillar.label}</span>
                    <span className="vn-layer__desc">{pillar.headline}</span>
                    <ul className="vn-layer__caps">
                      {pillar.owns.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="vn-layer__cta">
                      {entry?.prompt}
                      <ArrowRight size={17} strokeWidth={1.9} />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vn-section vn-section--paper">
        <div className="vn-container">
          <SectionIntro
            eyebrow="Why one team"
            title="Most firms hand you a slice. We run all three in the same room."
            text="The implementer, the data team, the experience consultancy — three procurements, three roadmaps, three people to point at when it stalls. Varahi runs SAP, AI, and CX on one backlog, with one delivery lead."
          />
          <div className="vn-combine-grid">
            {[
              ['SAP without AI', 'A new SAP estate without an AI plan is already obsolete.'],
              ['AI without a foundation', 'AI without a clean data and process foundation is theatre.'],
              ['Both without CX', 'Both without CX is just a more expensive way to disappoint customers.'],
            ].map(([term, line]) => (
              <article key={term}>
                <span>{term}</span>
                <p>{line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
};

const PillarSignature: React.FC<{ pillarKey: PillarKey }> = ({ pillarKey }) => {
  if (pillarKey === 'sap') {
    return (
      <section className="vn-section vn-sap-signature">
        <div className="vn-container">
          <SectionIntro
            eyebrow="SAP delivery map"
            title="From landscape pressure to controlled modernization."
            text="The SAP page should feel like systems architecture: layers, dependencies, constraints, and practical delivery paths."
          />
          <div className="vn-sap-stack" aria-label="SAP delivery layers">
            {['Core', 'Process', 'Integration', 'Extension', 'Operations'].map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (pillarKey === 'ai') {
    return (
      <section className="vn-section vn-ai-signature">
        <div className="vn-container">
          <SectionIntro
            eyebrow="Production principles"
            title="We embed AI where it pays back — and we ship it under control."
            text="Not generic chatbots. Four principles govern every workload before it reaches production."
          />
          <div className="vn-principle-grid" aria-label="AI production principles">
            {aiPrinciples.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="vn-section vn-cx-signature">
      <div className="vn-container">
        <SectionIntro
          eyebrow="Journey before configuration"
          title="We map what the customer feels, then shape the platform to match."
          text="A new SAP estate without an AI plan is already obsolete. AI without a clean data and process foundation is theatre. Both without CX is just a more expensive way to disappoint customers."
        />
        <div className="vn-journey-flow" aria-label="Service journey">
          {['Feel', 'Journey', 'Channel', 'Case', 'Resolution', 'Adoption'].map((item, index) => (
            <React.Fragment key={item}>
              <article className="vn-journey-flow__node">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </article>
              {index < 5 && <div className="vn-journey-flow__link" aria-hidden="true">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowWeWorkPage: React.FC = () => (
  <>
    <Seo
      title="The Approach — FORM"
      description="FORM: Frame, Orchestrate, Realize, Maintain. Senior delivery on a single backlog, production from day one, and a handover you genuinely own."
      path="/approach"
    />
    <section className="vn-section vn-method-strength">
      <div className="vn-container">
        <div className="vn-method-strength__hero">
          <div>
            <p className="vn-eyebrow">The approach</p>
            <h1>We give the program its <span className="vn-form-word">FORM</span>.</h1>
            <p>
              Frame, Orchestrate, Realize, Maintain — from the first interview to managed evolution.
              We start with what hurts, design the smallest defensible answer, build it for production
              from day one, and stay long enough to be sure it sticks.
            </p>
          </div>
          <div className="vn-method-strength__proof">
            {operatingPrinciples.map((item) => (
              <p key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>

        <ol className="vn-form-mark" aria-label="FORM — Frame, Orchestrate, Realize, Maintain">
          {methodSteps.map((step) => (
            <li key={step.letter}>
              <strong>{step.letter}</strong>
              <span>{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="vn-section">
      <div className="vn-container">
        <div className="vn-form-phases">
          {methodSteps.map((step, index) => (
            <article className="vn-form-phase" key={step.label}>
              <div className="vn-form-phase__head">
                <span className="vn-form-phase__letter" aria-hidden="true">{step.letter}</span>
                <div className="vn-form-phase__title">
                  <h3>{step.label}</h3>
                  <small className="vn-method-card__meta">{step.meta}</small>
                </div>
                <span className="vn-form-phase__num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="vn-form-phase__lede">{step.text}</p>
              <div className="vn-form-phase__foot">
                <p>
                  <span>You leave with</span>
                  {step.gets}
                </p>
                <p className="vn-form-phase__risk">
                  <span>Skip it</span>
                  {step.risk}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="vn-section vn-section--paper">
      <div className="vn-container">
        <SectionIntro
          eyebrow="Where to begin"
          title="Start with the layer that hurts. The rest joins the same backlog."
          text="Begin with SAP, AI, or CX — or a discovery conversation. The engagement expands only when the work earns it."
        />
        <div className="vn-entry-grid">
          {entryPoints.map((item) => (
            <Link className="vn-entry-card" to={item.path} key={item.prompt}>
              <strong>{item.response}</strong>
              <p>{item.detail}</p>
              <ArrowRight size={17} />
            </Link>
          ))}
        </div>
      </div>
    </section>
    <FinalCta />
  </>
);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const ContentCard: React.FC<{ entry: CaseStudy | Insight }> = ({ entry }) => {
  const isWork = entry.kind === 'work';
  const to = `/our-thinking/${entry.kind}/${entry.slug}`;
  return (
    <Link className={`vn-thinking-card vn-thinking-card--${entry.pillar}`} to={to}>
      <div className="vn-thinking-card__meta">
        <span>{isWork ? 'Case study' : 'Insight'}</span>
        <strong>{pillars[entry.pillar].label}</strong>
      </div>
      <h2>{entry.title}</h2>
      <p>{entry.description}</p>

      {isWork && (
        <div className="vn-thinking-card__metrics">
          {(entry as CaseStudy).metrics.slice(0, 2).map((m) => (
            <span key={m.label}>
              <strong>{m.value}</strong>
              {m.label}
            </span>
          ))}
        </div>
      )}

      <div className="vn-thinking-card__foot">
        <span>
          {isWork
            ? `${(entry as CaseStudy).industry} · ${(entry as CaseStudy).year}`
            : formatDate(entry.pubDate)}
        </span>
        <span>{entry.readingMinutes} min read</span>
      </div>
    </Link>
  );
};

export const ProofPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const viewParam = searchParams.get('view');
  const filter: 'all' | 'work' | 'insights' =
    viewParam === 'work' || viewParam === 'insights' ? viewParam : 'all';

  const setFilter = (next: 'all' | 'work' | 'insights') => {
    setSearchParams(next === 'all' ? {} : { view: next }, { replace: true });
  };

  const shown =
    filter === 'all' ? allContent : allContent.filter((entry) => entry.kind === filter);

  return (
    <>
      <Seo
        title="Our Thinking"
        description="Case studies from delivered engagements and points of view on SAP, AI, and customer experience. Clients anonymized, metrics as measured."
        path="/our-thinking"
      />
      <section className="vn-proof-hero">
        <div className="vn-proof-hero__motion" aria-hidden="true" />
        <div className="vn-container vn-proof-hero__layout">
          <div className="vn-proof-hero__copy">
            <p className="vn-eyebrow">Our Thinking</p>
            <h1>A delivery record, not a brochure.</h1>
            <p>
              {caseStudies.length} engagements we've architected — from autonomous fleets to regulated
              medical equipment — and {insights.length} points of view from 23 years in SAP service.
              Real clients, real numbers, honestly attributed.
            </p>
          </div>
          <div className="vn-proof-hero__filters">
            <div className="vn-proof-filters" role="tablist" aria-label="Filter content">
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'all'}
                className={filter === 'all' ? 'is-active' : undefined}
                onClick={() => setFilter('all')}
              >
                Everything ({allContent.length})
              </button>
              {thinkingCategories.map((item) => (
                <button
                  type="button"
                  role="tab"
                  key={item.key}
                  aria-selected={filter === item.key}
                  className={filter === item.key ? 'is-active' : undefined}
                  onClick={() => setFilter(item.key)}
                >
                  {item.title} ({item.key === 'work' ? caseStudies.length : insights.length})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vn-section">
        <div className="vn-container">
          <div className="vn-thinking-grid">
            {shown.map((entry) => (
              <ContentCard entry={entry} key={`${entry.kind}-${entry.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="vn-section vn-section--paper">
        <div className="vn-container vn-two-col">
          <SectionIntro
            eyebrow="Proof standard"
            title="Real engagements. Honestly attributed."
            text="Every case study here is delivery our VP, Venkata Sundaragiri, led as architect — named clients, named roles, real numbers. Varahi is a principal-led practice, so this track record is the practice's proof. We won't publish a number we can't stand behind."
          />
          <Artifact title="Our proof standard" rows={proofStandards} />
        </div>
      </section>
      <FinalCta />
    </>
  );
};

export const ArticlePage: React.FC<{ kind: 'work' | 'insights' }> = ({ kind }) => {
  const { slug } = useParams<{ slug: string }>();
  const source = kind === 'work' ? caseStudies : insights;
  const entry = source.find((item) => item.slug === slug);

  if (!entry) return <NotFoundVisionPage />;

  const isWork = entry.kind === 'work';
  const study = entry as CaseStudy;
  const related = allContent
    .filter((item) => item.pillar === entry.pillar && item.slug !== entry.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={entry.title}
        description={entry.description}
        path={`/our-thinking/${entry.kind}/${entry.slug}`}
      />

      <section className="vn-article-hero">
        <div className="vn-container vn-article-hero__inner">
          <p className="vn-eyebrow">
            <Link to="/our-thinking">Our Thinking</Link>
            <span aria-hidden="true"> / </span>
            {isWork ? 'Case study' : 'Insight'}
            <span aria-hidden="true"> / </span>
            <Link to={pillars[entry.pillar].path}>{pillars[entry.pillar].label}</Link>
          </p>
          <h1>{entry.title}</h1>
          <p className="vn-article-hero__lede">{entry.description}</p>
          <div className="vn-article-hero__meta">
            {isWork ? (
              <>
                <span><small>Client</small>{study.client}</span>
                <span><small>Industry</small>{study.industry}</span>
                <span><small>Year</small>{study.year}</span>
              </>
            ) : (
              <>
                <span><small>Published</small>{formatDate(entry.pubDate)}</span>
                <span><small>Read</small>{entry.readingMinutes} min</span>
              </>
            )}
          </div>
          {isWork && study.role && (
            <p className="vn-article-hero__provenance">
              Delivery led by {principal.name}, VP of SAP &amp; AI Consulting — <strong>{study.role}</strong>.
            </p>
          )}
        </div>
      </section>

      {isWork && study.metrics.length > 0 && (
        <section className="vn-section vn-section--paper">
          <div className="vn-container">
            <p className="vn-eyebrow">Outcomes</p>
            <div className="vn-metric-grid">
              {study.metrics.map((metric) => (
                <article key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="vn-section">
        <div className="vn-container">
          <article className="vn-prose" dangerouslySetInnerHTML={{ __html: entry.html }} />
          <div className="vn-article-tags">
            {entry.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="vn-section vn-section--paper">
          <div className="vn-container">
            <SectionIntro
              eyebrow="Related"
              title={`More on ${pillars[entry.pillar].label}.`}
            />
            <div className="vn-thinking-grid">
              {related.map((item) => (
                <ContentCard entry={item} key={`${item.kind}-${item.slug}`} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
};

/**
 * Contact form.
 *
 * Set VITE_CONTACT_ENDPOINT in .env to a form endpoint (Formspree, Netlify Forms,
 * Basin, or your own handler) and submissions POST there as JSON.
 *
 * If that variable is NOT set, the form falls back to opening the visitor's mail
 * client with everything pre-filled. Deliberate: a fallback that works beats a
 * button that silently does nothing, which is what shipped before.
 */
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'hello@thevarahi.com';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

const ContactPanel: React.FC<{
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
}> = ({ eyebrow, title, text, buttonLabel }) => {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setError('Name, email and a short description are required.');
      setState('error');
      return;
    }

    setError(null);
    setState('sending');

    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`Varahi enquiry — ${data.interest || 'General'} — ${data.company || data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || '—'}\nInterest: ${data.interest || '—'}\n\n${data.message}`,
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setState('sent');
      form.reset();
      return;
    }

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      setState('sent');
      form.reset();
    } catch {
      setState('error');
      setError(`Something went wrong sending that. Email ${CONTACT_EMAIL} directly and we will pick it up.`);
    }
  };

  return (
    <section className="vn-section" id="contact">
      <div className="vn-container vn-contact-panel">
        <div>
          <p className="vn-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <p className="vn-contact-panel__direct">
            Or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.
          </p>
        </div>

        {state === 'sent' ? (
          <div className="vn-form vn-form--sent" role="status">
            <CheckCircle2 size={26} strokeWidth={1.7} />
            <h3>Message sent.</h3>
            <p>We read every one. Expect a reply within a business day.</p>
            <button
              className="vn-button vn-button--quiet"
              type="button"
              onClick={() => setState('idle')}
            >
              <span>Send another</span>
            </button>
          </div>
        ) : (
          <form className="vn-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />
            <label>
              Name
              <input name="name" placeholder="Your name" autoComplete="name" required />
            </label>
            <label>
              Work email
              <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
            </label>
            <label>
              Company
              <input name="company" placeholder="Company" autoComplete="organization" />
            </label>
            <label>
              Interest area
              <select name="interest" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>SAP — Platform</option>
                <option>AI — Cognition</option>
                <option>CX — Human</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              What are you trying to improve?
              <textarea
                name="message"
                placeholder="Briefly describe the system, strategy, or workflow."
                rows={4}
                required
              />
            </label>

            {error && (
              <p className="vn-form__error" role="alert">
                {error}
              </p>
            )}

            <button className="vn-button vn-button--primary" type="submit" disabled={state === 'sending'}>
              <span>{state === 'sending' ? 'Sending…' : buttonLabel}</span>
              <ArrowRight size={17} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export const AboutVisionPage: React.FC = () => (
  <>
    <Seo
      title="About"
      description="Varahi is an independent enterprise consulting firm that treats SAP, AI, and customer experience as one design problem. Senior, deliberately small, delivery-led."
      path="/about"
    />
    <section className="vn-about-hero">
      <div className="vn-container vn-about-hero__layout">
        <div>
          <p className="vn-eyebrow">Who we are</p>
          <h1>Independent enterprise consulting firm.</h1>
          <p>
            A women-owned practice that exists in the gap between the SI firms that compete on hours,
            the strategy houses that make decks, and the AI shops that can't ship inside an enterprise
            estate. Senior, deliberately small, delivery-led.
          </p>
        </div>
        <div className="vn-about-hero__metrics">
          {[
            ['Ownership', 'Women-owned'],
            ['Leadership', 'CEO + delivery VP'],
            ['Model', 'SAP, AI, and CX in one room'],
            ['Delivery', locations.join(' · ')],
          ].map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="vn-section vn-about-thesis">
      <div className="vn-container vn-about-thesis__grid">
        <div className="vn-about-thesis__lead-col">
          <p className="vn-eyebrow">The thesis</p>
          <p className="vn-about-thesis__lead">{thesis[0]}</p>
        </div>
        <div className="vn-about-thesis__rest">
          {thesis.slice(1).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>

    <section className="vn-section vn-section--paper">
      <div className="vn-container">
        <SectionIntro
          eyebrow="Since 2009"
          title="One practice. Twenty-three years in SAP."
          text="Varahi is the name today for an enterprise SAP practice that has run independently since 2009 — and a delivery record that reaches back 23 years, from the first CRM rollouts to today's S/4HANA and applied-AI estates."
        />
        <div className="vn-origin">
          <p>
            The through-line has never changed: asset-intensive, engineered-equipment businesses
            where uptime and aftermarket service are the whole game — autonomous fleets, industrial
            robotics, heavy machinery, forest products, medical capital equipment. The same hard
            problem, solved end to end.
          </p>
          <p>
            Deliberately small and principal-led. When you engage Varahi you get the architect who
            scoped the work — not a pyramid billing beneath him.
          </p>
        </div>
      </div>
    </section>

    <section className="vn-section">
      <div className="vn-container">
        <SectionIntro
          eyebrow="Leadership"
          title="A women-owned practice. Principal-led delivery."
          text="Varahi is founded and led by CEO Naga Poornima, with SAP and AI delivery run by VP Venkata Sundaragiri — so you always know exactly who owns the vision and who is accountable for the work."
        />
        <div className="vn-leadership">
          {[owner, principal].map((person, index) => (
            <article
              className={`vn-leader-row${index % 2 === 1 ? ' vn-leader-row--reverse' : ''}`}
              key={person.name}
            >
              <div className="vn-leader-row__media">
                <div className="vn-leader-row__frame" aria-hidden={person.photo ? undefined : 'true'}>
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} />
                  ) : (
                    <span className="vn-founder__monogram">{person.initials}</span>
                  )}
                </div>
              </div>
              <div className="vn-leader-row__body">
                <h3>{person.name}</h3>
                <p className="vn-founder__title">{person.title}</p>
                <p className="vn-leader-row__bio">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="vn-section vn-section--paper">
      <div className="vn-container">
        <SectionIntro
          eyebrow="References"
          title="In the words of the people who hired him."
        />
        <div className="vn-testimonial-grid">
          {testimonials.map((item) => (
            <figure className="vn-testimonial" key={item.name}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="vn-section">
      <div className="vn-container vn-about-principles">
        <SectionIntro
          eyebrow="Operating beliefs"
          title="What we optimize for in every engagement."
          text="These are not brand statements. They are working constraints used to make delivery and architecture decisions under pressure."
        />
        <div className="vn-check-list">
          {[
            'One design problem, not three procurements — SAP, AI, and CX on a single backlog.',
            'Senior delivery, no pyramid — the architects who scoped the work run it.',
            'Production from day one — no prototypes that need a rebuild to ship.',
            'Governance before autonomous action; no synthetic proof or inflated claims.',
            `One integrated delivery rhythm across ${locations.join(', ')}.`,
          ].map((item) => (
            <p key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
    <FinalCta />
  </>
);

export const EngagePage: React.FC = () => (
  <>
    <Seo
      title="Engage"
      description="Tell us what you're trying to build. Brief is fine — we come back within a business day with questions, a scoping conversation, or an honest referral."
      path="/engage"
    />
    <SimpleHero
      eyebrow="Engage"
      title="Tell us what you're trying to build."
      text="Brief is fine. We'll come back within a business day with either questions, a scoping conversation, or an honest 'this isn't us — try X' recommendation."
    />
    <ContactPanel
      eyebrow="Discovery"
      title="Bring the SAP estate, the AI ambition, or the customer journey."
      text="Name, work email, company, interest area, and one open field: what are you trying to build? We read every message and reply within a business day."
      buttonLabel="Start a conversation"
    />
  </>
);

export const NotFoundVisionPage: React.FC = () => (
  <>
    <Seo title="Page Not Found" description="The requested page could not be found." />
    <SimpleHero
      eyebrow="404"
      title="This page does not exist."
      text="The page moved, but the practice didn't. Pick a layer to continue."
    />
    <section className="vn-section">
      <div className="vn-container">
        <PillarCards />
      </div>
    </section>
  </>
);

const SimpleHero: React.FC<{ eyebrow: string; title: string; text: string }> = ({ eyebrow, title, text }) => (
  <section className="vn-page-hero">
    <div className="vn-container vn-simple-hero">
      <p className="vn-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </section>
);

const FinalCta: React.FC = () => (
  <section className="vn-section vn-final-cta">
    <div className="vn-container">
      <div className="vn-final-cta__viz" aria-hidden="true">
        <svg viewBox="0 0 300 200" fill="none" className="vn-converge">
          <path className="vn-converge__path" d="M56 44 C 150 44, 170 100, 232 100" />
          <path className="vn-converge__path" d="M56 100 C 150 100, 188 100, 232 100" />
          <path className="vn-converge__path" d="M56 156 C 150 156, 170 100, 232 100" />
          <g className="vn-converge__labels">
            <text x="46" y="48" textAnchor="end">SAP</text>
            <text x="46" y="104" textAnchor="end">AI</text>
            <text x="46" y="160" textAnchor="end">CX</text>
          </g>
          <circle className="vn-converge__in" cx="56" cy="44" r="3.5" />
          <circle className="vn-converge__in" cx="56" cy="100" r="3.5" />
          <circle className="vn-converge__in" cx="56" cy="156" r="3.5" />
          <circle className="vn-converge__ring" cx="232" cy="100" r="9" />
          <circle className="vn-converge__node" cx="232" cy="100" r="6" />
          <text className="vn-converge__out" x="252" y="104">one team</text>
        </svg>
      </div>
      <div className="vn-final-cta__copy">
        <p className="vn-eyebrow">Engineered together</p>
        <h2>A single team. A single roadmap. One number to call when it breaks.</h2>
        <ArrowLink to="/engage" variant="primary">Start a conversation</ArrowLink>
      </div>
    </div>
  </section>
);
