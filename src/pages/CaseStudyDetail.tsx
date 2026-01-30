import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react';

interface CaseStudyResults {
  roi: string;
  efficiency: string;
  downtime: string;
  quality: string;
}

interface CaseStudyData {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
  timeline: string;
  teamSize: string;
  content: string;
}

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams();

  const caseStudies: Record<string, CaseStudyData> = {
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
        <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-3">The Challenge</h3>
          <p class="text-red-700 leading-relaxed">A Fortune 500 manufacturing company with global operations faced critical infrastructure challenges that were threatening their competitive position and profitability.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-blue-800 mt-12 mb-6 border-b-2 border-emerald-200 pb-3">Operational Crisis Points</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-10">
          <div class="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">⚠️</span>
            </div>
            <h3 class="text-xl font-bold text-red-700 mb-3">Financial Impact</h3>
            <ul class="text-gray-700 space-y-2">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                <span class="text-sm">$2M+ monthly losses from unplanned downtime</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                <span class="text-sm">70% of maintenance budget on reactive repairs</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📉</span>
            </div>
            <h3 class="text-xl font-bold text-orange-700 mb-3">Quality Issues</h3>
            <ul class="text-gray-700 space-y-2">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span class="text-sm">12% production defect rate</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span class="text-sm">Limited equipment performance visibility</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8 rounded-r-lg">
          <h3 class="text-lg font-semibold text-emerald-800 mb-3">Our Approach</h3>
          <p class="text-emerald-700 leading-relaxed">We designed and implemented a comprehensive AI-powered operations platform that transformed reactive maintenance into predictive intelligence, delivering measurable results across all key performance indicators.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-blue-800 mt-12 mb-6 border-b-2 border-emerald-200 pb-3">Transformation Architecture</h2>
        
        <div class="space-y-8 mb-10">
          <div class="flex gap-6">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">🔮</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-blue-800 mb-3">Predictive Maintenance Intelligence</h3>
              <p class="text-gray-700 leading-relaxed mb-4">Advanced machine learning algorithms analyze real-time sensor data from 500+ pieces of equipment, predicting failures 2-4 weeks in advance with 94% accuracy.</p>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600"><strong>Key Features:</strong> Vibration analysis, thermal monitoring, oil analysis integration, automated work order generation</p>
              </div>
            </div>
          </div>
          
          <div class="flex gap-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">👁️</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-blue-800 mb-3">AI-Powered Quality Control</h3>
              <p class="text-gray-700 leading-relaxed mb-4">Computer vision systems and statistical process control algorithms monitor product quality in real-time, automatically flagging defects and adjusting processes.</p>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600"><strong>Technologies:</strong> Computer vision, statistical process control, automated rejection systems, quality trend analysis</p>
              </div>
            </div>
          </div>
          
          <div class="flex gap-6">
            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-lg">📱</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-blue-800 mb-3">Unified Operations Platform</h3>
              <p class="text-gray-700 leading-relaxed mb-4">Integrated dashboard and mobile applications provide real-time visibility into all manufacturing operations, enabling data-driven decision making at every level.</p>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600"><strong>Integration:</strong> SAP ERP, MES systems, SCADA, mobile workforce management, real-time analytics</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border border-emerald-200 rounded-xl p-8 mb-10">
          <h3 class="text-2xl font-bold text-blue-800 mb-6 text-center">Transformation Results</h3>
          <div class="grid md:grid-cols-4 gap-6 text-center">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-emerald-600 mb-2">340%</div>
              <div class="text-sm text-gray-600">ROI Achieved</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-blue-600 mb-2">45%</div>
              <div class="text-sm text-gray-600">Efficiency Gain</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div class="text-sm text-gray-600">Downtime Reduction</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-orange-600 mb-2">35%</div>
              <div class="text-sm text-gray-600">Quality Improvement</div>
            </div>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-blue-800 mt-12 mb-6 border-b-2 border-emerald-200 pb-3">18-Month Implementation Journey</h2>
        
        <div class="space-y-8 mb-10">
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-xl font-bold text-blue-800">Discovery & Strategy</h3>
                <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Months 1-3</span>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">Comprehensive assessment of existing infrastructure, identification of critical failure points, and development of AI transformation roadmap.</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-2">Technical Assessment</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Equipment audit across 15 facilities</li>
                    <li>• Data quality and availability analysis</li>
                    <li>• Integration architecture design</li>
                  </ul>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-2">Strategic Planning</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Stakeholder alignment workshops</li>
                    <li>• ROI modeling and business case</li>
                    <li>• Change management strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-xl font-bold text-blue-800">Foundation & Pilot</h3>
                <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Months 4-9</span>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">Infrastructure deployment and pilot implementation on three critical production lines to validate approach and demonstrate early wins.</p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-sm text-blue-700"><strong>Pilot Results:</strong> 25% reduction in unplanned downtime, 15% improvement in quality metrics, $500K monthly savings</p>
              </div>
            </div>
          </div>
          
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-xl font-bold text-blue-800">Scale & Optimize</h3>
                <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Months 10-18</span>
              </div>
              <p class="text-gray-700 leading-relaxed mb-4">Full-scale deployment across all 25 production lines with continuous optimization and advanced analytics implementation.</p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="text-sm text-purple-700"><strong>Scale Impact:</strong> 340% ROI achieved, $8.5M annual savings, 94% prediction accuracy across all facilities</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-blue-800 mt-12 mb-6 border-b-2 border-emerald-200 pb-3">Measurable Business Impact</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div class="bg-white border border-gray-200 rounded-xl p-6">
            <h3 class="text-lg font-bold text-emerald-700 mb-4">💰 Financial Returns</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                <span class="text-gray-700">Total ROI</span>
                <span class="font-bold text-emerald-600 text-xl">340%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span class="text-gray-700">Annual Savings</span>
                <span class="font-bold text-blue-600">$8.5M</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span class="text-gray-700">Cost Avoidance</span>
                <span class="font-bold text-purple-600">$3.2M</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span class="text-gray-700">Quality Savings</span>
                <span class="font-bold text-orange-600">$2.1M</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-xl p-6">
            <h3 class="text-lg font-bold text-blue-700 mb-4">📈 Operational Excellence</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                <span class="text-gray-700">Equipment Effectiveness</span>
                <span class="font-bold text-emerald-600">+45%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span class="text-gray-700">Unplanned Downtime</span>
                <span class="font-bold text-blue-600">-60%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span class="text-gray-700">First-Pass Quality</span>
                <span class="font-bold text-purple-600">+35%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span class="text-gray-700">Resolution Speed</span>
                <span class="font-bold text-orange-600">+50%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-xl p-8 mb-10">
          <h3 class="text-xl font-bold text-blue-800 mb-4">🚀 Strategic Transformation</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-emerald-700 mb-3">Operational Evolution</h4>
              <ul class="text-gray-700 space-y-2">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span class="text-sm">Reactive → Predictive operations model</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span class="text-sm">Data-driven decision making culture</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span class="text-sm">Industry 4.0 foundation established</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-blue-700 mb-3">Market Position</h4>
              <ul class="text-gray-700 space-y-2">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span class="text-sm">Enhanced competitive advantage</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span class="text-sm">Improved customer satisfaction</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span class="text-sm">Sustainable growth platform</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-blue-800 mt-12 mb-6 border-b-2 border-emerald-200 pb-3">Success Framework & Insights</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div class="bg-white border border-emerald-200 rounded-xl p-6">
            <h3 class="text-lg font-bold text-emerald-700 mb-4">✅ Critical Success Factors</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-emerald-500 pl-4">
                <h4 class="font-semibold text-gray-800 mb-1">Executive Championship</h4>
                <p class="text-sm text-gray-600">C-level sponsorship with clear vision and sustained commitment</p>
              </div>
              <div class="border-l-4 border-blue-500 pl-4">
                <h4 class="font-semibold text-gray-800 mb-1">Cross-Functional Unity</h4>
                <p class="text-sm text-gray-600">IT, Operations, and Maintenance aligned on common goals</p>
              </div>
              <div class="border-l-4 border-purple-500 pl-4">
                <h4 class="font-semibold text-gray-800 mb-1">Data Excellence</h4>
                <p class="text-sm text-gray-600">Significant investment in data quality and governance</p>
              </div>
              <div class="border-l-4 border-orange-500 pl-4">
                <h4 class="font-semibold text-gray-800 mb-1">Change Leadership</h4>
                <p class="text-sm text-gray-600">Comprehensive training and communication programs</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white border border-blue-200 rounded-xl p-6">
            <h3 class="text-lg font-bold text-blue-700 mb-4">💡 Key Learnings</h3>
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-800 mb-2">Start with Impact</h4>
                <p class="text-sm text-blue-700">High-visibility use cases build momentum and organizational confidence</p>
              </div>
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-semibold text-emerald-800 mb-2">Data is Foundation</h4>
                <p class="text-sm text-emerald-700">60-70% of effort should focus on data infrastructure and quality</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-800 mb-2">People First</h4>
                <p class="text-sm text-purple-700">User adoption determines success more than technical sophistication</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
          <h3 class="text-xl font-bold text-blue-800 mb-4">🔮 Future Innovation Pipeline</h3>
          <p class="text-gray-700 mb-6">Building on this transformational success, the client is expanding their AI capabilities across the entire value chain:</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">🔗</span>
                </div>
                <span class="font-medium text-gray-800">Supply Chain Optimization</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">⚡</span>
                </div>
                <span class="font-medium text-gray-800">Energy Management & Sustainability</span>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">🤖</span>
                </div>
                <span class="font-medium text-gray-800">Advanced Robotics Integration</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">👥</span>
                </div>
                <span class="font-medium text-gray-800">Digital Twin Implementation</span>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  const caseStudy = caseStudies[slug || ''] || caseStudies['fortune-500-manufacturer'];

  // Related case studies for sidebar
  const relatedCaseStudies = [
    {
      slug: 'fortune-500-manufacturer',
      title: 'Fortune 500 Manufacturer Achieves 340% ROI with AI-Powered Operations',
      industry: 'Manufacturing',
      roi: '340%',
      excerpt: 'How AI-powered predictive maintenance transformed manufacturing operations.'
    },
    {
      slug: 'global-retailer-transformation',
      title: 'Global Retailer Transforms Customer Experience with AI',
      industry: 'Retail',
      roi: '280%',
      excerpt: 'Personalized shopping experiences drive 45% increase in customer satisfaction.'
    },
    {
      slug: 'financial-services-automation',
      title: 'Financial Services Leader Automates 70% of Operations',
      industry: 'Financial Services',
      roi: '420%',
      excerpt: 'Intelligent automation reduces processing time by 85% while improving accuracy.'
    },
    {
      slug: 'healthcare-ai-implementation',
      title: 'Healthcare Network Improves Patient Outcomes with AI',
      industry: 'Healthcare',
      roi: '190%',
      excerpt: 'AI-driven diagnostics and treatment recommendations enhance patient care.'
    }
  ].filter(cs => cs.slug !== slug);

  return (
    <div className="pt-20">
      {/* Minimal Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-blue-800 hover:text-emerald-600 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Success Stories
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {caseStudy.industry}
              </span>
              <h1 className="text-3xl font-bold text-blue-800 mt-4 mb-3 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Project Overview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Timeline</span>
                  <span className="font-semibold">{caseStudy.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Team Size</span>
                  <span className="font-semibold">{caseStudy.teamSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  '--tw-prose-headings': '#1e3a8a',
                  '--tw-prose-links': '#059669',
                  '--tw-prose-bold': '#1e3a8a',
                  '--tw-prose-p': '#374151',
                  '--tw-prose-li': '#374151',
                } as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: caseStudy.content }}
              />
              
              {/* CTA */}
              <motion.div
                className="mt-16 p-8 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-2xl border border-emerald-100"
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all"
                >
                  Start Your Transformation
                </Link>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Key Metrics */}
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-blue-800 mb-6">Key Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">{caseStudy.results.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{caseStudy.results.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">{caseStudy.results.downtime}</div>
                      <div className="text-xs text-gray-600">Downtime ↓</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">{caseStudy.results.quality}</div>
                      <div className="text-xs text-gray-600">Quality ↑</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Keep Reading */}
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold text-blue-800 mb-6">Keep Reading</h3>
                  <div className="space-y-6">
                    {relatedCaseStudies.slice(0, 3).map((relatedCase) => (
                      <Link
                        key={relatedCase.slug}
                        to={`/case-studies/${relatedCase.slug}`}
                        className="block group"
                      >
                        <div className="p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs text-emerald-600 font-medium">{relatedCase.industry}</span>
                          </div>
                          <h4 className="font-semibold text-blue-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                            {relatedCase.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedCase.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-emerald-600">{relatedCase.roi} ROI</span>
                            <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <Link
                    to="/case-studies"
                    className="block mt-6 text-center py-3 px-4 bg-emerald-50 text-emerald-600 rounded-lg font-medium hover:bg-emerald-100 transition-colors"
                  >
                    View All Case Studies
                  </Link>
                </motion.div>
                
                {/* Contact CTA */}
                <motion.div
                  className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 p-6 rounded-2xl text-white"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="text-lg font-bold mb-3">Ready to Transform?</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Let's discuss how we can achieve similar results for your organization.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 px-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;