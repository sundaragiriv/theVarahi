import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Clock, ArrowUpRight, Lightbulb, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import GridBackground from '../../components/GridBackground';
import NewsletterSubscription from '../../components/NewsletterSubscription';

const ThoughtLeadershipPage: React.FC = () => {
  const thoughtLeadershipContent = [
    {
      title: 'The Future of Enterprise AI: Beyond Automation to Augmentation',
      author: 'Dr. Sarah Chen',
      role: 'Chief AI Strategist',
      publishDate: '2024-10-20',
      readTime: '8 min read',
      category: 'AI Strategy',
      excerpt: 'As enterprises move beyond basic automation, the real opportunity lies in AI augmentation - enhancing human capabilities rather than replacing them. This shift requires new frameworks for measuring success and ROI.',
      keyInsights: [
        'Augmentation yields 3x higher ROI than pure automation',
        'Human-AI collaboration requires new skill development frameworks',
        'Success metrics must evolve beyond efficiency to include innovation'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      title: 'SAP S/4HANA: The Platform Play for Digital Transformation',
      author: 'Michael Rodriguez',
      role: 'Enterprise Architecture Director',
      publishDate: '2024-10-15',
      readTime: '12 min read',
      category: 'ERP Strategy',
      excerpt: 'SAP S/4HANA is evolving from an ERP system to a platform for digital innovation. Organizations that understand this shift will build sustainable competitive advantages.',
      keyInsights: [
        'Platform thinking transforms ERP from cost center to innovation driver',
        'Embedded analytics create new business model opportunities',
        'API-first architecture enables ecosystem orchestration'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      title: 'Customer Experience Architecture: Building for the Decade Ahead',
      author: 'Emma Thompson',
      role: 'CX Innovation Lead',
      publishDate: '2024-10-10',
      readTime: '10 min read',
      category: 'Customer Experience',
      excerpt: 'The next decade of customer experience will be defined by predictive personalization, emotion AI, and seamless omnichannel orchestration. How should enterprises prepare?',
      keyInsights: [
        'Emotion AI will drive 40% of CX improvements by 2030',
        'Predictive personalization requires unified data architecture',
        'Omnichannel success depends on journey orchestration, not channel management'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop'
    },
    {
      title: 'The Sustainable Enterprise: Technology as an ESG Enabler',
      author: 'James Park',
      role: 'Sustainability Technology Director',
      publishDate: '2024-10-05',
      readTime: '9 min read',
      category: 'Sustainability',
      excerpt: 'ESG is moving from compliance to competitive advantage. Technology leaders must architect systems that measure, optimize, and report sustainability metrics in real-time.',
      keyInsights: [
        'Real-time ESG monitoring reduces compliance costs by 60%',
        'Supply chain transparency becomes competitive differentiator',
        'Automated sustainability reporting enables strategic decision-making'
      ],
      image: 'https://images.unsplash.com/photo-1497436072909-f23397f6b6b8?w=600&h=400&fit=crop'
    },
    {
      title: 'Manufacturing 4.0: The Convergence of Physical and Digital Operations',
      author: 'Dr. Lisa Wang',
      role: 'Industrial IoT Strategist',
      publishDate: '2024-09-30',
      readTime: '11 min read',
      category: 'Manufacturing',
      excerpt: 'The factory floor is becoming a data-rich environment where physical and digital operations converge. This creates unprecedented opportunities for optimization and innovation.',
      keyInsights: [
        'Digital twins reduce time-to-market by 50%',
        'Predictive maintenance prevents 90% of unplanned downtime',
        'AI-driven quality control achieves 99.9% accuracy rates'
      ],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop'
    },
    {
      title: 'Financial Services Transformation: Balancing Innovation with Trust',
      author: 'Robert Chen',
      role: 'FinTech Innovation Director',
      publishDate: '2024-09-25',
      readTime: '7 min read',
      category: 'Financial Services',
      excerpt: 'Financial institutions face the challenge of rapid innovation while maintaining the trust that defines their industry. The solution lies in transparent, explainable technology.',
      keyInsights: [
        'Explainable AI reduces regulatory review time by 40%',
        'Open banking APIs create new revenue streams',
        'Trust-by-design architecture prevents 95% of compliance issues'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  const authors = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Strategist',
      expertise: 'Artificial Intelligence, Machine Learning, Enterprise Architecture',
      articles: 12,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Enterprise Architecture Director',
      expertise: 'SAP S/4HANA, Digital Transformation, Platform Strategy',
      articles: 8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Emma Thompson',
      role: 'CX Innovation Lead',
      expertise: 'Customer Experience, Design Thinking, Omnichannel Strategy',
      articles: 15,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'James Park',
      role: 'Sustainability Technology Director',
      expertise: 'ESG Technology, Sustainable Operations, Green IT',
      articles: 6,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    }
  ];

  const categories = ['All Topics', 'AI Strategy', 'ERP Strategy', 'Customer Experience', 'Sustainability', 'Manufacturing', 'Financial Services'];
  const [selectedCategory, setSelectedCategory] = React.useState('All Topics');

  const filteredContent = selectedCategory === 'All Topics' 
    ? thoughtLeadershipContent 
    : thoughtLeadershipContent.filter(content => content.category === selectedCategory);

  return (
    <div className="pt-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      <GridBackground opacity={0.02} gridSize={40} color="#6366f1" />
      
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
                <Lightbulb className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-gray-700">50+ Expert Insights</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Industry Leading Perspectives</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Thought Leadership
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Strategic insights and forward-thinking perspectives from our team of enterprise technology experts. 
              Explore the trends, frameworks, and methodologies shaping the future of business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Authors Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Expert Contributors</h2>
            <p className="text-gray-600">Industry leaders sharing insights from 500+ enterprise transformations</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {authors.map((author, index) => (
              <motion.div
                key={author.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={author.image} 
                  alt={author.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-900 mb-1">{author.name}</h3>
                <p className="text-sm text-indigo-600 mb-2">{author.role}</p>
                <p className="text-xs text-gray-600 mb-3">{author.expertise}</p>
                <div className="text-sm font-medium text-gray-700">{author.articles} Articles</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Thought Leadership Articles */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredContent.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.category === 'AI Strategy' ? 'bg-purple-100 text-purple-800' :
                      article.category === 'ERP Strategy' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'Customer Experience' ? 'bg-green-100 text-green-800' :
                      article.category === 'Sustainability' ? 'bg-emerald-100 text-emerald-800' :
                      article.category === 'Manufacturing' ? 'bg-orange-100 text-orange-800' :
                      'bg-indigo-100 text-indigo-800'
                    }`}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-4 h-4 text-gray-400" />
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">{article.author}</span>
                      <span className="text-gray-500"> • {article.role}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-indigo-500" />
                      Key Insights:
                    </h4>
                    <ul className="space-y-1">
                      {article.keyInsights.map((insight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.publishDate).toLocaleDateString()}
                    </div>
                    <Link
                      to={`/resources/thought-leadership/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors group"
                    >
                      Read Full Article
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <NewsletterSubscription 
            variant="inline"
            className="mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default ThoughtLeadershipPage;