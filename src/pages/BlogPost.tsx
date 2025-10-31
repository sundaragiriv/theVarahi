import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // Sample blog content - in real app this would come from API/CMS
  const blogPosts: Record<string, any> = {
    'ai-transformation-guide': {
      title: 'The Complete Guide to AI Transformation in Enterprise',
      author: 'Dr. Sarah Chen',
      date: '2024-12-15',
      readTime: '12 min read',
      category: 'AI Strategy',
      content: `
        <h2>Introduction</h2>
        <p>Enterprise AI transformation is no longer a luxury—it's a necessity for staying competitive in today's digital economy. This comprehensive guide will walk you through the essential steps, strategies, and best practices for successfully implementing AI across your organization.</p>
        
        <h2>Understanding AI Transformation</h2>
        <p>AI transformation goes beyond simply implementing AI tools. It involves a fundamental shift in how your organization operates, makes decisions, and creates value. This transformation touches every aspect of your business, from operations and customer experience to strategic planning and innovation.</p>
        
        <h2>Key Components of Successful AI Transformation</h2>
        <h3>1. Strategic Vision and Leadership</h3>
        <p>Successful AI transformation starts at the top. Leadership must articulate a clear vision for how AI will drive business value and competitive advantage. This includes:</p>
        <ul>
          <li>Defining clear AI objectives aligned with business goals</li>
          <li>Establishing governance frameworks for AI initiatives</li>
          <li>Securing executive sponsorship and budget allocation</li>
          <li>Creating cross-functional AI steering committees</li>
        </ul>
        
        <h3>2. Data Foundation and Infrastructure</h3>
        <p>AI is only as good as the data that powers it. Organizations must invest in:</p>
        <ul>
          <li>Data quality and governance programs</li>
          <li>Modern data architecture and cloud infrastructure</li>
          <li>Real-time data processing capabilities</li>
          <li>Security and privacy frameworks</li>
        </ul>
        
        <h3>3. Talent and Skills Development</h3>
        <p>Building AI capabilities requires the right mix of technical and business skills:</p>
        <ul>
          <li>Data scientists and ML engineers</li>
          <li>AI product managers and business analysts</li>
          <li>Change management specialists</li>
          <li>Continuous learning and upskilling programs</li>
        </ul>
        
        <h2>Implementation Roadmap</h2>
        <p>Our proven 5-phase approach to AI transformation:</p>
        
        <h3>Phase 1: Assessment and Strategy (Months 1-2)</h3>
        <p>Conduct comprehensive AI readiness assessment, identify high-impact use cases, and develop transformation roadmap.</p>
        
        <h3>Phase 2: Foundation Building (Months 3-6)</h3>
        <p>Establish data infrastructure, governance frameworks, and initial team capabilities.</p>
        
        <h3>Phase 3: Pilot Implementation (Months 7-12)</h3>
        <p>Launch 2-3 high-value pilot projects to demonstrate ROI and build organizational confidence.</p>
        
        <h3>Phase 4: Scale and Optimize (Months 13-18)</h3>
        <p>Expand successful pilots, optimize performance, and integrate AI into core business processes.</p>
        
        <h3>Phase 5: Innovation and Evolution (Ongoing)</h3>
        <p>Continuously innovate, explore emerging AI technologies, and maintain competitive advantage.</p>
        
        <h2>Measuring Success</h2>
        <p>Key metrics for AI transformation success include:</p>
        <ul>
          <li>ROI and cost savings from AI initiatives</li>
          <li>Process efficiency improvements</li>
          <li>Customer satisfaction and experience metrics</li>
          <li>Employee productivity and satisfaction</li>
          <li>Innovation velocity and time-to-market</li>
        </ul>
        
        <h2>Common Pitfalls to Avoid</h2>
        <ul>
          <li>Starting without clear business objectives</li>
          <li>Underestimating data quality requirements</li>
          <li>Neglecting change management and user adoption</li>
          <li>Focusing on technology over business value</li>
          <li>Insufficient investment in talent and skills</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>AI transformation is a journey, not a destination. Success requires strategic vision, strong execution, and continuous adaptation. Organizations that approach AI transformation systematically, with proper planning and execution, can achieve significant competitive advantages and business value.</p>
        
        <p>Ready to start your AI transformation journey? Contact our experts to learn how we can help you develop and execute a winning AI strategy.</p>
      `
    },
    'sap-s4hana-migration': {
      title: 'SAP S/4HANA Migration: Best Practices and Lessons Learned',
      author: 'Michael Rodriguez',
      date: '2024-12-10',
      readTime: '15 min read',
      category: 'SAP Solutions',
      content: `
        <h2>Introduction</h2>
        <p>SAP S/4HANA migration represents one of the most significant technology transformations enterprises face today. With SAP's 2027 deadline for mainstream support of SAP ECC, organizations must act decisively to modernize their ERP landscape.</p>
        
        <h2>Migration Approaches</h2>
        <h3>Greenfield Implementation</h3>
        <p>Starting fresh with a new S/4HANA system offers the opportunity to redesign business processes and leverage best practices.</p>
        
        <h3>Brownfield Conversion</h3>
        <p>Converting existing SAP ECC systems preserves customizations and historical data while upgrading to S/4HANA.</p>
        
        <h3>Hybrid Approach</h3>
        <p>Combining elements of both greenfield and brownfield approaches for optimal balance of innovation and continuity.</p>
        
        <h2>Key Success Factors</h2>
        <ul>
          <li>Executive sponsorship and clear business case</li>
          <li>Comprehensive data cleansing and preparation</li>
          <li>Process standardization and simplification</li>
          <li>User training and change management</li>
          <li>Thorough testing and quality assurance</li>
        </ul>
        
        <h2>Common Challenges and Solutions</h2>
        <p>Based on our experience with 200+ S/4HANA implementations, here are the most common challenges and proven solutions...</p>
      `
    }
  };

  const post = blogPosts[slug || ''] || blogPosts['ai-transformation-guide'];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Hub
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              '--tw-prose-headings': '#1e3a8a',
              '--tw-prose-links': '#059669',
              '--tw-prose-bold': '#1e3a8a',
            } as any}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* CTA */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Let our experts help you implement these strategies in your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;