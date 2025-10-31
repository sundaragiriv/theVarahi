import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Factory, Trophy, Globe, Rocket, Eye, Users, Star, Shield, TrendingUp, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const OurStoryPage: React.FC = () => {
  const milestones = [
    {
      year: '2009',
      title: 'The Foundation',
      description: 'Founded as Focal IT Inc with a vision to transform enterprise operations through intelligent SAP solutions',
      icon: Lightbulb,
      color: 'from-emerald-500 to-blue-500'
    },
    {
      year: '2015',
      title: 'Enterprise Breakthrough',
      description: 'Delivered first major S/4HANA transformation for Fortune 100 manufacturing giant',
      icon: Factory,
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Named SAP Partner of Excellence, expanded to financial services and utilities',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Opened operations in India and Europe, launched AI governance framework',
      icon: Globe,
      color: 'from-pink-500 to-red-500'
    },
    {
      year: '2022',
      title: 'AI Innovation Leadership',
      description: 'Pioneered enterprise AI orchestration and conversational AI implementations',
      icon: Rocket,
      color: 'from-red-500 to-orange-500'
    },
    {
      year: '2024',
      title: 'Future Intelligence',
      description: 'Leading next-gen enterprise AI with Joule integration and responsible automation',
      icon: Eye,
      color: 'from-orange-500 to-emerald-500'
    },
    {
      year: '2025',
      title: 'Varahi Group',
      description: 'Rebranded to Varahi Group, expanding our intelligent enterprise transformation capabilities',
      icon: Sparkles,
      color: 'from-emerald-500 to-blue-500'
    }
  ];

  const values = [
    {
      title: 'Human-Centered Intelligence',
      description: 'AI that amplifies human potential, creating symbiotic relationships between technology and talent',
      icon: Users,
      gradient: 'from-emerald-400 to-blue-500'
    },
    {
      title: 'Enterprise Excellence',
      description: 'Deep industry expertise combined with cutting-edge technical capabilities and proven methodologies',
      icon: Star,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Responsible Innovation',
      description: 'Ethical AI development with robust governance, transparency, and sustainable business impact',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Measurable Transformation',
      description: 'Focus on tangible ROI, sustainable outcomes, and long-term competitive advantages',
      icon: TrendingUp,
      gradient: 'from-pink-500 to-emerald-400'
    }
  ];

  const achievements = [
    { metric: '500+', label: 'Enterprise Clients', sublabel: 'Fortune 1000 Companies' },
    { metric: '$50M+', label: 'Client Savings', sublabel: 'Documented ROI' },
    { metric: '16+', label: 'Years Experience', sublabel: 'Industry Leadership' },
    { metric: '99.9%', label: 'Uptime SLA', sublabel: 'Enterprise Grade' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-semibold text-sm">16 Years of Enterprise Excellence</span>
            </motion.div>
            
            <h1 className="text-4xl font-bold mb-6 text-blue-800" style={{lineHeight: '1.1'}}>
              Our <span className="text-transparent bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 bg-clip-text">Intelligence</span> Story
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From SAP pioneers to AI innovators—transforming enterprise operations through 
              <strong className="text-blue-800"> human-centered intelligence</strong> and responsible technology leadership.
            </p>
            
            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text mb-1">{achievement.metric}</div>
                  <div className="text-sm font-semibold text-blue-800">{achievement.label}</div>
                  <div className="text-xs text-gray-500">{achievement.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              To transform enterprise operations through <strong>intelligent technology</strong> that puts human potential at the center of every solution, 
              creating a future where AI amplifies human capabilities and drives <strong>measurable business outcomes</strong>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <CheckCircle className="w-12 h-12 text-emerald-200 mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-3">Human-First Approach</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">Technology that enhances human capabilities rather than replacing them, creating symbiotic intelligence</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TrendingUp className="w-12 h-12 text-blue-200 mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-3">Measurable Impact</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Focus on tangible ROI and sustainable business transformation with documented outcomes</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Shield className="w-12 h-12 text-purple-200 mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-3">Responsible Innovation</h3>
                <p className="text-purple-100 text-sm leading-relaxed">Ethical AI development with robust governance, transparency, and accountability frameworks</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Evolution</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From SAP pioneers to AI innovators—the key milestones that shaped our journey to becoming 
              a trusted enterprise transformation partner with <strong className="text-emerald-600">proven results</strong>.
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500 rounded-full shadow-lg" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <motion.div 
                    key={milestone.year}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <motion.div 
                        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${milestone.color} flex items-center justify-center mb-4 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-blue-800 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced Timeline dot */}
                    <motion.div 
                      className="w-6 h-6 bg-white border-3 border-emerald-400 rounded-full z-10 shadow-lg"
                      whileInView={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                    
                    <div className="w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Core Values</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The fundamental principles that guide every decision, every solution, and every partnership we build 
              in our mission to transform enterprise operations and create <strong className="text-emerald-600">lasting value</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={value.title}
                  className="group relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-emerald-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-800 via-purple-700 to-emerald-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.3, 1, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">The Future is <span className="text-transparent bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text">Intelligent</span></h2>
            <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              As we continue to push the boundaries of enterprise AI, our commitment remains unwavering: 
              to build <strong>technology that serves humanity</strong>, creates measurable value, and opens new possibilities for businesses and their people.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-3">Our Vision</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  The future of work is not about humans versus machines—it's about <strong className="text-white">humans with machines</strong>, 
                  working together to solve complex challenges and create unprecedented opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-bold mb-3">Our Commitment</h3>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  Every solution we build prioritizes <strong className="text-white">human potential</strong>, ethical AI practices, 
                  and sustainable business transformation that creates lasting competitive advantages.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-base font-semibold">Ready to Transform Your Enterprise?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;