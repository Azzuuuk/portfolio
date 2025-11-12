'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // More evident opacity transition - fuller range, smoother curves
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [0, 0.3, 1, 1, 0.3, 0]
  )
  
  // More dramatic vertical movement - larger distance, more noticeable
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [100, 40, 0, 0, -40, -100]
  )
  
  // More pronounced scale effect for depth
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [0.85, 0.92, 1, 1, 0.92, 0.85]
  )
  
  // Subtle rotation for extra creativity
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [10, 5, 0, 0, -5, -10]
  )
  
  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        y, 
        scale,
        rotateX,
        transformPerspective: 1200,
        willChange: 'transform, opacity'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
