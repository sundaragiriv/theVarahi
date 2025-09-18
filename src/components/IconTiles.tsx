import React from 'react';

const IconTiles: React.FC = () => {
  const tiles = [
    {
      icon: '/icons/ai.svg',
      title: 'AI Strategy & Transformations',
      description: 'AI maturity assessment, governance frameworks, and custom model development for enterprise transformation.',
      href: '/solutions/ai-strategy-transformations'
    },
    {
      icon: '/icons/cx.svg',
      title: 'CX Services', 
      description: 'Omnichannel customer experience, SLA optimization, and knowledge management.',
      href: '#cx-services'
    },
    {
      icon: '/icons/cdc.svg',
      title: 'Customer Studies',
      description: 'Real-world implementations with measurable outcomes and proven architectures.',
      href: '#customer-studies'
    },
    {
      icon: '/icons/sap.svg',
      title: 'Tech Ideas',
      description: 'Technical insights, implementation patterns, and best practices.',
      href: '#tech-ideas'
    },
    {
      icon: '/icons/info.svg',
      title: 'About Us',
      description: 'Our expertise, methodology, and commitment to excellence.',
      href: '#about'
    },
    {
      icon: '/icons/cpq.svg',
      title: 'CPQ',
      description: 'Advanced configure-price-quote with dynamic pricing intelligence.',
      href: '#cx-services'
    },
    {
      icon: '/icons/fsm.svg',
      title: 'FSM',
      description: 'Intelligent field service management and workforce optimization.',
      href: '#cx-services'
    },
    {
      icon: '/icons/headphones.svg',
      title: 'Service Cloud V2',
      description: 'Advanced customer service platforms with AI-powered insights.',
      href: '#cx-services'
    },
    {
      icon: '/icons/zap.svg',
      title: 'BTP/CPI',
      description: 'SAP Business Technology Platform and cloud integration.',
      href: '#cx-services'
    }
  ];

  return (
    <section className="py-24 section-gradient">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20 transition-all duration-700">
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-2xl text-gray max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive customer experience and AI solutions engineered for enterprise scale with guaranteed measurable outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tiles.map((tile) => (
            <a
              key={tile.title}
              href={tile.href}
              className="glass-card p-8 block group cursor-pointer hover:shadow-sap-xl transition-transform duration-200 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-sap bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <img src={tile.icon} alt="" className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                {tile.title}
              </h3>
              <p className="text-gray leading-relaxed">
                {tile.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconTiles;