import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'Clarity Impact Finance',
  description = 'Strategic consulting for mission-driven lenders, specializing in underwriting expertise, lending strategy, process mapping, lender training, and compliance & portfolio management.',
  keywords = 'CDFI consulting, impact finance, community development finance, underwriting expertise, lending strategy, NMTC advisory, mission-driven lenders, compliance management',
  canonicalUrl,
  structuredData,
  ogImage = 'https://clarityimpactfinance.com/og-image.jpg',
  type = 'website', 
  pathname = ''
}) => {
  const siteUrl = 'https://clarityimpactfinance.com';
  const url = `${siteUrl}${pathname}`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clarity Impact Finance",
    "url": siteUrl,
    "logo": `${siteUrl}/logo192.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@clarityimpactfinance.com",
      "url": `${siteUrl}/#contact`
    },
    "sameAs": [
      "https://www.linkedin.com/in/amirali86"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Service schema for professional services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Financial Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Clarity Impact Finance"
    },
    "description": "Strategic consulting for mission-driven lenders including CDFIs and community banks",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pathname.replace('/', '').charAt(0).toUpperCase() + pathname.replace('/', '').slice(1) || "Home",
        "item": url
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  const schemaArray = [finalStructuredData];
  
  // Add additional schemas only for the homepage
  if (!pathname || pathname === '/') {
    schemaArray.push(serviceSchema);
    schemaArray.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl || url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Clarity Impact Finance" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ClarityFinance" />
      
      {/* Structured Data - Multiple schemas */}
      {schemaArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Other important meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Clarity Impact Finance" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1B4620" />
      <meta name="google-site-verification" content="add-your-verification-code-here" />
    </Helmet>
  );
};

export default SEO;
