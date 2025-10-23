import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Globe, Network, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Alliances: React.FC = () => {
  const allianceTypes = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Technology Alliances',
      description: 'Strategic partnerships with leading technology providers to enhance our platform capabilities.',
      partners: ['Cloud Infrastructure Partners', 'AI/ML Platform Providers', 'Enterprise Software Vendors']
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Industry Consortiums',
      description: 'Collaborative alliances that drive industry standards and best practices for intelligent systems.',
      partners: ['Digital Transformation Alliance', 'AI Ethics Consortium', 'Enterprise Architecture Council']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security & Compliance Alliances',
      description: 'Partnerships focused on maintaining the highest standards of security and regulatory compliance.',
      partners: ['Cybersecurity Frameworks', 'Compliance Certification Bodies', 'Data Protection Alliances']
    }
  ];

  const keyAlliances = [
    {
      name: 'Global Cloud Alliance',
      type: 'Technology Partner',
      focus: 'Cloud Infrastructure & Scalability',
      status: 'Strategic Alliance'
    },
    {
      name: 'Enterprise AI Consortium',
      type: 'Industry Group',
      focus: 'AI Standards & Ethics',
      status: 'Board Member'
    },
    {
      name: 'Digital Transformation Network',
      type: 'Professional Alliance',
      focus: 'Best Practices & Innovation',
      status: 'Founding Partner'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50">
      {/* Back Navigation */}
      <div className="pt-6 pb-4">
        <div className="container mx-auto px-6">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to About Us
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-accent-900/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 border border-accent-300 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></span>
              <span className="text-sm text-accent-700 font-medium">
                Strategic Alliances
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent mb-6">
              Strategic Alliances
            </h1>
            
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
              Varahi Systems participates in <strong className="text-accent-700">strategic alliances</strong> that advance the intelligent systems ecosystem and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alliance Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text mb-4">Alliance Categories</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our strategic alliances span multiple categories to ensure comprehensive ecosystem coverage.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allianceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-100 to-accent-100 rounded-2xl flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-brand-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-text-light leading-relaxed mb-6">
                  {type.description}
                </p>
                <div>
                  <h4 className="font-semibold text-text mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {type.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-light">
                        <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></span>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Alliances */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text mb-4">Key Strategic Alliances</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Our participation in leading industry alliances and consortiums.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {keyAlliances.map((alliance, index) => (
              <motion.div
                key={alliance.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-text group-hover:text-brand-600 transition-colors">
                        {alliance.name}
                      </h3>
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full">
                        {alliance.status}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-text-light">
                      <div>
                        <span className="font-medium text-text">Type: </span>
                        {alliance.type}
                      </div>
                      <div>
                        <span className="font-medium text-text">Focus: </span>
                        {alliance.focus}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-100 to-accent-100 rounded-xl flex items-center justify-center text-brand-600">
                      <Network className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-brand-600 to-accent-600 rounded-2xl shadow-xl p-12 text-white"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Alliance Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">For Varahi Systems</h3>
                      <ul className="space-y-2 opacity-90">
                        <li>• Access to cutting-edge technologies</li>
                        <li>• Industry standards development</li>
                        <li>• Market intelligence and trends</li>
                        <li>• Collaborative innovation opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">For Our Clients</h3>
                      <ul className="space-y-2 opacity-90">
                        <li>• Best-in-class integrated solutions</li>
                        <li>• Standards-compliant implementations</li>
                        <li>• Future-proof technology choices</li>
                        <li>• Reduced integration risks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-text mb-6">
              Interested in Alliance Opportunities?
            </h2>
            <p className="text-xl text-text-light mb-8">
              Connect with our alliance team to explore collaboration opportunities and strategic partnerships.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold rounded-lg hover:from-brand-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explore Alliance Opportunities</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alliances;