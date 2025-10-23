import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Shield, Cog, Cloud, Zap } from 'lucide-react';
import GridBackground from '../../components/GridBackground';

const SAPSolutionsPage: React.FC = () => {
  const solutions = [
    {
      id: 's4hana-migration',
      title: 'S/4HANA Migration & Modernization',
      description: 'Seamless transition from legacy ERP systems to modern S/4HANA platform with zero business disruption',
      icon: Cog,
      timeline: '8-16 weeks',
      investment: 'Starting at $50K',
      roi: '300% avg ROI',
      features: [
        'Legacy system assessment and migration planning',
        'Zero-downtime migration methodology',
        'Business process optimization',
        'Data migration and validation',
        'User training and change management',
        'Post-go-live support and optimization'
      ]
    },
    {
      id: 'btp-integration',
      title: 'BTP Integration & Cloud Platform',
      description: 'Cloud platform integration, API management, and hybrid cloud architecture design',
      icon: Cloud,
      timeline: '4-8 weeks',
      investment: 'Starting at $25K',
      roi: 'Custom APIs included',
      features: [
        'SAP Business Technology Platform setup',
        'API management and governance',
        'Hybrid cloud architecture design',
        'Integration flows and connectors',
        'Security and compliance configuration',
        'Monitoring and analytics dashboard'
      ]
    },
    {
      id: 'process-optimization',
      title: 'Business Process Optimization',
      description: 'Streamline workflows, automate processes, and optimize business operations for maximum efficiency',
      icon: Zap,
      timeline: '6-12 weeks',
      investment: 'Starting at $35K',
      roi: '40% efficiency gain',
      features: [
        'Process analysis and mapping',
        'Automation opportunities identification',
        'Workflow optimization design',
        'Custom development and configuration',
        'Testing and quality assurance',
        'Performance monitoring and tuning'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Guaranteed ROI',
      description: 'Average 300% ROI within first year with measurable business outcomes'
    },
    {
      icon: Shield,
      title: 'Zero Risk Migration',
      description: 'Proven methodology ensures zero business disruption during transition'
    },
    {
      icon: Clock,
      title: 'Accelerated Timeline',
      description: 'Reduce implementation time by 40% with our pre-built accelerators'
    },
    {
      icon: CheckCircle,
      title: 'Success Guarantee',
      description: 'We guarantee project success or your money back'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-brand-50 relative">
        <GridBackground opacity={0.04} gridSize={50} color="#0070f2" />
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Most Popular Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
              SAP Solutions & S/4HANA Migration
            </h1>
            
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Transform your enterprise with comprehensive SAP modernization. From legacy ERP migration to cloud platform integration, 
              we deliver <span className="text-brand-600 font-semibold">guaranteed results in 90 days</span> with zero business disruption.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-gradient-to-r from-brand-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free SAP Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-brand-600 text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-brand-600 hover:text-white transition-all duration-300"
              >
                View Migration Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">200+</div>
                <div className="text-sm text-text-light">Successful Migrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">99.9%</div>
                <div className="text-sm text-text-light">Uptime During Migration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turmeric-600">40%</div>
                <div className="text-sm text-text-light">Faster Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-700">300%</div>
                <div className="text-sm text-text-light">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
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
              Complete SAP Transformation Suite
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              End-to-end SAP modernization services designed to maximize business value and minimize risk
            </p>
          </motion.div>

          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-reverse' : ''}`}
                >
                  <div>
                    <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-brand-600" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-text mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-lg text-text-light mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-brand-50 rounded-lg">
                        <div className="font-semibold text-brand-600">{solution.timeline}</div>
                        <div className="text-sm text-text-light">Timeline</div>
                      </div>
                      <div className="text-center p-4 bg-accent-50 rounded-lg">
                        <div className="font-semibold text-accent-600">{solution.investment}</div>
                        <div className="text-sm text-text-light">Investment</div>
                      </div>
                      <div className="text-center p-4 bg-turmeric-50 rounded-lg">
                        <div className="font-semibold text-turmeric-600">{solution.roi}</div>
                        <div className="text-sm text-text-light">Expected ROI</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                          <span className="text-text-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact/sales-inquiry"
                      className="inline-flex items-center bg-gradient-to-r from-brand-600 to-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className={`bg-gradient-to-br from-brand-100 to-accent-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden ${!isEven ? 'lg:order-first' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10"></div>
                    <div className="text-center relative z-10">
                      <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <IconComponent className="w-16 h-16 text-brand-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-text mb-2">{solution.title.split(' ')[0]}</h4>
                      <p className="text-text-light text-sm">{solution.title.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Why Choose Varahi for SAP Transformation
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Proven methodology, guaranteed results, and unmatched expertise in SAP implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-brand-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-text-light leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-600 to-accent-600 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your SAP Landscape?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get a free SAP assessment and custom migration roadmap. Our experts will analyze your current setup 
              and provide a detailed transformation plan with timeline and ROI projections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free SAP Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold mb-2">90 Days</div>
                <div className="text-sm opacity-80">to Measurable ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Zero</div>
                <div className="text-sm opacity-80">Business Disruption</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Success Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SAPSolutionsPage;