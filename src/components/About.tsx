import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'Consistent delivery and dependable partnerships that enterprises can count on.'
    },
    {
      icon: Eye,
      title: 'Clarity',
      description: 'Transparent communication and clear documentation throughout every engagement.'
    },
    {
      icon: Award,
      title: 'Measurable Outcomes',
      description: 'Focus on KPIs and business metrics that matter to your organization.'
    }
  ];

  const leadership = [
    { name: 'Raj Patel', role: 'Managing Director', experience: '15+ years SAP CX' },
    { name: 'Sarah Chen', role: 'Head of AI Practice', experience: '12+ years ML/AI' },
    { name: 'Michael Kumar', role: 'CX Architecture Lead', experience: '18+ years Enterprise CX' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            About Varahi Group
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-ink/70 leading-relaxed mb-8">
              Founded by enterprise software veterans, Varahi Group specializes in customer experience 
              and AI transformations that deliver measurable business outcomes. We combine deep SAP CX 
              expertise with modern AI capabilities to help Fortune 500 companies modernize their 
              customer engagement platforms.
            </p>
            <p className="text-lg text-ink/60 leading-relaxed">
              Our team of certified architects and consultants has successfully implemented over 200+ 
              CX projects across manufacturing, financial services, retail, and technology sectors. 
              We focus on sustainable solutions that scale with your business and deliver ROI within 
              the first 90 days.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-ink text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-brand/10 mx-auto mb-6 group-hover:bg-brand/20 transition-colors duration-200">
                    <IconComponent className="h-8 w-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-semibold text-ink mb-3">{value.title}</h4>
                  <p className="text-ink/70 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-ink text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-ink mb-1">{leader.name}</h4>
                <p className="text-brand font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-ink/60">{leader.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;