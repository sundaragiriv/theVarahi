import React from 'react';

const SalesInquiryPage: React.FC = () => (
  <div className="pt-20">
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sales Inquiry</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg" />
              <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
            <input type="text" placeholder="Company" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Tell us about your project" rows={4} className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default SalesInquiryPage;