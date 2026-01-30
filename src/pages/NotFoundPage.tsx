import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { CONTACT } from '../constants/company';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600/20">404</h1>
          <div className="relative -mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Here are some helpful links:</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Home className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Home</p>
                <p className="text-sm text-gray-600">Go to homepage</p>
              </div>
            </Link>

            <Link
              to="/solutions"
              className="flex items-center gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Search className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Solutions</p>
                <p className="text-sm text-gray-600">Browse our services</p>
              </div>
            </Link>

            <Link
              to="/resources/case-studies"
              className="flex items-center gap-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Case Studies</p>
                <p className="text-sm text-gray-600">See our work</p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Contact Us</p>
                <p className="text-sm text-gray-600">Get in touch</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Go back to previous page
        </button>

        {/* Contact Info */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>
            Need help? Call us at{' '}
            <a href={CONTACT.PHONE_HREF} className="text-blue-600 hover:underline">
              {CONTACT.PHONE}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
