#!/usr/bin/env node

/**
 * Image WebP Generator for Clarity Impact Finance
 * This script converts JPG/JPEG/PNG images to WebP format for better performance
 * 
 * Prerequisites:
 * - Install sharp: npm install sharp --save-dev
 * 
 * Usage: node generate-webp.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  sourceDir: path.join(__dirname, '../../public'),
  extensions: ['.jpg', '.jpeg', '.png'],
  skipIfExists: true, // Skip if WebP already exists
  quality: 80 // WebP quality (0-100)
};

// Processed counters
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalSize: { original: 0, webp: 0 }
};

// Process a file
const processFile = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.join(
    path.dirname(filePath), 
    path.basename(filePath, ext)
  );
  const webpPath = `${baseName}.webp`;
  
  // Skip if WebP already exists and skipIfExists is true
  if (config.skipIfExists && fs.existsSync(webpPath)) {
    console.log(`Skipping (WebP exists): ${path.basename(filePath)}`);
    stats.skipped++;
    return;
  }
  
  try {
    // Get original file size
    const originalStats = fs.statSync(filePath);
    stats.totalSize.original += originalStats.size;
    
    // Generate WebP
    await sharp(filePath)
      .webp({ quality: config.quality })
      .toFile(webpPath);
    
    // Get WebP file size
    const webpStats = fs.statSync(webpPath);
    stats.totalSize.webp += webpStats.size;
    
    console.log(`Converted: ${path.basename(filePath)} -> ${path.basename(webpPath)}`);
    console.log(`  Size: ${(originalStats.size / 1024).toFixed(2)} KB -> ${(webpStats.size / 1024).toFixed(2)} KB (${(100 - (webpStats.size / originalStats.size * 100)).toFixed(2)}% reduction)`);
    
    stats.processed++;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    stats.errors++;
  }
};

// Recursively process directories
const processDirectory = async (dir) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (config.extensions.includes(path.extname(filePath).toLowerCase())) {
      await processFile(filePath);
    }
  }
};

// Main function
const main = async () => {
  const startTime = Date.now();
  
  console.log('Starting WebP image conversion...');
  console.log(`Source directory: ${config.sourceDir}`);
  console.log(`Quality: ${config.quality}%`);
  console.log('----------------------------------------');
  
  try {
    await processDirectory(config.sourceDir);
    
    // Print stats
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('----------------------------------------');
    console.log('Conversion completed!');
    console.log(`Processed: ${stats.processed} images`);
    console.log(`Skipped: ${stats.skipped} images`);
    console.log(`Errors: ${stats.errors} images`);
    
    if (stats.processed > 0) {
      const originalMB = (stats.totalSize.original / (1024 * 1024)).toFixed(2);
      const webpMB = (stats.totalSize.webp / (1024 * 1024)).toFixed(2);
      const reduction = (100 - (stats.totalSize.webp / stats.totalSize.original * 100)).toFixed(2);
      
      console.log(`Original size: ${originalMB} MB`);
      console.log(`WebP size: ${webpMB} MB`);
      console.log(`Reduction: ${reduction}%`);
    }
    
    console.log(`Duration: ${duration} seconds`);
  } catch (err) {
    console.error('Error:', err.message);
  }
};

// Run the script
main(); 