const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

// Import base config
const nextConfig = require('./next.config.js')

// Merge configs
module.exports = withBundleAnalyzer(nextConfig)
