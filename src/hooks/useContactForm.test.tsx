import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useContactForm } from './useContactForm';

// Mock EmailService
vi.mock('../services/emailService', () => ({
  default: {
    sendContactForm: vi.fn(),
  },
}));

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with empty form data', () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.formData.name).toBe('');
    expect(result.current.formData.email).toBe('');
    expect(result.current.formData.message).toBe('');
    expect(result.current.status).toBe('idle');
    expect(result.current.errorMessage).toBeNull();
  });

  it('should update form data on change', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe', type: 'text' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.name).toBe('John Doe');
  });

  it('should validate required name field', async () => {
    const { result } = renderHook(() => useContactForm());

    // Set email and message but not name
    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'test@example.com', type: 'email' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'message', value: 'Test message', type: 'text' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent);
    });

    expect(result.current.status).toBe('error');
    expect(result.current.errorMessage).toContain('name');
  });

  it('should validate email format', async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe', type: 'text' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'email', value: 'invalid-email', type: 'email' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'message', value: 'Test message', type: 'text' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent);
    });

    expect(result.current.status).toBe('error');
    expect(result.current.errorMessage).toContain('valid email');
  });

  it('should submit successfully with valid data', async () => {
    const EmailService = await import('../services/emailService');
    (EmailService.default.sendContactForm as ReturnType<typeof vi.fn>).mockResolvedValue({
      success: true,
      message: 'Success',
    });

    const onSuccess = vi.fn();
    const { result } = renderHook(() => useContactForm({ onSuccess }));

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe', type: 'text' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'email', value: 'john@example.com', type: 'email' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'message', value: 'Test message', type: 'text' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent);
    });

    // Verify the email service was called
    await waitFor(() => {
      expect(EmailService.default.sendContactForm).toHaveBeenCalled();
    });

    // Verify onSuccess callback was called (proves success path was taken)
    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  it('should call onSuccess callback when provided', async () => {
    const EmailService = await import('../services/emailService');
    (EmailService.default.sendContactForm as ReturnType<typeof vi.fn>).mockResolvedValue({
      success: true,
      message: 'Success',
    });

    const onSuccess = vi.fn();
    const { result } = renderHook(() => useContactForm({ onSuccess }));

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John', type: 'text' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'email', value: 'john@test.com', type: 'email' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'message', value: 'Hello', type: 'text' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent);
    });

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  it('should handle checkbox changes', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'isRFP', checked: true, type: 'checkbox' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.isRFP).toBe(true);
  });

  it('should reset form manually', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John', type: 'text' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.name).toBe('John');

    act(() => {
      result.current.resetForm();
    });

    expect(result.current.formData.name).toBe('');
    expect(result.current.status).toBe('idle');
  });

  it('should set error status when submission fails', async () => {
    const EmailService = await import('../services/emailService');
    (EmailService.default.sendContactForm as ReturnType<typeof vi.fn>).mockResolvedValue({
      success: false,
      message: 'Failed to send',
    });

    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John', type: 'text' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'email', value: 'john@test.com', type: 'email' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'message', value: 'Test', type: 'text' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as unknown as React.FormEvent);
    });

    await waitFor(() => {
      expect(result.current.status).toBe('error');
    });
  });
});
