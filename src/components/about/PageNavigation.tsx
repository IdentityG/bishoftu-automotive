// src/components/about/PageNavigation.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Calendar, 
  Heart, 
  Building2, 
  TrendingUp,
  Lightbulb
} from 'lucide-react'

const sections = [
  { id: 'company-overview', label: 'Overview', icon: Building2 },
  { id: 'timeline', label: 'Our Journey', icon: Calendar },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'culture', label: 'Culture', icon: Heart },
  { id: 'facilities', label: 'Facilities', icon: Building2 },
  { id: 'stats', label: 'Statistics', icon: TrendingUp },
  { id: 'innovation', label: 'Innovation', icon: Lightbulb },
]

export default function PageNavigation() {
  const [activeSection, setActiveSection] = useState('company-overview')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 500)

      // Update active section
      const sectionElements = sections.map(s => 
        document.getElementById(s.id)
      )

      const currentSection = sectionElements.find(el => {
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!isVisible) return null

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-secondary-200">
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                group flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all
                ${activeSection === section.id 
                  ? 'bg-primary-500 text-white' 
                  : 'hover:bg-secondary-100 text-secondary-700'
                }
              `}
            >
              <section.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}