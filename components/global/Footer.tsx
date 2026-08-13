'use client'

import Link from 'next/link'
import { FiInstagram, FiFacebook, FiTwitter, FiSend } from 'react-icons/fi'
import { FOOTER_COLUMNS, SOCIAL_LINKS, BRAND } from '@/lib'

const iconMap = {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiSend,
}

// ✅ Named export — EXACTLY yeh chahiye
export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-serif font-semibold tracking-wider mb-4">
              {BRAND.name}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mt-2">
              {BRAND.description}
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Social
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="text-lg" />}
                      {social.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">{BRAND.copyright}</p>
          <p className="text-sm text-white/50">{BRAND.tagline}</p>
        </div>
      </div>
    </footer>
  )
}