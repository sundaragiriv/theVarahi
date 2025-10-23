import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Zap, Shield, Cog } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const SolutionsPage: React.FC = () => {
  const services = [
    {
      id: 'sap-solutions',
      title: 'SAP Solutions & S/4HANA',
      description: 'Complete ERP transformation with S/4HANA migration, BTP integration, and cloud modernization',
      icon: Cog,
      features: ['S/4HANA Migration', 'BTP Integration', 'Cloud Platform', 'Process Optimization'],
      metrics: { timeline: '12-24 weeks', roi: '20-35% efficiency gains*', clients: '50+ implementations' },
      link: '/services/sap-solutions',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 'enterprise-cx',
      title: 'Enterprise Customer Experience',
      description: 'Advanced CX platforms with Service Cloud, Sales Cloud, and Field Service Management',
      icon: Users,
      features: ['Service Cloud V2', 'Sales Cloud V2', 'Field Service', 'CPQ Solutions'],
      metrics: { timeline: '8-16 weeks', roi: '15-30% efficiency gains*', clients: '30+ implementations' },
      link: '/services/enterprise-cx',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      id: 'ai-orchestration',
      title: 'AI Orchestration & Automation',
      description: 'Intelligent process automation with RAG, predictive analytics, and conversational AI',
      icon: Zap,
      features: ['RAG Implementation', 'Process Automation', 'Predictive Analytics', 'Conversational AI'],
      metrics: { timeline: '6-12 weeks', roi: '20-40% efficiency gains*', clients: '15+ AI projects' },
      link: '/services/ai-orchestration',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      id: 'joule-enablement',
      title: 'SAP Joule Enablement',
      description: 'AI-powered assistant integration across SAP landscape for enhanced user productivity',
      icon: Star,
      features: ['Joule Implementation', 'AI Assistant Setup', 'Workflow Integration', 'User Training'],
      metrics: { timeline: '4-8 weeks', roi: '25-45% productivity gains*', clients: '12+ Joule implementations' },
      link: '/services/joule-enablement',
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      textColor: 'text-amber-600'
    },
    {
      id: 'upgrade-sap',
      title: 'Upgrade SAP Infrastructure',
      description: 'Managed services, infrastructure upgrades, and 24/7 support for SAP environments',
      icon: Shield,
      features: ['Managed Services', 'Infrastructure Upgrade', 'Security Enhancement', '24/7 Support'],
      metrics: { timeline: 'Ongoing', roi: 'Enterprise reliability*', clients: '25+ managed systems' },
      link: '/services/upgrade-sap',
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50 relative">
        <GridBackground opacity={0.04} gridSize={60} color="#0070f2" />
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-turmeric-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">SAP Gold Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-brand-100 to-accent-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">500+ Implementations</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              Enterprise SAP Services
            </h1>
            <p className="text-xl text-text-light max-w-4xl mx-auto leading-relaxed mb-8">
              Complete SAP ecosystem transformation from S/4HANA migration to AI-powered solutions. 
              We deliver <span className="text-brand-600 font-semibold">measurable outcomes within 3-9 months</span> based on proven methodologies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">200+</div>
                <div className="text-sm text-text-light">SAP Projects*</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">85%</div>
                <div className="text-sm text-text-light">Client Retention*</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turmeric-600">16</div>
                <div className="text-sm text-text-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-700">15-35%</div>
                <div className="text-sm text-text-light">Efficiency Gains*</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact/sales-inquiry"
                className="bg-gradient-to-r from-brand-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-brand-600 text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-brand-600 hover:text-white transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Five specialized service areas designed to transform your SAP landscape and accelerate digital innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${service.bgColor} rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 group hover:scale-105`}
                >
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${service.textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${service.textColor.replace('text-', 'bg-')} rounded-full`} />
                        <span className="text-sm text-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6 text-sm text-text-light">
                    <span>{service.metrics.timeline}</span>
                    <span>{service.metrics.roi}</span>
                    <span>{service.metrics.clients}</span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-brand-600 to-accent-600 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your SAP Landscape?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join 500+ enterprises who've accelerated their digital transformation with Varahi Systems. 
              Get your free consultation and roadmap today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Client Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3-9 Months</div>
                <div className="text-sm opacity-80">Typical ROI Timeline*</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Global Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-80">Client Retention Rate*</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xs opacity-60 max-w-xl mx-auto">
                *Results based on client mix and may vary. Timeline estimates reflect typical project scope and organizational readiness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;