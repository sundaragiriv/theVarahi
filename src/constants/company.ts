/**
 * Company Constants
 * Centralized location for all business metrics, contact info, and repeated values
 * Update these values in one place to reflect changes across the entire site
 */

// ============================================================================
// CONTACT INFORMATION
// ============================================================================
export const CONTACT = {
  PHONE: '+1 (610) 457-3193',
  PHONE_DISPLAY: '(610) 457-3193',
  PHONE_HREF: 'tel:+1-610-457-3193',
  EMAIL: {
    GENERAL: 'info@varahi.com',
    SALES: 'sales@varahi.com',
    SUPPORT: 'support@varahi.com',
    CONTACT: 'contact@varahi.com',
  },
  ADDRESS: {
    CITY: 'Philadelphia',
    STATE: 'PA',
    COUNTRY: 'United States',
    FULL: 'Philadelphia, PA, United States',
  },
} as const;

// ============================================================================
// BUSINESS METRICS - Update these as your metrics change
// ============================================================================
export const METRICS = {
  /** Client satisfaction rate */
  CLIENT_SATISFACTION: '98%',
  CLIENT_SATISFACTION_NUMBER: 98,

  /** Number of completed projects */
  PROJECTS_COMPLETED: '500+',
  PROJECTS_COMPLETED_NUMBER: 500,

  /** ROI improvement percentage */
  ROI_IMPROVEMENT: '40%',
  ROI_IMPROVEMENT_NUMBER: 40,

  /** Years of experience */
  YEARS_EXPERIENCE: '15+',
  YEARS_EXPERIENCE_NUMBER: 15,

  /** Efficiency improvement range */
  EFFICIENCY_IMPROVEMENT_MIN: '15%',
  EFFICIENCY_IMPROVEMENT_MAX: '35%',
  EFFICIENCY_IMPROVEMENT_RANGE: '15-35%',

  /** Enterprise clients served */
  ENTERPRISE_CLIENTS: '200+',
  ENTERPRISE_CLIENTS_NUMBER: 200,

  /** Industries served */
  INDUSTRIES_SERVED: '12+',
  INDUSTRIES_SERVED_NUMBER: 12,

  /** Response time guarantee */
  RESPONSE_TIME_HOURS: 24,
  RESPONSE_TIME_DISPLAY: '24 hours',

  /** Team size */
  TEAM_SIZE: '150+',
  TEAM_SIZE_NUMBER: 150,

  /** Global offices */
  GLOBAL_OFFICES: '5',
  GLOBAL_OFFICES_NUMBER: 5,
} as const;

// ============================================================================
// COMPANY INFO
// ============================================================================
export const COMPANY = {
  NAME: 'Varahi',
  LEGAL_NAME: 'Varahi Enterprise Solutions',
  TAGLINE: 'Enterprise AI & CX Excellence',
  DESCRIPTION: 'Premium Customer Experience and AI consulting company specializing in SAP solutions and enterprise digital transformation.',
  FOUNDED_YEAR: 2009,
  CURRENT_QUARTER: 'Q1 2025',
} as const;

// ============================================================================
// SOCIAL LINKS
// ============================================================================
export const SOCIAL = {
  LINKEDIN: 'https://linkedin.com/company/varahi',
  TWITTER: 'https://twitter.com/varahi',
  YOUTUBE: 'https://youtube.com/@varahi',
} as const;

// ============================================================================
// SERVICE CATEGORIES
// ============================================================================
export const SERVICES = {
  SAP_SOLUTIONS: {
    name: 'SAP Solutions',
    slug: 'sap-solutions',
    items: ['S/4HANA', 'FSM', 'BTP/CPI', 'CDC', 'Commerce CPQ'],
  },
  AI_STRATEGY: {
    name: 'AI Strategy',
    slug: 'ai-strategy',
    items: ['Assessment', 'Governance', 'RASP', 'Predictive', 'Conversational', 'Telemetry'],
  },
  CX_SERVICES: {
    name: 'CX Services',
    slug: 'cx-services',
    items: ['Enterprise CX', 'Digital Transformation', 'Customer Journey Mapping'],
  },
} as const;

// ============================================================================
// INDUSTRIES
// ============================================================================
export const INDUSTRIES = [
  { name: 'Manufacturing', slug: 'manufacturing' },
  { name: 'Consumer Packaged Goods', slug: 'cpg' },
  { name: 'Utilities', slug: 'utilities' },
  { name: 'Financial Services', slug: 'financial-services' },
] as const;

// ============================================================================
// TRUST INDICATORS
// ============================================================================
export const TRUST_INDICATORS = [
  'SAP Gold Partner',
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
] as const;

// ============================================================================
// TIMELINE OPTIONS (for forms)
// ============================================================================
export const TIMELINE_OPTIONS = [
  { value: 'immediate', label: 'Immediate (within 1 month)' },
  { value: 'q1-2025', label: 'Q1 2025' },
  { value: 'q2-2025', label: 'Q2 2025' },
  { value: 'h2-2025', label: 'H2 2025' },
  { value: '2026', label: '2026 or later' },
  { value: 'exploring', label: 'Just exploring' },
] as const;

// ============================================================================
// BUDGET OPTIONS (for forms)
// ============================================================================
export const BUDGET_OPTIONS = [
  { value: 'under-50k', label: 'Under $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-500k', label: '$100K - $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-plus', label: '$1M+' },
] as const;

// ============================================================================
// ROLE OPTIONS (for forms)
// ============================================================================
export const ROLE_OPTIONS = [
  { value: 'c-level', label: 'C-Level Executive' },
  { value: 'vp-director', label: 'VP / Director' },
  { value: 'manager', label: 'Manager' },
  { value: 'it-professional', label: 'IT Professional' },
  { value: 'consultant', label: 'Consultant' },
  { value: 'other', label: 'Other' },
] as const;

export default {
  CONTACT,
  METRICS,
  COMPANY,
  SOCIAL,
  SERVICES,
  INDUSTRIES,
  TRUST_INDICATORS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
  ROLE_OPTIONS,
};
