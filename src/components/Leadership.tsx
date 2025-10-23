import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: 'Raj Patel',
      role: 'Chief Executive Officer',
      experience: '15+ years',
      expertise: 'Enterprise Architecture & Digital Transformation',
      bio: 'Raj leads Varahi Systems with a vision to bridge the gap between complex enterprise systems and human-centered design. With over 15 years in enterprise architecture, he has guided Fortune 500 companies through large-scale digital transformations.',
      education: 'MBA - Wharton, MS Computer Science - MIT',
      previousRoles: ['VP Engineering at Oracle', 'Principal Architect at IBM', 'Lead Consultant at Accenture']
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      experience: '12+ years',
      expertise: 'AI/ML Systems & Scalable Infrastructure',
      bio: 'Sarah drives our technical innovation and AI strategy. Her expertise in machine learning and distributed systems enables Varahi Systems to build intelligent, self-adapting networks that evolve with business needs.',
      education: 'PhD Computer Science - Stanford, BS Mathematics - Caltech',
      previousRoles: ['Senior Staff Engineer at Google', 'ML Research Scientist at Meta', 'Principal Engineer at Netflix']
    },
    {
      name: 'Michael Kumar',
      role: 'Chief Strategy Officer',
      experience: '18+ years',
      expertise: 'Business Strategy & Market Development',
      bio: 'Michael shapes Varahi Systems\'s strategic direction and market positioning. His deep understanding of enterprise needs and technology trends helps organizations navigate complex digital transformation journeys.',
      education: 'MBA - Harvard Business School, BS Engineering - IIT Delhi',
      previousRoles: ['VP Strategy at Microsoft', 'Managing Director at McKinsey', 'Principal at Bain & Company']
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
                Leadership Team
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-700 to-accent-600 bg-clip-text text-transparent mb-6">
              Visionary Leadership
            </h1>
            
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Meet the experienced leaders who guide Varahi Systems's mission to create <strong className="text-accent-700">intelligent, adaptive systems</strong> that transform how organizations operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Profile Image & Contact */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-white flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                      <span className="text-4xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center">{leader.name}</h3>
                    <p className="text-lg opacity-90 mb-4 text-center">{leader.role}</p>
                    <p className="text-sm opacity-80 mb-6 text-center">{leader.experience} Experience</p>
                    
                    {/* Contact Links */}
                    <div className="flex gap-4">
                      <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                        <Mail className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                        <Globe className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Profile Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-600 mb-2">Expertise</h4>
                      <p className="text-text font-medium">{leader.expertise}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-brand-600 mb-3">Biography</h4>
                      <p className="text-text-light leading-relaxed">{leader.bio}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-brand-600 mb-3">Education</h4>
                        <p className="text-text-light">{leader.education}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-600 mb-3">Previous Roles</h4>
                        <ul className="text-text-light space-y-1">
                          {leader.previousRoles.map((role, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mt-2 flex-shrink-0"></span>
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-text mb-6">
              Ready to Work with Our Leadership Team?
            </h2>
            <p className="text-xl text-text-light mb-8">
              Connect with our executives to discuss strategic initiatives and partnership opportunities.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold rounded-lg hover:from-brand-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Schedule Executive Meeting</span>
              <ArrowLeft className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;