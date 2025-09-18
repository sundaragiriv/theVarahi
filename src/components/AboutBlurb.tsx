import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutBlurb: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">Ready to Transform Your Enterprise?</h2>
          
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            We partner with Fortune 500 companies to build AI solutions that deliver measurable business outcomes. 
            Our proven methodology combines deep technical expertise with industry-specific knowledge to ensure 
            your AI transformation succeeds from day one.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact/sales-inquiry"
              className="btn-primary inline-flex items-center justify-center text-lg px-10 py-5"
            >
              Schedule Assessment
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about/our-story"
              className="btn-secondary inline-flex items-center justify-center text-lg px-10 py-5"
            >
              Learn About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBlurb;