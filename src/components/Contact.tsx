import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Upload } from 'lucide-react';

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
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', company: '', role: '', message: '',
        isRFP: false, budget: '', timeline: '', useCase: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consult" className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Let's Talk About Your CX & AI Goals
          </h2>
          <p className="text-2xl text-gray max-w-4xl mx-auto font-light leading-relaxed">
            Schedule a strategic consultation to discuss your enterprise requirements and explore how we can deliver measurable business outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Fields */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-dark mb-3 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-sap border border-gray/30 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-3 uppercase tracking-wider">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-sap border border-gray/30 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-dark mb-3 uppercase tracking-wider">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-sap border border-gray/30 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Acme Corporation"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-dark mb-3 uppercase tracking-wider">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-sap border border-gray/30 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
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
            <div className="flex items-center space-x-4 p-6 bg-primary/5 rounded-sap border border-primary/20">
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

            {/* Submit Button */}
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed text-xl py-6 glow-effect"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
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