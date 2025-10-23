import React from 'react';
import { motion } from 'framer-motion';

const OurTeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former VP of AI Strategy at a Fortune 100 technology company, Sarah brings 15+ years of experience scaling AI initiatives across global enterprises. She holds an MBA from Wharton and MS in Computer Science from Stanford.',
      quote: 'AI transformation isn\'t about replacing human judgment—it\'s about amplifying it. Our role is to ensure every AI implementation makes people more effective, not obsolete.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Head of Technology',
      bio: 'PhD in Machine Learning from MIT, former Principal Scientist at leading AI research lab. Michael has published 50+ papers on enterprise AI and holds 12 patents in predictive analytics and natural language processing.',
      quote: 'The most sophisticated AI is worthless if it doesn\'t solve real business problems. We build technology that works in the real world, not just in the lab.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Park',
      role: 'Head of Solutions',
      bio: 'Former McKinsey Principal with 12 years in digital transformation consulting. Jennifer has led AI implementations for 50+ Fortune 500 companies across manufacturing, retail, and financial services.',
      quote: 'Successful AI transformation requires equal parts technology and change management. We don\'t just implement systems—we transform organizations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Kumar',
      role: 'Head of Engineering',
      bio: 'Former Staff Engineer at Google Cloud AI, architect of enterprise AI platforms serving millions of users. David specializes in scalable AI infrastructure and has led engineering teams of 50+ developers.',
      quote: 'Enterprise AI demands enterprise-grade reliability. We build systems that scale with your business and evolve with your needs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Success',
      bio: 'Former Director of Customer Success at leading SaaS company, expert in enterprise client relationships and AI adoption strategies. Lisa ensures every client achieves measurable ROI from their AI investments.',
      quote: 'Our success is measured by our clients\' success. We\'re not just vendors—we\'re partners in your AI journey from strategy to scale.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
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
            Meet the Innovators Driving Your Success
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our team of experts combines deep technical knowledge with a passion for solving real-world business problems.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{member.bio}</p>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                      "{member.quote}"
                    </blockquote>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''} flex justify-center`}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-64 h-64 rounded-full object-cover shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;