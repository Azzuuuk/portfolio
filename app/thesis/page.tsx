'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/section-header'
import { TagList } from '@/components/tag'
import { theses } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function ThesisPage() {
  const [selectedThesis, setSelectedThesis] = useState<string | null>(null)

  const activeThesis = selectedThesis
    ? theses.find((t) => t.slug === selectedThesis)
    : null

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Market Perspectives"
          title="Theses"
          description="Curated market theses and insights across entertainment, SaaS, wellness, and emerging business models"
          className="mb-12"
        />

        {/* Thesis Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theses.map((thesis, index) => (
            <motion.div
              key={thesis.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedThesis(thesis.slug)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline">{thesis.category}</Badge>
                    <FileText className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{thesis.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {new Date(thesis.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <p className="text-muted-foreground text-sm flex-1">{thesis.abstract}</p>
                  <TagList tags={thesis.tags} />
                  <Button variant="ghost" size="sm" className="w-full mt-auto">
                    Read Full Thesis
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeThesis && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedThesis(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            <Card>
              <CardHeader className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedThesis(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
                <Badge variant="outline" className="w-fit mb-2">
                  {activeThesis.category}
                </Badge>
                <CardTitle className="text-3xl pr-12">{activeThesis.title}</CardTitle>
                <CardDescription>
                  Published{' '}
                  {new Date(activeThesis.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeThesis.abstract}
                  </p>
                </div>

                <TagList tags={activeThesis.tags} />

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Market Landscape</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    [Full thesis content would be expanded here with detailed market analysis,
                    competitive landscape, key drivers, risks, and investment thesis]
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Key Drivers</h3>
                  <ul className="space-y-2">
                    <li className="text-muted-foreground flex items-start">
                      <span className="mr-3 text-accent text-lg leading-tight">•</span>
                      <span>
                        Market tailwinds and structural shifts enabling category growth
                      </span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="mr-3 text-accent text-lg leading-tight">•</span>
                      <span>
                        Technology enablers and distribution advantages emerging in this space
                      </span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="mr-3 text-accent text-lg leading-tight">•</span>
                      <span>Customer behavior changes and unmet needs driving demand</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Investment Considerations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    [Detailed analysis of key metrics, business model viability, competitive
                    moats, and risk factors would be included in the full thesis document]
                  </p>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    This is a sample thesis structure. Full theses include detailed market sizing,
                    competitive analysis, financial projections, and strategic recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  )
}
