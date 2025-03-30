#!/usr/bin/env node

/**
 * Image SEO Checker for Clarity Impact Finance
 * This script scans components for image elements and checks for:
 * 1. Proper alt tags
 * 2. Responsive image usage
 * 3. Lazy loading implementation
 * 
 * Run with: node optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  componentsDir: path.join(__dirname, '../components'),
  publicDir: path.join(__dirname, '../../public'),
  extensions: ['.js', '.jsx'],
  imgExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
  minAltLength: 5,
  issues: {
    missingAlt: [],
    shortAlt: [],
    nonResponsive: [],
    nonLazy: []
  }
};

// Helper to read a directory recursively
const readDirRecursive = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      readDirRecursive(filePath, fileList);
    } else if (config.extensions.includes(path.extname(file).toLowerCase())) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
};

// Check for images in JSX
const checkImagesInJSX = (files) => {
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const componentName = path.basename(file, path.extname(file));
      
      // Regular expressions for different image patterns
      const imgTagRegex = /<img(?!\s+alt=["'][^"']+["'])[^>]*>/g;
      const imgWithAltRegex = /<img[^>]*alt=["']([^"']*?)["'][^>]*>/g;
      const nonResponsiveRegex = /<img[^>]*(?!\s+srcSet)[^>]*>/g;
      const nonLazyRegex = /<img[^>]*(?!\s+loading=["']lazy["'])[^>]*>/g;
      
      // Check for missing alt tags
      let match;
      while ((match = imgTagRegex.exec(content)) !== null) {
        config.issues.missingAlt.push({
          component: componentName,
          file: file,
          line: content.substring(0, match.index).split('\n').length
        });
      }
      
      // Check for short or empty alt tags
      while ((match = imgWithAltRegex.exec(content)) !== null) {
        const altText = match[1].trim();
        if (altText.length < config.minAltLength && !altText.startsWith('icon-')) {
          config.issues.shortAlt.push({
            component: componentName,
            file: file,
            line: content.substring(0, match.index).split('\n').length,
            altText: altText
          });
        }
      }
      
      // Check for non-responsive images (without srcSet)
      while ((match = nonResponsiveRegex.exec(content)) !== null) {
        // Skip SVGs and small icons
        if (!match[0].includes('.svg') && !match[0].includes('icon')) {
          config.issues.nonResponsive.push({
            component: componentName,
            file: file,
            line: content.substring(0, match.index).split('\n').length
          });
        }
      }
      
      // Check for non-lazy loaded images
      while ((match = nonLazyRegex.exec(content)) !== null) {
        // Skip small images like icons
        if (!match[0].includes('icon') && !match[0].includes('logo')) {
          config.issues.nonLazy.push({
            component: componentName,
            file: file,
            line: content.substring(0, match.index).split('\n').length
          });
        }
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  });
};

// Check for non-optimized images in public directory
const checkPublicImages = () => {
  const optimizedFormats = ['.webp', '.avif'];
  const largeImages = [];
  const nonOptimized = [];
  
  const checkDir = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDir(filePath);
      } else if (config.imgExtensions.includes(path.extname(file).toLowerCase())) {
        // Check for large file sizes (over 200KB)
        if (stat.size > 200 * 1024) {
          largeImages.push({
            path: filePath,
            size: (stat.size / 1024).toFixed(2) + ' KB'
          });
        }
        
        // Check if optimized versions exist
        const baseName = path.join(dir, path.basename(file, path.extname(file)));
        const hasOptimized = optimizedFormats.some(ext => 
          fs.existsSync(baseName + ext)
        );
        
        if (!hasOptimized && !file.includes('icon') && !file.includes('logo')) {
          nonOptimized.push({
            path: filePath,
            suggestions: optimizedFormats.map(ext => baseName + ext)
          });
        }
      }
    });
  };
  
  try {
    checkDir(config.publicDir);
    return { largeImages, nonOptimized };
  } catch (err) {
    console.error('Error checking public images:', err.message);
    return { largeImages: [], nonOptimized: [] };
  }
};

// Generate suggestions for improvement
const generateSuggestions = (issues, imageIssues) => {
  console.log('\n=== Image SEO Optimization Report ===\n');
  
  // Component issues
  if (issues.missingAlt.length) {
    console.log(`Found ${issues.missingAlt.length} images without alt tags:`);
    issues.missingAlt.forEach(issue => {
      console.log(`  - ${issue.component} (Line ${issue.line})`);
    });
    console.log('\nSuggestion: Add descriptive alt text to all images for better accessibility and SEO.');
  }
  
  if (issues.shortAlt.length) {
    console.log(`\nFound ${issues.shortAlt.length} images with short alt tags:`);
    issues.shortAlt.forEach(issue => {
      console.log(`  - ${issue.component} (Line ${issue.line}): "${issue.altText}"`);
    });
    console.log('\nSuggestion: Use more descriptive alt text (at least 5 characters) that explains the image content and context.');
  }
  
  if (issues.nonResponsive.length) {
    console.log(`\nFound ${issues.nonResponsive.length} non-responsive images:`);
    issues.nonResponsive.forEach(issue => {
      console.log(`  - ${issue.component} (Line ${issue.line})`);
    });
    console.log('\nSuggestion: Use srcSet and sizes attributes or <picture> element for responsive images:');
    console.log(`  <img
    src="image.jpg"
    srcSet="image-small.jpg 400w, image-medium.jpg 800w, image-large.jpg 1200w"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
    alt="Description of the image" />`);
  }
  
  if (issues.nonLazy.length) {
    console.log(`\nFound ${issues.nonLazy.length} images without lazy loading:`);
    issues.nonLazy.forEach(issue => {
      console.log(`  - ${issue.component} (Line ${issue.line})`);
    });
    console.log('\nSuggestion: Add loading="lazy" attribute to images below the fold to improve page load performance:');
    console.log('  <img src="image.jpg" alt="Description" loading="lazy" />');
  }
  
  // Public image issues
  if (imageIssues.largeImages.length) {
    console.log(`\nFound ${imageIssues.largeImages.length} large images (>200KB):`);
    imageIssues.largeImages.forEach(img => {
      console.log(`  - ${img.path} (${img.size})`);
    });
    console.log('\nSuggestion: Compress these images using tools like TinyPNG, ImageOptim, or convert to WebP/AVIF formats.');
  }
  
  if (imageIssues.nonOptimized.length) {
    console.log(`\nFound ${imageIssues.nonOptimized.length} images without optimized formats (WebP/AVIF):`);
    imageIssues.nonOptimized.forEach(img => {
      console.log(`  - ${img.path}`);
      console.log(`    Suggested: ${img.suggestions.join(', ')}`);
    });
    console.log('\nSuggestion: Create WebP and AVIF versions of these images for better performance and SEO.');
  }
  
  // Overall summary
  const totalIssues = Object.values(issues).reduce((sum, arr) => sum + arr.length, 0) 
    + imageIssues.largeImages.length 
    + imageIssues.nonOptimized.length;
  
  if (totalIssues === 0) {
    console.log('\nGreat job! No image SEO issues found.');
  } else {
    console.log(`\nTotal issues found: ${totalIssues}`);
    console.log('\nImplementing these suggestions will improve your page load speed and accessibility, which are important ranking factors for search engines.');
  }
};

// Main function
const main = () => {
  try {
    console.log('Scanning for image SEO issues...');
    
    // Get all component files
    const componentFiles = readDirRecursive(config.componentsDir);
    
    // Check images in JSX
    checkImagesInJSX(componentFiles);
    
    // Check images in public directory
    const publicImageIssues = checkPublicImages();
    
    // Generate suggestions report
    generateSuggestions(config.issues, publicImageIssues);
    
  } catch (err) {
    console.error('Error during image SEO analysis:', err.message);
  }
};

// Run the script
main(); 