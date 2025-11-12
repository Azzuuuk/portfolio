import { siteMetadata } from './seo'

export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteMetadata.author.name,
  url: siteMetadata.url,
  sameAs: [
    siteMetadata.author.linkedin,
    siteMetadata.author.github,
  ].filter(Boolean),
  jobTitle: 'Founder & Strategy Consultant',
  description: siteMetadata.description,
})

export const generateOrganizationSchema = (name: string, description: string, url?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name,
  description,
  url,
  founder: {
    '@type': 'Person',
    name: siteMetadata.author.name,
  },
})

export const generateCreativeWorkSchema = (
  title: string,
  description: string,
  datePublished: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  headline: title,
  description,
  datePublished,
  author: {
    '@type': 'Person',
    name: siteMetadata.author.name,
  },
  url,
})
