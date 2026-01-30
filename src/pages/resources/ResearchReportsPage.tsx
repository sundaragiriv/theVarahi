import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Users, Lightbulb } from 'lucide-react';
import GridBackground from '../../components/GridBackground';
import NewsletterSubscription from '../../components/NewsletterSubscription';

const ResearchReportsPage: React.FC = () => {
  const researchReports = [
    {
      title: 'Enterprise AI Adoption: 2024 State of the Industry',
      category: 'Industry Analysis',
      publishDate: '2024-10-15',
      pages: 42,
      downloads: 1250,
      description: 'Comprehensive analysis of AI adoption patterns across Fortune 1000 companies, including implementation timelines, ROI metrics, and common challenges.',
      keyFindings: [
        '68% of enterprises have active AI initiatives',
        'Average ROI timeline: 18-24 months',
        'Top challenge: Skills gap and change management',
        'Most successful implementations start with process automation'
      ],
      topics: ['Artificial Intelligence', 'Digital Transformation', 'ROI Analysis'],
      fileSize: '2.8 MB',
      format: 'PDF'
    },
    {
      title: 'SAP S/4HANA Migration Patterns: Lessons from 500+ Projects',
      category: 'Technical Research',
      publishDate: '2024-09-20',
      pages: 36,
      downloads: 890,
      description: 'Analysis of migration approaches, timelines, and success factors based on our portfolio of 500+ S/4HANA transformation projects.',
      keyFindings: [
        'Greenfield vs. Brownfield: 60/40 split in enterprise choices',
        'Average migration duration: 14-18 months',
        'Data quality preparation reduces timeline by 25%',
        'Change management investment correlates with user adoption'
      ],
      topics: ['SAP S/4HANA', 'ERP Migration', 'Project Management'],
      fileSize: '3.2 MB',
      format: 'PDF'
    },
    {
      title: 'Customer Experience Technology Stack: 2024 Benchmark',
      category: 'Market Research',
      publishDate: '2024-08-30',
      pages: 28,
      downloads: 720,
      description: 'Benchmarking study of CX technology investments, platform preferences, and integration patterns across industries.',
      keyFindings: [
        'Omnichannel platforms see 40% higher customer satisfaction',
        'AI personalization drives 25% revenue lift',
        'Integration complexity remains top barrier',
        'Mobile-first strategies outperform by 30%'
      ],
      topics: ['Customer Experience', 'Technology Architecture', 'Benchmarking'],
      fileSize: '2.1 MB',
      format: 'PDF'
    },
    {
      title: 'Manufacturing 4.0: IoT and Predictive Analytics ROI Study',
      category: 'Vertical Research',
      publishDate: '2024-07-25',
      pages: 48,
      downloads: 1100,
      description: 'ROI analysis of IoT and predictive analytics implementations across manufacturing facilities, including cost-benefit models.',
      keyFindings: [
        'Predictive maintenance reduces downtime by 35%',
        'IoT sensor deployments show 18-month payback',
        'Quality improvements average 22%',
        'Energy efficiency gains of 15% typical'
      ],
      topics: ['Manufacturing', 'IoT', 'Predictive Analytics', 'ROI'],
      fileSize: '4.1 MB',
      format: 'PDF'
    },
    {
      title: 'Financial Services Digital Transformation: Regulatory & Innovation Balance',
      category: 'Vertical Research',
      publishDate: '2024-06-15',
      pages: 34,
      downloads: 650,
      description: 'How financial institutions balance innovation with compliance requirements in their digital transformation journeys.',
      keyFindings: [
        'Regulatory-by-design reduces compliance costs by 30%',
        'Cloud-native architectures accelerate feature delivery',
        'Customer onboarding times reduced by 60%',
        'Risk management automation improves accuracy'
      ],
      topics: ['Financial Services', 'Compliance', 'Digital Banking'],
      fileSize: '2.9 MB',
      format: 'PDF'
    },
    {
      title: 'Sustainability & Technology: ESG Implementation Framework',
      category: 'Strategic Research',
      publishDate: '2024-05-20',
      pages: 40,
      downloads: 580,
      description: 'Framework for implementing ESG initiatives through technology, including measurement systems and reporting automation.',
      keyFindings: [
        'Automated ESG reporting reduces effort by 70%',
        'Supply chain visibility critical for scope 3 emissions',
        'Energy management systems show 20% efficiency gains',
        'Stakeholder engagement platforms improve transparency'
      ],
      topics: ['ESG', 'Sustainability', 'Automation', 'Reporting'],
      fileSize: '3.5 MB',
      format: 'PDF'
    }
  ];

  const categories = [
    'All Reports',
    'Industry Analysis',
    'Technical Research',
    'Market Research',
    'Vertical Research',
    'Strategic Research'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Reports');

  const filteredReports = selectedCategory === 'All Reports' 
    ? researchReports 
    : researchReports.filter(report => report.category === selectedCategory);

  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <GridBackground opacity={0.02} gridSize={40} color="#3b82f6" />
      
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
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                <FileText className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">40+ Research Reports</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                <Download className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">25K+ Downloads</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Research & Reports
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Data-driven insights and industry research from our team of experts. Access comprehensive reports, 
              benchmarking studies, and strategic frameworks based on real-world enterprise implementations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Reports Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      report.category === 'Industry Analysis' ? 'bg-blue-100 text-blue-800' :
                      report.category === 'Technical Research' ? 'bg-purple-100 text-purple-800' :
                      report.category === 'Market Research' ? 'bg-green-100 text-green-800' :
                      report.category === 'Vertical Research' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {report.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {report.downloads.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {report.pages} pages
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">{report.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{report.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Key Findings:
                    </h4>
                    <ul className="space-y-1">
                      {report.keyFindings.slice(0, 3).map((finding, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {report.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      {new Date(report.publishDate).toLocaleDateString()} • {report.fileSize} {report.format}
                    </div>
                    <motion.button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold">40+</div>
              <div className="text-blue-100">Research Reports</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold">25K+</div>
              <div className="text-blue-100">Downloads</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-100">Data Points Analyzed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold">8</div>
              <div className="text-blue-100">Industry Verticals</div>
            </motion.div>
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

export default ResearchReportsPage;