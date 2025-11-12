import { MetadataRoute } from 'next'
import { siteMetadata } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.url

  const routes = [
    '',
    '/experience',
    '/ventures',
    '/case-studies',
    '/case-studies/blyza',
    '/thesis',
    '/contact',
    '/resume',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
