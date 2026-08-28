import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Layers3,
  Network,
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
  pillarOrder,
  pillars,
  PillarKey,
  proofStandards,
  stats,
  testimonials,
} from '../../data/varahiVision';
import AxisHero from '../../rebuild/components/AxisHero';
import OneTeam from '../../rebuild/components/OneTeam';
import GapHero from '../../rebuild/components/GapHero';
import DetailSheet from '../../rebuild/components/DetailSheet';
import '../../styles/work-page.css';
import '../../styles/about-page.css';
import FormHero from '../../rebuild/components/FormHero';
import { allContent, caseStudies, insights } from '../../data/content.generated';
import type { CaseStudy, Insight } from '../../data/content.generated';

const SITE_URL = 'https://thevarahi.com';
const pageTitle = (title: string) => `${title} | Varahi`;

// Keyword-forward <title>s for the pillar pages (front-loaded search terms).
const PILLAR_SEO_TITLE: Record<PillarKey, string> = {
  sap: 'SAP S/4HANA, Service Cloud & FSM Consulting',
  ai: 'Enterprise AI & Agentic AI for SAP',
  cx: 'SAP CX & Customer Experience Consulting',
};


const Seo: React.FC<{
  title: string;
  description: string;
  path?: string;
  type?: string;
  image?: string;
  jsonLd?: object | object[];
}> = ({ title, description, path = '', type = 'website', image = '/og-image.png', jsonLd }) => {
  const url = `${SITE_URL}${path}`;
  const img = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullTitle = pageTitle(title);
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

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

/**
 * HOME — owns the promise, and nothing else.
 *
 * It does not preview the method, the record, the layers or the insights; it
 * links to them. That single rule is what stops this page being a shorter copy
 * of every other page on the site. The only content it owns outright is the
 * delivery record at a glance, which appears nowhere else.
 */

/** Why you would leave this page — one reason each, none of them a summary. */
const NEXT = [
  { to: '/practice', n: '01', label: 'Practice', line: 'Why we exist in the gap the large firms leave open.' },
  { to: '/approach', n: '02', label: 'Approach', line: 'The four steps, and what skipping each one costs you.' },
  { to: '/our-thinking?view=work', n: '03', label: 'Work', line: 'Seven engagements. Named clients, measured numbers.' },
  { to: '/about', n: '04', label: 'About', line: 'Who actually shows up when the work starts.' },
];

export const HomeVisionPage: React.FC = () => (
  <>
    <Seo
      title="SAP, AI & CX Consulting"
      description="Varahi engineers SAP, AI, and customer experience as one design problem — S/4HANA, Service Cloud, Field Service Management, CPQ, BTP and applied AI. Principal-led, 23 years of SAP delivery."
    />

    <AxisHero />

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
        <p className="vn-eyebrow">Where to go from here</p>
        <nav className="vn-next" aria-label="Continue">
          {NEXT.map((item) => (
            <Link className="vn-next__item" to={item.to} key={item.to}>
              <span className="vn-next__n">{item.n}</span>
              <span className="vn-next__label">{item.label}</span>
              <span className="vn-next__line">{item.line}</span>
              <span className="vn-next__arrow" aria-hidden="true">
                <ArrowRight size={17} strokeWidth={1.8} />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  </>
);

export const PillarVisionPage: React.FC<{ pillarKey: PillarKey }> = ({ pillarKey }) => {
  const pillar = pillars[pillarKey];

  return (
    <>
      <Seo title={PILLAR_SEO_TITLE[pillarKey]} description={pillar.headline} path={pillar.path} />
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

      {/* A pillar page used to close by re-listing all three pillars, including
          the one you are standing on. Now it points at the other two, once. */}
      <section className="vn-section">
        <div className="vn-container">
          <p className="vn-eyebrow">The other two layers</p>
          <nav className="vn-crosslink" aria-label="The other layers">
            {pillarOrder
              .filter((key) => key !== pillarKey)
              .map((key) => (
                <Link className="vn-crosslink__item" to={pillars[key].path} key={key}>
                  <span className="vn-crosslink__name">{pillars[key].label}</span>
                  <span className="vn-crosslink__layer">{pillars[key].layer}</span>
                  <span className="vn-crosslink__arrow" aria-hidden="true">
                    <ArrowRight size={17} strokeWidth={1.8} />
                  </span>
                </Link>
              ))}
          </nav>
        </div>
      </section>

      <FinalCta
        kicker="Where to start"
        line="Start here. We will tell you if it is not the right place to start."
        to="/engage"
        cta="Put it in front of us"
      />
    </>
  );
};

/**
 * PRACTICE — owns the gap.
 *
 * The thesis leads the page now instead of sitting on About. What follows is
 * navigation into the three layers, and nothing else: the "why one team"
 * section was a fourth restatement of a sentence the OneTeam block already
 * makes once, at the bottom of this page and nowhere else on the site.
 */
export const WhatWeDoPage: React.FC = () => {
  const [active, setActive] = useState<PillarKey>('sap');
  const navigate = useNavigate();

  return (
    <>
      <Seo
        title="SAP, AI & CX Consulting Services"
        description="The big SI firms compete on hours. The strategy houses make decks. The AI shops can't ship inside an enterprise estate. Varahi exists in the gap — SAP, AI and CX on one backlog, one delivery lead."
        path="/practice"
      />

      <GapHero />

      <section className="vn-section">
        <div className="vn-container">
          <p className="vn-eyebrow">The three layers</p>
          <div className="vn-layers-accordion" role="tablist" aria-label="The three layers">
            {pillarOrder.map((key, index) => {
              const pillar = pillars[key];
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
                      Explore {pillar.label}
                      <ArrowRight size={17} strokeWidth={1.9} />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OneTeam />
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
    <FormHero />

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
    <FinalCta
      kicker="Next"
      line="See what FORM actually produced."
      to="/our-thinking?view=work"
      cta="Read the record"
    />
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

/**
 * WORK — owns the record, in three layers of decreasing weight.
 *
 *   1  the lead engagement, at full size, with its numbers as the picture
 *   2  the rest of the record as tiles
 *   3  the thinking behind it, as a dense list
 *
 * On this page the metrics are the artwork. Nothing illustrated competes with
 * "0 - clean core" on an autonomous fleet, so nothing is illustrated. The
 * proof standard opens in a sheet rather than taking a section of its own.
 */
export const ProofPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openStandard, setOpenStandard] = useState(false);
  const viewParam = searchParams.get('view');
  const filter: 'all' | 'work' | 'insights' =
    viewParam === 'work' || viewParam === 'insights' ? viewParam : 'all';

  const setFilter = (next: 'all' | 'work' | 'insights') => {
    setSearchParams(next === 'all' ? {} : { view: next }, { replace: true });
  };

  const [lead, ...rest] = caseStudies;
  const showWork = filter !== 'insights';
  const showInsights = filter !== 'work';

  return (
    <>
      <Seo
        title="SAP, AI & CX Insights & Case Studies"
        description="Seven enterprise engagements with named clients and measured numbers — autonomous fleets, industrial robotics, heavy machinery, regulated medical equipment — plus ten points of view from 23 years in SAP service."
        path="/our-thinking"
      />

      <section className="vn-section vn-work-head">
        <div className="vn-container">
          <p className="vn-eyebrow">The record</p>
          <h1>Named clients. Measured numbers. Checkable.</h1>
          <div className="vn-work-head__row">
            <div className="vn-proof-filters" role="tablist" aria-label="Filter the record">
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'all'}
                className={filter === 'all' ? 'is-active' : undefined}
                onClick={() => setFilter('all')}
              >
                Everything ({allContent.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'work'}
                className={filter === 'work' ? 'is-active' : undefined}
                onClick={() => setFilter('work')}
              >
                Engagements ({caseStudies.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'insights'}
                className={filter === 'insights' ? 'is-active' : undefined}
                onClick={() => setFilter('insights')}
              >
                Thinking ({insights.length})
              </button>
            </div>
            <button className="vn-work-head__std" type="button" onClick={() => setOpenStandard(true)}>
              How we publish numbers
              <ArrowRight size={16} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </section>

      {showWork && lead && (
        <section className="vn-section vn-section--tight">
          <div className="vn-container">
            <p className="vn-layer-label">Layer 01 &middot; The lead engagement</p>

            <Link className="vn-story" to={`/our-thinking/work/${lead.slug}`}>
              <svg className="vn-story__geo" viewBox="0 0 400 400" aria-hidden="true">
                <rect x="70" y="70" width="260" height="260" />
                <rect x="70" y="70" width="260" height="260" transform="rotate(30 200 200)" />
                <rect x="70" y="70" width="260" height="260" transform="rotate(60 200 200)" />
                <circle cx="200" cy="200" r="184" />
              </svg>

              <div className="vn-story__copy">
                <p className="vn-story__meta">
                  <span>{lead.year}</span>
                  <span>{lead.industry}</span>
                  <span>{pillars[lead.pillar].label}</span>
                </p>
                <h2>{lead.title}</h2>
                <p className="vn-story__client">{lead.client}</p>
                <p className="vn-story__role">{lead.role}</p>
                <span className="vn-story__go">
                  Read the engagement
                  <ArrowRight size={17} strokeWidth={1.8} />
                </span>
              </div>

              <div className="vn-story__figs">
                {lead.metrics.slice(0, 4).map((m) => (
                  <span className="vn-story__fig" key={m.label}>
                    <strong>{m.value}</strong>
                    <small>{m.label}</small>
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </section>
      )}

      {showWork && rest.length > 0 && (
        <section className="vn-section vn-section--tight">
          <div className="vn-container">
            <p className="vn-layer-label">Layer 02 &middot; The rest of the record</p>
            <div className="vn-tiles">
              {rest.map((entry) => (
                <Link className="vn-tile" to={`/our-thinking/work/${entry.slug}`} key={entry.slug}>
                  <p className="vn-tile__top">
                    <span>{entry.year}</span>
                    <span>{entry.industry}</span>
                  </p>
                  <p className="vn-tile__client">{entry.client}</p>
                  <h3>{entry.title}</h3>
                  {entry.metrics[0] && (
                    <p className="vn-tile__fig">
                      <strong>{entry.metrics[0].value}</strong>
                      <small>{entry.metrics[0].label}</small>
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {showInsights && (
        <section className="vn-section vn-section--tight">
          <div className="vn-container">
            <p className="vn-layer-label">Layer 03 &middot; The thinking behind it</p>
            <div className="vn-reclist">
              {insights.map((entry, i) => (
                <Link
                  className="vn-reclist__item"
                  to={`/our-thinking/insights/${entry.slug}`}
                  key={entry.slug}
                >
                  <span className="vn-reclist__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="vn-reclist__t">{entry.title}</span>
                  <span className="vn-reclist__d">{entry.description}</span>
                  <span className="vn-reclist__m">
                    <em>{pillars[entry.pillar].label}</em>
                    {entry.readingMinutes} min
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <DetailSheet
        open={openStandard}
        onClose={() => setOpenStandard(false)}
        kicker="Proof standard"
        title="What has to be true before a number goes on this site."
      >
        <div className="vn-std-list">
          {proofStandards.map((row, i) => (
            <p key={row}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {row}
            </p>
          ))}
        </div>
      </DetailSheet>

      <FinalCta
        kicker="Next"
        line="Meet the architect who ran these."
        to="/about"
        cta="Who shows up"
      />
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

  const articleUrl = `${SITE_URL}/our-thinking/${entry.kind}/${entry.slug}`;
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.description,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    datePublished: entry.pubDate,
    author: { '@type': 'Person', name: 'Venkata R. Sundaragiri', jobTitle: 'VP, SAP & AI Consulting' },
    publisher: {
      '@type': 'Organization',
      name: 'Varahi',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-varahi.svg` },
    },
    about: pillars[entry.pillar].label,
    keywords: entry.tags.join(', '),
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Our Thinking', item: `${SITE_URL}/our-thinking` },
      { '@type': 'ListItem', position: 2, name: entry.title, item: articleUrl },
    ],
  };

  return (
    <>
      <Seo
        title={entry.title}
        description={entry.description}
        path={`/our-thinking/${entry.kind}/${entry.slug}`}
        type="article"
        jsonLd={[articleLd, breadcrumbLd]}
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

      <FinalCta
        kicker="Keep reading"
        line="More arguments from the same practice."
        to="/our-thinking"
        cta="All thinking"
      />
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
// In production the form POSTs to the Worker at /api/contact (which emails via
// Resend). In local dev there's no Worker, so fall back to a pre-filled mailto.
// An explicit VITE_CONTACT_ENDPOINT overrides either (e.g. Formspree).
const CONTACT_ENDPOINT =
  (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ||
  (import.meta.env.PROD ? '/api/contact' : undefined);
const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'venkata@thevarahi.com';

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

/**
 * ABOUT — the one page that is not a technical document.
 *
 * It used to run the same rhythm as every other page: SectionIntro, grid,
 * SectionIntro, grid, four times over. That template is the thing that made
 * the site feel generic, and About was the last page still doing it.
 *
 * This page holds the only two photographs on the site, so it is the only page
 * that gets to look like a profile rather than a spec sheet. No geometry, no
 * orb field, no uppercase mono metadata — running text at a real measure, the
 * portraits large, and the references as pull-quotes.
 *
 * The old "Operating beliefs" list is gone: it was a fifth restatement of the
 * operating principles, which now live once, on Approach.
 */
export const AboutVisionPage: React.FC = () => (
  <div className="vn-about">
    <Seo
      title="About"
      description="Varahi is a women-owned enterprise consulting firm, deliberately small and principal-led. Founded by CEO Naga Poornima, with SAP and AI delivery run by VP Venkata R. Sundaragiri."
      path="/about"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Naga Poornima',
          jobTitle: 'Founder & CEO',
          image: `${SITE_URL}/logos/naga.png`,
          worksFor: { '@type': 'Organization', name: 'Varahi' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Venkata R. Sundaragiri',
          jobTitle: 'VP, SAP & AI Consulting',
          image: `${SITE_URL}/logos/1772931170879.jpg`,
          worksFor: { '@type': 'Organization', name: 'Varahi' },
          sameAs: ['https://www.linkedin.com/in/sundaragiri'],
          knowsAbout: ['SAP S/4HANA', 'SAP CX', 'SAP Field Service Management', 'SAP CPQ', 'Agentic AI', 'SAP BTP'],
        },
      ]}
    />

    <section className="vn-about__open">
      <div className="vn-container">
        <p className="vn-about__kicker">Who we are</p>
        <h1>Small on purpose.</h1>
        <p className="vn-about__lede">
          A women-owned practice where the person who scopes your work is the person who runs it.
          There is no bench behind us and no pyramid billing beneath the architect — which is a
          constraint on how much we take on, and the reason the work holds up.
        </p>

        <div className="vn-about__facts">
          {[
            ['Ownership', 'Women-owned'],
            ['Leadership', 'Founder & CEO, plus a delivery VP'],
            ['Independent since', '2009'],
            ['Delivering from', locations.join(', ')],
          ].map(([label, value]) => (
            <span className="vn-about__fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="vn-about__story">
      <div className="vn-container vn-about__storyGrid">
        <h2>Twenty-three years, one kind of problem.</h2>
        <div className="vn-about__prose">
          <p>
            Varahi is the name today for an enterprise SAP practice that has run independently since
            2009, on a delivery record reaching back twenty-three years — from the first CRM
            rollouts to today&rsquo;s S/4HANA and applied-AI estates.
          </p>
          <p>
            The through-line has never changed: <strong>asset-intensive, engineered-equipment
            businesses where uptime and aftermarket service are the whole game.</strong> Autonomous
            fleets, industrial robotics, heavy machinery, forest products, medical capital
            equipment. The same hard problem, solved end to end.
          </p>
          <p>
            We stay deliberately small because the alternative is a pyramid, and a pyramid is how
            the person you met in the pitch stops being the person who answers the phone.
          </p>
        </div>
      </div>
    </section>

    <section className="vn-about__people">
      <div className="vn-container">
        {[owner, principal].map((person, index) => (
          <article
            className={`vn-person${index % 2 === 1 ? ' vn-person--flip' : ''}`}
            key={person.name}
          >
            <div className="vn-person__media">
              {person.photo ? (
                /* The source PNG was 2.1 MB. The WebP beside it is 87 KB and the
                   original stays on disk as the fallback, so nothing is lost. */
                <picture>
                  <source srcSet={person.photo.replace(/\.(png|jpe?g)$/i, '.webp')} type="image/webp" />
                  <img
                    src={person.photo}
                    alt={person.name}
                    width={880}
                    height={1100}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              ) : (
                <span className="vn-person__mono">{person.initials}</span>
              )}
            </div>
            <div>
              <h2 className="vn-person__name">{person.name}</h2>
              <p className="vn-person__title">{person.title}</p>
              <p className="vn-person__bio">{person.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="vn-about__refs">
      <div className="vn-container">
        <div className="vn-about__refsHead">
          <p className="vn-about__kicker">References</p>
          <h2>In the words of the people who hired him.</h2>
        </div>
        {testimonials.map((item) => (
          <figure className="vn-quote" key={item.name}>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

    <FinalCta
      kicker="Next"
      line="Read the record behind the references."
      to="/our-thinking?view=work"
      cta="See the work"
    />
  </div>
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

/**
 * FinalCta — one component, a different next step on every page.
 *
 * It used to be a single fixed block on nine pages, carrying the SAP/AI/CX
 * convergence diagram. That diagram is gone and the copy is now supplied by
 * the page, so no two pages close the same way.
 */
const FinalCta: React.FC<{ kicker: string; line: string; to: string; cta: string }> = ({
  kicker,
  line,
  to,
  cta,
}) => (
  <section className="vn-section vn-final-cta">
    <div className="vn-container vn-final-cta__row">
      <div>
        <p className="vn-eyebrow">{kicker}</p>
        <h2>{line}</h2>
      </div>
      <ArrowLink to={to} variant="primary">
        {cta}
      </ArrowLink>
    </div>
  </section>
);
