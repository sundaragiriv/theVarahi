import React from 'react';
import { motion } from 'framer-motion';

const OurStoryPage: React.FC = () => {
  const milestones = [
    {
      year: '2019',
      title: 'The Vision',
      description: 'Founded with a mission to bridge the gap between AI potential and enterprise reality',
      icon: '💡'
    },
    {
      year: '2020',
      title: 'First Enterprise Client',
      description: 'Delivered our first successful SAP AI integration for a Fortune 500 manufacturer',
      icon: '🏭'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Named SAP Partner of Excellence and expanded to financial services sector',
      icon: '🏆'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened European operations and launched our AI governance framework',
      icon: '🌍'
    },
    {
      year: '2023',
      title: 'Innovation Leadership',
      description: 'Pioneered RAG/RASP implementations and Joule integration methodologies',
      icon: '🚀'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Leading the next wave of enterprise AI with responsible, human-centered solutions',
      icon: '🔮'
    }
  ];

  const values = [
    {
      title: 'Human-Centered AI',
      description: 'Technology that amplifies human potential rather than replacing it',
      icon: '👥'
    },
    {
      title: 'Enterprise Excellence',
      description: 'Deep industry expertise combined with cutting-edge technical capabilities',
      icon: '⭐'
    },
    {
      title: 'Responsible Innovation',
      description: 'Ethical AI development with robust governance and transparency',
      icon: '🛡️'
    },
    {
      title: 'Measurable Impact',
      description: 'Focus on tangible business outcomes and sustainable transformation',
      icon: '📈'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              Our Story
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of enterprise AI through human-centered innovation and responsible technology leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To transform enterprise operations through intelligent technology that puts human potential at the center of every solution, 
                creating a future where AI amplifies human capabilities and drives meaningful business outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From vision to reality: the milestones that shaped our path to becoming a trusted AI transformation partner.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-3xl mb-3">{milestone.icon}</div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-white border-4 border-blue-400 rounded-full z-10 shadow-lg" />
                  
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision, every solution, and every partnership we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl leading-relaxed mb-8">
              As we continue to push the boundaries of what's possible with enterprise AI, our commitment remains unwavering: 
              to build technology that serves humanity, creates value, and opens new possibilities for businesses and their people.
            </p>
            <p className="text-lg opacity-90">
              The future of work is not about humans versus machines—it's about humans with machines, 
              working together to solve complex challenges and create unprecedented opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;