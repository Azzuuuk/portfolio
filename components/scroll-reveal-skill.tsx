'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealSkillProps {
  children: ReactNode
  className?: string
  index: number
}

export function ScrollRevealSkill({ children, className = '', index }: ScrollRevealSkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
