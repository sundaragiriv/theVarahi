import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, Settings, Server, Monitor, HeadphonesIcon, AlertTriangle } from 'lucide-react';
import GridBackground from '../../components/GridBackground';

const UpgradeSAPPage: React.FC = () => {
  const managedServices = [
    {
      id: 'managed-services',
      title: '24/7 Managed SAP Services',
      description: 'Complete SAP environment management with proactive monitoring, maintenance, and support',
      icon: Monitor,
      timeline: 'Ongoing',
      investment: 'Starting at $5K/month',
      roi: '99.9% uptime SLA',
      features: [
        '24/7/365 monitoring and support',
        'Proactive issue detection and resolution',
        'Performance optimization and tuning',
        'Security patch management',
        'Backup and disaster recovery',
        'Monthly health checks and reporting'
      ]
    },
    {
      id: 'infrastructure-upgrade',
      title: 'Infrastructure Upgrade & Migration',
      description: 'Modern cloud infrastructure setup with scalable architecture and enhanced security',
      icon: Server,
      timeline: '6-12 weeks',
      investment: 'Starting at $75K',
      roi: '40% cost reduction',
      features: [
        'Cloud migration strategy and execution',
        'Infrastructure assessment and sizing',
        'High availability architecture design',
        'Security and compliance configuration',
        'Performance monitoring setup',
        'Cost optimization recommendations'
      ]
    },
    {
      id: 'security-enhancement',
      title: 'Security Enhancement & Compliance',
      description: 'Enterprise-grade security implementation with compliance frameworks and audit support',
      icon: Shield,
      timeline: '4-8 weeks',
      investment: 'Starting at $35K',
      roi: '100% compliance ready',
      features: [
        'Security vulnerability assessment',
        'Compliance framework implementation',
        'Access control and identity management',
        'Data encryption and protection',
        'Audit trail and monitoring',
        'Incident response procedures'
      ]
    },
    {
      id: 'support-optimization',
      title: 'Support Optimization & Training',
      description: 'Optimize support processes and empower your team with advanced SAP knowledge and tools',
      icon: HeadphonesIcon,
      timeline: '3-6 weeks',
      investment: 'Starting at $25K',
      roi: '60% faster resolution',
      features: [
        'Support process analysis and optimization',
        'Advanced technical training programs',
        'Knowledge base development',
        'Escalation procedures and workflows',
        'Performance metrics and KPIs',
        'Continuous improvement programs'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '99.9% Uptime Guarantee',
      description: 'Industry-leading SLA with proactive monitoring and rapid incident response'
    },
    {
      icon: Settings,
      title: 'Automated Operations',
      description: 'Intelligent automation reduces manual tasks and human errors by 80%'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures and compliance with industry standards'
    },
    {
      icon: CheckCircle,
      title: 'Cost Optimization',
      description: 'Average 40% reduction in total cost of ownership through optimization'
    }
  ];

  const supportTiers = [
    {
      name: 'Essential Support',
      price: 'Starting at $5K/month',
      features: [
        '24/7 monitoring and alerts',
        'Basic incident response',
        'Monthly health reports',
        'Email and phone support',
        'Standard SLA (99.5% uptime)'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Premium Support',
      price: 'Starting at $10K/month',
      features: [
        'All Essential features',
        'Proactive issue prevention',
        'Performance optimization',
        'Priority incident response',
        'Enhanced SLA (99.9% uptime)',
        'Quarterly business reviews'
      ],
      color: 'from-green-500 to-green-600',
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: 'Custom pricing',
      features: [
        'All Premium features',
        'Dedicated support team',
        'Strategic advisory services',
        'Custom SLA agreements',
        'On-site support options',
        'Executive escalation'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-brand-50 relative">
        <GridBackground opacity={0.04} gridSize={50} color="#ef4444" />
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">Mission-Critical Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Upgrade SAP Infrastructure
            </h1>
            
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Comprehensive managed services, infrastructure upgrades, and 24/7 support for your SAP environment. 
              Achieve <span className="text-red-600 font-semibold">99.9% uptime</span> and 
              <span className="text-red-600 font-semibold"> 40% cost reduction</span> with our enterprise-grade services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-gradient-to-r from-red-600 to-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Infrastructure Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                View Support Case Studies
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">300+</div>
                <div className="text-sm text-text-light">Systems Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">99.9%</div>
                <div className="text-sm text-text-light">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">40%</div>
                <div className="text-sm text-text-light">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turmeric-600">24/7</div>
                <div className="text-sm text-text-light">Global Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managed Services Overview */}
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
              Complete SAP Infrastructure Services
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              From managed services to infrastructure upgrades, we ensure your SAP environment is optimized, secure, and always available
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {managedServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-50 to-brand-50 p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-red-600 text-sm">{service.timeline}</div>
                      <div className="text-xs text-text-light">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-brand-600 text-sm">{service.investment}</div>
                      <div className="text-xs text-text-light">Investment</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-accent-600 text-sm">{service.roi}</div>
                      <div className="text-xs text-text-light">Expected ROI</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                        <span className="text-sm text-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact/sales-inquiry"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]"
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

      {/* Support Tiers */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Flexible Support Plans
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Choose the right level of support for your business needs and growth stage
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'ring-4 ring-green-500 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className={`h-32 bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-text mb-2">{tier.price}</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact/sales-inquiry"
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${tier.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Choose Plan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Varahi for SAP Infrastructure
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Proven expertise in enterprise SAP environments with industry-leading SLAs and support
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
                  className="bg-gradient-to-br from-red-50 to-brand-50 p-8 rounded-xl border border-red-100 hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-600" />
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

      {/* Emergency Support */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-brand-600 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              24/7 Emergency Response
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Critical SAP issues can't wait. Our emergency response team is available around the clock 
              to resolve mission-critical problems and minimize business impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt; 15 min</div>
              <div className="text-lg opacity-80">Emergency Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7/365</div>
              <div className="text-lg opacity-80">Global Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-80">Issue Resolution Rate</div>
            </div>
          </div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <HeadphonesIcon className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">Critical Issue Guarantee</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              For critical SAP issues affecting business operations, we guarantee response within 15 minutes 
              and resolution within 4 hours, or receive service credits on your next billing cycle.
            </p>
          </motion.div>
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
              Ready to Upgrade Your SAP Infrastructure?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get a comprehensive infrastructure assessment and support roadmap. Our experts will analyze your 
              current setup and provide recommendations for optimization, security, and cost reduction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Infrastructure Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Support Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-80">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Global Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-80">Cost Reduction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UpgradeSAPPage;