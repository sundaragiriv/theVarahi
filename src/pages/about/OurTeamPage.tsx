import React from 'react';
import { motion } from 'framer-motion';

const OurTeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Naga P Sundaragiri',
      role: 'Chief Executive Officer',
      bio: 'A passionate educator turned technology visionary, Naga brings a unique perspective to enterprise AI transformation. With dual Master\'s degrees in Science and a background in teaching, she combines deep technical knowledge with exceptional communication skills. As a great AI enthusiast, she has dedicated her career to making complex technology accessible and transformative for businesses worldwide.',
      quote: 'Education and technology are the twin pillars of progress. My journey from the classroom to the boardroom has taught me that the best AI solutions are those that empower people to achieve more than they ever thought possible.',
      image: '/poornis.png'
    },
    {
      name: 'Venkata R Sundaragiri',
      role: 'Head of Technology',
      bio: 'A seasoned technology architect with extensive experience in enterprise systems and AI implementation. Venkata specializes in building scalable, robust technology solutions that drive business transformation. His expertise spans cloud architecture, AI/ML platforms, and enterprise integration, ensuring our clients receive cutting-edge yet reliable technology solutions.',
      quote: 'Great technology should be invisible to the user but transformative in its impact. We build systems that work seamlessly behind the scenes while delivering extraordinary business value.',
      image: '/profile.jpg'
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