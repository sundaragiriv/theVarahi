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
    <footer className="bg-gradient-to-br from-dark via-sap-navy to-dark text-white py-20">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-sap flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-sap-light-blue to-white bg-clip-text text-transparent">Varahi</span>
                <span className="text-3xl font-medium text-white/70">Group</span>
              </div>
              <p className="text-white/80 leading-relaxed max-w-lg text-lg font-light">
                Enterprise customer experience and AI consulting that delivers measurable business outcomes. 
                Specialized in SAP integrations, modern CX platforms, and intelligent automation solutions.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="p-3 bg-white/10 rounded-sap hover:bg-primary hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-white/10 rounded-sap hover:bg-primary hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:hello@varahigroup.com"
                className="p-3 bg-white/10 rounded-sap hover:bg-primary hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-xl">Services</h3>
            <ul className="space-y-4 text-white/80">
              <li><a href="#ai-services" className="hover:text-primary transition-colors duration-300 font-medium">AI Services</a></li>
              <li><a href="#cx-services" className="hover:text-primary transition-colors duration-300 font-medium">CX Services</a></li>
              <li><a href="#customer-studies" className="hover:text-primary transition-colors duration-300 font-medium">Customer Studies</a></li>
              <li><a href="#consult" className="hover:text-primary transition-colors duration-300 font-medium">Consultation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-6 text-xl">Stay Updated</h3>
            <p className="text-white/80 mb-6 font-light">
              Get exclusive insights on CX trends, AI implementations, and SAP platform updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-sap text-white placeholder-white/60 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm"
                />
                <motion.button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-sap hover:bg-secondary hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sap-green font-medium"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-white/70 text-center md:text-left font-light">
            © 2025 Varahi Group. All rights reserved. SAP is a trademark of SAP SE; Varahi Group is independent.
          </p>
          <div className="flex items-center space-x-8 text-white/70">
            <a href="#" className="hover:text-primary transition-colors duration-300 font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300 font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;