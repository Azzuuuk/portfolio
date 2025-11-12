import Link from "next/link"
import { motion } from "framer-motion"

export default function ClickPill({ href, label = "Click me" }: { href: string; label?: string }) {
  if (!href) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-3 right-3 md:top-4 md:right-4 z-10"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200"
      >
        {label} ↗
      </Link>
    </motion.div>
  )
}
