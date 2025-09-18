import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Solutions Architect',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      description: 'Lead the design and implementation of enterprise AI solutions for Fortune 500 clients. Requires 7+ years experience in AI/ML and enterprise architecture.',
      requirements: ['MS/PhD in Computer Science or related field', 'Enterprise AI implementation experience', 'Strong client-facing skills']
    },
    {
      title: 'Principal Data Scientist',
      department: 'Data Science',
      location: 'Remote / New York',
      description: 'Drive advanced analytics and machine learning initiatives across multiple industry verticals. Lead a team of data scientists and ML engineers.',
      requirements: ['PhD in Data Science, Statistics, or related field', 'Industry experience in CPG or Utilities', 'Leadership experience']
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / Chicago',
      description: 'Ensure client success and drive adoption of AI solutions. Work closely with C-level executives to maximize ROI from AI investments.',
      requirements: ['5+ years in enterprise customer success', 'Experience with AI/ML products', 'Strong relationship management skills']
    },
    {
      title: 'Business Development Director',
      department: 'Sales',
      location: 'Remote / Boston',
      description: 'Drive new business acquisition in the enterprise AI market. Build relationships with Fortune 500 prospects and close complex deals.',
      requirements: ['10+ years enterprise sales experience', 'Track record of $1M+ deals', 'AI/technology industry background']
    },
    {
      title: 'DevOps Engineer - AI Infrastructure',
      department: 'Engineering',
      location: 'Remote / Austin',
      description: 'Build and maintain scalable AI infrastructure supporting enterprise deployments. Focus on MLOps, monitoring, and security.',
      requirements: ['5+ years DevOps experience', 'Kubernetes and cloud platforms', 'MLOps and AI model deployment']
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Top-tier salary, equity, and performance bonuses',
      icon: '💰'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours',
      icon: '🏠'
    },
    {
      title: 'Learning & Development',
      description: '$5,000 annual learning budget and conference attendance',
      icon: '📚'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, vision, and mental health coverage',
      icon: '🏥'
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and research',
      icon: '🔬'
    },
    {
      title: 'Impact',
      description: 'Work on cutting-edge AI solutions that transform businesses',
      icon: '🚀'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join the AI Revolution
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're looking for passionate problem-solvers to help us build the future of enterprise AI.
          </motion.p>
          
          <motion.div 
            className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              At Varahi, we believe that the best AI solutions come from diverse teams of brilliant minds working together to solve complex challenges. We're building a culture where innovation thrives, where every voice is heard, and where your work directly impacts the future of enterprise technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Join Varahi?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.department}
                      </span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact/sales-inquiry"
                    className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
                
                <p className="text-gray-700 mb-4">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;