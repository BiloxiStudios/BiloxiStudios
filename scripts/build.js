const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure required directories exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Run the build process
try {
  console.log('🏗️  Starting build process...');
  
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next');
  }
  
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run Next.js build
  console.log('🔨 Building Next.js application...');
  execSync('next build', { stdio: 'inherit' });
  
  // Copy files to public directory if needed
  console.log('📋 Ensuring public directory is ready...');
  const requiredFiles = ['favicon.ico', 'manifest.json', 'vercel.svg'];
  requiredFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Warning: ${file} not found in public directory`);
    }
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
