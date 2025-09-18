import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Varahi - Premium CX & AI Services | Enterprise Digital Transformation",
  description = "Transform your enterprise with Varahi's premium Customer Experience and AI services. 40% ROI improvement, 24/7 support. Philadelphia HQ, Global delivery.",
  keywords = "customer experience, artificial intelligence, digital transformation, enterprise AI, CX optimization, business automation, Philadelphia AI company",
  canonicalUrl = "https://varahi.com",
  ogImage = "https://varahi.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Varahi",
    "description": description,
    "url": canonicalUrl,
    "logo": "https://varahi.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-610-457-3193",
        "contactType": "customer service",
        "areaServed": "US"
      },
      {
        "@type": "ContactPoint", 
        "telephone": "+91-8074926638",
        "contactType": "customer service",
        "areaServed": "IN"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Philadelphia",
        "addressRegion": "PA",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "IN"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/varahi",
      "https://twitter.com/varahi",
      "https://facebook.com/varahi"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": "Customer Experience & AI Services",
      "areaServed": "Worldwide"
    }
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Varahi" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Varahi" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="geo.region" content="US-PA" />
      <meta name="geo.placename" content="Philadelphia" />
      <meta name="geo.position" content="39.9526;-75.1652" />
      <meta name="ICBM" content="39.9526, -75.1652" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default SEOHead;