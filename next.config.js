const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Enable MDX
  experimental: {
    mdxRs: true,
  },

  // Add webpack configuration to handle MDX and images
  webpack: (config) => {
    // Handle markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    config.resolve.fallback = { fs: false }
    return config
  }
}

module.exports = withMDX(nextConfig)
