'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function AnimatedLink({ href, children, className, external = false }: AnimatedLinkProps) {
  const Component = external ? 'a' : Link
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Component
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-200',
        className
      )}
      {...externalProps}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Component>
  )
}
