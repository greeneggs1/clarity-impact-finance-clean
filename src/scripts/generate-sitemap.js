#!/usr/bin/env node

/**
 * Generate Sitemap XML file for Clarity Impact Finance
 * This script generates a sitemap.xml file with all website URLs
 * Run with: node generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Site configuration
const config = {
  siteUrl: 'https://clarityimpactfinance.com',
  outputPath: path.join(__dirname, '../../public/sitemap.xml'),
  // Add all routes here
  routes: [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'weekly'
    },
    {
      path: '/login',
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      path: '/terms-conditions',
      priority: '0.5',
      changefreq: 'yearly'
    },
    {
      path: '/#services',
      priority: '0.9',
      changefreq: 'monthly'
    },
    {
      path: '/#team',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      path: '/#resources',
      priority: '0.9',
      changefreq: 'weekly'
    },
    {
      path: '/#blog',
      priority: '0.8',
      changefreq: 'weekly'
    },
    {
      path: '/#contact',
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      path: '/article/ai-cdfis-part-2',
      priority: '0.7',
      changefreq: 'monthly'
    },
    // Add any additional routes here
  ]
};

// Get current date in ISO format YYYY-MM-DD
const dateNow = new Date().toISOString().split('T')[0];

// Generate XML Content
const generateSitemapXML = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  config.routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${config.siteUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${dateNow}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  return xml;
};

// Write the sitemap.xml file
const writeSitemap = () => {
  const sitemapContent = generateSitemapXML();
  
  try {
    fs.writeFileSync(config.outputPath, sitemapContent);
    console.log(`Sitemap created successfully at ${config.outputPath}`);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }
};

// Execute the function
writeSitemap(); 