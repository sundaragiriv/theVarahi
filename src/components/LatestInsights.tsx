import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LatestInsights: React.FC = () => {
  const posts = [
    {
      title: 'The Role of AI in Proactive CX Management',
      summary: 'How leading enterprises use AI to anticipate customer needs and prevent issues before they occur.',
      tag: 'Customer Experience',
      readTime: '8 min read',
      link: '/resources/blog'
    },
    {
      title: '5 Key Steps to Successful AI Implementation',
      summary: 'A comprehensive guide to navigating AI transformation from assessment to full-scale deployment.',
      tag: 'AI Strategy',
      readTime: '12 min read',
      link: '/resources/blog'
    },
    {
      title: 'Building Ethical AI Governance Frameworks',
      summary: 'Practical approaches to AI governance that balance innovation with responsibility and compliance.',
      tag: 'AI Governance',
      readTime: '10 min read',
      link: '/resources/blog'
    }
  ];

  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div 
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4" style={{lineHeight: '1.2', paddingBottom: '8px'}}>Latest Insights</h2>
            <p className="text-xl text-gray-600">Expert perspectives on AI transformation and enterprise innovation</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/resources/blog"
              className="text-primary font-bold hover:text-secondary transition-colors flex items-center"
            >
              View All Posts 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={index} 
              className="glass-card overflow-hidden group hover:shadow-sap-xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-bold border border-primary/20">
                    {post.tag}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.summary}
                </p>
                
                <Link
                  to={post.link}
                  className="inline-flex items-center text-primary font-bold hover:text-secondary transition-all duration-300 group-hover:translate-x-2 transform"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;