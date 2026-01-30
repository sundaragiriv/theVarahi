import React from 'react';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

const SalesInquiryPage: React.FC = () => {
  const {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useContactForm({ inquiryType: 'Sales Inquiry' });

  const isSubmitting = status === 'submitting';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
            Sales Inquiry
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your enterprise with AI-powered CX solutions? Let's discuss how Varahi can help you achieve measurable results.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form Section - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Tell Us About Your Project</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Role & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      >
                        <option value="">Select your role</option>
                        <option value="C-Level Executive">C-Level Executive</option>
                        <option value="VP / Director">VP / Director</option>
                        <option value="Manager">Manager</option>
                        <option value="IT Professional">IT Professional</option>
                        <option value="Consultant">Consultant</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="$100K - $500K">$100K - $500K</option>
                        <option value="$500K - $1M">$500K - $1M</option>
                        <option value="$1M+">$1M+</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline & Urgency */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate (within 1 month)">Immediate (within 1 month)</option>
                        <option value="Q1 2025">Q1 2025</option>
                        <option value="Q2 2025">Q2 2025</option>
                        <option value="H2 2025">H2 2025</option>
                        <option value="2026 or later">2026 or later</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      >
                        <option value="">Select urgency</option>
                        <option value="High - Active RFP">High - Active RFP</option>
                        <option value="Medium - Planning Phase">Medium - Planning Phase</option>
                        <option value="Low - Research Phase">Low - Research Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      placeholder="Describe your current challenges, goals, and what you're looking to achieve..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Thank you! A sales representative will contact you within 24 hours.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{errorMessage || 'Failed to send. Please try again or call us directly.'}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Sales Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold mb-4">Why Partner With Varahi?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">15-35% efficiency improvements for Fortune 1000 clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">500+ successful enterprise implementations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SAP Gold Partner with AI expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated team from strategy to implementation</span>
                  </li>
                </ul>
              </div>

              {/* What to Expect */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-gray-900">24-hour Response</p>
                      <p className="text-sm text-gray-600">A sales specialist will review your inquiry</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-gray-900">Discovery Call</p>
                      <p className="text-sm text-gray-600">We'll schedule a call to understand your needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-gray-900">Custom Proposal</p>
                      <p className="text-sm text-gray-600">Receive a tailored solution with ROI projections</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-900 text-white p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">Prefer to Talk Now?</h3>
                <p className="text-gray-300 mb-4">Our sales team is available to discuss your project directly.</p>
                <a
                  href="tel:+1-610-457-3193"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (610) 457-3193
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesInquiryPage;
