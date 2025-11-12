import Link from 'next/link'
import { Phone, Linkedin, Mail } from 'lucide-react'
import { siteMetadata } from '@/lib/seo'

const socialLinks = [
  { name: 'Email', href: `mailto:${siteMetadata.author.email}`, icon: Mail },
  { name: 'LinkedIn', href: siteMetadata.author.linkedin, icon: Linkedin },
  { name: 'Phone', href: 'tel:+34687290509', icon: Phone },
]

const footerLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <span className="text-lg font-bold gradient-text">AK</span>
              </div>
              <span className="font-semibold text-lg">Azaan Khan</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building ventures at the intersection of strategy, product, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Built with Next.js, Tailwind, and ❤️. © {currentYear} Azaan Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
