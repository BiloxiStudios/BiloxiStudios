/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://biloxistudios.com',
  generateRobotsTxt: false, // we already have a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom transform function to adjust priority for specific pages
    const priorities = {
      '/': 1.0,
      '/projects': 0.9,
      '/blog': 0.8,
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    // Add any dynamic paths that should be included in the sitemap
    const dynamicPaths = []
    
    // Add blog posts
    // You can modify this to fetch actual blog post paths
    dynamicPaths.push({
      loc: '/blog/welcome-to-biloxi-studios',
      priority: 0.8,
      changefreq: 'monthly',
    })
    
    return dynamicPaths
  },
}
