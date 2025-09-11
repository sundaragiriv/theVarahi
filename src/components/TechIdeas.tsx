import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const TechIdeas: React.FC = () => {
  const posts = [
    {
      title: 'Building RAG Systems with SAP BTP Vector Engine',
      excerpt: 'Step-by-step guide to implementing Retrieval Augmented Generation using SAP\'s new vector database capabilities.',
      tag: 'AI/ML',
      date: '2025-01-15',
      readTime: '8 min read'
    },
    {
      title: 'Microservices Architecture for CX Integrations',
      excerpt: 'Design patterns and best practices for building scalable customer experience platforms with modern architecture.',
      tag: 'Architecture',
      date: '2025-01-12',
      readTime: '12 min read'
    },
    {
      title: 'Advanced Service Cloud Workflows',
      excerpt: 'Optimizing case management and SLA compliance with advanced workflow configurations and custom logic.',
      tag: 'SAP CX',
      date: '2025-01-08',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="tech-ideas" className="py-20 bg-paper/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Tech Ideas
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            Hands-on insights, patterns, and code for modern CX and AI implementations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-6 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-brand/10 text-brand">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.tag}
                  </span>
                  <div className="flex items-center text-xs text-ink/60">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ink group-hover:text-brand transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-ink/70 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-ink/10">
                  <span className="text-sm text-ink/60">{post.readTime}</span>
                  <motion.div
                    className="flex items-center space-x-1 text-brand font-medium group-hover:space-x-2 transition-all duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">Read more</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="btn-secondary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Tech Ideas</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechIdeas;