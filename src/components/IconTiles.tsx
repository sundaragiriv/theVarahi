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
      description: 'Copilots, automation, and RAG on your data.',
      href: '#ai-services'
    },
    {
      icon: Users,
      title: 'CX Services', 
      description: 'Omnichannel service, SLAs, knowledge that stick.',
      href: '#cx-services'
    },
    {
      icon: BarChart3,
      title: 'Customer Studies',
      description: 'Real projects, real metrics, clear architectures.',
      href: '#customer-studies'
    },
    {
      icon: Lightbulb,
      title: 'Tech Ideas',
      description: 'Hands-on posts, patterns, and code.',
      href: '#tech-ideas'
    },
    {
      icon: Info,
      title: 'About Us',
      description: 'Who we are and how we deliver.',
      href: '#about'
    },
    {
      icon: MessageCircle,
      title: 'Consult Us',
      description: 'Talk to an expert.',
      href: '#consult'
    },
    {
      icon: ShoppingCart,
      title: 'Sales Cloud V2',
      description: 'Advanced sales processes and automation.',
      href: '#cx-services'
    },
    {
      icon: Headphones,
      title: 'Service Cloud V2',
      description: 'Next-gen customer service solutions.',
      href: '#cx-services'
    },
    {
      icon: Wrench,
      title: 'FSM',
      description: 'Field service management optimization.',
      href: '#cx-services'
    },
    {
      icon: Calculator,
      title: 'CPQ',
      description: 'Configure, price, quote automation.',
      href: '#cx-services'
    },
    {
      icon: Database,
      title: 'CDC/CDP',
      description: 'Customer data platforms and connectivity.',
      href: '#cx-services'
    },
    {
      icon: Zap,
      title: 'BTP/CPI',
      description: 'Integration platform and development.',
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            Comprehensive CX and AI services designed for enterprise scale and measurable outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {tiles.map((tile, index) => {
            const IconComponent = tile.icon;
            return (
              <motion.a
                key={tile.title}
                href={tile.href}
                variants={itemVariants}
                className="card p-6 block group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 mb-4 group-hover:bg-brand/20 transition-colors duration-200">
                  <IconComponent className="h-6 w-6 text-brand" />
                </div>
                <h3 className="font-semibold text-ink mb-2 group-hover:text-brand transition-colors duration-200">
                  {tile.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed">
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