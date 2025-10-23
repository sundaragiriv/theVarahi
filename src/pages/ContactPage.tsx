import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Zap, Shield, Globe, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import GridBackground from '../components/GridBackground';
import EmailService, { ContactFormData } from '../services/emailService';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    urgency: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const inquiryTypes = [
    { id: 'sap-migration', label: 'SAP S/4HANA Migration', icon: Zap, color: 'blue' },
    { id: 'ai-strategy', label: 'AI Strategy & Implementation', icon: MessageSquare, color: 'purple' },
    { id: 'cx-platform', label: 'Customer Experience Platform', icon: Globe, color: 'green' },
    { id: 'infrastructure', label: 'Infrastructure Upgrade', icon: Shield, color: 'red' },
    { id: 'support', label: 'Technical Support', icon: Phone, color: 'orange' },
    { id: 'partnership', label: 'Partnership Opportunity', icon: CheckCircle, color: 'indigo' }
  ];

  const offices = [
    { city: 'Philadelphia', phone: '+1-610-457-3193', timezone: 'EST', flag: '🇺🇸', isHQ: true },
    { city: 'Mumbai', phone: '+91-8074926638', timezone: 'IST', flag: '🇮🇳', isHQ: false },
    { city: 'New York', phone: '+1 (212) 555-0200', timezone: 'EST', flag: '🇺🇸', isHQ: false },
    { city: 'Bangalore', phone: '+91 (80) 4567-8900', timezone: 'IST', flag: '🇮🇳', isHQ: false }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
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
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        urgency: formData.urgency,
        message: formData.message,
        budget: formData.budget,
        timeline: formData.timeline
      };

      // Send email via EmailJS
      const result = await EmailService.sendContactForm(contactData);
      
      if (result.success) {
        setIsSubmitted(true);
        setSubmitStatus({ type: 'success', message: result.message });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 relative">
        <GridBackground opacity={0.03} gridSize={60} color="#10b981" />
        <motion.div
          className="text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for reaching out. Our team will review your inquiry and respond within 24 hours during business days.
          </p>
          <motion.button
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            onClick={() => setIsSubmitted(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Another Message <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gradient-to-br from-brand-50 via-white to-accent-50 relative">
      <GridBackground opacity={0.02} gridSize={40} color="#0070f2" />
      
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
              Let's Transform Your Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to accelerate your digital transformation? Our experts are standing by to help you achieve breakthrough results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">How Can We Help?</h2>
                    <p className="text-gray-600">Tell us about your project and we'll connect you with the right expert.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type Selection */}
                    <fieldset>
                      <legend className="block text-sm font-semibold text-gray-700 mb-4">What brings you here?</legend>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="radiogroup" aria-labelledby="inquiry-type-legend">
                        {inquiryTypes.map((type) => {
                          const IconComponent = type.icon;
                          return (
                            <motion.label
                              key={type.id}
                              className={`relative cursor-pointer rounded-lg border-2 p-4 hover:border-${type.color}-300 transition-all ${
                                formData.inquiryType === type.id 
                                  ? `border-${type.color}-500 bg-${type.color}-50` 
                                  : 'border-gray-200 hover:bg-gray-50'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <input
                                type="radio"
                                name="inquiryType"
                                value={type.id}
                                checked={formData.inquiryType === type.id}
                                onChange={handleInputChange}
                                className="sr-only"
                                aria-describedby="inquiry-description"
                              />
                              <div className="text-center">
                                <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                                  formData.inquiryType === type.id ? `text-${type.color}-600` : 'text-gray-500'
                                }`} />
                                <div className={`text-sm font-medium ${
                                  formData.inquiryType === type.id ? `text-${type.color}-900` : 'text-gray-700'
                                }`}>
                                  {type.label}
                                </div>
                              </div>
                            </motion.label>
                          );
                        })}
                      </div>
                      <span id="inquiry-description" className="sr-only">Select the type of service you're interested in</span>
                    </fieldset>

                    {/* Contact Details Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                          placeholder="Your full name"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                          placeholder="your@company.com"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Company & Phone Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-company" className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                          placeholder="Your company name"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Budget & Timeline Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-budget" className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under $50K</option>
                          <option value="50k-150k">$50K - $150K</option>
                          <option value="150k-500k">$150K - $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="over-1m">$1M+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-timeline" className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        >
                          <option value="">When do you want to start?</option>
                          <option value="immediate">Immediately</option>
                          <option value="1-3-months">1-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-12-months">6-12 months</option>
                          <option value="planning">Still planning</option>
                        </select>
                      </div>
                    </div>

                    {/* Urgency */}
                    <fieldset>
                      <legend className="block text-sm font-semibold text-gray-700 mb-3">Urgency Level</legend>
                      <div className="flex gap-4" role="radiogroup" aria-labelledby="urgency-legend">
                        {['Low', 'Medium', 'High', 'Critical'].map((level) => (
                          <label key={level} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="urgency"
                              value={level.toLowerCase()}
                              checked={formData.urgency === level.toLowerCase()}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-brand-600 border-gray-300 focus:ring-brand-500"
                              aria-describedby="urgency-description"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700">{level}</span>
                          </label>
                        ))}
                      </div>
                      <span id="urgency-description" className="sr-only">Select the urgency level for your project</span>
                    </fieldset>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your project *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                        placeholder="Describe your current challenges, goals, and what you're looking to achieve..."
                        required
                        aria-required="true"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight className="w-5 h-5" />
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
                </div>
              </div>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Methods */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">US Headquarters</p>
                      <a href="tel:+1-610-457-3193" className="font-semibold text-gray-900 hover:text-blue-600">
                        +1-610-457-3193
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:hello@varahi.com" className="font-semibold text-gray-900 hover:text-green-600">
                        hello@varahi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Hours</p>
                      <p className="font-semibold text-gray-900">Mon-Fri 8AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-sm text-gray-600 mb-4">Critical system issues? Get 24/7 support.</p>
                <div className="space-y-2">
                  <a href="tel:+1-610-457-3193" className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors">
                    🚨 Call Now: +1-610-457-3193
                  </a>
                  <a href="tel:+91-8074926638" className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors">
                    🚨 India: +91-8074926638
                  </a>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Global Offices</h3>
                <div className="space-y-3">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-center gap-3 py-2">
                      <span className="text-lg">{office.flag}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900">{office.city}</p>
                          {office.isHQ && (
                            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">HQ</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{office.timezone}</p>
                      </div>
                      <a href={`tel:${office.phone}`} className="text-sm text-blue-600 hover:text-blue-700">
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">&lt; 4hrs</div>
                <p className="text-sm opacity-90">Average response time</p>
                <p className="text-xs opacity-75 mt-1">During business hours</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;