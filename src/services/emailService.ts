import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You'll need to set these up in your EmailJS dashboard
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID_CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'template_contact',
  TEMPLATE_ID_NEWSLETTER: import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER || 'template_newsletter',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  inquiryType?: string;
  urgency?: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
  preferences?: string[];
}

export class EmailService {
  static async sendContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Validate required fields
      if (!data.name || !data.email || !data.message) {
        throw new Error('Please fill in all required fields');
      }

      // Prepare template parameters
      const templateParams = {
        to_name: 'Varahi Team',
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        phone: data.phone || 'Not provided',
        inquiry_type: data.inquiryType || 'General Inquiry',
        urgency: data.urgency || 'Normal',
        message: data.message,
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        reply_to: data.email,
        submitted_at: new Date().toLocaleString()
      };

      console.log('Sending contact form with EmailJS:', templateParams);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Thank you for your inquiry! We\'ll respond within 24 hours.'
        };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Contact Form Error:', error);
      
      // Fallback to mailto link
      const subject = encodeURIComponent(`New Inquiry from ${data.name} - ${data.company}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Company: ${data.company}\n` +
        `Phone: ${data.phone || 'Not provided'}\n` +
        `Inquiry Type: ${data.inquiryType || 'General'}\n` +
        `Urgency: ${data.urgency || 'Normal'}\n` +
        `Budget: ${data.budget || 'Not specified'}\n` +
        `Timeline: ${data.timeline || 'Not specified'}\n\n` +
        `Message:\n${data.message}`
      );
      
      window.open(`mailto:contact@varahi.com?subject=${subject}&body=${body}`);
      
      return {
        success: false,
        message: 'Email service unavailable. We\'ve opened your email client as a backup. Please send the message manually.'
      };
    }
  }

  static async subscribeToNewsletter(data: NewsletterData): Promise<{ success: boolean; message: string }> {
    try {
      if (!data.email) {
        throw new Error('Email address is required');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      const templateParams = {
        to_name: 'Varahi Team',
        subscriber_email: data.email,
        subscriber_name: data.name || 'Not provided',
        preferences: data.preferences?.join(', ') || 'All updates',
        subscribed_at: new Date().toLocaleString(),
        reply_to: 'noreply@varahi.com'
      };

      console.log('Sending newsletter subscription with EmailJS:', templateParams);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_NEWSLETTER,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Successfully subscribed! Check your email for confirmation.'
        };
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('EmailJS Newsletter Error:', error);
      
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Subscription failed. Please try again later.'
      };
    }
  }

  static async sendSupportRequest(data: ContactFormData & { supportType: string; priority: string }): Promise<{ success: boolean; message: string }> {
    try {
      const templateParams = {
        to_name: 'Varahi Support Team',
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        support_type: data.supportType,
        priority: data.priority,
        message: data.message,
        submitted_at: new Date().toLocaleString(),
        reply_to: data.email
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_CONTACT, // Using same template for now
        templateParams
      );

      return {
        success: response.status === 200,
        message: response.status === 200 
          ? 'Support request submitted! Our team will contact you shortly.'
          : 'Failed to submit support request. Please call our support line.'
      };
    } catch (error) {
      console.error('EmailJS Support Error:', error);
      return {
        success: false,
        message: 'Support system unavailable. Please call +1-610-457-3193 for immediate assistance.'
      };
    }
  }
}

export default EmailService;