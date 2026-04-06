'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, Linkedin, Phone, ExternalLink, Sparkles, Briefcase, Code2, Gamepad2, Lightbulb, Rocket, LineChart, Camera, Dumbbell, Users, TrendingUp, Layers3, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences, ventures } from '@/lib/data'
import { siteMetadata } from '@/lib/seo'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ScrollRevealSkill } from '@/components/scroll-reveal-skill'
import ClickPill from '@/components/click-pill'

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.24, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
}

const popIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.22, ease: 'easeOut' } },
}

const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.15 } },
  whileTap: { scale: 0.98 },
}

const skills = {
  'Automation & Systems': [
    'n8n (workflow automation)',
    'Zapier (CRM + ops)',
    'LLM integrations (chatbots, internal tools)',
    'API design & integration',
    'Process automation',
  ],
  'Business & Strategy': [
    'GTM strategy (B2B partnerships)',
    'KPI dashboards (Power BI)',
    'Process optimization',
    'Market & competitive analysis',
    'Revenue operations',
    'Marketing strategy',
  ],
  'Tech & Tools': [
    'React / Next.js',
    'Firebase / Supabase',
    'SQL / data pipelines',
    'APIs & webhooks',
    'Vercel / CI/CD',
    'Video content creation',
    'Video editing',
    'Communication',
    'Public speaking',
  ],
}

// Floating background icons
const floatingIcons = [
  { Icon: Gamepad2, style: { top: '10%', left: '5%', '--t': '16s' } },
  { Icon: Lightbulb, style: { top: '20%', right: '8%', '--t': '18s' } },
  { Icon: Rocket, style: { top: '40%', left: '3%', '--t': '20s' } },
  { Icon: LineChart, style: { top: '60%', right: '10%', '--t': '15s' } },
  { Icon: Camera, style: { top: '70%', left: '7%', '--t': '22s' } },
  { Icon: Dumbbell, style: { top: '85%', right: '5%', '--t': '17s' } },
  { Icon: Code2, style: { top: '30%', right: '15%', '--t': '19s' } },
  { Icon: Users, style: { top: '50%', left: '10%', '--t': '21s' } },
]

export default function HomePage() {
  const [expandedVenture, setExpandedVenture] = useState<string | null>(null)

  return (
    <div className="relative">
      {/* Floating Background Icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map(({ Icon, style }, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={style as React.CSSProperties}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + idx * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.5,
            }}
          >
            <Icon className="w-20 h-20 text-neutral-600/10" />
          </motion.div>
        ))}
      </div>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 z-10"
      >
        <div className="absolute inset-0 -z-10 opacity-15">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-l from-[#FF8833]/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-r from-[#CB7AE1]/20 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 tracking-tight leading-tight">
                  Azaan Khan
                </h1>
                <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF8833] to-[#CB7AE1]">
                  Building Ventures, Systems, and Scalable Growth
                </p>
              </div>

              <div className="space-y-4 max-w-2xl">
                <p className="text-neutral-300 text-lg leading-relaxed">
                  I operate at the intersection of strategy, operations, and technology - building ventures, optimizing systems, and driving growth through data, execution, and AI.
                </p>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  With experience across global markets and early-stage startups, I focus on turning ideas into scalable outcomes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] hover:opacity-90 text-white transition-all"
                  asChild
                >
                  <a href="#experience">View Experience</a>
                </Button>
                <Button
                  size="lg"
                  className="bg-neutral-900 border border-neutral-700 hover:border-[#FF8833] text-neutral-100 hover:text-[#FF8833] transition-all"
                  asChild
                >
                  <a href="#ventures">View Ventures</a>
                </Button>
              </div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FF8833]/30 to-[#CB7AE1]/30 rounded-full blur-xl"></div>
                <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-2 ring-white/10">
                  <Image
                    src="/azaanimage.JPG"
                    alt="Azaan Khan"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-950/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">What I Do</h2>
            <p className="text-neutral-400 text-lg">Concrete systems and outcomes across four core areas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI & Systems',
                description: 'Leveraging AI, automation, and APIs to enhance workflows, reduce manual effort, and unlock scalable leverage.',
                icon: Cpu
              },
              {
                title: 'Project Management & Execution',
                description: 'Driving cross-functional projects from planning to delivery with clear ownership, timelines, and measurable outcomes.',
                icon: Layers3
              },
              {
                title: 'Venture Building',
                description: 'Building and scaling products across gaming, SaaS, and events - from idea to traction and monetization.',
                icon: Rocket
              },
              {
                title: 'Strategy & Growth',
                description: 'Driving market expansion, partnerships, and go-to-market execution through structured strategy and data-driven decision-making.',
                icon: TrendingUp
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-8 rounded-xl bg-neutral-900/60 border border-neutral-800/60 hover:border-[#FF8833]/30 transition-all group"
              >
                <div className="mb-4 inline-flex w-10 h-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <item.icon className="w-5 h-5 text-neutral-300 group-hover:text-[#FF8833] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-3 group-hover:text-[#FF8833] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8833]/10 border border-[#FF8833]/20 mb-6">
              <Briefcase className="w-4 h-4 text-[#FF8833]" />
              <span className="text-sm font-semibold text-neutral-200">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Experience
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Hands-on execution across partnerships, strategy, and operations in global markets
            </p>
          </motion.div>

          {/* Featured Experiences (top 3) */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {experiences.slice(0, 4).map((exp, index) => (
              <ScrollReveal key={exp.id} className="h-full">
                <motion.div
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="h-full"
                >
                  <Card className={cn(
                    "h-full card-glass transition-all duration-300 group overflow-hidden relative",
                    index < 3 ? "hover:border-[#FF8833]/40 border-neutral-700/50" : "hover:border-[#FF8833]/30"
                  )}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8833]/0 to-[#CB7AE1]/0 group-hover:from-[#FF8833]/3 group-hover:to-[#CB7AE1]/3 transition-all duration-500" />
                    
                    <CardHeader className="relative pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <CardTitle className="text-xl group-hover:text-[#FF8833] transition-colors">
                            {exp.company}
                          </CardTitle>
                          <CardDescription className="text-neutral-300 font-medium text-sm">
                            {exp.role}
                          </CardDescription>
                          <p className="text-xs text-neutral-500">{exp.dateRange} · {exp.location}</p>
                        </div>
                        {exp.logo && (
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="relative pt-0">
                      {exp.keyImpact && (
                        <div className="mb-4 p-3 rounded-lg bg-[#FF8833]/5 border border-[#FF8833]/15">
                          <p className="text-xs font-semibold text-[#FF8833] uppercase tracking-wider mb-1.5">Impact</p>
                          {exp.keyImpact.map((impact, i) => (
                            <p key={i} className="text-sm text-neutral-200 flex items-start">
                              <span className="mr-2 text-[#FF8833]">→</span>
                              <span>{impact}</span>
                            </p>
                          ))}
                        </div>
                      )}

                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, i) => (
                          <li 
                            key={i} 
                            className="text-neutral-400 flex items-start text-sm leading-relaxed"
                          >
                            <span className="mr-2 text-neutral-600 mt-1 text-xs">●</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex gap-2 flex-wrap">
                        {exp.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-neutral-700/60 text-neutral-400 text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Earlier Roles (smaller, de-emphasized) */}
          <div className="grid md:grid-cols-2 gap-4">
            {experiences.slice(4).map((exp) => (
              <ScrollReveal key={exp.id} className="h-full">
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <div className="h-full p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/40 hover:border-neutral-700/60 transition-all group">
                    <div className="flex items-start gap-3">
                      {exp.logo && (
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/5">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-neutral-200 group-hover:text-[#FF8833] transition-colors">{exp.company}</h4>
                        <p className="text-sm text-neutral-400">{exp.role}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{exp.dateRange}</p>
                        {exp.keyImpact && exp.keyImpact[0] && (
                          <p className="text-sm text-neutral-300 mt-2 flex items-start">
                            <span className="mr-1.5 text-[#FF8833]">→</span>
                            {exp.keyImpact[0]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section id="ventures" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB7AE1]/10 border border-[#CB7AE1]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#CB7AE1]" />
              <span className="text-sm font-semibold text-neutral-200">Entrepreneurial Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Ventures
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Building and scaling products across entertainment, e-commerce, and events
            </p>
          </motion.div>

          {/* Featured Venture - Blyza */}
          {ventures[0] && (
            <ScrollReveal className="mb-12">
              <motion.div
                whileHover={{ 
                  scale: 1.005,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="relative overflow-hidden rounded-2xl bg-neutral-900/60 border border-[#FF8833]/20 p-8 md:p-12 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.8)]"
              >
                {ventures[0].clickUrl && (
                  <ClickPill href={ventures[0].clickUrl} label={ventures[0].clickLabel} />
                )}
                
                <div className="relative grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      {ventures[0].logo && (
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-[#FF8833]/30">
                          <Image
                            src={ventures[0].logo}
                            alt={`${ventures[0].name} logo`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-[#FF8833]/15 text-[#FF8833] border border-[#FF8833]/25 text-xs">
                            Featured
                          </Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                          {ventures[0].name}
                        </h3>
                        <p className="text-neutral-400 text-sm">
                          {ventures[0].role} · {ventures[0].year}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-300 leading-relaxed">
                      {ventures[0].summary}
                    </p>

                    <div className="grid gap-4">
                      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <h4 className="text-sm font-semibold text-neutral-100">PlayBlyza</h4>
                          <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-[11px]">Live Product</Badge>
                        </div>
                        <p className="text-sm text-neutral-400 mb-2">
                          Social party games platform designed for casual and multiplayer experiences.
                        </p>
                        <p className="text-xs text-neutral-300 mb-3">
                          50,000+ users across 90+ countries
                        </p>
                        <Button size="sm" variant="outline" className="border-neutral-700 text-neutral-300 hover:text-[#FF8833] hover:border-[#FF8833]/40" asChild>
                          <a href="https://playblyza.com" target="_blank" rel="noopener noreferrer">Visit PlayBlyza</a>
                        </Button>
                      </div>

                      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <h4 className="text-sm font-semibold text-neutral-100">Jeggy</h4>
                          <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-[11px]">Live Product</Badge>
                        </div>
                        <p className="text-sm text-neutral-400 mb-3">
                          A social platform for gamers to track, rate, and discover games, inspired by Letterboxd.
                        </p>
                        <Button size="sm" variant="outline" className="border-neutral-700 text-neutral-300 hover:text-[#FF8833] hover:border-[#FF8833]/40" asChild>
                          <a href="https://jeggy.app" target="_blank" rel="noopener noreferrer">Visit Jeggy</a>
                        </Button>
                      </div>
                    </div>

                    {ventures[0].links?.website && (
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] hover:opacity-90 text-white"
                        asChild
                      >
                        <a href={ventures[0].links.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {ventures[0].highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#CB7AE1]/20 transition-colors"
                      >
                        <p className="text-xs uppercase tracking-wider text-[#CB7AE1] font-semibold mb-1">
                          {h.label}
                        </p>
                        <p className="text-neutral-200 text-sm leading-relaxed">
                          {h.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          )}

          {/* Rest of Ventures */}
          <div className="space-y-4 ml-8">
            {ventures.slice(1).map((venture, index) => (
              <ScrollReveal key={venture.id}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="absolute -left-8 top-[36px] bottom-[-16px] w-px bg-neutral-800" />
                  <div className="absolute -left-[35px] top-[30px] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] ring-4 ring-neutral-950" />
                  
                  <div className="relative flex gap-5 p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/60 transition-all duration-300">
                    {venture.clickUrl && (
                      <ClickPill href={venture.clickUrl} label={venture.clickLabel} />
                    )}

                    <div className="flex-shrink-0">
                      {venture.logo && (
                        <div className="w-12 h-12 rounded-lg overflow-hidden ring-1 ring-neutral-800 group-hover:ring-neutral-700 transition-all">
                          <Image
                            src={venture.logo}
                            alt={`${venture.name} logo`}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="text-lg font-bold text-neutral-200 group-hover:text-[#FF8833] transition-colors">
                              {venture.name}
                            </h4>
                            <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                              {venture.badge}
                            </Badge>
                          </div>
                          <p className="text-xs text-neutral-500">
                            {venture.role} · {venture.year}
                          </p>
                        </div>
                      </div>

                      <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                        {venture.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                        {venture.highlights.map((h, i) => (
                          <div key={i} className="text-xs">
                            <span className="text-[#CB7AE1] font-semibold">{h.label}:</span>
                            <span className="text-neutral-500 ml-1">{h.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex gap-1.5 flex-wrap">
                          {venture.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-neutral-800 text-neutral-500 text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {venture.links?.website && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[#FF8833] hover:text-[#CB7AE1] hover:bg-[#CB7AE1]/10"
                            asChild
                          >
                            <a href={venture.links.website} target="_blank" rel="noopener noreferrer">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMS & AUTOMATION PROJECTS SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">Systems & Automation Projects</h2>
            <p className="text-neutral-400 text-lg">Workflows and systems built to reduce manual work and improve execution speed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Automated Outreach System',
                description: 'n8n-based workflow automating partnership outreach, follow-ups, and lead scoring. Reduced manual sales effort by 60% while maintaining personalized messaging.',
                tags: ['n8n', 'APIs', 'Sales Ops']
              },
              {
                title: 'Internal Operations Chatbot',
                description: 'LLM-powered chatbot handling partnership queries and customer responses with contextual, dynamic replies. Saved 15+ hours/week in response time.',
                tags: ['LLM', 'Automation', 'Ops']
              },
              {
                title: 'CRM & Process Automation',
                description: 'Connected CRM, communication, and tracking systems via Zapier workflows. Eliminated 80% of manual data entry across sales and operations.',
                tags: ['Zapier', 'CRM', 'Workflows']
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-7 rounded-xl bg-neutral-900/40 border border-neutral-800/50 hover:border-[#FF8833]/25 transition-all group"
              >
                <h3 className="text-lg font-semibold text-neutral-100 mb-3 group-hover:text-[#FF8833] transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-5 text-sm">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#FF8833]/20 text-neutral-400 text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8833]/10 border border-[#FF8833]/20 mb-6">
              <Code2 className="w-4 h-4 text-[#FF8833]" />
              <span className="text-sm font-semibold text-neutral-200">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Capabilities
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Tools and methods applied across real projects and outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <ScrollRevealSkill key={category} index={index}>
                <Card className="card-glass hover:border-[#FF8833]/25 transition-all duration-500 h-full group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-neutral-100 group-hover:text-[#FF8833] transition-colors">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-neutral-300 text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollRevealSkill>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6">
              Let&apos;s Build Something That Scales
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Currently open to roles in venture, operations, and strategy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={popIn} className="space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-xl text-neutral-100">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href={`mailto:${siteMetadata.author.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/5 border border-white/5 hover:border-[#FF8833]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-200 text-sm">Email</p>
                      <p className="text-xs text-neutral-500">{siteMetadata.author.email}</p>
                    </div>
                  </a>

                  <a
                    href={siteMetadata.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/5 border border-white/5 hover:border-[#CB7AE1]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#CB7AE1] to-[#FF8833] flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-200 text-sm">LinkedIn</p>
                      <p className="text-xs text-neutral-500">Connect professionally</p>
                    </div>
                  </a>

                  <a
                    href="tel:+34687290509"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/5 border border-white/5 hover:border-[#FF8833]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-200 text-sm">Phone</p>
                      <p className="text-xs text-neutral-500">+34 687 290 509</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
