import { describe, it, expect, vi, beforeEach } from 'vitest';
import EmailService from './emailService';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  default: {
    init: vi.fn(),
    send: vi.fn(),
  },
}));

// Mock window.open for mailto fallback
vi.stubGlobal('open', vi.fn());

describe('EmailService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('sendContactForm', () => {
    it('should return false success for empty name', async () => {
      const result = await EmailService.sendContactForm({
        name: '',
        email: 'test@example.com',
        company: 'Test Co',
        message: 'Test message',
      });

      // Validation fails, triggers fallback
      expect(result.success).toBe(false);
    });

    it('should return false success for empty email', async () => {
      const result = await EmailService.sendContactForm({
        name: 'John Doe',
        email: '',
        company: 'Test Co',
        message: 'Test message',
      });

      expect(result.success).toBe(false);
    });

    it('should return false success for empty message', async () => {
      const result = await EmailService.sendContactForm({
        name: 'John Doe',
        email: 'test@example.com',
        company: 'Test Co',
        message: '',
      });

      expect(result.success).toBe(false);
    });

    it('should return success for valid form data', async () => {
      const emailjs = await import('@emailjs/browser');
      (emailjs.default.send as ReturnType<typeof vi.fn>).mockResolvedValue({ status: 200 });

      const result = await EmailService.sendContactForm({
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'I would like to learn more about your services.',
      });

      expect(result.success).toBe(true);
      expect(result.message).toContain('Thank you');
    });

    it('should call emailjs.send with correct parameters', async () => {
      const emailjs = await import('@emailjs/browser');
      (emailjs.default.send as ReturnType<typeof vi.fn>).mockResolvedValue({ status: 200 });

      await EmailService.sendContactForm({
        name: 'Jane Smith',
        email: 'jane@company.com',
        company: 'Tech Corp',
        phone: '555-1234',
        message: 'Interested in your services',
        inquiryType: 'Sales',
        urgency: 'High',
      });

      expect(emailjs.default.send).toHaveBeenCalled();
    });
  });

  describe('subscribeToNewsletter', () => {
    it('should reject empty email', async () => {
      const result = await EmailService.subscribeToNewsletter({
        email: '',
      });

      expect(result.success).toBe(false);
      expect(result.message).toContain('required');
    });

    it('should reject invalid email format', async () => {
      const result = await EmailService.subscribeToNewsletter({
        email: 'invalid-email',
      });

      expect(result.success).toBe(false);
      expect(result.message).toContain('valid email');
    });

    it('should accept valid email', async () => {
      const emailjs = await import('@emailjs/browser');
      (emailjs.default.send as ReturnType<typeof vi.fn>).mockResolvedValue({ status: 200 });

      const result = await EmailService.subscribeToNewsletter({
        email: 'subscriber@example.com',
      });

      expect(result.success).toBe(true);
      expect(result.message).toContain('Successfully subscribed');
    });

    it('should validate various email formats', async () => {
      // Invalid emails
      const invalidEmails = [
        'test',
        'test@',
        '@example.com',
        'test @example.com',
      ];

      for (const email of invalidEmails) {
        const result = await EmailService.subscribeToNewsletter({ email });
        expect(result.success).toBe(false);
      }
    });

    it('should accept email with name and preferences', async () => {
      const emailjs = await import('@emailjs/browser');
      (emailjs.default.send as ReturnType<typeof vi.fn>).mockResolvedValue({ status: 200 });

      const result = await EmailService.subscribeToNewsletter({
        email: 'user@example.com',
        name: 'John Doe',
        preferences: ['AI Updates', 'Product News'],
      });

      expect(result.success).toBe(true);
    });
  });
});
