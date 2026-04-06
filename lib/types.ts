export interface Experience {
  id: string
  company: string
  role: string
  location: string
  dateRange: string
  bullets: string[]
  keyImpact?: string[]
  logo?: string
  tags: string[]
  type: 'Strategy' | 'Partnerships' | 'Tech' | 'Ops' | 'All'
}

export interface Venture {
  id: string
  name: string
  role: string
  badge: 'Founder' | 'Co-founder' | 'R&D' | 'Support'
  status: 'Live' | 'Active' | 'Paused' | 'Completed' | 'R&D'
  summary: string
  description: string
  tags: string[]
  highlights: {
    label: string
    value: string
  }[]
  links?: {
    caseStudy?: string
    website?: string
    demo?: string
  }
  logo?: string
  year: string
  images?: string[]
  clickUrl?: string
  clickLabel?: string
  verticalStatuses?: {
    name: string
    status: 'Live' | 'In development' | 'R&D'
  }[]
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  heroImage?: string
  publishedAt: string
  readTime: string
  sections: {
    id: string
    title: string
    content: string
  }[]
}

export interface Thesis {
  slug: string
  title: string
  abstract: string
  tags: string[]
  category: string
  publishedAt: string
  content?: string
}

export interface SiteMetadata {
  title: string
  description: string
  url: string
  author: {
    name: string
    email: string
    linkedin: string
    github?: string
  }
}
