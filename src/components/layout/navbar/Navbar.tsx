'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Gauge,
  Train,
  Wrench,
  Users,
  Award,
  Briefcase
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import MegaMenu from './MegaMenu'

// Navigation Items
const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
    dropdown: true,
    megaMenu: {
      sections: [
        {
          title: 'Company',
          icon: <Briefcase className="w-5 h-5" />,
          items: [
            { name: 'Our Story', href: '/about/story', description: 'Learn about our journey' },
            { name: 'Mission & Vision', href: '/about/mission', description: 'Our goals and aspirations' },
            { name: 'Leadership Team', href: '/about/team', description: 'Meet our executives' },
            { name: 'History', href: '/about/history', description: '50+ years of excellence' },
          ]
        },
        {
          title: 'Why Choose Us',
          icon: <Award className="w-5 h-5" />,
          items: [
            { name: 'Our Values', href: '/about/values', description: 'What drives us forward' },
            { name: 'Certifications', href: '/about/certifications', description: 'Quality standards' },
            { name: 'Awards', href: '/about/awards', description: 'Recognition & achievements' },
            { name: 'Partners', href: '/about/partners', description: 'Strategic partnerships' },
          ]
        }
      ],
      featured: {
        title: 'Featured Story',
        image: '/images/featured-about.jpg',
        description: 'Celebrating 50 years of automotive excellence in Ethiopia',
        link: '/about/anniversary'
      }
    }
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: true,
    megaMenu: {
      sections: [
        {
          title: 'Automotive',
          icon: <Gauge className="w-5 h-5" />,
          items: [
            { name: 'Manufacturing', href: '/services/manufacturing', description: 'State-of-the-art production' },
            { name: 'Assembly', href: '/services/assembly', description: 'Precision assembly lines' },
            { name: 'Maintenance', href: '/services/maintenance', description: 'Expert maintenance services' },
            { name: 'Custom Solutions', href: '/services/custom', description: 'Tailored to your needs' },
          ]
        },
        {
          title: 'Locomotive',
          icon: <Train className="w-5 h-5" />,
          items: [
            { name: 'Train Manufacturing', href: '/services/trains', description: 'Modern rail solutions' },
            { name: 'Parts & Components', href: '/services/parts', description: 'Quality spare parts' },
            { name: 'Refurbishment', href: '/services/refurbishment', description: 'Restoration services' },
            { name: 'Technical Support', href: '/services/support', description: '24/7 assistance' },
          ]
        }
      ],
      featured: {
        title: 'New Service Launch',
        image: '/images/featured-service.jpg',
        description: 'Introducing Electric Vehicle Assembly Line',
        link: '/services/ev-assembly'
      }
    }
  },
  {
    name: 'Products',
    href: '/products',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // Handle scroll behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null)
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Top Bar - Hidden on scroll */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hidden ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "hidden lg:block w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white/90 py-2 text-sm",
          "border-b border-white/10"
        )}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+251111234567" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+251 11 123 4567</span>
            </a>
            <a href="mailto:info@bishoftu-automotive.com" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@bishoftu-automotive.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Bishoftu, Ethiopia</span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed w-full z-50 transition-all duration-500",
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3 lg:top-0" 
            : "bg-white/80 backdrop-blur-md py-4 lg:top-10",
          hidden && "lg:top-0"
        )}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo scrolled={scrolled} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-1 group",
                        pathname === item.href 
                          ? "text-primary-600" 
                          : "text-secondary-700 hover:text-primary-600"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                      )}
                      
                      {/* Hover Effect */}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Active Indicator */}
                      {pathname === item.href && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", bounce: 0.25 }}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Mega Menu */}
                  {item.dropdown && item.megaMenu && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <MegaMenu megaMenu={item.megaMenu} />
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <Link
                href="/quote"
                className="relative group px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-accent-orange to-primary-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center space-x-2">
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-600"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-orange"
          style={{
            width: '100%',
            scaleX: 0,
            transformOrigin: 'left'
          }}
          animate={{
            scaleX: scrolled ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        navigation={navigation}
        pathname={pathname}
      />

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}