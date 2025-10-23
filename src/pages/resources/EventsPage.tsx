import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ExternalLink, Clock, MapPin, Video, Mic } from 'lucide-react';
import GridBackground from '../../components/GridBackground';
import NewsletterSubscription from '../../components/NewsletterSubscription';

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'SAP S/4HANA Migration Masterclass',
      type: 'Webinar',
      date: '2024-11-15',
      time: '2:00 PM EST',
      duration: '90 minutes',
      format: 'Virtual',
      registrations: 450,
      maxCapacity: 500,
      description: 'Learn proven strategies for successful SAP S/4HANA migrations from our enterprise architects.',
      speakers: ['Dr. Sarah Chen, SAP Architect', 'Mike Rodriguez, Migration Specialist'],
      agenda: [
        'Pre-migration assessment and planning',
        'Data cleansing and business process optimization',
        'Risk mitigation strategies',
        'Post-go-live support and optimization',
        'Live Q&A session'
      ],
      cta: 'Register Free'
    },
    {
      title: 'AI Strategy Summit 2024',
      type: 'Conference',
      date: '2024-12-10',
      time: '9:00 AM EST',
      duration: 'Full Day',
      format: 'Hybrid (NYC + Virtual)',
      registrations: 1200,
      maxCapacity: 2000,
      description: 'Join 2000+ executives exploring AI implementation strategies for enterprise transformation.',
      speakers: ['Industry Leaders', 'AI Pioneers', 'Transformation Experts'],
      agenda: [
        'AI Readiness Assessment',
        'ROI Measurement Framework',
        'Change Management for AI Adoption',
        'Panel: AI Success Stories',
        'Networking & Exhibition'
      ],
      cta: 'Reserve Spot'
    },
    {
      title: 'Customer Experience Innovation Workshop',
      type: 'Workshop',
      date: '2024-11-28',
      time: '10:00 AM EST',
      duration: '3 hours',
      format: 'Interactive Virtual',
      registrations: 85,
      maxCapacity: 100,
      description: 'Hands-on workshop designing omnichannel customer experiences with modern technology.',
      speakers: ['Emma Thompson, CX Director', 'Jason Park, UX Strategist'],
      agenda: [
        'Customer Journey Mapping',
        'Technology Integration Points',
        'Personalization Strategies',
        'Measurement and Optimization',
        'Group Exercise & Feedback'
      ],
      cta: 'Join Workshop'
    }
  ];

  const pastEvents = [
    {
      title: 'Digital Transformation Trends 2024',
      date: '2024-09-20',
      type: 'Webinar',
      attendees: 850,
      recording: true,
      highlights: [
        '5 key transformation trends for 2024-2025',
        'ROI measurement frameworks',
        'Common pitfalls and how to avoid them'
      ]
    },
    {
      title: 'SAP BTP Deep Dive Series',
      date: '2024-08-15',
      type: 'Workshop Series',
      attendees: 320,
      recording: true,
      highlights: [
        'Platform capabilities and use cases',
        'Integration patterns and best practices',
        'Hands-on development scenarios'
      ]
    },
    {
      title: 'AI Ethics in Enterprise: A Roundtable',
      date: '2024-07-30',
      type: 'Panel Discussion',
      attendees: 450,
      recording: true,
      highlights: [
        'Responsible AI implementation',
        'Bias detection and mitigation',
        'Governance frameworks'
      ]
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative">
      <GridBackground opacity={0.02} gridSize={40} color="#8b5cf6" />
      
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
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">25+ Events Annually</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">5K+ Participants</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Events & Webinars
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our expert-led sessions on SAP transformations, AI strategy, and customer experience innovation. 
              Connect with peers and learn from real-world implementations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reserve your spot at our upcoming sessions covering the latest in enterprise technology and digital transformation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.type === 'Webinar' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Conference' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {event.registrations}/{event.maxCapacity}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {event.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {event.format.includes('Virtual') ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                      {event.format}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Speakers:</h4>
                    <div className="space-y-1">
                      {event.speakers.map((speaker, i) => (
                        <div key={i} className="text-sm text-gray-600">{speaker}</div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {event.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events & Recordings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Event Recordings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Catch up on valuable insights from our past events. All recordings are available to registered attendees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
                    {event.type}
                  </span>
                  {event.recording && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Video className="w-4 h-4" />
                      <span className="text-xs">Recording Available</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-900">{event.title}</h3>
                <div className="text-sm text-gray-500 mb-3">
                  {new Date(event.date).toLocaleDateString()} • {event.attendees} attendees
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                  Watch Recording
                </button>
              </motion.div>
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

export default EventsPage;