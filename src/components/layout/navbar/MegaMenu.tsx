'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MegaMenuProps {
  megaMenu: {
    sections: Array<{
      title: string
      icon: React.ReactNode
      items: Array<{
        name: string
        href: string
        description: string
      }>
    }>
    featured?: {
      title: string
      image: string
      description: string
      link: string
    }
  }
}

export default function MegaMenu({ megaMenu }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-screen mt-2"
    >
      <div className="relative">
        {/* Arrow */}
        <div className="absolute -top-2 left-8 w-4 h-4 bg-white rotate-45 shadow-lg" />
        
        {/* Content */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="container-custom py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Menu Sections */}
              <div className="col-span-8 grid grid-cols-2 gap-8">
                {megaMenu.sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Section Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                        {section.icon}
                      </div>
                      <h3 className="font-semibold text-secondary-900">
                        {section.title}
                      </h3>
                    </div>

                    {/* Section Items */}
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group block p-3 rounded-lg hover:bg-secondary-50 transition-all duration-200"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-secondary-900 group-hover:text-primary-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-sm text-secondary-500 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-secondary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all mt-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Featured Section */}
              {megaMenu.featured && (
                <motion.div
                  className="col-span-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={megaMenu.featured.link}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                      </div>

                      <div className="relative p-6 h-full flex flex-col">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-accent-orange/10 text-accent-orange text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                        
                        <h4 className="font-bold text-lg text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {megaMenu.featured.title}
                        </h4>
                        
                        <p className="text-sm text-secondary-600 mb-4 flex-grow">
                          {megaMenu.featured.description}
                        </p>

                        <div className="flex items-center space-x-2 text-primary-600 font-medium">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 px-8 py-4">
            <div className="container-custom flex items-center justify-between">
              <p className="text-sm text-secondary-600">
                Need help? Call us at <a href="tel:+251111234567" className="font-semibold text-primary-600 hover:text-primary-700">+251 11 123 4567</a>
              </p>
              <Link
                href="/support"
                className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center space-x-1"
              >
                <span>Support Center</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}