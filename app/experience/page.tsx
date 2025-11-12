'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeader } from '@/components/section-header'
import { experiences } from '@/lib/data'
import { cn } from '@/lib/utils'

const filters = ['All', 'Strategy', 'Partnerships', 'Tech', 'Ops'] as const
type Filter = (typeof filters)[number]

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filteredExperiences = experiences.filter(
    (exp) => activeFilter === 'All' || exp.type === activeFilter
  )

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Experience"
          description="From strategy consulting to partnerships and venture building—hands-on execution across diverse markets and functions"
          className="mb-12"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeFilter === filter
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-2xl">{exp.company}</CardTitle>
                        <div className="flex gap-2">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        <strong>{exp.role}</strong> | {exp.location}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">{exp.dateRange}</p>
                    </div>
                    {exp.logo && (
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-muted-foreground text-center">
                          Logo
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="mr-3 text-accent text-lg leading-tight">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No experiences found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
