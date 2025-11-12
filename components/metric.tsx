'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MetricProps {
  label: string
  value: string
  animated?: boolean
  className?: string
}

export function Metric({ label, value, animated = false, className }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  
  // Extract numeric value for animation
  const numericValue = animated ? parseInt(value.replace(/[^\d]/g, '')) : 0
  const suffix = animated ? value.replace(/[\d,]/g, '') : value

  useEffect(() => {
    if (animated && inView && numericValue > 0) {
      let start = 0
      const duration = 2000
      const increment = numericValue / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [inView, animated, numericValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn('text-center', className)}
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {animated ? `${count.toLocaleString()}${suffix}` : value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

interface MetricGroupProps {
  metrics: MetricProps[]
  className?: string
}

export function MetricGroup({ metrics, className }: MetricGroupProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-8', className)}>
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </div>
  )
}
