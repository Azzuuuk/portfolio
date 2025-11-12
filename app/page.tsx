'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, Linkedin, Phone, ExternalLink, Sparkles, Briefcase, Code2, Gamepad2, Lightbulb, Rocket, LineChart, Camera, Dumbbell, Users } from 'lucide-react'
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
  'Business & Strategy': [
    'Venture Strategy',
    'Market Analysis',
    'Business Development',
    'Partnership Management',
    'Go-to-Market Strategy',
    'KPI Dashboards',
  ],
  'Tech & Tools': [
    'React/Next.js',
    'Firebase',
    'Power BI',
    'SQL',
    'CRM/ERP',
    'Analytics',
  ],
  'AI & Innovation': [
    'AI Strategy',
    'Prompt Engineering',
    'AI Product Development',
    'Machine Learning Applications',
    'AI-Powered Automation',
    'Generative AI',
  ],
  'Creative & Leadership': [
    'Team Building',
    'Event Production',
    'Content Strategy',
    'Stakeholder Management',
    'Process Optimization',
    'Innovation',
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
            <Icon className="w-20 h-20 text-neutral-600/20" />
          </motion.div>
        ))}
      </div>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Headshot */}
            <motion.div variants={fadeInUp} className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float shadow-2xl ring-4 ring-[#FF8833]/20">
                  <Image
                    src="/azaanimage.JPG"
                    alt="Azaan Khan"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] opacity-20 blur-3xl -z-10" />
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div variants={fadeInUp} className="space-y-6 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
                <span className="gradient-text">Azaan Khan</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
                I&apos;m Azaan Khan, a business innovation professional passionate about building and scaling ventures at the intersection of strategy, creativity, and technology. With hands-on experience across growth, partnerships, and digital transformation at companies like Mars, Deloitte, and Wellhub, I&apos;ve also founded Blyza Entertainment, a multi-vertical startup combining gaming, SaaS, and live experiences. My work blends entrepreneurial vision with data-driven execution, driven by one goal: to build impactful businesses and evolve into a world-class entrepreneur and venture operator.
              </p>

              <p className="text-base md:text-lg italic text-neutral-400 border-l-4 border-[#FF8833] pl-4">
                &quot;Be Unrealistic. Be Obsessed.&quot;
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] hover:opacity-90 text-white shadow-lg hover:shadow-2xl transition-all"
                  asChild
                >
                  <a href="#experience">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View Experience
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 hover:border-[#FF8833] backdrop-blur-md bg-white/5 hover:bg-white/10"
                  asChild
                >
                  <a href="#ventures">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore Ventures
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8833]/20 to-[#CB7AE1]/20 border border-[#FF8833]/30 mb-6">
              <Briefcase className="w-4 h-4 text-[#FF8833]" />
              <span className="text-sm font-semibold text-neutral-200">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Experience
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              From strategy consulting to partnerships—hands-on execution across diverse markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} className="h-full">
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="h-full"
                >
                  <Card className="h-full card-glass hover:border-[#FF8833]/50 transition-all duration-300 group overflow-hidden relative">
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8833]/0 via-[#CB7AE1]/0 to-[#FF8833]/0 group-hover:from-[#FF8833]/5 group-hover:via-[#CB7AE1]/5 group-hover:to-[#FF8833]/5 transition-all duration-500" />
                    
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <CardTitle className="text-2xl group-hover:text-[#FF8833] transition-colors">
                            {exp.company}
                          </CardTitle>
                          <CardDescription className="text-neutral-300 font-medium">
                            {exp.role}
                          </CardDescription>
                          <p className="text-sm text-neutral-400">{exp.dateRange}</p>
                        </div>
                        {exp.logo && (
                          <motion.div 
                            className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                            whileHover={{ 
                              scale: 1.05,
                              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                            }}
                          >
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={64}
                              height={64}
                              className="object-cover w-full h-full"
                            />
                          </motion.div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li 
                            key={i} 
                            className="text-neutral-300 flex items-start text-sm"
                          >
                            <span className="mr-3 text-[#FF8833] text-lg leading-tight">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 flex-wrap mt-4">
                        {exp.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-gradient-to-r from-[#FF8833]/30 to-[#CB7AE1]/30 border border-[#FF8833]/50 text-white font-medium hover:from-[#FF8833]/40 hover:to-[#CB7AE1]/40 transition-all"
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
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section id="ventures" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CB7AE1]/20 to-[#FF8833]/20 border border-[#CB7AE1]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#CB7AE1]" />
              <span className="text-sm font-semibold text-neutral-200">Entrepreneurial Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Ventures
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Building and scaling ventures across entertainment, e-commerce, events, and B2B SaaS
            </p>
          </motion.div>

          {/* Featured Venture - Hero Style */}
          {ventures[0] && (
            <ScrollReveal className="mb-12">
              <motion.div
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF8833]/10 via-[#CB7AE1]/10 to-[#FF8833]/5 border-2 border-[#FF8833]/30 backdrop-blur-md p-8 md:p-12"
              >
                {/* Click Pill */}
                {ventures[0].clickUrl && (
                  <ClickPill href={ventures[0].clickUrl} label={ventures[0].clickLabel} />
                )}

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8833]/5 to-[#CB7AE1]/5 animate-pulse" />
                
                <div className="relative grid md:grid-cols-2 gap-8 items-start">
                  {/* Left: Content */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      {ventures[0].logo && (
                        <motion.div 
                          className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-[#FF8833]/50"
                          whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                          <Image
                            src={ventures[0].logo}
                            alt={`${ventures[0].name} logo`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </motion.div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] text-white text-sm px-4 py-1">
                            ⭐ Featured
                          </Badge>
                          <Badge variant="outline" className="border-[#CB7AE1]/50 text-neutral-200">
                            {ventures[0].badge}
                          </Badge>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                          {ventures[0].name}
                        </h3>
                        <p className="text-neutral-300 font-medium">
                          {ventures[0].role} · {ventures[0].year}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-200 text-lg leading-relaxed">
                      {ventures[0].summary}
                    </p>

                    {/* Vertical Statuses for Blyza */}
                    {ventures[0].verticalStatuses && ventures[0].verticalStatuses.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {ventures[0].verticalStatuses.map((vertical) => (
                          <span
                            key={vertical.name}
                            className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-white/15 to-white/10 border border-white/30 text-white font-medium backdrop-blur-sm"
                          >
                            {vertical.name}: <span className="text-[#FF8833] font-semibold">{vertical.status}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {ventures[0].tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gradient-to-r from-[#FF8833]/70 to-[#CB7AE1]/70 border-2 border-white/40 text-white font-bold px-4 py-1.5 text-sm hover:from-[#FF8833]/80 hover:to-[#CB7AE1]/80 transition-all shadow-lg"
                        >
                          {tag}
                        </Badge>
                      ))}
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

                  {/* Right: Highlights */}
                  <div className="grid grid-cols-1 gap-4">
                    {ventures[0].highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-[#CB7AE1]/50 transition-colors"
                      >
                        <p className="text-xs uppercase tracking-wider text-[#CB7AE1] font-semibold mb-2">
                          {h.label}
                        </p>
                        <p className="text-neutral-100 font-medium leading-relaxed">
                          {h.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          )}

          {/* Rest of Ventures - Timeline/List Style */}
          <div className="space-y-6 ml-8">
            {ventures.slice(1).map((venture, index) => (
              <ScrollReveal key={venture.id}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  {/* Timeline connector line */}
                  <div className="absolute -left-8 top-[40px] bottom-[-24px] w-0.5 bg-gradient-to-b from-[#CB7AE1]/30 to-transparent" />
                  
                  {/* Timeline dot */}
                  <div className="absolute -left-[38px] top-[32px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] ring-4 ring-neutral-900" />
                  
                  <div className="relative flex gap-6 p-6 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-900/30 border border-neutral-800 hover:border-[#CB7AE1]/50 transition-all duration-300 backdrop-blur-sm">
                    {/* Click Pill */}
                    {venture.clickUrl && (
                      <ClickPill href={venture.clickUrl} label={venture.clickLabel} />
                    )}

                    {/* Logo */}
                    <div className="flex-shrink-0 relative">
                      {venture.logo && (
                        <motion.div 
                          className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-neutral-800 group-hover:ring-[#CB7AE1]/50 transition-all"
                          whileHover={{ scale: 1.05 }}
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

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h4 className="text-xl font-bold text-neutral-100 group-hover:text-[#FF8833] transition-colors">
                              {venture.name}
                            </h4>
                            <Badge variant="outline" className="border-[#CB7AE1]/30 text-neutral-300 text-xs">
                              {venture.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-neutral-400 mb-3">
                            {venture.role} · {venture.year}
                          </p>
                        </div>
                      </div>

                      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                        {venture.summary}
                      </p>

                      {/* Compact highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        {venture.highlights.map((h, i) => (
                          <div key={i} className="text-xs">
                            <span className="text-[#CB7AE1] font-semibold">{h.label}:</span>
                            <span className="text-neutral-400 ml-1">{h.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags and link */}
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex gap-2 flex-wrap">
                          {venture.tags.slice(0, 4).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-[#CB7AE1]/50 bg-[#CB7AE1]/10 text-white text-xs font-medium hover:border-[#CB7AE1] hover:bg-[#CB7AE1]/20 transition-all"
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

      {/* SKILLS SECTION */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8833]/20 to-[#CB7AE1]/20 border border-[#FF8833]/30 mb-6">
              <Code2 className="w-4 h-4 text-[#FF8833]" />
              <span className="text-sm font-semibold text-neutral-200">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Cross-functional expertise spanning business, technology, and creative leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <ScrollRevealSkill key={category} index={index}>
                <Card className="card-glass hover:border-[#FF8833]/50 transition-all duration-500 h-full group">
                  <CardHeader>
                    <CardTitle className="text-xl text-neutral-100 group-hover:text-[#FF8833] transition-colors">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.1, y: -3 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 py-2 rounded-full bg-gradient-to-r from-[#FF8833]/30 to-[#CB7AE1]/30 border border-[#FF8833]/50 text-white text-sm font-medium hover:from-[#FF8833]/40 hover:to-[#CB7AE1]/40 hover:shadow-lg hover:shadow-[#FF8833]/30 transition-all cursor-default"
                        >
                          {skill}
                        </motion.div>
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
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6">
              Let&apos;s Build Something Unreal
            </h2>
            <p className="text-neutral-300 text-xl max-w-2xl mx-auto">
              Open to building high-impact products, teams, and ecosystems across venture, strategy, and innovation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Contact Info */}
            <motion.div variants={popIn} className="space-y-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-neutral-100">Get in Touch</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`mailto:${siteMetadata.author.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF8833]/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-100">Email</p>
                      <p className="text-sm text-neutral-400">{siteMetadata.author.email}</p>
                    </div>
                  </a>

                  <a
                    href={siteMetadata.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CB7AE1]/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#CB7AE1] to-[#FF8833] flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-100">LinkedIn</p>
                      <p className="text-sm text-neutral-400">Connect professionally</p>
                    </div>
                  </a>

                  <a
                    href="tel:+34687290509"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF8833]/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF8833] to-[#CB7AE1] flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-100">Phone</p>
                      <p className="text-sm text-neutral-400">+34 687 290 509</p>
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
