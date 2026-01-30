import { describe, it, expect } from 'vitest';
import {
  CONTACT,
  METRICS,
  COMPANY,
  SERVICES,
  INDUSTRIES,
  TRUST_INDICATORS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
  ROLE_OPTIONS,
} from './company';

describe('Company Constants', () => {
  describe('CONTACT', () => {
    it('should have valid phone number', () => {
      expect(CONTACT.PHONE).toBeDefined();
      expect(CONTACT.PHONE_HREF).toMatch(/^tel:/);
    });

    it('should have valid email addresses', () => {
      expect(CONTACT.EMAIL.GENERAL).toMatch(/@/);
      expect(CONTACT.EMAIL.SALES).toMatch(/@/);
      expect(CONTACT.EMAIL.SUPPORT).toMatch(/@/);
    });

    it('should have complete address', () => {
      expect(CONTACT.ADDRESS.CITY).toBeDefined();
      expect(CONTACT.ADDRESS.STATE).toBeDefined();
      expect(CONTACT.ADDRESS.COUNTRY).toBeDefined();
    });
  });

  describe('METRICS', () => {
    it('should have all key metrics defined', () => {
      expect(METRICS.CLIENT_SATISFACTION).toBeDefined();
      expect(METRICS.PROJECTS_COMPLETED).toBeDefined();
      expect(METRICS.ROI_IMPROVEMENT).toBeDefined();
      expect(METRICS.YEARS_EXPERIENCE).toBeDefined();
    });

    it('should have numeric versions of metrics', () => {
      expect(typeof METRICS.CLIENT_SATISFACTION_NUMBER).toBe('number');
      expect(typeof METRICS.PROJECTS_COMPLETED_NUMBER).toBe('number');
      expect(typeof METRICS.ROI_IMPROVEMENT_NUMBER).toBe('number');
    });

    it('should have consistent string and number metrics', () => {
      expect(METRICS.CLIENT_SATISFACTION).toContain(String(METRICS.CLIENT_SATISFACTION_NUMBER));
      expect(METRICS.ROI_IMPROVEMENT).toContain(String(METRICS.ROI_IMPROVEMENT_NUMBER));
    });
  });

  describe('COMPANY', () => {
    it('should have required company info', () => {
      expect(COMPANY.NAME).toBe('Varahi');
      expect(COMPANY.LEGAL_NAME).toBeDefined();
      expect(COMPANY.TAGLINE).toBeDefined();
      expect(typeof COMPANY.FOUNDED_YEAR).toBe('number');
    });
  });

  describe('SERVICES', () => {
    it('should have SAP solutions defined', () => {
      expect(SERVICES.SAP_SOLUTIONS.name).toBeDefined();
      expect(SERVICES.SAP_SOLUTIONS.items.length).toBeGreaterThan(0);
    });

    it('should have AI strategy defined', () => {
      expect(SERVICES.AI_STRATEGY.name).toBeDefined();
      expect(SERVICES.AI_STRATEGY.items.length).toBeGreaterThan(0);
    });

    it('should have CX services defined', () => {
      expect(SERVICES.CX_SERVICES.name).toBeDefined();
      expect(SERVICES.CX_SERVICES.items.length).toBeGreaterThan(0);
    });
  });

  describe('INDUSTRIES', () => {
    it('should have multiple industries', () => {
      expect(INDUSTRIES.length).toBeGreaterThan(0);
    });

    it('should have name and slug for each industry', () => {
      INDUSTRIES.forEach((industry) => {
        expect(industry.name).toBeDefined();
        expect(industry.slug).toBeDefined();
        expect(industry.slug).not.toContain(' '); // slugs shouldn't have spaces
      });
    });
  });

  describe('TRUST_INDICATORS', () => {
    it('should have trust indicators', () => {
      expect(TRUST_INDICATORS.length).toBeGreaterThan(0);
    });
  });

  describe('Form Options', () => {
    it('should have timeline options with value and label', () => {
      expect(TIMELINE_OPTIONS.length).toBeGreaterThan(0);
      TIMELINE_OPTIONS.forEach((option) => {
        expect(option.value).toBeDefined();
        expect(option.label).toBeDefined();
      });
    });

    it('should have budget options with value and label', () => {
      expect(BUDGET_OPTIONS.length).toBeGreaterThan(0);
      BUDGET_OPTIONS.forEach((option) => {
        expect(option.value).toBeDefined();
        expect(option.label).toBeDefined();
      });
    });

    it('should have role options with value and label', () => {
      expect(ROLE_OPTIONS.length).toBeGreaterThan(0);
      ROLE_OPTIONS.forEach((option) => {
        expect(option.value).toBeDefined();
        expect(option.label).toBeDefined();
      });
    });
  });
});
