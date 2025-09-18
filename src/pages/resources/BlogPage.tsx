import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Role of AI in Proactive Customer Experience Management',
      summary: 'Discover how leading enterprises are using AI to anticipate customer needs, prevent issues before they occur, and create personalized experiences that drive loyalty and revenue growth.',
      category: 'Customer Experience',
      readTime: '8 min read',
      date: 'March 15, 2024',
      author: 'Jennifer Park',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
    },
    {
      title: '5 Key Steps to a Successful Enterprise AI Implementation',
      summary: 'A comprehensive guide to navigating AI transformation, from initial assessment to full-scale deployment. Learn the critical success factors that separate winning AI initiatives from failed experiments.',
      category: 'AI Strategy',
      readTime: '12 min read',
      date: 'March 8, 2024',
      author: 'Dr. Michael Rodriguez',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
    },
    {
      title: 'Building Ethical AI: Governance Frameworks That Actually Work',
      summary: 'Explore practical approaches to AI governance that balance innovation with responsibility. Real-world examples of how Fortune 500 companies are implementing ethical AI practices.',
      category: 'AI Governance',
      readTime: '10 min read',
      date: 'February 28, 2024',
      author: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    },
    {
      title: 'Predictive Maintenance ROI: Beyond the Hype',
      summary: 'An in-depth analysis of predictive maintenance implementations across manufacturing industries. Learn what drives real ROI and how to avoid common pitfalls.',
      category: 'Manufacturing',
      readTime: '15 min read',
      date: 'February 20, 2024',
      author: 'David Kumar',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop'
    },
    {
      title: 'The Future of Supply Chain: AI-Driven Demand Forecasting',
      summary: 'How CPG companies are revolutionizing supply chain management with AI-powered demand forecasting. Case studies and lessons learned from successful implementations.',
      category: 'Supply Chain',
      readTime: '11 min read',
      date: 'February 12, 2024',
      author: 'Lisa Thompson',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
    }
  ];

  const categories = ['All', 'AI Strategy', 'Customer Experience', 'Manufacturing', 'Supply Chain', 'AI Governance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            Insights on AI, CX, and the Future of Business
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert perspectives on enterprise AI transformation, customer experience innovation, and industry best practices.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <Link
                    to="/contact/general-inquiry"
                    className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;