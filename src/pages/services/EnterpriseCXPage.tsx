import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, PhoneCall, ShoppingBag, MessageSquare, BarChart3, Heart } from 'lucide-react';
import GridBackground from '../../components/GridBackground';

const EnterpriseCXPage: React.FC = () => {
  const cxSolutions = [
    {
      id: 'sales-cloud',
      title: 'Sales Cloud & Revenue Optimization',
      description: 'Streamline sales processes, automate lead management, and boost revenue growth with AI-powered insights',
      icon: BarChart3,
      timeline: '6-10 weeks',
      investment: 'Starting at $35K',
      roi: '60% productivity boost',
      features: [
        'Lead scoring and opportunity management',
        'Sales process automation and workflows',
        'Revenue forecasting and pipeline analytics',
        'Territory and quota management',
        'Mobile sales enablement',
        'Integration with marketing and service'
      ]
    },
    {
      id: 'service-cloud',
      title: 'Service Cloud & Support Excellence',
      description: 'Deliver exceptional customer service experiences with omnichannel support and AI-powered case resolution',
      icon: PhoneCall,
      timeline: '4-8 weeks',
      investment: 'Starting at $30K',
      roi: '45% satisfaction increase',
      features: [
        'Omnichannel case management',
        'AI-powered knowledge base',
        'Field service scheduling and dispatch',
        'Customer self-service portals',
        'SLA tracking and escalation',
        'Real-time collaboration tools'
      ]
    },
    {
      id: 'marketing-cloud',
      title: 'Marketing Cloud & Personalization',
      description: 'Create personalized customer journeys, automate campaigns, and drive engagement across all touchpoints',
      icon: MessageSquare,
      timeline: '6-12 weeks',
      investment: 'Starting at $40K',
      roi: '3x engagement rates',
      features: [
        'Customer journey mapping and automation',
        'Personalized content delivery',
        'Multi-channel campaign management',
        'Behavioral tracking and analytics',
        'A/B testing and optimization',
        'Lead nurturing and scoring'
      ]
    },
    {
      id: 'commerce-solutions',
      title: 'Commerce & Digital Experience',
      description: 'B2B/B2C e-commerce platform with omnichannel capabilities and AI-powered personalization',
      icon: ShoppingBag,
      timeline: '8-14 weeks',
      investment: 'Starting at $45K',
      roi: '300% conversion increase',
      features: [
        'Omnichannel commerce platform',
        'Product catalog management',
        'Personalized shopping experiences',
        'Order management and fulfillment',
        'Payment processing and security',
        'Analytics and reporting dashboard'
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Customer-Centric Design',
      description: 'Solutions designed around customer needs and journey optimization'
    },
    {
      icon: BarChart3,
      title: 'Measurable Outcomes',
      description: 'Guaranteed improvements in satisfaction, efficiency, and revenue'
    },
    {
      icon: Heart,
      title: 'Seamless Integration',
      description: 'Native integration with SAP ecosystem and third-party systems'
    },
    {
      icon: CheckCircle,
      title: 'Proven Methodology',
      description: 'Battle-tested implementation approach with 150+ successful projects'
    }
  ];

  const metrics = [
    { value: '45%', label: 'Customer Satisfaction Increase', color: 'text-green-600' },
    { value: '60%', label: 'Sales Productivity Boost', color: 'text-blue-600' },
    { value: '3x', label: 'Marketing Engagement Rates', color: 'text-purple-600' },
    { value: '300%', label: 'E-commerce Conversion Lift', color: 'text-orange-600' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-brand-50 relative">
        <GridBackground opacity={0.04} gridSize={50} color="#10b981" />
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">High ROI Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Enterprise Customer Experience
            </h1>
            
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Transform customer relationships with integrated Sales, Service, and Marketing Cloud solutions. 
              Increase customer satisfaction by <span className="text-green-600 font-semibold">45%</span> and boost sales productivity by 
              <span className="text-green-600 font-semibold"> 60%</span> with our proven CX methodology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-gradient-to-r from-green-600 to-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free CX Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                View CX Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                  <div className="text-sm text-text-light">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CX Solutions Overview */}
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
              Complete Customer Experience Platform
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Integrated solutions that transform every customer touchpoint across sales, service, marketing, and commerce
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {cxSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-brand-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-green-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-green-600 text-sm">{solution.timeline}</div>
                      <div className="text-xs text-text-light">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-brand-600 text-sm">{solution.investment}</div>
                      <div className="text-xs text-text-light">Investment</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-accent-600 text-sm">{solution.roi}</div>
                      <div className="text-xs text-text-light">Expected ROI</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                        <span className="text-sm text-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact/sales-inquiry"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]"
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

      {/* Success Metrics */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-brand-600 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Proven CX Results
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our CX implementations consistently deliver measurable improvements across all customer touchpoints
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-80">CX Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-lg opacity-80">Avg Satisfaction Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-lg opacity-80">Sales Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6-12</div>
              <div className="text-lg opacity-80">Weeks to Value</div>
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
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">Success Guarantee</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              We guarantee measurable improvements in customer satisfaction, sales productivity, and operational efficiency 
              within 90 days of go-live, or we'll work with you at no additional cost until targets are met.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-brand-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Why Choose Varahi for CX Transformation
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Industry-leading expertise in customer experience design and SAP CX implementations
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
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-green-600" />
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
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get a comprehensive CX assessment and roadmap. Our experts will analyze your customer journey 
              and provide actionable recommendations for immediate improvements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free CX Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View CX Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold mb-2">45%</div>
                <div className="text-sm opacity-80">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-sm opacity-80">Sales Productivity</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">90 Days</div>
                <div className="text-sm opacity-80">Time to Value</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseCXPage;