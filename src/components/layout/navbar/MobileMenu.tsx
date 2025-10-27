'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  navigation: Array<{
    name: string
    href: string
    dropdown?: boolean
    megaMenu?: any
  }>
  pathname: string
}

export default function MobileMenu({ isOpen, setIsOpen, navigation, pathname }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    }
  }

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    })
  }

  return (
    <motion.div
      className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 lg:hidden"
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contact Info in Header */}
        <div className="space-y-2 text-sm text-white/90">
          <a href="tel:+251111234567" className="flex items-center space-x-2 hover:text-white">
            <Phone className="w-4 h-4" />
            <span>+251 11 123 4567</span>
          </a>
          <a href="mailto:info@bishoftu-automotive.com" className="flex items-center space-x-2 hover:text-white">
            <Mail className="w-4 h-4" />
            <span>info@bishoftu-automotive.com</span>
          </a>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="overflow-y-auto h-[calc(100%-280px)] py-6">
        {navigation.map((item, index) => (
          <motion.div
            key={item.name}
            custom={index}
            variants={itemVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="border-b border-secondary-100"
          >
            {item.dropdown && item.megaMenu ? (
              <>
                <button
                  onClick={() => toggleExpanded(item.name)}
                  className={cn(
                    "w-full px-6 py-4 flex items-center justify-between text-left transition-colors",
                    pathname === item.href
                      ? "bg-primary-50 text-primary-600"
                      : "text-secondary-800 hover:bg-secondary-50"
                  )}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      expandedItems.includes(item.name) && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {expandedItems.includes(item.name) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-secondary-50 overflow-hidden"
                    >
                      {item.megaMenu.sections.map((section: any) => (
                        <div key={section.title} className="px-6 py-4">
                          <h4 className="font-semibold text-secondary-700 mb-3 text-sm uppercase tracking-wider">
                            {section.title}
                          </h4>
                          <div className="space-y-2">
                            {section.items.map((subItem: any) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-6 py-4 font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-600 border-l-4 border-primary-600"
                    : "text-secondary-800 hover:bg-secondary-50"
                )}
              >
                {item.name}
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-secondary-100">
        <Link
          href="/quote"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}