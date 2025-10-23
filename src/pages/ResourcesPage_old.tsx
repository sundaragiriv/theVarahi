import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Calendar, Clock, User, Download, Play, FileText, 
  Building2, Zap, Brain, TrendingUp, BookOpen, Video,
  Tag, ArrowRight, CheckCircle, X
} from 'lucide-react';
import GridBackground from '../components/GridBackground';
import NewsletterSubscription from '../components/NewsletterSubscription';

interface Resource {
  id: string;
  title: string;
  type: 'case-study' | 'blog' | 'whitepaper' | 'video' | 'webinar' | 'research-report' | 'thought-leadership';
  industry: string[];
  solution: string[];
  topic: string[];
  author?: string;
  publishDate: string;
  readTime?: string;
  duration?: string;
  description: string;
  image?: string;
  downloadUrl?: string;
  link?: string;
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

  const caseStudies = [
    {
      title: 'Global Manufacturer: 40% Efficiency Gain',
      industry: 'Manufacturing',
      description: 'SAP S/4HANA transformation with AI-powered predictive maintenance',
      metrics: ['40% efficiency increase', '60% reduction in downtime', '$12M annual savings'],
      readTime: '8 min read'
    },
    {
      title: 'Fortune 500 Bank: Digital CX Revolution',
      industry: 'Financial Services',
      description: 'Omnichannel customer experience with AI-driven personalization',
      metrics: ['85% customer satisfaction', '3x faster onboarding', '25% revenue growth'],
      readTime: '12 min read'
    },
    {
      title: 'Healthcare Network: AI Diagnostic Platform',
      industry: 'Healthcare',
      description: 'Machine learning implementation for medical imaging and diagnosis',
      metrics: ['95% diagnostic accuracy', '50% faster results', '30% cost reduction'],
      readTime: '10 min read'
    }
  ];

  const thoughtLeadership = [
    {
      title: 'The Future of Enterprise AI: Beyond Automation',
      author: 'Dr. Sarah Chen, Chief AI Officer',
      date: 'March 2024',
      category: 'AI Strategy',
      readTime: '15 min read'
    },
    {
      title: 'SAP S/4HANA Migration: Lessons from 100+ Implementations',
      author: 'Michael Rodriguez, VP Solutions',
      date: 'February 2024',
      category: 'SAP Transformation',
      readTime: '12 min read'
    },
    {
      title: 'Responsible AI: Building Trust in Enterprise Systems',
      author: 'Dr. James Park, Ethics & Governance Lead',
      date: 'January 2024',
      category: 'AI Governance',
      readTime: '18 min read'
    }
  ];

  return (
    <div className="pt-20">
      <ScrollSpyNav sections={sections} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">150+ Resources</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Updated Weekly</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" style={{lineHeight: '1.2', paddingBottom: '8px'}}>
              Knowledge Center & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Insights, research, and thought leadership from our team of enterprise AI and SAP experts. 
              Stay ahead with the latest trends, best practices, and <span className="text-purple-600 font-semibold">real-world success stories</span> 
              from 500+ enterprise transformations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">25+</div>
                <div className="text-sm text-gray-600">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Whitepapers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Weekly</div>
                <div className="text-sm text-gray-600">Updates</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources#case-studies"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  View Success Stories
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <NewsletterSubscription 
                variant="inline"
                className="max-w-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Real transformations, measurable outcomes, and the proven strategies that delivered results. 
              Each case study includes detailed ROI analysis, implementation timelines, and lessons learned.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Verified ROI metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Implementation details</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Lessons learned</span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{study.readTime}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">PDF Available</span>
                  </div>
                  <Link to="/resources/case-studies" className="text-blue-600 hover:text-blue-700 font-semibold group">
                    <span className="flex items-center gap-1">
                      Read Full Story
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section id="thought-leadership" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Expert Insights & Thought Leadership</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Expert perspectives on the future of enterprise technology and AI transformation from our leadership team. 
              Deep-dive analysis, industry trends, and strategic guidance for enterprise decision-makers.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Industry experts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Research-backed insights</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Actionable strategies</span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {thoughtLeadership.map((article, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">{article.author}</p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-gray-500">Featured</span>
                    </div>
                  </div>
                  <Link to="/resources/blog" className="text-purple-600 hover:text-purple-700 font-semibold group">
                    <span className="flex items-center gap-1">
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section id="research-reports" className="py-20">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Research Reports & Whitepapers</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              In-depth analysis, market research, and comprehensive guides for enterprise decision-makers. 
              Our research team analyzes industry trends, benchmarks performance, and provides actionable insights 
              based on data from 500+ enterprise implementations.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Data-driven insights</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Industry benchmarks</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free downloads</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">New Release</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Free Download</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise AI Readiness Report 2024</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Comprehensive analysis of AI adoption trends across Fortune 500 companies, including ROI benchmarks, implementation challenges, and success factors</p>
              <div className="text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-4">
                  <span>📄 45 pages</span>
                  <span>📈 500+ companies analyzed</span>
                  <span>🔍 12 industry sectors</span>
                </div>
              </div>
              <Link to="/resources/whitepapers" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group">
                Download Free Report
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Free Download</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">SAP S/4HANA Migration Guide</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Step-by-step methodology for successful enterprise transformations, including risk mitigation strategies, timeline planning, and change management best practices</p>
              <div className="text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-4">
                  <span>📄 60 pages</span>
                  <span>✅ 200+ migrations</span>
                  <span>🛠️ Templates included</span>
                </div>
              </div>
              <Link to="/resources/whitepapers" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group">
                Download Free Guide
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Webinars */}
      <section id="events-webinars" className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Events, Webinars & Learning</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our experts for live discussions, product demos, and interactive learning sessions. 
              From technical deep-dives to strategic workshops, we offer multiple formats to help you stay ahead 
              of the latest enterprise technology trends.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Live Q&A sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert presentations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free registration</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Live Webinar
                </span>
                <h3 className="text-lg font-bold mb-2">AI Strategy Workshop</h3>
                <p className="text-gray-600 text-sm mb-3">March 28, 2024 • 2:00 PM EST</p>
                <p className="text-gray-600">Interactive session on building enterprise AI roadmaps</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Limited Seats</span>
                <Link to="/resources/videos" className="text-red-600 hover:text-red-700 font-semibold text-sm group">
                  <span className="flex items-center gap-1">
                    Register Free
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  On-Demand
                </span>
                <h3 className="text-lg font-bold mb-2">SAP S/4HANA Deep Dive</h3>
                <p className="text-gray-600 text-sm mb-3">Available Now • 45 minutes</p>
                <p className="text-gray-600">Technical overview of migration strategies and best practices</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">No Registration</span>
                <Link to="/resources/videos" className="text-blue-600 hover:text-blue-700 font-semibold text-sm group">
                  <span className="flex items-center gap-1">
                    Watch Now
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Conference
                </span>
                <h3 className="text-lg font-bold mb-2">Enterprise AI Summit</h3>
                <p className="text-gray-600 text-sm mb-3">April 15-16, 2024 • San Francisco</p>
                <p className="text-gray-600">Two-day conference on the future of enterprise AI</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Early Bird</span>
                <Link to="/resources/videos" className="text-green-600 hover:text-green-700 font-semibold text-sm group">
                  <span className="flex items-center gap-1">
                    Learn More
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;