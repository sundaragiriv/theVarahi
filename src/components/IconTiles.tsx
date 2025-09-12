import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Users, BarChart3, Lightbulb, Info, MessageCircle,
  ShoppingCart, Headphones, Wrench, Calculator, Database, Zap
} from 'lucide-react';

const IconTiles: React.FC = () => {
  const tiles = [
    {
      icon: Bot,
      title: 'AI Services',
      description: 'Intelligent copilots, process automation, and RAG implementations on enterprise data.',
      href: '#ai-services'
    },
    {
      icon: Users,
      title: 'CX Services', 
      description: 'Omnichannel customer experience, SLA optimization, and knowledge management.',
      href: '#cx-services'
    },
    {
      icon: BarChart3,
      title: 'Customer Studies',
      description: 'Real-world implementations with measurable outcomes and proven architectures.',
      href: '#customer-studies'
    },
    {
      icon: Lightbulb,
      title: 'Tech Ideas',
      description: 'Technical insights, implementation patterns, and best practices.',
      href: '#tech-ideas'
    },
    {
      icon: Info,
      title: 'About Us',
      description: 'Our expertise, methodology, and commitment to excellence.',
      href: '#about'
    },
    {
      icon: MessageCircle,
      title: 'Consult Us',
      description: 'Connect with our enterprise solution architects.',
      href: '#consult'
    },
    {
      icon: ShoppingCart,
      title: 'Sales Cloud V2',
      description: 'Next-generation sales processes with intelligent automation.',
      href: '#cx-services'
    },
    {
      icon: Headphones,
      title: 'Service Cloud V2',
      description: 'Advanced customer service platforms with AI-powered insights.',
      href: '#cx-services'
    },
    {
      icon: Wrench,
      title: 'FSM',
      description: 'Intelligent field service management and workforce optimization.',
      href: '#cx-services'
    },
    {
      icon: Calculator,
      title: 'CPQ',
      description: 'Advanced configure-price-quote with dynamic pricing intelligence.',
      href: '#cx-services'
    },
    {
      icon: Database,
      title: 'CDC/CDP',
      description: 'Unified customer data platforms with real-time connectivity.',
      href: '#cx-services'
    },
    {
      icon: Zap,
      title: 'BTP/CPI',
      description: 'SAP Business Technology Platform and cloud integration.',
      href: '#cx-services'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 section-gradient">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-2xl text-gray max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive customer experience and AI solutions engineered for enterprise scale with guaranteed measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {tiles.map((tile, index) => {
            const IconComponent = tile.icon;
            return (
              <motion.a
                key={tile.title}
                href={tile.href}
                variants={itemVariants}
                className="glass-card p-8 block group cursor-pointer hover:shadow-sap-xl"
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-sap bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {tile.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {tile.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IconTiles;