import React from 'react';
import { Helmet } from 'react-helmet-async';
import FinquickHero from '../components/FinquickHero';
import WhatWeBuild from '../components/WhatWeBuild';
import VarahiEdge from '../components/VarahiEdge';
import IntelligenceInAction from '../components/IntelligenceInAction';
import BuildTogether from '../components/BuildTogether';
import '../styles/grid.css';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Varahi",
    "description": "Premium Customer Experience and AI services for enterprise digital transformation. 40% ROI improvement, 24/7 global support.",
    "url": "https://varahi.com",
    "logo": "https://varahi.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-610-457-3193",
        "contactType": "customer service",
        "areaServed": "US"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "offers": {
      "@type": "Service",
      "serviceType": "Enterprise CX & AI Services",
      "areaServed": "Worldwide"
    }
  };

  return (
    <>
      <Helmet>
        <title>Varahi - Enterprise CX & SAP Solutions | Proven Results Since 2009</title>
        <meta name="description" content="Transform your enterprise with Varahi's proven Customer Experience and SAP services. 16 years experience, 50+ Fortune 1000 clients, 15-35% efficiency gains. Philadelphia HQ, global delivery." />
        <meta name="keywords" content="enterprise CX, SAP consulting, SAP S/4HANA, digital transformation, customer experience optimization, business automation, Philadelphia SAP consultants, enterprise software" />
        <link rel="canonical" href="https://varahi.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main>
      <FinquickHero />
      <WhatWeBuild />
      <VarahiEdge />
      <IntelligenceInAction />
      <BuildTogether />
    </main>
    </>
  );
};

export default HomePage;