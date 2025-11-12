'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/section-header'
import { TagList } from '@/components/tag'
import { ventures } from '@/lib/data'
import { ScrollReveal } from '@/components/scroll-reveal'

const badgeVariants = {
  Founder: 'default',
  'Co-founder': 'secondary',
  'R&D': 'outline',
  Support: 'outline',
} as const

const statusColors = {
  Active: 'text-green-500',
  Paused: 'text-yellow-500',
  Completed: 'text-blue-500',
  'R&D': 'text-purple-500',
  Live: 'text-blue-500',
} as const

export default function VenturesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Entrepreneurial Journey"
          title="Ventures"
          description="Building and scaling ventures across entertainment, e-commerce, events, and B2B SaaS—from concept to execution"
          className="mb-12"
        />

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <ScrollReveal key={venture.id} className="h-full">
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <Card className="h-full flex flex-col hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 hover:border-primary/50 backdrop-blur-sm bg-card/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-2xl">{venture.name}</CardTitle>
                          <Badge variant={badgeVariants[venture.badge] as any}>
                            {venture.badge}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground">{venture.role}</p>
                          <span className="text-muted-foreground">•</span>
                          <p className={`text-sm font-medium ${statusColors[venture.status]}`}>
                            {venture.status}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">{venture.year}</p>
                      </div>
                      {venture.logo && (
                        <motion.div 
                          className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                          }}
                        >
                          <Image
                            src={venture.logo}
                            alt={`${venture.name} logo`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </motion.div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col space-y-4">
                    <p className="text-muted-foreground">{venture.description}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 gap-2">
                      {venture.highlights.map((highlight, i) => (
                        <div 
                          key={i} 
                          className="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <span className="text-muted-foreground">{highlight.label}:</span>
                          <span className="font-medium">{highlight.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <TagList tags={venture.tags} />

                    {/* Links */}
                    {venture.links && (
                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {venture.links.caseStudy && (
                          <Button variant="gradient" size="sm" asChild>
                            <Link href={venture.links.caseStudy}>
                              Read Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {venture.links.website && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={venture.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Site
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {venture.links.demo && (
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={venture.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Demo
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
