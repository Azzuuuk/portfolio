import { Experience, Venture, Thesis } from './types'

export const experiences: Experience[] = [
  {
    id: 'wellhub',
    company: 'Wellhub (Gympass)',
    role: 'Partnerships & Growth Associate',
    location: 'Madrid, Spain (Germany Market)',
    dateRange: 'May 2025 - Nov 2025',
    bullets: [
      'Led B2B partnership expansion in DE market; onboarded wellness brands, improved acquisition funnels',
      'Ran market & competitor analysis to inform regional growth strategies',
      'Used CRM/BI to optimize partner performance, retention, and ROI',
    ],
    keyImpact: [
      'Reduced manual processes via automation',
      'Built scalable partnership frameworks'
    ],
    logo: '/logos/wellhub.png',
    tags: ['Partnerships', 'Strategy'],
    type: 'Partnerships',
  },
  {
    id: 'mars',
    company: 'Mars Wrigley',
    role: 'Strategy & Execution Associate',
    location: 'Dubai, UAE',
    dateRange: 'Jul 2024 - Dec 2024',
    bullets: [
      'Built KPI dashboards for sales/digital performance across Gulf markets',
      'Drove category insights and segmentation for strategy decisions',
      'Delivered scalable reporting & forecasting frameworks',
    ],
    keyImpact: [
      'Designed scalable GTM processes',
      'Built decision systems with dashboards'
    ],
    logo: '/logos/mars.png',
    tags: ['Strategy', 'Ops'],
    type: 'Strategy',
  },
  {
    id: 'deloitte',
    company: 'Deloitte',
    role: 'Business Process Solutions (Intern)',
    location: 'Sharjah, UAE',
    dateRange: 'Sep 2023 - Jan 2024',
    bullets: [
      'Built automated reporting (Power BI, SQL); improved data reliability',
      'Contributed to digital transformation and process optimization',
      'Supported due-diligence-style benchmarking & recommendations',
    ],
    keyImpact: [
      'Implemented process optimizations',
      'Built decision-supporting frameworks'
    ],
    logo: '/logos/deloitte.png',
    tags: ['Strategy', 'Tech'],
    type: 'Strategy',
  },
  {
    id: 'digital-qatalyst',
    company: 'Digital Qatalyst DMCC',
    role: 'Technology Analyst',
    location: 'Dubai, UAE',
    dateRange: 'Feb 2024 - Apr 2024',
    bullets: [
      'Implemented APQC process frameworks across Finance/HR/Legal',
      'Automated CRM/ERP workflows for scalability and accuracy',
      'Created gamified onboarding tools for adoption & L&D',
    ],
    keyImpact: [
      'Streamlined cross-functional workflows',
      'Built systems for enterprise adoption'
    ],
    logo: '/logos/digital-qatalyst.jpeg',
    tags: ['Tech', 'Ops'],
    type: 'Tech',
  },
  {
    id: 'teleperformance',
    company: 'Teleperformance',
    role: 'Operations Intern',
    location: 'Dubai, UAE',
    dateRange: 'Aug 2022 - Mar 2023',
    bullets: [
      'Monitored client KPIs to identify and resolve operational shortfalls with 95% accuracy',
      'Automated monthly reporting using Power BI, cutting manual time by 20%',
      'Delivered actionable insights that improved client decisions for MedCare and Majid Al Futtaim',
    ],
    keyImpact: [
      'Automated client reporting reducing manual work',
      'Delivered insights improving client outcomes'
    ],
    logo: '/logos/teleperformance.png',
    tags: ['Analytics', 'Operations'],
    type: 'Ops',
  },
  {
    id: 'facts',
    company: 'Facts Computer House',
    role: 'Business Development Intern',
    location: 'Dubai, UAE',
    dateRange: 'Jun 2021 - Aug 2021',
    bullets: [
      'Supported HR and accounting software projects using Python, Java, and C',
      'Collaborated with marketing to create brand materials and social media campaigns',
      'Resolved B2B payment process challenges through customized software solutions',
    ],
    keyImpact: [
      'Built software solutions for payment processes',
      'Supported multi-technology development projects'
    ],
    logo: '/logos/facts.jpeg',
    tags: ['Tech', 'Sales'],
    type: 'Ops',
  },
]

export const ventures: Venture[] = [
  {
    id: 'blyza',
    name: 'Blyza Entertainment',
    role: 'Founder & CEO',
    badge: 'Founder',
    status: 'Live',
    summary: 'Entertainment ecosystem with three verticals: PlayBlyza.com (Live), Blyza Live (In development), and Jeggy - AI B2B team-building (R&D).',
    description: 'Multi-vertical ecosystem: PlayBlyza.com (online party games), Blyza Live (TV-style game-show venue), Jeggy (AI B2B team-building SaaS)',
    tags: ['EntertainmentTech', 'B2C/B2B', 'SaaS', 'Gaming', 'Events'],
    highlights: [
      { label: 'Scale', value: '50,000+ games played across 90+ countries (PlayBlyza).' },
      { label: 'Tech', value: 'React/Next.js · Firebase/Firestore · Vercel.' },
      { label: 'Roadmap', value: 'Blyza Live (In development), Jeggy (R&D) - B2B team-building SaaS.' },
    ],
    links: {
      caseStudy: '/case-studies/blyza',
      website: 'https://joinblyza.com',
    },
    logo: '/logos/blyza.png',
    year: '2025 - Present',
    images: [
      '/ventures/blyza/shot-1.jpg',
      '/ventures/blyza/shot-2.jpg',
      '/ventures/blyza/shot-3.jpg',
    ],
    verticalStatuses: [
      { name: 'PlayBlyza', status: 'Live' },
      { name: 'Blyza Live', status: 'In development' },
      { name: 'Jeggy', status: 'R&D' },
    ],
  },
  {
    id: 'fpp',
    name: 'FPP Entertainment',
    role: 'Founder & Events Director',
    badge: 'Founder',
    status: 'Live',
    summary: 'Premium live shows and dance-led productions across Dubai landmarks.',
    description: 'Produced shows at Burj Khalifa & Palazzo Versace Hotel (dance-led; large venue ops). Partnerships, logistics, creative direction.',
    tags: ['Events', 'Production', 'Partnerships'],
    highlights: [
      { label: 'Venues', value: 'Produced at Burj Khalifa and Palazzo Versace Hotel.' },
      { label: 'Operations', value: 'Owned logistics, vendor management, creative direction.' },
      { label: 'Partnerships', value: 'Brand/sponsor collaborations for large-format events.' },
    ],
    logo: '/logos/fpp.png',
    year: '2022 - 2024',
    images: [
      '/ventures/fpp/shot-1.jpg',
      '/ventures/fpp/shot-2.jpg',
    ],
  },
  {
    id: 'kirushibumi',
    name: 'KiruShibumi',
    role: 'Founder',
    badge: 'Founder',
    status: 'Paused',
    summary: 'Online apparel brand using Printify and lean e-commerce ops.',
    description: 'Online clothing brand with Printify; e-com ops & performance marketing',
    tags: ['E-commerce', 'Brand', 'Growth'],
    highlights: [
      { label: 'Model', value: 'On-demand fulfillment and SKU testing.' },
      { label: 'Marketing', value: 'Influencer and social campaigns for conversion.' },
      { label: 'Creative', value: 'Hands-on brand/creative direction.' },
    ],
    links: {
      caseStudy: '/case-studies/kirushibumi',
    },
    logo: '/logos/kirushibumi.jpeg',
    year: '2023',
    images: [
      '/ventures/kirushibumi/shot-1.jpg',
    ],
  },
  {
    id: 'paragon',
    name: 'Paragon Events',
    role: 'Operations & Marketing Support',
    badge: 'Support',
    status: 'Live',
    summary: 'Operations, vendor coordination, and client servicing for corporate and lifestyle events in Dubai.',
    description: 'Vendor coordination, on-site logistics, sponsorship assistance',
    tags: ['Events', 'Operations', 'Marketing'],
    highlights: [
      { label: 'Logistics', value: 'On-site logistics and scheduling across multi-vendor productions.' },
      { label: 'Sponsorship', value: 'Sponsorship support and fulfillment for partner brands.' },
      { label: 'Creative', value: 'Creative campaign assistance and client communications.' },
    ],
    logo: '/logos/paragon.jpg',
    year: '2024 - Present',
    images: [
      '/ventures/paragon/shot-1.jpg',
    ],
    clickUrl: 'https://ParagonEventsDubai.com',
    clickLabel: 'Visit Website',
  },
  {
    id: 'layl',
    name: 'LAYL',
    role: 'Founder (Concept)',
    badge: 'R&D',
    status: 'R&D',
    summary: 'Tourism & media discovery concept for Dubai (paused pre-launch).',
    description: 'Tourism & media discovery app for Dubai (paused pre-launch)',
    tags: ['Tourism', 'Media', 'R&D'],
    highlights: [
      { label: 'Research', value: 'Market and user research to identify discovery gaps.' },
      { label: 'Prototype', value: 'Prototype exploration for content + local experiences.' },
      { label: 'Status', value: 'Paused pre-launch; learnings inform future builds.' },
    ],
    logo: '/logos/layl.png',
    year: '2023 - 2024',
    images: [
      '/ventures/layl/shot-1.jpg',
    ],
  },
]

export const theses: Thesis[] = [
  {
    slug: 'entertainment-as-a-service',
    title: 'Entertainment-as-a-Service',
    abstract: 'The convergence of venue operations, content production, and sponsorship creates a sustainable entertainment flywheel with multiple revenue streams and built-in moats.',
    tags: ['Entertainment', 'Business Model', 'Events'],
    category: 'Market Thesis',
    publishedAt: '2024-11-01',
  },
  {
    slug: 'ai-team-building',
    title: 'AI in Team-Building (HRTech)',
    abstract: 'AI-powered engagement platforms can transform corporate team-building from one-off events into continuous, data-driven culture initiatives with measurable ROI.',
    tags: ['HRTech', 'AI', 'B2B SaaS'],
    category: 'Technology Thesis',
    publishedAt: '2024-10-15',
  },
  {
    slug: 'gamified-learning',
    title: 'Gamified Corporate Learning',
    abstract: 'Gamification in L&D drives 3x higher engagement and retention vs traditional methods. The market is shifting from compliance training to experience-first skill development.',
    tags: ['EdTech', 'HRTech', 'Gamification'],
    category: 'Market Thesis',
    publishedAt: '2024-09-20',
  },
  {
    slug: 'wellness-ecosystems-emea',
    title: 'Wellness Ecosystems (EMEA)',
    abstract: 'EMEA wellness market is fragmented with strong local players. Winners will be aggregators who unlock cross-vertical synergies (fitness + mental health + nutrition).',
    tags: ['Wellness', 'Marketplaces', 'EMEA'],
    category: 'Market Thesis',
    publishedAt: '2024-08-10',
  },
  {
    slug: 'creator-commerce',
    title: 'Creator-Commerce Infrastructure',
    abstract: 'The next wave of creator tools will focus on infrastructure (payments, fulfillment, analytics) rather than distribution, enabling creators to own their entire value chain.',
    tags: ['Creator Economy', 'Infrastructure', 'E-commerce'],
    category: 'Technology Thesis',
    publishedAt: '2024-07-05',
  },
  {
    slug: 'irl-game-shows',
    title: 'Real-world Game Shows as IRL Social Products',
    abstract: 'Physical game show experiences combine the virality of digital content with the premium pricing of experiential entertainment, creating hybrid social products.',
    tags: ['Entertainment', 'Social', 'IRL'],
    category: 'Market Thesis',
    publishedAt: '2024-06-15',
  },
]
