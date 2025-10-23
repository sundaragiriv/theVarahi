import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Bot, Brain, Zap, Target, Database, MessageSquare, BarChart3, Cpu } from 'lucide-react';
import GridBackground from '../../components/GridBackground';

const AIOrchestrationPage: React.FC = () => {
  const aiSolutions = [
    {
      id: 'rag-implementation',
      title: 'RAG Implementation & Knowledge Systems',
      description: 'Retrieval Augmented Generation systems that provide intelligent, context-aware responses using your enterprise data',
      icon: Database,
      timeline: '4-6 weeks',
      investment: 'Starting at $25K',
      roi: '50% query efficiency',
      features: [
        'Enterprise data ingestion and vectorization',
        'Intelligent document retrieval systems',
        'Context-aware response generation',
        'Multi-source knowledge integration',
        'Real-time learning and updates',
        'Secure data handling and compliance'
      ]
    },
    {
      id: 'process-automation',
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts, transforming complex business processes with minimal human intervention',
      icon: Zap,
      timeline: '6-10 weeks',
      investment: 'Starting at $35K',
      roi: '60% process efficiency',
      features: [
        'Workflow analysis and optimization',
        'Intelligent decision engines',
        'Exception handling and escalation',
        'Cross-system integration',
        'Performance monitoring and analytics',
        'Continuous learning and improvement'
      ]
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics & Insights',
      description: 'Advanced machine learning models that predict trends, identify risks, and recommend actions for better business outcomes',
      icon: BarChart3,
      timeline: '8-12 weeks',
      investment: 'Starting at $40K',
      roi: '40% forecast accuracy',
      features: [
        'Custom ML model development',
        'Real-time data processing',
        'Predictive maintenance systems',
        'Risk assessment and mitigation',
        'Revenue forecasting models',
        'Anomaly detection and alerts'
      ]
    },
    {
      id: 'conversational-ai',
      title: 'Conversational AI & Virtual Assistants',
      description: 'Intelligent chatbots and virtual assistants that understand context, learn from interactions, and provide human-like support',
      icon: MessageSquare,
      timeline: '5-8 weeks',
      investment: 'Starting at $30K',
      roi: '70% support automation',
      features: [
        'Natural language understanding',
        'Multi-intent conversation handling',
        'Integration with business systems',
        'Sentiment analysis and routing',
        'Voice and text capabilities',
        'Multilingual support'
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'AI that thinks, learns, and adapts to your business needs automatically'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Data-driven insights that identify opportunities with surgical precision'
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      description: 'Cloud-native AI solutions that scale with your business growth'
    },
    {
      icon: CheckCircle,
      title: 'Proven ROI',
      description: '40% average efficiency improvement within 90 days of deployment'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: 'Reduce support tickets by 70% with intelligent chatbots and automated case routing',
      metric: '70% ticket reduction',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures before they happen with IoT data and ML models',
      metric: '85% failure prevention',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Sales Intelligence',
      description: 'Identify high-value prospects and optimize sales strategies with AI insights',
      metric: '45% conversion lift',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Optimize inventory, reduce waste, and predict demand with intelligent forecasting',
      metric: '30% cost reduction',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-brand-50 relative">
        <GridBackground opacity={0.04} gridSize={50} color="#8b5cf6" />
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Cutting-Edge AI</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
              AI Orchestration & Automation
            </h1>
            
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Transform your business with intelligent process automation, RAG systems, and predictive analytics. 
              Achieve <span className="text-purple-600 font-semibold">40% efficiency improvement</span> and 
              <span className="text-purple-600 font-semibold"> 60% cost reduction</span> with our AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-gradient-to-r from-purple-600 to-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get AI Strategy Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View AI Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-text-light">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">40%</div>
                <div className="text-sm text-text-light">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600">60%</div>
                <div className="text-sm text-text-light">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-turmeric-600">4-8</div>
                <div className="text-sm text-text-light">Weeks to Deploy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Overview */}
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
              Enterprise AI Solutions Portfolio
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Comprehensive AI orchestration services that transform business processes and drive intelligent automation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {aiSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-brand-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-purple-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-text-light mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-purple-600 text-sm">{solution.timeline}</div>
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
                        <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                        <span className="text-sm text-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact/sales-inquiry"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]"
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Real-World AI Applications
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              See how our AI solutions deliver measurable results across different business functions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-32 bg-gradient-to-br ${useCase.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-lg">{useCase.metric}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-purple-600 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-text-light leading-relaxed">
                    {useCase.description}
                  </p>
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
              Why Choose Varahi for AI Implementation
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Industry-leading AI expertise with proven methodologies and guaranteed outcomes
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
                  className="bg-gradient-to-br from-purple-50 to-brand-50 p-8 rounded-xl border border-purple-100 hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-purple-600" />
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

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-brand-600 text-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise-Grade AI Technology Stack
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Built on proven technologies and platforms that scale with your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Bot className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Azure OpenAI</h3>
              <p className="opacity-80">GPT-4, embeddings, and custom models</p>
            </div>
            <div className="text-center">
              <Database className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Vector Databases</h3>
              <p className="opacity-80">High-performance retrieval systems</p>
            </div>
            <div className="text-center">
              <Cpu className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">SAP BTP AI</h3>
              <p className="opacity-80">Native SAP AI services integration</p>
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
              <h3 className="text-2xl font-bold">Enterprise Security & Compliance</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              All AI solutions are built with enterprise-grade security, data privacy compliance (GDPR, CCPA), 
              and audit trails. Your data never leaves your environment without explicit permission.
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
              Ready to Orchestrate AI Across Your Enterprise?
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get a comprehensive AI strategy assessment and roadmap. Our experts will identify the highest-value 
              AI opportunities and create a phased implementation plan with guaranteed ROI milestones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact/sales-inquiry"
                className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Book AI Strategy Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View AI Case Studies
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-80">Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4-8 Weeks</div>
                <div className="text-sm opacity-80">Time to Deploy</div>
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

export default AIOrchestrationPage;