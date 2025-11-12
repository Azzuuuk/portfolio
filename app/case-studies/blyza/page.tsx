'use client'

import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TagList } from '@/components/tag'

export default function BlyzaCaseStudyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline">Case Study</Badge>
              <Badge variant="success">Active Venture</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-heading gradient-text">
              Blyza Entertainment
            </h1>

            <p className="text-xl text-muted-foreground">
              Building a Multi-Vertical Entertainment Ecosystem from Gaming to Live Events
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                November 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </div>
            </div>

            <TagList
              tags={['Entertainment', 'SaaS', 'Gaming', 'Events', 'B2B', 'Product']}
            />
          </div>

          {/* Hero Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl mb-12 flex items-center justify-center">
            <p className="text-muted-foreground">Hero Image Placeholder</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Context</h2>
            <p className="text-muted-foreground leading-relaxed">
              Blyza Entertainment began in 2020 as an exploration into digital entertainment
              experiences. What started as a simple online party game platform evolved into a
              multi-vertical entertainment ecosystem spanning three distinct but complementary
              business lines.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              The entertainment industry faced several structural challenges:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Fragmentation:</strong> Online gaming, live events, and corporate
                entertainment operated in silos with little cross-pollination
              </li>
              <li>
                <strong>Low Engagement Retention:</strong> Single-use entertainment products
                struggled to build lasting audience relationships
              </li>
              <li>
                <strong>Limited Monetization:</strong> Traditional models relied heavily on ad
                revenue or one-time ticket sales
              </li>
              <li>
                <strong>Corporate Team-Building Gap:</strong> B2B market lacked engaging,
                scalable, AI-powered solutions
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Hypothesis</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believed that building a unified entertainment ecosystem with multiple
              touchpoints would:
            </p>
            <ol className="space-y-2 text-muted-foreground">
              <li>Create network effects across business lines</li>
              <li>Increase customer lifetime value through cross-vertical engagement</li>
              <li>Enable unique sponsorship and partnership opportunities</li>
              <li>Build a defensible moat through integrated data and content IP</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-4">Market Landscape</h2>
            <p className="text-muted-foreground leading-relaxed">
              The addressable market spanned three segments:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Online Gaming:</strong> $200B+ global market with growth driven by
                casual/social gaming
              </li>
              <li>
                <strong>Live Entertainment:</strong> $30B+ experiential entertainment market in
                recovery post-pandemic
              </li>
              <li>
                <strong>Corporate HRTech:</strong> $25B+ market for engagement and team-building
                solutions
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Strategy</h2>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Go-to-Market</h3>
            <p className="text-muted-foreground leading-relaxed">
              We pursued a phased rollout strategy:
            </p>
            <ol className="space-y-2 text-muted-foreground">
              <li>
                <strong>Phase 1: Digital Foundation</strong> — Launch PlayBlyza.com to validate
                product-market fit and build user base
              </li>
              <li>
                <strong>Phase 2: IRL Extension</strong> — Introduce Blyza Live physical venues to
                capture experiential market
              </li>
              <li>
                <strong>Phase 3: B2B SaaS</strong> — Develop Jeggy to monetize corporate segment
                with AI-powered team-building
              </li>
            </ol>

            <h3 className="text-2xl font-semibold mt-8 mb-3">Partnerships</h3>
            <p className="text-muted-foreground leading-relaxed">
              Key strategic partnerships included event venues, corporate HR departments, and
              content creators to drive distribution and credibility.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3">Product</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Tech Stack:</strong> React/Next.js frontend, Firebase/Firestore backend,
              Vercel deployment for speed and scalability. Real-time WebSockets for multiplayer
              gaming, AI integrations for Jeggy personalization.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Execution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Execution focused on rapid iteration and feedback loops:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>PlayBlyza.com:</strong> Launched 8 game modes, onboarded users via organic
                social, reached 30K+ games played across 90+ countries
              </li>
              <li>
                <strong>Blyza Live:</strong> Produced pilot TV-style game show events at premium
                venues in Dubai
              </li>
              <li>
                <strong>Jeggy:</strong> Built MVP with AI-driven team assessments and
                recommendation engine, tested with 5 pilot corporate clients
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Metrics</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-muted/30 p-6 rounded-xl">
                <p className="text-3xl font-bold gradient-text">30,000+</p>
                <p className="text-sm text-muted-foreground mt-2">Games Played</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-xl">
                <p className="text-3xl font-bold gradient-text">90+</p>
                <p className="text-sm text-muted-foreground mt-2">Countries Reached</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-xl">
                <p className="text-3xl font-bold gradient-text">3</p>
                <p className="text-sm text-muted-foreground mt-2">Verticals Launched</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-xl">
                <p className="text-3xl font-bold gradient-text">5</p>
                <p className="text-sm text-muted-foreground mt-2">B2B Pilot Clients (Jeggy)</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4">Learnings</h2>
            <p className="text-muted-foreground leading-relaxed">
              Key takeaways from building Blyza:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Vertical Integration Creates Value:</strong> Cross-vertical synergies were
                real—live events drove online engagement and vice versa
              </li>
              <li>
                <strong>B2B Monetization is Sticky:</strong> Jeggy showed higher margins and
                retention than B2C gaming
              </li>
              <li>
                <strong>Timing and Capital Matter:</strong> Scaling multi-vertical operations
                requires significant capital and operational bandwidth
              </li>
              <li>
                <strong>Content IP is a Moat:</strong> Proprietary game formats and show concepts
                became defensible assets
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>
            <p className="text-muted-foreground leading-relaxed">
              Blyza Entertainment continues to evolve with a focus on:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Scaling Jeggy B2B SaaS with enterprise sales motion</li>
              <li>Expanding PlayBlyza user base through paid acquisition and influencer partnerships</li>
              <li>Exploring strategic partnerships for live event production and distribution</li>
              <li>Potential fundraising to accelerate growth across all three verticals</li>
            </ul>

            <div className="border-t border-border mt-12 pt-8">
              <p className="text-sm text-muted-foreground italic">
                This case study represents a snapshot of an ongoing venture. Metrics and strategies
                continue to evolve as we scale and iterate.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Want to learn more?</h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how these learnings could apply to your venture or opportunity
            </p>
            <Button variant="gradient" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
