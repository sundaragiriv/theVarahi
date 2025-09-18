import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Real-World Results. Measurable Impact.
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See how our clients achieved tangible business outcomes with Varahi's AI platform.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900">{study.title}</h3>
                    <p className="text-lg font-semibold text-blue-600">{study.company}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Technology Stack</h4>
                        <p className="text-gray-700 text-sm">{study.stack}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Timeline</h4>
                        <p className="text-gray-700 text-sm">{study.timeline}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Results</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start text-gray-700 text-sm">
                            <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">Team</h4>
                      <p className="text-gray-700 text-sm">{study.team}</p>
                    </div>
                    
                    {study.artifacts && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-3">Key Artifacts</h4>
                        <ul className="space-y-1">
                          {study.artifacts.map((artifact) => (
                            <li key={artifact} className="text-blue-700 text-sm font-medium">
                              • {artifact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;