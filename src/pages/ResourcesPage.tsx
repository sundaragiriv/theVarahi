import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Search, Download, X } from 'lucide-react';
import GridBackground from '../components/GridBackground';
import NewsletterSubscription from '../components/NewsletterSubscription';

// Resource interface
interface Resource {
  id: string;
  title: string;
  type: 'case-study' | 'thought-leadership' | 'research-report' | 'whitepaper' | 'blog' | 'webinar' | 'video';
  industry: string[];
  solution: string[];
  topic: string[];
  publishDate: string;
  description: string;
  readTime?: string;
  duration?: string;
  author?: string;
  image?: string;
  downloadUrl?: string;
  link: string;
  featured?: boolean;
}

const ResourcesPage: React.FC = () => {
  // Comprehensive resource data with realistic examples
  const allResources: Resource[] = [
    // Case Studies
    {
      id: 'cs-001',
      title: 'Fortune 100 Manufacturer: 40% Efficiency Gain with SAP S/4HANA & AI',
      type: 'case-study',
      industry: ['Manufacturing', 'Automotive'],
      solution: ['SAP S/4HANA', 'AI Strategy', 'Predictive Maintenance'],
      topic: ['Digital Transformation', 'Process Optimization', 'ROI'],
      publishDate: '2024-10-15',
      readTime: '12 min read',
      description: 'How a global automotive manufacturer achieved 40% efficiency gains and $12M annual savings through SAP S/4HANA transformation with AI-powered predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop',
      featured: true,
      link: '/resources/case-studies'
    },
    {
      id: 'cs-002', 
      title: 'Global Bank: Digital Customer Experience Transformation',
      type: 'case-study',
      industry: ['Financial Services', 'Banking'],
      solution: ['Customer Experience', 'SAP Commerce', 'Mobile Banking'],
      topic: ['Customer Experience', 'Digital Banking', 'Omnichannel'],
      publishDate: '2024-10-10',
      readTime: '15 min read',
      description: 'Fortune 500 bank transforms customer experience with 85% satisfaction score and 3x faster onboarding through omnichannel CX platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      link: '/resources/case-studies'
    },
    {
      id: 'cs-003',
      title: 'Utility Company: Smart Grid IoT Implementation',
      type: 'case-study', 
      industry: ['Utilities', 'Energy'],
      solution: ['IoT Platform', 'SAP BTP', 'Analytics'],
      topic: ['Smart Grid', 'Sustainability', 'Operational Excellence'],
      publishDate: '2024-09-25',
      readTime: '10 min read',
      description: 'Regional utility deploys IoT-enabled smart grid reducing energy waste by 25% and improving reliability by 40%.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      link: '/resources/case-studies'
    },
    {
      id: 'cs-004',
      title: 'CPG Giant: Supply Chain Visibility with SAP IBP',
      type: 'case-study',
      industry: ['CPG', 'Retail'],
      solution: ['SAP IBP', 'Supply Chain', 'Demand Planning'],
      topic: ['Supply Chain', 'Demand Planning', 'Inventory Optimization'],
      publishDate: '2024-09-20',
      readTime: '14 min read',
      description: 'Global CPG company achieves 30% inventory reduction and 95% forecast accuracy with integrated business planning.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      link: '/resources/case-studies'
    },

    // Thought Leadership
    {
      id: 'tl-001',
      title: 'The Future of Enterprise AI: Beyond Automation to Augmentation',
      type: 'thought-leadership',
      industry: ['Cross-Industry'],
      solution: ['AI Strategy', 'Enterprise Architecture'],
      topic: ['Artificial Intelligence', 'Future of Work', 'Strategy'],
      author: 'Dr. Sarah Chen',
      publishDate: '2024-10-20',
      readTime: '8 min read',
      description: 'AI augmentation yields 3x higher ROI than automation. Explore frameworks for human-AI collaboration and strategic implementation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      link: '/resources/thought-leadership'
    },
    {
      id: 'tl-002',
      title: 'SAP S/4HANA as a Platform for Digital Innovation',
      type: 'thought-leadership',
      industry: ['Cross-Industry'],
      solution: ['SAP S/4HANA', 'SAP BTP', 'Digital Platform'],
      topic: ['Platform Strategy', 'Innovation', 'ERP Modernization'],
      author: 'Michael Rodriguez',
      publishDate: '2024-10-15',
      readTime: '12 min read',
      description: 'Transform S/4HANA from cost center to innovation platform. API-first architecture enables ecosystem orchestration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      link: '/resources/thought-leadership'
    },

    // Research Reports
    {
      id: 'rr-001',
      title: 'Enterprise AI Adoption: 2024 State of Industry Report',
      type: 'research-report',
      industry: ['Cross-Industry'],
      solution: ['AI Strategy'],
      topic: ['Market Research', 'AI Adoption', 'ROI Analysis'],
      publishDate: '2024-10-01',
      description: 'Comprehensive analysis of AI adoption across Fortune 1000. 68% have active initiatives, 18-24 month ROI timeline.',
      downloadUrl: '/downloads/ai-adoption-2024.pdf',
      link: '/resources/research-reports'
    },
    {
      id: 'rr-002',
      title: 'SAP S/4HANA Migration Patterns: 500+ Project Analysis',
      type: 'research-report',
      industry: ['Cross-Industry'],
      solution: ['SAP S/4HANA', 'ERP Migration'],
      topic: ['Migration Strategy', 'Best Practices', 'Timeline Analysis'],
      publishDate: '2024-09-15',
      description: 'Lessons from 500+ migrations. Greenfield vs Brownfield patterns, timeline optimization, success factors.',
      downloadUrl: '/downloads/s4hana-migration-patterns.pdf',
      link: '/resources/research-reports'
    },

    // Videos & Webinars
    {
      id: 'vid-001',
      title: 'SAP S/4HANA Migration Masterclass',
      type: 'webinar',
      industry: ['Cross-Industry'],
      solution: ['SAP S/4HANA', 'Migration Strategy'],
      topic: ['Migration', 'Best Practices', 'Risk Management'],
      publishDate: '2024-11-15',
      duration: '90 minutes',
      description: 'Live masterclass on proven migration strategies, risk mitigation, and post-go-live optimization.',
      link: '/resources/events'
    },
    {
      id: 'vid-002',
      title: 'AI Strategy Implementation for Manufacturing',
      type: 'video',
      industry: ['Manufacturing'],
      solution: ['AI Strategy', 'Predictive Analytics'],
      topic: ['Manufacturing 4.0', 'Predictive Maintenance', 'Quality Control'],
      publishDate: '2024-10-05',
      duration: '25 minutes',
      description: 'Real-world AI implementation in manufacturing: predictive maintenance, quality control, and operational excellence.',
      link: '/resources/videos'
    },

    // Blog Posts
    {
      id: 'blog-001',
      title: 'CPG Digital Transformation: 5 Critical Success Factors',
      type: 'blog',
      industry: ['CPG', 'Retail'],
      solution: ['Digital Transformation', 'Customer Experience'],
      topic: ['Digital Strategy', 'Customer Engagement', 'Market Analysis'],
      author: 'Emma Thompson',
      publishDate: '2024-10-12',
      readTime: '7 min read',
      description: 'CPG companies must focus on data integration, customer analytics, and agile operations for successful transformation.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      link: '/resources/blog'
    },
    {
      id: 'blog-002',
      title: 'Financial Services: Balancing Innovation with Compliance',
      type: 'blog',
      industry: ['Financial Services'],
      solution: ['Compliance Management', 'Digital Banking'],
      topic: ['RegTech', 'Innovation', 'Risk Management'],
      author: 'Robert Chen',
      publishDate: '2024-10-08',
      readTime: '9 min read',
      description: 'How financial institutions leverage regulatory-by-design architecture to accelerate innovation while ensuring compliance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      link: '/resources/blog'
    },

    // Whitepapers
    {
      id: 'wp-001',
      title: 'Manufacturing 4.0: IoT and Predictive Analytics Implementation Guide',
      type: 'whitepaper',
      industry: ['Manufacturing'],
      solution: ['IoT Platform', 'Predictive Analytics', 'SAP BTP'],
      topic: ['Manufacturing 4.0', 'Implementation Guide', 'ROI Framework'],
      publishDate: '2024-09-30',
      description: 'Comprehensive guide to implementing IoT and predictive analytics in manufacturing environments with ROI framework.',
      downloadUrl: '/downloads/manufacturing-4-guide.pdf',
      link: '/resources/whitepapers'
    }
  ];

  // Filter state management
  const [activeFilters, setActiveFilters] = useState<{
    industry: string[];
    solution: string[];
    type: string[];
    topic: string[];
  }>({
    industry: [],
    solution: [],
    type: [],
    topic: []
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique filter options from resource data
  const filterOptions = useMemo(() => {
    const industries = [...new Set(allResources.flatMap(r => r.industry))];
    const solutions = [...new Set(allResources.flatMap(r => r.solution))];
    const types = [...new Set(allResources.map(r => r.type))];
    const topics = [...new Set(allResources.flatMap(r => r.topic))];

    return {
      industry: industries.sort(),
      solution: solutions.sort(),
      type: types.sort(),
      topic: topics.sort()
    };
  }, [allResources]);

  // Filter resources based on active filters and search
  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      // Search query filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          resource.title.toLowerCase().includes(searchLower) ||
          resource.description.toLowerCase().includes(searchLower) ||
          resource.industry.some(i => i.toLowerCase().includes(searchLower)) ||
          resource.solution.some(s => s.toLowerCase().includes(searchLower)) ||
          resource.topic.some(t => t.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Industry filter
      if (activeFilters.industry.length > 0) {
        const hasMatchingIndustry = activeFilters.industry.some(filter => 
          resource.industry.includes(filter)
        );
        if (!hasMatchingIndustry) return false;
      }

      // Solution filter
      if (activeFilters.solution.length > 0) {
        const hasMatchingSolution = activeFilters.solution.some(filter =>
          resource.solution.includes(filter)
        );
        if (!hasMatchingSolution) return false;
      }

      // Type filter
      if (activeFilters.type.length > 0) {
        if (!activeFilters.type.includes(resource.type)) return false;
      }

      // Topic filter
      if (activeFilters.topic.length > 0) {
        const hasMatchingTopic = activeFilters.topic.some(filter =>
          resource.topic.includes(filter)
        );
        if (!hasMatchingTopic) return false;
      }

      return true;
    });
  }, [allResources, activeFilters, searchQuery]);

  // Filter management functions
  const toggleFilter = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      industry: [],
      solution: [],
      type: [],
      topic: []
    });
    setSearchQuery('');
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  // Type display mappings
  const typeDisplayMap: Record<string, { label: string; color: string; icon: string }> = {
    'case-study': { label: 'Case Study', color: 'bg-blue-100 text-blue-800', icon: '📊' },
    'thought-leadership': { label: 'Thought Leadership', color: 'bg-purple-100 text-purple-800', icon: '💡' },
    'research-report': { label: 'Research Report', color: 'bg-green-100 text-green-800', icon: '📋' },
    'whitepaper': { label: 'Whitepaper', color: 'bg-gray-100 text-gray-800', icon: '📄' },
    'blog': { label: 'Blog Post', color: 'bg-orange-100 text-orange-800', icon: '✍️' },
    'webinar': { label: 'Webinar', color: 'bg-red-100 text-red-800', icon: '🎥' },
    'video': { label: 'Video', color: 'bg-pink-100 text-pink-800', icon: '📹' }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead
        title="Resources & Insights | Varahi"
        description="Access our latest case studies, thought leadership, research reports, and industry insights. Stay ahead with enterprise digital transformation strategies."
        keywords="case studies, thought leadership, enterprise insights, digital transformation, SAP solutions"
        canonicalUrl="https://varahi.com/resources"
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-purple-900 text-white overflow-hidden">
        <GridBackground opacity={0.1} />
        
        <div className="relative container mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Discover insights, strategies, and success stories to accelerate your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Two Column Layout */}
        <div className="flex gap-8">
          {/* Main Content Column (Left - 75%) */}
          <div className="flex-1">
            {/* Results Header with Active Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Resources {filteredResources.length > 0 && `(${filteredResources.length})`}
                  </h2>
                  <p className="text-gray-600">
                    {activeFilterCount > 0 
                      ? `Filtered by ${activeFilterCount} criteria` 
                      : 'All available resources'}
                  </p>
                </div>
              </div>
              
              {/* Active Filters Display */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.entries(activeFilters).map(([category, filters]) =>
                    filters.map(filter => (
                      <span
                        key={`${category}-${filter}`}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {filter}
                        <button
                          onClick={() => toggleFilter(category as keyof typeof activeFilters, filter)}
                          className="hover:bg-blue-200 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))
                  )}
                </div>
              )}
            </motion.div>

            {/* Resources Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {filteredResources.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
              {filteredResources.map((resource, index) => {
                const typeInfo = typeDisplayMap[resource.type];
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    {resource.image && (
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${typeInfo.color}`}>
                          {typeInfo.icon} {typeInfo.label}
                        </span>
                        {resource.readTime && (
                          <span className="text-gray-500 text-sm">{resource.readTime}</span>
                        )}
                        {resource.duration && (
                          <span className="text-gray-500 text-sm">{resource.duration}</span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>

                      {resource.author && (
                        <p className="text-sm text-blue-600 mb-2">{resource.author}</p>
                      )}

                      <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.industry.slice(0, 2).map(industry => (
                          <span key={industry} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                            {industry}
                          </span>
                        ))}
                        {resource.solution.slice(0, 2).map(solution => (
                          <span key={solution} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                            {solution}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">
                          {new Date(resource.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        
                        {resource.downloadUrl ? (
                          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            <Download className="h-4 w-4" />
                            Download
                          </button>
                        ) : (
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Read More
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find relevant content.
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
                )}
              </div>
            )}
            </motion.div>
          </div>

          {/* Filters Sidebar (Right - 25%) */}
          <div className="w-80 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sticky top-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Resources
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search by topic, industry..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="h-3 w-3" />
                      Clear ({activeFilterCount})
                    </button>
                  )}
                </div>

                {/* Filter Categories */}
                <div className="space-y-6">
                  {/* Content Type Filter */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Content Type</h4>
                    <div className="space-y-2">
                      {filterOptions.type.map(type => {
                        const isActive = activeFilters.type.includes(type);
                        const typeInfo = typeDisplayMap[type];
                        return (
                          <button
                            key={type}
                            onClick={() => toggleFilter('type', type)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {typeInfo?.icon} {typeInfo?.label || type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Industry Filter */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Industry</h4>
                    <div className="space-y-2">
                      {filterOptions.industry.map(industry => {
                        const isActive = activeFilters.industry.includes(industry);
                        return (
                          <button
                            key={industry}
                            onClick={() => toggleFilter('industry', industry)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {industry}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Solution Filter */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Solution</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filterOptions.solution.map(solution => {
                        const isActive = activeFilters.solution.includes(solution);
                        return (
                          <button
                            key={solution}
                            onClick={() => toggleFilter('solution', solution)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {solution}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Topic Filter */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Topic</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filterOptions.topic.map(topic => {
                        const isActive = activeFilters.topic.includes(topic);
                        return (
                          <button
                            key={topic}
                            onClick={() => toggleFilter('topic', topic)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              isActive
                                ? 'bg-orange-600 text-white'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <NewsletterSubscription variant="inline" />
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;