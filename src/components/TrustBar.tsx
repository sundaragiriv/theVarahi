import React from 'react';
import { motion } from 'framer-motion';
import '../styles/animations.css';

const TrustBar: React.FC = () => {
  const logos = [
    'Microsoft', 'SAP', 'Salesforce', 'Adobe', 'Oracle'
  ];

  const metrics = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '$50M+', label: 'Client Savings' },
    { value: '14 Days', label: 'Avg. Time to Value' }
  ];

  return (
    <section className="relative py-20 overflow-hidden border-y border-gray-100/50">
      {/* Premium Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] animate-pulse" style={{animationDuration: '4s'}} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)] animate-pulse" style={{animationDuration: '6s'}} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/15 to-blue-200/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent uppercase tracking-widest mb-8">
              Trusted by Enterprise Leaders
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {logos.map((logo, index) => (
                <motion.div 
                  key={logo} 
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative px-6 py-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 shadow-lg group-hover:bg-white/80 group-hover:border-white/50 group-hover:shadow-xl transition-all duration-500">
                    <div className="text-gray-500 font-semibold text-lg tracking-wide group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {logo}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div 
            className="grid grid-cols-4 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.2 }}
          >
            {metrics.map((metric, index) => (
              <motion.div 
                key={metric.label} 
                className="relative text-center group cursor-pointer"
                initial={{ opacity: 0, y: 40, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-50/60 to-purple-50/40 backdrop-blur-lg rounded-2xl border border-white/40 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-white/50 group-hover:border-white/40 group-hover:shadow-2xl transition-all duration-500">
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-purple-800 transition-all duration-500"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-semibold mt-3 group-hover:text-gray-800 transition-colors duration-500 tracking-wide">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;