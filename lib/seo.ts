import { SiteMetadata } from './types'

export const siteMetadata: SiteMetadata = {
  title: 'Azaan Khan - Venture, Strategy & Operations',
  description: 'Operator with hands-on experience across strategy (Mars, Deloitte), partnerships (Wellhub), and operations. Building and scaling ventures like Blyza Entertainment. Open to Venture, Strategy, and Operations roles.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://azaankhan.com',
  author: {
    name: 'Azaan Khan',
    email: 'azaankhanbiz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/azaan-khan-836b2a2bb/',
    github: 'https://github.com/azaankhan',
  },
}

export const defaultSEO = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.url,
    site_name: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    handle: '@azaankhan',
    site: '@azaankhan',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'venture capital, strategy, product management, partnerships, founder, innovation, business development',
    },
  ],
}
