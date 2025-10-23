import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import EmailService, { NewsletterData } from '../services/emailService';

interface NewsletterSubscriptionProps {
  variant?: 'inline' | 'modal' | 'sidebar';
  className?: string;
  onSuccess?: () => void;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ 
  variant = 'inline', 
  className = '',
  onSuccess 
}) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    preferences: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const preferences = [
    { id: 'sap-insights', label: 'SAP & ERP Updates' },
    { id: 'ai-trends', label: 'AI Strategy Insights' },
    { id: 'cx-innovations', label: 'Customer Experience Trends' },
    { id: 'case-studies', label: 'Success Stories & Case Studies' },
    { id: 'industry-reports', label: 'Industry Reports & Whitepapers' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        preferences: checked 
          ? [...prev.preferences, value]
          : prev.preferences.filter(pref => pref !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      if (!formData.email) {
        throw new Error('Email address is required');
      }

      const newsletterData: NewsletterData = {
        email: formData.email,
        name: formData.name || undefined,
        preferences: formData.preferences.length > 0 ? formData.preferences : undefined
      };

      const result = await EmailService.subscribeToNewsletter(newsletterData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ email: '', name: '', preferences: [] });
        onSuccess?.();
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Subscription failed. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'inline') {
    return (
      <motion.div 
        className={`bg-gradient-to-r from-brand-50 to-accent-50 p-8 rounded-2xl border border-brand-200 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <Mail className="w-12 h-12 text-brand-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Informed</h3>
          <p className="text-gray-600">
            Get weekly insights on SAP transformations, AI strategies, and customer experience innovations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@company.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name (Optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>

          {/* Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {preferences.map((pref) => (
              <label key={pref.id} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  value={pref.id}
                  checked={formData.preferences.includes(pref.id)}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                />
                <span className="ml-2 text-gray-700">{pref.label}</span>
              </label>
            ))}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe Now <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex items-center gap-3 p-4 rounded-lg border ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 border-green-200 text-green-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="text-sm font-medium">{submitStatus.message}</span>
            </motion.div>
          )}
        </form>
      </motion.div>
    );
  }

  // Simple variant for blog pages and resource sections
  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 disabled:opacity-50"
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>
      
      {submitStatus.type && (
        <div className={`mt-3 text-sm ${
          submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;