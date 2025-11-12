'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealSkillProps {
  children: ReactNode
  className?: string
  index: number
}

export function ScrollRevealSkill({ children, className = '', index }: ScrollRevealSkillProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Staggered wave effect - each skill category enters at different times
  const delay = index * 0.15
  
  // Opacity with stagger
  const opacity = useTransform(
    scrollYProgress,
    [0 + delay, 0.15 + delay, 0.7, 0.85],
    [0, 1, 1, 0]
  )
  
  // Diagonal slide-in effect (different from cards)
  const x = useTransform(
    scrollYProgress,
    [0 + delay, 0.15 + delay, 0.7, 0.85],
    [60, 0, 0, -60]
  )
  
  const y = useTransform(
    scrollYProgress,
    [0 + delay, 0.15 + delay, 0.7, 0.85],
    [60, 0, 0, -60]
  )
  
  // Rotation for extra flair
  const rotate = useTransform(
    scrollYProgress,
    [0 + delay, 0.15 + delay, 0.7, 0.85],
    [8, 0, 0, -8]
  )
  
  // Scale effect
  const scale = useTransform(
    scrollYProgress,
    [0 + delay, 0.15 + delay, 0.7, 0.85],
    [0.8, 1, 1, 0.8]
  )
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        x, 
        y,
        rotate,
        scale,
        transformPerspective: 1000,
        willChange: 'transform, opacity'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
