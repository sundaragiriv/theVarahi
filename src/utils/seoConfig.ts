export const seoConfig = {
  // Global SEO defaults
  defaultTitle: "Varahi - Premium CX & AI Services | Enterprise Digital Transformation",
  defaultDescription: "Transform your enterprise with Varahi's premium Customer Experience and AI services. 40% ROI improvement, 24/7 support. Philadelphia HQ, Global delivery.",
  defaultKeywords: "customer experience, artificial intelligence, digital transformation, enterprise AI, CX optimization, business automation, Philadelphia AI company, SAP S/4HANA",
  siteUrl: "https://varahi.com",
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: "Varahi - Enterprise CX & AI Services | 40% ROI in 90 Days",
      description: "Transform your enterprise with Varahi's premium Customer Experience and AI services. SAP S/4HANA, intelligent automation, 40% ROI in 90 days. Philadelphia HQ, global delivery.",
      keywords: "enterprise CX, artificial intelligence, SAP S/4HANA, digital transformation, customer experience optimization, business automation, Philadelphia AI company, enterprise software",
      ogImage: "/images/og-home.jpg"
    },
    services: {
      title: "CX Services - Customer Experience Optimization | Varahi",
      description: "Premium customer experience services: CX strategy, journey mapping, omnichannel optimization. Proven 40% ROI improvement for enterprise clients.",
      keywords: "customer experience services, CX strategy, journey mapping, omnichannel, customer satisfaction, CX optimization, enterprise CX consulting",
      ogImage: "/images/og-services.jpg"
    },
    ai: {
      title: "AI Services - Enterprise Artificial Intelligence Solutions | Varahi", 
      description: "Enterprise AI implementation: machine learning, process automation, intelligent analytics. 90-day deployment with guaranteed ROI outcomes.",
      keywords: "enterprise AI, artificial intelligence services, machine learning, AI implementation, process automation, intelligent analytics, AI consulting",
      ogImage: "/images/og-ai.jpg"
    }
  },
  
  // Business information for structured data
  business: {
    name: "Varahi",
    description: "Premium Customer Experience and Artificial Intelligence services for enterprise digital transformation",
    url: "https://varahi.com",
    logo: "https://varahi.com/logo.png",
    address: {
      streetAddress: "123 Business Center",
      addressLocality: "Philadelphia", 
      addressRegion: "PA",
      postalCode: "19103",
      addressCountry: "US"
    },
    contactPoints: [
      {
        telephone: "+1-610-457-3193",
        contactType: "customer service",
        areaServed: "US"
      },
      {
        telephone: "+91-8074926638", 
        contactType: "customer service",
        areaServed: "IN"
      }
    ],
    sameAs: [
      "https://linkedin.com/company/varahi",
      "https://twitter.com/varahi", 
      "https://facebook.com/varahi"
    ]
  }
};

export default seoConfig;