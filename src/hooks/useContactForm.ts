import { useState, useCallback } from 'react';
import EmailService, { ContactFormData } from '../services/emailService';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ContactFormFields {
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject?: string;
  message: string;
  inquiryType?: string;
  urgency?: string;
  budget?: string;
  timeline?: string;
  role?: string;
  useCase?: string;
  isRFP?: boolean;
}

export interface UseContactFormOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  inquiryType?: string;
}

export interface UseContactFormReturn {
  formData: ContactFormFields;
  status: FormStatus;
  errorMessage: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormFields>>;
}

const initialFormData: ContactFormFields = {
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: '',
  inquiryType: '',
  urgency: '',
  budget: '',
  timeline: '',
  role: '',
  useCase: '',
  isRFP: false,
};

/**
 * Custom hook for handling contact form state and submission
 * Provides consistent form handling across all contact pages
 */
export function useContactForm(options: UseContactFormOptions = {}): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormFields>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setStatus('idle');
    setErrorMessage(null);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    try {
      // Validate required fields
      if (!formData.name.trim()) {
        throw new Error('Please enter your name');
      }
      if (!formData.email.trim()) {
        throw new Error('Please enter your email address');
      }
      if (!validateEmail(formData.email)) {
        throw new Error('Please enter a valid email address');
      }
      if (!formData.message.trim()) {
        throw new Error('Please enter a message');
      }

      // Prepare data for EmailJS
      const contactData: ContactFormData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || 'Not provided',
        phone: formData.phone?.trim(),
        message: formData.message.trim(),
        inquiryType: options.inquiryType || formData.inquiryType || formData.subject || 'General Inquiry',
        urgency: formData.urgency,
        budget: formData.budget,
        timeline: formData.timeline,
      };

      // Send email via EmailJS
      const result = await EmailService.sendContactForm(contactData);

      if (result.success) {
        setStatus('success');
        resetForm();
        options.onSuccess?.();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('An unexpected error occurred');
      setStatus('error');
      setErrorMessage(err.message);
      options.onError?.(err);
    }
  }, [formData, options, resetForm]);

  return {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData,
  };
}

export default useContactForm;
