import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams();

  const caseStudies: Record<string, any> = {
    'fortune-500-manufacturer': {
      title: 'Fortune 500 Manufacturer Achieves 340% ROI with AI-Powered Operations',
      client: 'Global Manufacturing Leader',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing operational inefficiencies and quality issues',
      solution: 'AI-powered predictive maintenance and quality control system',
      results: {
        roi: '340%',
        efficiency: '45%',
        downtime: '60%',
        quality: '35%'
      },
      timeline: '18 months',
      teamSize: '12 specialists',
      content: `
        <h2>The Challenge</h2>
        <p>Our client, a Fortune 500 manufacturing company with operations across 15 countries, was struggling with aging infrastructure and reactive maintenance practices. Equipment failures were causing significant downtime, quality issues were impacting customer satisfaction, and operational costs were spiraling out of control.</p>
        
        <h3>Key Pain Points:</h3>
        <ul>
          <li>Unplanned downtime costing $2M+ monthly</li>
          <li>Quality defects affecting 12% of production</li>
          <li>Reactive maintenance consuming 70% of resources</li>
          <li>Limited visibility into equipment performance</li>
          <li>Disconnected systems and data silos</li>
        </ul>
        
        <h2>Our Solution</h2>
        <p>We implemented a comprehensive AI-powered operations platform that transformed their manufacturing processes through predictive analytics, real-time monitoring, and intelligent automation.</p>
        
        <h3>Solution Components:</h3>
        <ul>
          <li><strong>Predictive Maintenance System:</strong> ML algorithms analyzing sensor data to predict equipment failures 2-4 weeks in advance</li>
          <li><strong>Quality Control AI:</strong> Computer vision and statistical process control for real-time quality monitoring</li>
          <li><strong>Operations Dashboard:</strong> Unified view of all manufacturing KPIs and alerts</li>
          <li><strong>Mobile Workforce App:</strong> Technician mobile app for work orders and documentation</li>
          <li><strong>Integration Platform:</strong> Seamless connection with existing SAP and MES systems</li>
        </ul>
        
        <h2>Implementation Approach</h2>
        <h3>Phase 1: Assessment and Planning (Months 1-3)</h3>
        <ul>
          <li>Comprehensive equipment audit and data assessment</li>
          <li>Stakeholder interviews and requirements gathering</li>
          <li>Technical architecture design and roadmap</li>
          <li>Team formation and training plan development</li>
        </ul>
        
        <h3>Phase 2: Foundation and Pilot (Months 4-9)</h3>
        <ul>
          <li>Data infrastructure setup and sensor installation</li>
          <li>ML model development and training</li>
          <li>Pilot implementation on 3 critical production lines</li>
          <li>User training and change management</li>
        </ul>
        
        <h3>Phase 3: Scale and Optimize (Months 10-18)</h3>
        <ul>
          <li>Rollout to all 25 production lines</li>
          <li>Model refinement and performance optimization</li>
          <li>Advanced analytics and reporting implementation</li>
          <li>Continuous improvement processes</li>
        </ul>
        
        <h2>Results and Impact</h2>
        <p>The transformation delivered exceptional results across all key metrics:</p>
        
        <h3>Financial Impact:</h3>
        <ul>
          <li><strong>340% ROI</strong> within 18 months</li>
          <li><strong>$8.5M annual savings</strong> from reduced downtime</li>
          <li><strong>$3.2M cost avoidance</strong> through predictive maintenance</li>
          <li><strong>$2.1M quality improvement</strong> savings</li>
        </ul>
        
        <h3>Operational Improvements:</h3>
        <ul>
          <li><strong>45% increase</strong> in overall equipment effectiveness (OEE)</li>
          <li><strong>60% reduction</strong> in unplanned downtime</li>
          <li><strong>35% improvement</strong> in first-pass quality</li>
          <li><strong>50% faster</strong> issue resolution times</li>
        </ul>
        
        <h3>Strategic Benefits:</h3>
        <ul>
          <li>Transformed from reactive to predictive operations</li>
          <li>Enhanced competitive advantage through improved quality</li>
          <li>Increased customer satisfaction and retention</li>
          <li>Built foundation for future Industry 4.0 initiatives</li>
        </ul>
        
        <h2>Key Success Factors</h2>
        <ul>
          <li><strong>Executive Sponsorship:</strong> Strong leadership commitment and clear vision</li>
          <li><strong>Cross-functional Collaboration:</strong> IT, Operations, and Maintenance working together</li>
          <li><strong>Data Quality Focus:</strong> Significant investment in data cleansing and governance</li>
          <li><strong>Change Management:</strong> Comprehensive training and communication program</li>
          <li><strong>Agile Approach:</strong> Iterative development with continuous feedback</li>
        </ul>
        
        <h2>Lessons Learned</h2>
        <ul>
          <li>Start with high-impact, visible use cases to build momentum</li>
          <li>Invest heavily in data quality and infrastructure</li>
          <li>Focus on user adoption and change management from day one</li>
          <li>Establish clear governance and success metrics</li>
          <li>Plan for continuous improvement and model refinement</li>
        </ul>
        
        <h2>Future Roadmap</h2>
        <p>Building on this success, the client is now expanding the AI platform to include:</p>
        <ul>
          <li>Supply chain optimization and demand forecasting</li>
          <li>Energy management and sustainability initiatives</li>
          <li>Advanced robotics and automation</li>
          <li>Digital twin implementation for virtual testing</li>
        </ul>
      `
    }
  };

  const caseStudy = caseStudies[slug || ''] || caseStudies['fortune-500-manufacturer'];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Success Stories
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                </div>
                
                <h1 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
                  {caseStudy.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-blue-800 mb-6">Project Overview</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-semibold">{caseStudy.client}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Industry</div>
                    <div className="font-semibold">{caseStudy.industry}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {caseStudy.timeline}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Team Size</div>
                    <div className="font-semibold flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {caseStudy.teamSize}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Exceptional Results</h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{caseStudy.results.roi}</div>
                <div className="text-emerald-100">ROI Achieved</div>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{caseStudy.results.efficiency}</div>
                <div className="text-emerald-100">Efficiency Gain</div>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{caseStudy.results.downtime}</div>
                <div className="text-emerald-100">Downtime Reduction</div>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{caseStudy.results.quality}</div>
                <div className="text-emerald-100">Quality Improvement</div>
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              '--tw-prose-headings': '#1e3a8a',
              '--tw-prose-links': '#059669',
              '--tw-prose-bold': '#1e3a8a',
            } as any}
            dangerouslySetInnerHTML={{ __html: caseStudy.content }}
          />
          
          {/* CTA */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready for Similar Results?</h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve transformational outcomes in your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Start Your Transformation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;