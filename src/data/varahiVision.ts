export type PillarKey = 'sap' | 'ai' | 'cx';

export const pillars = {
  sap: {
    key: 'sap',
    label: 'SAP',
    layer: 'The Platform Layer',
    path: '/sap',
    eyebrow: 'Platform layer',
    headline:
      'Deep S/4HANA, Service Cloud, and Field Service Management work — clean architecture, ruthless integration discipline, real handover.',
    short:
      'Deep S/4HANA, Service Cloud, and Field Service Management work — clean architecture and ruthless integration discipline.',
    promise:
      'For enterprises whose SAP estate has to modernize without stalling the business — clean core, integration discipline, and a handover you actually own.',
    owns: [
      'S/4HANA Service & CS',
      'SAP Field Service Management',
      'SAP Service Cloud V2',
      'BTP, CPI & Joule',
      'Architecture & Roadmap',
      'Managed Evolution',
    ],
    deliverables: [
      'SAP estate assessment',
      'Clean-core review',
      'Integration topology map',
      'S/4HANA roadmap',
      'FSM / Service Cloud build',
      'Managed evolution plan',
    ],
    proof: [
      'Module footprint',
      'Integration context',
      'Business process affected',
      'Decision made',
      'Production result',
    ],
    signals: ['S/4HANA', 'FSM', 'Service Cloud', 'BTP', 'CPI', 'Joule'],
  },
  ai: {
    key: 'ai',
    label: 'AI',
    layer: 'The Cognition Layer',
    path: '/ai',
    eyebrow: 'Cognition layer',
    headline:
      'We embed AI where it pays back — dispatch, triage, knowledge, technician copilots, demand sensing. Not generic chatbots.',
    short:
      'AI where it pays back — dispatch, triage, knowledge, copilots, demand sensing. Not generic chatbots.',
    promise:
      'For leaders who want AI that ships inside the enterprise estate — production workloads on real master data, not a demo.',
    owns: [
      'Dispatcher copilot',
      'Technician copilot',
      'Service triage & assist',
      'Predictive service & parts',
      'Knowledge & RAG on the SAP estate',
    ],
    deliverables: [
      'AI readiness & use-case map',
      'Workload prototype on real data',
      'Governance & guardrail model',
      'Human-in-the-loop design',
      'Evaluation harness',
      'Production rollout plan',
    ],
    proof: [
      'What the model does',
      'Data it runs on',
      'Authorisation boundary',
      'Human approval points',
      'Production result',
    ],
    signals: ['Dispatch', 'Triage', 'Copilots', 'RAG', 'Predictive'],
  },
  cx: {
    key: 'cx',
    label: 'CX',
    layer: 'The Human Layer',
    path: '/cx',
    eyebrow: 'Human layer',
    headline:
      'Service journeys designed before the system is configured. We map what the customer feels and shape the platform to match.',
    short:
      'Service journeys designed before the system is configured — we shape the platform around what the customer feels.',
    promise:
      'For teams who know a clean SAP estate and smart AI still fail if the service journey was never designed.',
    owns: [
      'Service journey orchestration',
      'Self-service & omnichannel design',
      'Case-to-resolution redesign',
      'Adoption & change delivery',
    ],
    deliverables: [
      'Service journey map',
      'Omnichannel design',
      'Case-to-resolution redesign',
      'Adoption & change plan',
    ],
    proof: [
      'Journey mapped',
      'Channels designed',
      'Resolution path',
      'Adoption measure',
    ],
    signals: ['Journeys', 'Omnichannel', 'Case-to-resolution', 'Adoption'],
  },
} as const;

export const pillarOrder: PillarKey[] = ['sap', 'ai', 'cx'];

/** The four production principles that govern the Cognition (AI) layer. */
export const aiPrinciples = [
  { title: 'Enterprise data, not internet data', text: 'Models run on your master data and estate, not the open web.' },
  { title: 'Authorisation propagates', text: 'An agent can only ever see and do what the person behind it may.' },
  { title: 'Observability, day one', text: 'Every action is logged, traceable, and replayable from the first release.' },
  { title: 'Human-in-the-loop where it matters', text: 'People approve the decisions that carry real-world consequences.' },
];

export const entryPoints = [
  {
    prompt: 'I need to modernize the SAP estate.',
    response: 'Start with SAP.',
    path: '/sap',
    detail: 'S/4HANA, Service Cloud, FSM, BTP, CPI, and Joule — clean architecture and real handover.',
  },
  {
    prompt: 'I need AI that actually ships.',
    response: 'Start with AI.',
    path: '/ai',
    detail: 'Dispatch, triage, knowledge, and copilots on real enterprise data — governed, observable, in production.',
  },
  {
    prompt: 'The customer experience is the problem.',
    response: 'Start with CX.',
    path: '/cx',
    detail: 'Service journeys, omnichannel design, case-to-resolution, and adoption — designed before the system is configured.',
  },
  {
    prompt: 'I am not sure where to start.',
    response: 'Start with a discovery conversation.',
    path: '/engage',
    detail: 'Bring the SAP estate, the AI ambition, or the customer journey you need to move.',
  },
];

export const proofStandards = [
  'No fake logos.',
  'No inflated numbers.',
  'No unsupported ROI claims.',
  'No transformation theater.',
  'Specific proof over broad claims.',
  'Governance before autonomous action.',
];

/**
 * FORM — the delivery method. Frame · Orchestrate · Realize · Maintain.
 * Each phase carries what you leave with (`gets`) and the risk it removes (`risk`)
 * so the Approach page sells the de-risking instead of listing steps.
 */
export const methodSteps = [
  {
    letter: 'F',
    label: 'Frame',
    meta: '2–4 weeks',
    text: 'Real interviews, real data, real walk-throughs — no discovery theatre. We find the problem worth solving before anyone writes code.',
    gets: 'A sharp problem statement, a value model, and an architecture sketch you can defend at the audit committee.',
    risk: 'Skip it and you build the wrong thing — precisely, and on budget.',
  },
  {
    letter: 'O',
    label: 'Orchestrate',
    meta: 'working software in 30 days',
    text: 'We design the smallest defensible answer and stand it up fast — AI tested against your real master data, not a slideware demo.',
    gets: 'A working prototype and a de-risked plan, with the hard questions surfaced before any committee asks them.',
    risk: 'Skip it and the risk surfaces in production, where it costs the most to fix.',
  },
  {
    letter: 'R',
    label: 'Realize',
    meta: 'one backlog',
    text: 'Production delivery. SAP, AI, CX, and integration ship on one backlog, under one delivery lead, with one status.',
    gets: 'Working software in production — the estate, the models, and the journeys landing together.',
    risk: 'Split it across vendors and the seams between them quietly become your problem.',
  },
  {
    letter: 'M',
    label: 'Maintain',
    meta: 'hypercare → evolution',
    text: 'Hypercare into managed evolution. We stay long enough to be sure it sticks.',
    gets: 'A platform that is genuinely yours — handed over only when it truly is.',
    risk: 'Hand off too early and the value erodes the day the team walks.',
  },
];

export const operatingPrinciples = [
  'Senior delivery, no pyramid — the architects who scoped your engagement run it.',
  'Production from day one — no prototypes that need a rebuild to ship.',
  "We'll tell you when SAP isn't the right answer. The reverse is also true.",
];

/**
 * The thesis — the most valuable paragraph the company owns.
 * Ported verbatim from the retired site. Do not paraphrase into blandness.
 */
export const thesis = [
  'The firms that win the next decade in service-led industries — utilities, manufacturers, asset operators, healthcare, public services — will treat SAP, AI, and customer experience as one design problem, not three procurements.',
  "Most consultancies aren't set up for this. The big SI firms compete on hours, not architecture. The boutique strategy houses make decks. The pure-play AI shops don't know how to ship inside an enterprise estate. The CX studios don't know what an iFlow is.",
  "Varahi exists in the gap. We're the firm you call when the SAP estate, the AI ambition, and the customer experience all need to land at the same time, on the same calendar, with the same delivery lead.",
  "We're senior, deliberately small, and we work with operators who measure us in dispatched jobs, resolved cases, and customer return rates — not slide counts.",
];

export const locations = ['Raleigh', 'India', 'Canada'];

/**
 * Leadership. Varahi is a women-owned practice — Poornima Sundaragiri is Founder & Owner.
 * Venkata R. Sundaragiri is VP of SAP & AI Consulting and the delivery principal whose
 * 23-year record is the practice's proof.
 */
export const owner = {
  name: 'Naga Poornima',
  initials: 'NP',
  title: 'Founder & CEO',
  photo: '/logos/naga.png',
  bio: 'Naga Poornima is the Founder and CEO of Varahi. A dedicated science educator — a High School Science Teacher at Panther Creek High School in Cary, North Carolina, and an alumna of North Carolina State University — her expertise spans cell and molecular biology, general biology, environmental science, and systems biology. She brings a scientist’s rigor and an educator’s clarity to the business, and an AI visionary’s conviction that intelligent technology will transform not only enterprise consulting but healthcare and the life sciences next. A deeply passionate leader who measures herself by results, Naga sets Varahi’s direction and holds the practice to the outcomes it promises.',
};

export const principal = {
  name: 'Venkata R. Sundaragiri',
  initials: 'VS',
  title: 'VP · SAP & AI Consulting',
  photo: '/logos/1772931170879.jpg',
  bio: 'A strategic technology leader who has spent 23 years transforming enterprises at the seam where SAP, customer experience, and AI meet. Venkata pairs a VP’s command of the business case with a multi-application solution architect’s depth — S/4HANA, the SAP CX suite, BTP, and the integration fabric beneath them — and the conviction of a deeply integrated AI strategist who moves organizations past pilots into governed, production-grade intelligence. He owns both the strategy and the execution, having led programs for autonomous fleets, industrial robotics, heavy machinery, and regulated medical equipment while reporting into C-level leadership. Leader, architect, and strategist in one — the person enterprises call when SAP, AI, and CX all have to land at once.',
};

/** Practice-capability markers — company voice, grounded in real delivery. */
export const stats = [
  { value: '23+', label: 'Years of SAP delivery' },
  { value: '20+', label: 'Enterprise transformations' },
  { value: '12+', label: 'S/4 Service & FSM builds' },
  { value: '8+', label: 'Industries served' },
];

/** Enterprises the founder has architected for, across 23 years. */
export const marqueeClients = [
  'Zoox / Amazon',
  'Yaskawa',
  'Weyerhaeuser',
  'Carestream',
  'Caterpillar',
  'Komatsu',
  'Carlisle',
  'LB Foster',
  'Costco',
  'Lenovo',
  'Honeywell',
  'Apple',
];

/** Real references from the founder's delivery record. */
export const testimonials = [
  {
    quote:
      "Venkata was the critical player during our design, configuration and testing of SAP's Web Channel & Hybris. A consummate professional; he rose to every challenge and was an endless resource of information.",
    name: 'Luke Walter',
    role: 'Customer Connect Lead, H.B. Fuller',
  },
  {
    quote:
      'He taught my team how to use the system — not just how to do it, but the why — which let them grasp an application that would otherwise be difficult to comprehend.',
    name: 'Henry Nakazawa',
    role: 'Functional Lead, Honeywell',
  },
  {
    quote:
      'Raj was the Solutions Architect of our CRM project. The scope required significant experience and focus to deliver within a very tight timeline. He added value beyond his technical skills. I highly recommend him.',
    name: 'Ute Stolz-Kuehn',
    role: 'IT Manager, Carestream Health',
  },
];

export const proofPatterns = [
  {
    pillar: 'SAP',
    title: 'SAP modernization and integration proof',
    text: 'Show module footprint, integration topology, business process, issue found, decision made, and production result.',
  },
  {
    pillar: 'AI',
    title: 'AI workload proof',
    text: 'Show what the model does, the data it runs on, the authorisation boundary, where humans approve, and the production result.',
  },
  {
    pillar: 'CX',
    title: 'CX journey proof',
    text: 'Show the journey mapped, the channels designed, the case-to-resolution path, and how adoption was measured.',
  },
];

export const thinkingCategories = [
  {
    key: 'work',
    title: 'Case Studies',
    description: 'Delivered engagements. Client anonymized, metrics as measured.',
  },
  {
    key: 'insights',
    title: 'Insights',
    description: 'Points of view on SAP, AI, customer experience, and enterprise execution.',
  },
] as const;
