import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Handshake, Users, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partnerships: React.FC = () => {
  const partnershipTypes = [
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Technology Partners',
      description: 'Integrate your solutions with our intelligent systems platform to create comprehensive enterprise offerings.',
      benefits: ['Joint go-to-market strategies', 'Technical integration support', 'Co-marketing opportunities']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Channel Partners',
      description: 'Expand your service portfolio by offering Varahi Systems solutions to your enterprise clients.',
      benefits: ['Partner enablement programs', 'Sales training and support', 'Revenue sharing models']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Solution Partners',
      description: 'Collaborate on innovative solutions that address complex enterprise transformation challenges.',
      benefits: ['Joint solution development', 'Shared R&D investments', 'Market co-creation']
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
                Strategic Partnerships
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent mb-6">
              Partnership Opportunities
            </h1>
            
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
              Collaborate with Varahi Systems to create <strong className="text-accent-700">innovative solutions</strong> that transform how enterprises operate in an intelligent, connected world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text mb-4">Types of Partnerships</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We offer multiple partnership models to align with your business goals and capabilities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipTypes.map((type, index) => (
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
                  <h4 className="font-semibold text-text mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-light">
                        <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Success Story */}
      <section className="py-16 bg-white/50">
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
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Partnership Success</h2>
                  <p className="text-lg leading-relaxed opacity-90 mb-6">
                    "Our partnership with Varahi Systems has enabled us to deliver 40% faster implementations while maintaining 99.9% system reliability. Their intelligent systems approach complements our consulting methodology perfectly."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">AC</span>
                    </div>
                    <div>
                      <div className="font-semibold">Alex Chen</div>
                      <div className="text-sm opacity-80">Partner Director, Global Systems Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-12"
            >
              <h2 className="text-3xl font-bold text-text mb-8">Partner Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-brand-600 mb-4">Ideal Partner Profile</h3>
                  <ul className="space-y-3 text-text-light">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></span>
                      Enterprise-focused organization with proven track record
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></span>
                      Technical expertise in cloud, AI, or enterprise systems
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></span>
                      Commitment to joint go-to-market activities
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></span>
                      Shared values of innovation and excellence
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-600 mb-4">Partnership Process</h3>
                  <ul className="space-y-3 text-text-light">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      Initial consultation and mutual assessment
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      Partnership agreement and technical integration
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      Joint solution development and testing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      Launch and ongoing partnership management
                    </li>
                  </ul>
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
              Ready to Partner with Varahi Systems?
            </h2>
            <p className="text-xl text-text-light mb-8">
              Let's explore how we can create innovative solutions together and drive mutual growth in the intelligent systems market.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold rounded-lg hover:from-brand-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;