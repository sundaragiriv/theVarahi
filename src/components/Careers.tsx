import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Clock, DollarSign, Users, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior Systems Architect',
      department: 'Engineering',
      location: 'Remote / Philadelphia',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'Lead the design and implementation of enterprise-scale intelligent systems.',
      requirements: ['8+ years systems architecture', 'Cloud platforms (AWS/Azure)', 'Microservices design']
    },
    {
      title: 'AI/ML Engineer',
      department: 'Technology',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Build and deploy machine learning models that power our adaptive networks.',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow/PyTorch', 'MLOps experience']
    },
    {
      title: 'Enterprise Solutions Consultant',
      department: 'Strategy',
      location: 'Hybrid / Multiple Cities',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Partner with enterprise clients to design digital transformation strategies.',
      requirements: ['Business consulting experience', 'Enterprise software knowledge', 'Client-facing skills']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity participation, and performance bonuses'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and collaborative tools'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Growth & Development',
      description: 'Continuous learning budget, conference attendance, and mentorship programs'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision insurance plus wellness and mental health support'
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
                Join Our Team
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent mb-6">
              Build the Future
            </h1>
            
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
              Join our team of <strong className="text-accent-700">engineers, architects, and thinkers</strong> who are creating the intelligent systems that power tomorrow's enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Varahi Systems */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text mb-4">Why Work at Varahi Systems?</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We're not just building technology — we're creating living systems that learn, adapt, and evolve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-border shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-text mb-3">{benefit.title}</h3>
                <p className="text-text-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-text mb-4">Open Positions</h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Join us in building the next generation of intelligent enterprise systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-brand-600 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-text-light">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold rounded-lg hover:from-brand-700 hover:to-accent-700 transition-all duration-300 shadow-md hover:shadow-lg mt-4 lg:mt-0"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <p className="text-text-light mb-6">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-text mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-light">
                          <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-brand-600 to-accent-600 rounded-2xl shadow-xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Don't See the Perfect Role?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to Varahi Systems's mission.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Send Your Resume</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;