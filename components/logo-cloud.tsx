'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoCloudProps {
  logos: Array<{
    name: string
    src: string
    alt: string
  }>
  className?: string
}

export function LogoCloud({ logos, className }: LogoCloudProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center', className)}>
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={60}
            className="object-contain opacity-50 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      ))}
    </div>
  )
}
