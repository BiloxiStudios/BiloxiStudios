const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Configure images to allow external domains if needed
  images: {
    domains: [],
  },
  
  // Enable MDX
  experimental: {
    mdxRs: true,
  },

  // Configure redirects
  async redirects() {
    return [
      {
        source: '/braindead',
        destination: 'https://braindead.tv',
        permanent: true,
      },
    ]
  },
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)