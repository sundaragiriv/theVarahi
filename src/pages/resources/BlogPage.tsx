import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewsletterSubscription from '../../components/NewsletterSubscription';
import { 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  User, 
  TrendingUp, 
  BookOpen, 
  Sparkles,
  Brain,
  Users,
  Zap,
  Building2,
  BarChart3
} from 'lucide-react';
import GridBackground from '../../components/GridBackground';

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

  const categories = [
    { name: 'All', icon: BookOpen, color: 'brand' },
    { name: 'AI Strategy', icon: Brain, color: 'turmeric' },
    { name: 'Customer Experience', icon: Users, color: 'accent' },
    { name: 'Manufacturing', icon: Building2, color: 'brand' },
    { name: 'Supply Chain', icon: BarChart3, color: 'turmeric' },
    { name: 'AI Governance', icon: Zap, color: 'accent' }
  ];
  
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : BookOpen;
  };

  return (
    <div className="relative min-h-screen bg-white">
      <GridBackground opacity={0.02} gridSize={60} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-turmeric-50 via-white to-brand-50">
        <GridBackground opacity={0.03} gridSize={80} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-turmeric-200/50 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-turmeric-600" />
              <span className="text-sm font-medium text-turmeric-700">Latest Tech Insights</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI & Technology{" "}
              <span className="text-transparent bg-gradient-to-r from-turmeric-600 via-brand-600 to-accent-600 bg-clip-text">
                Updates
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay ahead with expert insights on enterprise AI transformation, customer experience innovation, 
              and cutting-edge technology trends shaping the future of business.
            </motion.p>

            {/* Featured Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-turmeric-100/50">
                <div className="text-3xl font-bold text-turmeric-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Expert Articles</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-brand-100/50">
                <div className="text-3xl font-bold text-brand-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-accent-100/50">
                <div className="text-3xl font-bold text-accent-600 mb-2">6</div>
                <div className="text-sm text-gray-600">Topic Categories</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-turmeric-100/50">
                <div className="text-3xl font-bold text-turmeric-600 mb-2">Weekly</div>
                <div className="text-sm text-gray-600">New Content</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore by Category</h2>
            <p className="text-gray-600">Filter articles by your area of interest</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.name;
              
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white shadow-lg shadow-${category.color}-500/25`
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <IconComponent className={`h-4 w-4 ${isActive ? 'text-white' : `text-${category.color}-600`}`} />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category);
              
              return (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-gray-900/5 border border-gray-200/50 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
                        <IconComponent className="h-3 w-3 text-turmeric-600" />
                        <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                      </div>
                    </div>
                    
                    {/* Read Time */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                        <Clock className="h-3 w-3 text-white" />
                        <span className="text-xs font-medium text-white">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-turmeric-700 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 mb-4">
                        {post.summary}
                      </p>
                    </div>
                    
                    {/* Author & Date */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{post.date}</span>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Link
                      to="/contact/general-inquiry"
                      className="group/btn inline-flex items-center gap-2 text-turmeric-600 font-semibold hover:text-turmeric-700 transition-colors duration-300"
                    >
                      <span>Read Full Article</span>
                      <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try selecting a different category to explore our content.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="relative py-20 bg-gradient-to-br from-turmeric-600 via-turmeric-700 to-brand-800">
        <GridBackground opacity={0.1} gridSize={100} color="white" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8">
              <TrendingUp className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Stay Updated</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Never Miss the Latest Tech Insights
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get weekly updates on AI trends, enterprise technology, and innovation strategies 
              delivered directly to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <NewsletterSubscription variant="inline" className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border-white/20" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;