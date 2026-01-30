import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Clock, TrendingUp, CheckCircle2, Zap, Building2, Gauge } from 'lucide-react';
import GridBackground from '../../components/GridBackground';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Global Manufacturing Leader: Predictive Maintenance Revolution',
      industry: 'Manufacturing',
      company: 'Fortune 100 Automotive Manufacturer',
      challenge: 'A leading automotive manufacturer was experiencing costly unplanned downtime across 15 production facilities, with maintenance costs exceeding $50M annually. Traditional reactive maintenance was causing production delays and quality issues.',
      solution: 'Varahi implemented an AI-powered predictive maintenance platform that analyzes sensor data from 10,000+ machines in real-time. Our solution combines IoT sensors, machine learning algorithms, and automated alert systems to predict equipment failures 2-4 weeks before they occur.',
      stack: 'SAP S/4HANA, SAP BTP, Azure IoT Hub, Azure Machine Learning, Power BI, Custom ML Models',
      results: [
        '35% reduction in unplanned downtime',
        '28% decrease in maintenance costs',
        '15% improvement in overall equipment effectiveness (OEE)',
        '$12M annual savings in first year',
        '99.2% prediction accuracy for critical equipment'
      ],
      timeline: 'Phase 1: Assessment & Design (6 weeks) → Phase 2: Pilot Implementation (12 weeks) → Phase 3: Full Rollout (16 weeks)',
      team: '1 Solution Architect, 3 ML Engineers, 2 SAP Consultants, 1 Data Scientist, 1 Project Manager',
      artifacts: [
        'Predictive Maintenance Architecture Blueprint',
        'ML Model Training & Validation Report',
        'ROI Analysis & Business Case',
        'Implementation Playbook'
      ],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop'
    },
    {
      title: 'Leading CPG Brand: AI-Driven Customer Experience Transformation',
      industry: 'Consumer Packaged Goods',
      company: 'Top 10 Global CPG Company',
      challenge: 'A major CPG brand was struggling with fragmented customer service across 12 countries, leading to inconsistent experiences and rising support costs. Customer satisfaction scores were declining while service volume was increasing 25% year-over-year.',
      solution: 'Varahi designed and implemented an omnichannel AI customer service platform that unifies all touchpoints. Our solution includes intelligent chatbots, sentiment analysis, automated case routing, and predictive customer insights that enable proactive support.',
      stack: 'SAP Service Cloud, SAP Conversational AI, Microsoft Bot Framework, Azure Cognitive Services, Salesforce Integration',
      results: [
        '45% reduction in average response time',
        '62% decrease in service costs per interaction',
        '18-point increase in customer satisfaction (NPS)',
        '78% of inquiries resolved without human intervention',
        '25% increase in customer lifetime value'
      ],
      timeline: 'Phase 1: Platform Design (4 weeks) → Phase 2: Bot Development (8 weeks) → Phase 3: Integration & Testing (4 weeks)',
      team: '1 CX Architect, 2 Bot Developers, 1 SAP Consultant, 1 UX Designer, 1 Change Manager',
      artifacts: [
        'Omnichannel CX Architecture',
        'Chatbot Conversation Flows',
        'Integration Specifications',
        'Change Management Plan'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      title: 'Regional Utility: Smart Grid Optimization Success',
      industry: 'Utilities',
      company: 'Major Regional Electric Utility',
      challenge: 'A regional utility serving 2.5M customers faced aging infrastructure, increasing demand, and regulatory pressure to improve reliability. Outages were costing $15M annually in lost revenue and regulatory penalties.',
      solution: 'Varahi deployed a comprehensive smart grid management system with AI-powered demand forecasting, automated load balancing, and predictive infrastructure monitoring. The platform processes data from 50,000+ smart meters and grid sensors in real-time.',
      stack: 'SAP S/4HANA Utilities, SAP Analytics Cloud, Azure IoT Central, Power BI, Custom Forecasting Models',
      results: [
        '52% reduction in power outages',
        '23% improvement in energy efficiency',
        '99.97% grid uptime achieved',
        '$8M annual savings in operational costs',
        '30% faster outage restoration times'
      ],
      timeline: 'Phase 1: Infrastructure Assessment (8 weeks) → Phase 2: Smart Meter Deployment (20 weeks) → Phase 3: AI Platform Integration (12 weeks)',
      team: '1 Utilities Expert, 2 IoT Engineers, 1 SAP Consultant, 2 Data Engineers, 1 Regulatory Specialist',
      artifacts: [
        'Smart Grid Architecture Design',
        'Demand Forecasting Models',
        'Regulatory Compliance Framework',
        'Operations Manual'
      ],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <GridBackground opacity={0.02} gridSize={60} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-brand-50 via-white to-accent-50">
        <GridBackground opacity={0.03} gridSize={80} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-brand-200/50 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="h-4 w-4 text-brand-600" />
              <span className="text-sm font-medium text-brand-700">Proven Success Stories</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real Results,{" "}
              <span className="text-transparent bg-gradient-to-r from-brand-600 via-turmeric-500 to-accent-600 bg-clip-text">
                Measurable Impact
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover how enterprise leaders transformed their operations with our AI-powered solutions, 
              delivering exceptional ROI and sustainable growth.
            </motion.p>

            {/* Stats Overview */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-brand-100/50">
                <div className="text-3xl font-bold text-brand-600 mb-2">$25M+</div>
                <div className="text-sm text-gray-600">Total Client Savings</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-turmeric-100/50">
                <div className="text-3xl font-bold text-turmeric-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Avg ROI Improvement</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-accent-100/50">
                <div className="text-3xl font-bold text-accent-600 mb-2">99.2%</div>
                <div className="text-sm text-gray-600">Prediction Accuracy</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-brand-100/50">
                <div className="text-3xl font-bold text-brand-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500">
                  <div className="grid lg:grid-cols-5 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 p-8 lg:p-12">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg">
                              {study.industry === 'Manufacturing' && <Building2 className="h-4 w-4 text-white" />}
                              {study.industry === 'Consumer Packaged Goods' && <Users className="h-4 w-4 text-white" />}
                              {study.industry === 'Utilities' && <Zap className="h-4 w-4 text-white" />}
                            </div>
                            <span className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                              {study.industry}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors duration-300">
                            {study.title}
                          </h3>
                          <p className="text-lg font-semibold text-turmeric-600">{study.company}</p>
                        </div>
                        <ArrowUpRight className="h-6 w-6 text-gray-500 group-hover:text-brand-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      
                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <h4 className="font-bold text-gray-900">Challenge</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm">{study.challenge}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <h4 className="font-bold text-gray-900">Solution</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm">{study.solution}</p>
                        </div>
                      </div>
                      
                      {/* Results Grid */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Gauge className="h-5 w-5 text-turmeric-600" />
                          <h4 className="font-bold text-gray-900">Key Results</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, resultIndex) => (
                            <motion.div
                              key={result}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: resultIndex * 0.1 }}
                              className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100/50"
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-800">{result}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white p-8">
                      <div className="space-y-8">
                        {/* Visual */}
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                          <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        
                        {/* Timeline */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-brand-600" />
                            <h4 className="font-semibold text-gray-900">Timeline</h4>
                          </div>
                          <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-200/50">
                            {study.timeline}
                          </p>
                        </div>
                        
                        {/* Team */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-accent-600" />
                            <h4 className="font-semibold text-gray-900">Expert Team</h4>
                          </div>
                          <p className="text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-200/50">
                            {study.team}
                          </p>
                        </div>
                        
                        {/* Technology Stack */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-turmeric-600 rounded-sm"></div>
                            <h4 className="font-semibold text-gray-900">Technology Stack</h4>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200/50">
                            <p className="text-xs text-gray-600 leading-relaxed">{study.stack}</p>
                          </div>
                        </div>
                        
                        {/* Artifacts */}
                        {study.artifacts && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Key Deliverables</h4>
                            <div className="space-y-2">
                              {study.artifacts.map((artifact) => (
                                <div 
                                  key={artifact} 
                                  className="flex items-center gap-2 text-sm text-brand-700 bg-brand-50 px-3 py-2 rounded-lg"
                                >
                                  <div className="w-1 h-1 bg-brand-500 rounded-full"></div>
                                  <span className="font-medium">{artifact}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-800">
        <GridBackground opacity={0.1} gridSize={100} color="white" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join industry leaders who've achieved measurable results with our proven AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brand-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-700 transition-all duration-300"
              >
                Download Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;