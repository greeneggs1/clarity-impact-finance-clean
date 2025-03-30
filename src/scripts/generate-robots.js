#!/usr/bin/env node

/**
 * Generate robots.txt file for Clarity Impact Finance
 * This script generates an optimized robots.txt file with proper directives for search engines
 * Run with: node generate-robots.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  siteUrl: 'https://clarityimpactfinance.com',
  outputPath: path.join(__dirname, '../../public/robots.txt'),
  // Directories and files disallowed for all bots
  disallowAll: [
    '/admin',
    '/login',
    '/admin/*',
    '/api/*',
    '/*.json$',
    '/*.js$',
    '/*.css$'
  ],
  // Bot-specific rules
  botRules: [
    {
      name: 'Googlebot',
      disallow: []
    },
    {
      name: 'Googlebot-Image',
      disallow: []
    },
    {
      name: 'AdsBot-Google',
      disallow: ['/admin/*', '/login/*']
    }
  ]
};

// Generate robots.txt content
const generateRobotsTxt = () => {
  let content = '# https://www.robotstxt.org/robotstxt.html\n';
  
  // Default rules for all bots
  content += 'User-agent: *\n';
  content += 'Allow: /\n';
  
  // Add disallow directives for all bots
  config.disallowAll.forEach(path => {
    content += `Disallow: ${path}\n`;
  });
  
  content += '\n';
  
  // Add bot-specific rules
  config.botRules.forEach(bot => {
    content += `User-agent: ${bot.name}\n`;
    content += 'Allow: /\n';
    
    bot.disallow.forEach(path => {
      content += `Disallow: ${path}\n`;
    });
    
    content += '\n';
  });
  
  // Add sitemap reference
  content += '# Sitemap\n';
  content += `Sitemap: ${config.siteUrl}/sitemap.xml\n`;
  
  return content;
};

// Write the robots.txt file
const writeRobotsTxt = () => {
  const robotsContent = generateRobotsTxt();
  
  try {
    fs.writeFileSync(config.outputPath, robotsContent);
    console.log(`robots.txt created successfully at ${config.outputPath}`);
  } catch (error) {
    console.error('Error writing robots.txt file:', error);
  }
};

// Execute the function
writeRobotsTxt(); 