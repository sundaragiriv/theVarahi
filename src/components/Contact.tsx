import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Upload } from 'lucide-react';
import EmailService, { ContactFormData } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    isRFP: false,
    budget: '',
    timeline: '',
    useCase: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.company || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Prepare data for EmailJS
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        inquiryType: formData.isRFP ? 'RFP Submission' : 'General Inquiry',
        budget: formData.budget,
        timeline: formData.timeline
      };

      // Send email via EmailJS
      const result = await EmailService.sendContactForm(contactData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', company: '', role: '', message: '',
          isRFP: false, budget: '', timeline: '', useCase: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consult" className="py-24 bg-gradient-to-br from-brand-50 to-accent-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Urgency Banner */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 border border-accent-300 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></span>
            <span className="text-sm text-accent-700 font-medium">
              Limited Q1 2025 slots - Response within 24 hours
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent mb-6">
            Free Strategy Call & ROI Analysis
          </h2>
          <p className="text-xl text-text-light max-w-4xl mx-auto font-light leading-relaxed mb-8">
            Join Fortune 1000 companies who've achieved <strong className="text-accent-700">15-35% efficiency improvements</strong> with our proven SAP and CX solutions. 
            <br/>Schedule your complimentary strategic consultation today.
          </p>

          {/* Contact Options */}
          <div className="bg-gradient-to-r from-brand-50 to-accent-50 p-6 rounded-xl border border-brand-200 mb-8">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-text mb-4">Prefer to speak directly?</h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <span className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs">📞</span>
                  <a href="tel:+1-800-VARAHI" className="text-brand-700 hover:text-accent-600 transition-colors">
                    1-800-VARAHI
                  </a>
                </div>
                <div className="text-sm text-text-light bg-brand-100 px-3 py-1 rounded-full">
                  24/7 Global Support
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-text-light mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-600" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-600" />
              <span>Certified enterprise experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-600" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Fields */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text mb-3 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-300 bg-surface"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text mb-3 uppercase tracking-wider">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-300 bg-surface"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-text mb-3 uppercase tracking-wider">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-300 bg-surface"
                  placeholder="Acme Corporation"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-text mb-3 uppercase tracking-wider">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-lg border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-300 bg-surface"
                >
                  <option value="">Select your role</option>
                  <option value="CTO">CTO</option>
                  <option value="VP Technology">VP Technology</option>
                  <option value="Director">Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* RFP Toggle */}
            <div className="flex items-center space-x-4 p-6 bg-brand-50 rounded-lg border border-brand-200">
              <input
                type="checkbox"
                id="isRFP"
                name="isRFP"
                checked={formData.isRFP}
                onChange={handleInputChange}
                className="h-5 w-5 text-primary border-gray/30 rounded focus:ring-primary"
              />
              <label htmlFor="isRFP" className="font-semibold text-dark">
                This is for an active RFP or project with defined timeline
              </label>
            </div>

            {/* RFP Fields */}
            {formData.isRFP && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-ink mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-ink/20 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="<100K">Less than $100K</option>
                      <option value="100K-500K">$100K - $500K</option>
                      <option value="500K-1M">$500K - $1M</option>
                      <option value="1M+">$1M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-ink mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-ink/20 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="Q1-2025">Q1 2025</option>
                      <option value="Q2-2025">Q2 2025</option>
                      <option value="H2-2025">H2 2025</option>
                      <option value="2026">2026</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-ink mb-2">
                    Primary Use Case
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    rows={3}
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded border border-ink/20 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all duration-200"
                    placeholder="Describe your primary CX or AI use case..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    RFP Document (Optional)
                  </label>
                  <div className="border-2 border-dashed border-ink/20 rounded p-6 text-center">
                    <Upload className="h-8 w-8 text-ink/40 mx-auto mb-2" />
                    <p className="text-sm text-ink/60">File upload temporarily disabled - please attach files via email</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-dark mb-3 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-sap border border-gray/30 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Tell us about your CX or AI requirements, current challenges, or specific questions..."
              />
            </div>

            {/* Value Proposition Before Submit */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-blue-200/30">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">What happens next?</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>24-hour response with initial insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>Free ROI analysis & strategy session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>Customized implementation roadmap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <div className="space-y-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold py-6 px-8 rounded-xl shadow-lg hover:from-brand-700 hover:to-accent-700 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-xl transform hover:scale-105 hover:-translate-y-1"
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -4 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Connecting you with our experts...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    <span>Schedule Free Strategy Call</span>
                  </>
                )}
              </motion.button>

              {/* Trust & Risk Reduction */}
              <div className="text-center text-sm text-text-light">
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
                  </svg>
                  Your information is secure and will never be shared
                </p>
                <p className="mt-1">Join <strong className="text-accent-600">500+</strong> enterprise leaders who've improved ROI by <strong className="text-accent-600">40%</strong></p>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Message sent successfully! We'll get back to you within 24 hours.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Failed to send message. Please try again or email us directly.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;