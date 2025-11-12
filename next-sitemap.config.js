/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://azaankhan.com',
  generateRobotsTxt: false, // We're using app/robots.ts instead
  exclude: ['/api/*'],
  generateIndexSitemap: false,
}
