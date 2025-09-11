import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">Varahi</span>
                <span className="text-2xl font-medium text-white/70">Group</span>
              </div>
              <p className="text-white/70 leading-relaxed max-w-md">
                Enterprise CX & AI consulting that delivers measurable outcomes. 
                Specialized in SAP integrations and modern customer experience platforms.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.a
                href="#"
                className="p-2 bg-white/10 rounded hover:bg-brand transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 bg-white/10 rounded hover:bg-brand transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@varahigroup.com"
                className="p-2 bg-white/10 rounded hover:bg-brand transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#ai-services" className="hover:text-brand transition-colors duration-200">AI Services</a></li>
              <li><a href="#cx-services" className="hover:text-brand transition-colors duration-200">CX Services</a></li>
              <li><a href="#customer-studies" className="hover:text-brand transition-colors duration-200">Customer Studies</a></li>
              <li><a href="#consult" className="hover:text-brand transition-colors duration-200">Consultation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-4">
              Get insights on CX trends, AI implementations, and SAP updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-brand rounded hover:bg-brand/80 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-400"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2025 Varahi Group. All rights reserved. SAP is a trademark of SAP SE; Varahi Group is independent.
          </p>
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-brand transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;