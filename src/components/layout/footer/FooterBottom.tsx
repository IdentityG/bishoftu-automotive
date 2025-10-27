'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Shield, FileText, Cookie } from 'lucide-react'

const bottomLinks = [
  { name: 'Privacy Policy', href: '/privacy', icon: Shield },
  { name: 'Terms of Service', href: '/terms', icon: FileText },
  { name: 'Cookie Policy', href: '/cookies', icon: Cookie },
  { name: 'Sitemap', href: '/sitemap', icon: Globe },
]

export default function FooterBottom() {
  return (
    <div className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="text-sm text-white/60"
          >
            <p>
              © {new Date().getFullYear()} Bishoftu Automotive & Locomotive Industry. All rights reserved.
            </p>
            <p className="mt-1 text-xs">
              Proudly serving Ethiopia and beyond since 1973
            </p>
          </motion.div>

          {/* Bottom Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {bottomLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center space-x-1.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <link.icon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Language Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-6 pt-6 border-t border-white/10 flex justify-center"
        >
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-white/70 hover:text-white">
            <Globe className="w-4 h-4" />
            <span>English</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Final Animation - Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-orange to-primary-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}