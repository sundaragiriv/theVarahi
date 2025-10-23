import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, MessageSquare, TrendingUp, Lightbulb, Clock, Shield } from 'lucide-react';
import GridBackground from '../../components/GridBackground';

const JouleEnablementPage: React.FC = () => {
  const jouleFeatures = [
    {
      id: 'joule-implementation',
      title: 'SAP Joule Implementation & Setup',
      description: 'Complete setup and configuration of SAP Joule across your SAP landscape with custom training',
      icon: Star,
      timeline: '2-4 weeks',
      investment: 'Starting at $15K',
      roi: '50% productivity gain',
      features: [
        'Joule AI assistant configuration',
        'Custom prompt engineering',
        'Integration with SAP systems',
        'User permission and security setup',
        'Multi-language support configuration',
        'Performance optimization and tuning'
      ]
    },
    {
      id: 'workflow-integration',
      title: 'Workflow Integration & Optimization',
      description: 'Seamlessly integrate Joule into existing business workflows and optimize for maximum productivity',
      icon: Zap,
      timeline: '3-6 weeks',
      investment: 'Starting at $20K',
      roi: '60% workflow efficiency',
      features: [
        'Business process analysis and mapping',
        'Workflow automation design',
        'Custom Joule skill development',
        'Exception handling and escalation',
        'Performance monitoring and analytics',
        'Continuous optimization recommendations'
      ]
    },
    {
      id: 'user-training',
      title: 'User Training & Change Management',
      description: 'Comprehensive training programs to ensure successful Joule adoption across your organization',
      icon: Users,
      timeline: '2-3 weeks',
      investment: 'Starting at $10K',
      roi: '80% user adoption',
      features: [
        'Role-based training curricula',
        'Interactive learning modules',
        'Change management strategy',
        'User support documentation',
        'Train-the-trainer programs',
        'Ongoing support and coaching'
      ]
    },
    {
      id: 'advanced-capabilities',
      title: 'Advanced AI Capabilities & Customization',
      description: 'Unlock Joule\'s full potential with advanced AI features and custom business logic integration',
      icon: Lightbulb,
      timeline: '4-8 weeks',
      investment: 'Starting at $25K',
      roi: '70% automation rate',
      features: [
        'Custom AI model integration',
        'Advanced natural language processing',
        'Predictive analytics integration',
        'Business intelligence dashboards',
        'API integrations and extensions',
        'Advanced security and compliance'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '50% Productivity Increase',
      description: 'Users complete tasks 50% faster with natural language interactions'
    },
    {
      icon: Clock,
      title: '80% Faster Training',
      description: 'Reduce new user onboarding time by 80% with intuitive AI guidance'
    },
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Interact with SAP systems using everyday language and voice commands'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security and compliance with SAP\'s enterprise standards'
    }
  ];

  const useCases = [
    {
      title: 'Financial Planning & Analysis',
      description: 'Ask Joule to generate reports, analyze variances, and suggest budget optimizations',
      example: '"Show me Q4 variance analysis and recommend cost optimization areas"',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Sales Operations',
      description: 'Get instant insights on sales performance, pipeline analysis, and customer data',
      example: '"What are my top 10 opportunities this quarter and their close probability?"',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Supply Chain Management',
      description: 'Monitor inventory levels, track shipments, and optimize procurement processes',
      example: '"Check inventory levels for Product X and suggest reorder quantities"',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'HR & Employee Services',
      description: 'Handle employee queries, process requests, and provide policy information',
      example: '"What is the leave policy for new employees and how do I apply?"',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-brand-50 relative">
        <GridBackground opacity={0.04} gridSize={50} color="#f59e0b" />
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">Next-Generation AI</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
              SAP Joule Enablement
            </h1>
            
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Revolutionize user experience with SAP's AI-powered digital assistant. Reduce training time by 
              <span className="text-amber-600 font-semibold"> 80%</span> and increase user productivity by 
              <span className="text-amber-600 font-semibold"> 50%</span> with natural language interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-gradient-to-r from-amber-600 to-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Joule Demo & Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                View Joule Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-text-light">Joule Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">50%</div>
                <div className="text-sm text-text-light">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">80%</div>
                <div className="text-sm text-text-light">Faster Training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turmeric-600">2-4</div>
                <div className="text-sm text-text-light">Weeks to Deploy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Joule Features Overview */}
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
              Complete Joule Enablement Services
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              From implementation to advanced customization, we help you unlock Joule's full potential for your enterprise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {jouleFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-brand-50 p-8 rounded-2xl border border-amber-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-amber-600 text-sm">{feature.timeline}</div>
                      <div className="text-xs text-text-light">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-brand-600 text-sm">{feature.investment}</div>
                      <div className="text-xs text-text-light">Investment</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-accent-600 text-sm">{feature.roi}</div>
                      <div className="text-xs text-text-light">Expected ROI</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0" />
                        <span className="text-sm text-text-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact/sales-inquiry"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]"
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

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Joule in Action: Real Business Scenarios
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              See how Joule transforms everyday business interactions with natural language processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-20 bg-gradient-to-r ${useCase.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-amber-600 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-text-light leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-amber-500">
                    <div className="text-xs text-gray-500 mb-1">Example Query:</div>
                    <div className="text-gray-700 italic">"{useCase.example}"</div>
                  </div>
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
              Why Choose Varahi for Joule Enablement
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Early adopter advantage with proven implementation methodology and comprehensive support
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
                  className="bg-gradient-to-br from-amber-50 to-brand-50 p-8 rounded-xl border border-amber-100 hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-600" />
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

      {/* Early Adopter Benefits */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-brand-600 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Early Adopter Advantage Program
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Be among the first to implement Joule and gain competitive advantage with special pricing and priority support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Star className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Priority Access</h3>
              <p className="opacity-80">First access to new Joule features and capabilities</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Competitive Edge</h3>
              <p className="opacity-80">Gain market advantage with AI-powered efficiency</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Expert Support</h3>
              <p className="opacity-80">Dedicated Joule specialists and priority support</p>
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
              <h3 className="text-2xl font-bold">Limited Time: 50% Implementation Discount</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              Early adopters receive 50% discount on Joule implementation services, priority support, and access to 
              exclusive training materials. Limited to the first 25 enterprise customers.
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
              Ready to Experience the Future of SAP Interaction?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Book a live Joule demonstration and see how natural language AI transforms user experience. 
              Get a custom implementation roadmap with ROI projections for your specific use cases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Live Joule Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Early Adopter Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-sm opacity-80">Productivity Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2-4 Weeks</div>
                <div className="text-sm opacity-80">Time to Deploy</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-sm opacity-80">Training Reduction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JouleEnablementPage;