'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/section-header'
import { TagList } from '@/components/tag'

// Placeholder case studies
const caseStudies = [
  {
    slug: 'blyza',
    title: 'Blyza Entertainment',
    subtitle: 'Building a Multi-Vertical Entertainment Ecosystem',
    tags: ['Entertainment', 'SaaS', 'Gaming', 'Events'],
    readTime: '12 min',
    publishedAt: '2024-11-01',
    excerpt:
      'How we built and scaled a three-pronged entertainment platform reaching 90+ countries with 30K+ games played, live event venues, and B2B team-building SaaS.',
  },
  {
    slug: 'kirushibumi',
    title: 'KiruShibumi',
    subtitle: 'E-commerce Growth through Performance Marketing',
    tags: ['E-commerce', 'Marketing', 'Fashion'],
    readTime: '8 min',
    publishedAt: '2024-09-15',
    excerpt:
      'Lessons from building a direct-to-consumer clothing brand using print-on-demand and performance marketing strategies.',
  },
  {
    slug: 'wellhub-partnerships',
    title: 'Wellhub Partnership Expansion',
    subtitle: 'Scaling B2B Wellness Partnerships in Germany',
    tags: ['Partnerships', 'B2B', 'Strategy'],
    readTime: '10 min',
    publishedAt: '2024-10-20',
    excerpt:
      'Strategic approach to expanding wellness brand partnerships in the German market, improving acquisition funnels and optimizing ROI.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Deep Dives"
          title="Case Studies"
          description="Detailed breakdowns of ventures built, strategies executed, and lessons learned"
          className="mb-12"
        />

        {/* Case Studies List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.slug}`}>
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <CardHeader>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <Badge variant="outline">Case Study</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {study.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {study.subtitle}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">
                        {new Date(study.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{study.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <TagList tags={study.tags} />
                      <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
