// src/components/services/ServiceHero.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Search,
  Wrench,
  Truck,
  HeadphonesIcon,
  Package,
  GraduationCap,
  CreditCard,
  ChevronDown,
  ArrowRight,
  Clock,
  Shield,
  Star
} from 'lucide-react'
import Link from 'next/link'

const quickServices = [
  { icon: Wrench, label: 'Manufacturing', color: 'bg-primary-500', href: '#manufacturing' },
  { icon: Truck, label: 'Maintenance', color: 'bg-accent-orange', href: '#maintenance' },
  { icon: HeadphonesIcon, label: 'Support', color: 'bg-accent-green', href: '#support' },
  { icon: Package, label: 'Parts Supply', color: 'bg-purple-500', href: '#parts' },
  { icon: GraduationCap, label: 'Training', color: 'bg-blue-500', href: '#training' },
  { icon: CreditCard, label: 'Financing', color: 'bg-indigo-500', href: '#financing' },
]

const serviceHighlights = [
  { icon: Clock, text: '24/7 Support Available' },
  { icon: Shield, text: '5-Year Warranty' },
  { icon: Star, text: '98% Customer Satisfaction' },
]

export default function ServiceHero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      })

      gsap.from('.quick-service-card', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.8
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Implement search logic here
    if (query.length > 2) {
      // Mock search results
      setSearchResults(['Maintenance Service', 'Repair Service', 'Parts Replacement'])
    } else {
      setSearchResults([])
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services-grid')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="service-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
                <line x1="25" y1="25" x2="50" y2="25" stroke="white" strokeWidth="1" />
                <line x1="25" y1="25" x2="25" y2="50" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-grid)" />
          </svg>
        </div>

        {/* Floating Icons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 6 === 0 && <Wrench className="w-full h-full" />}
            {i % 6 === 1 && <Truck className="w-full h-full" />}
            {i % 6 === 2 && <Package className="w-full h-full" />}
            {i % 6 === 3 && <Shield className="w-full h-full" />}
            {i % 6 === 4 && <Star className="w-full h-full" />}
            {i % 6 === 5 && <Clock className="w-full h-full" />}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white py-20">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content flex items-center justify-center gap-2 text-sm text-secondary-300 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Services</span>
        </motion.nav>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="hero-content inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
          >
            <Wrench className="w-5 h-5 text-accent-orange" />
            <span className="text-sm font-semibold">Comprehensive Service Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="hero-content heading-1 mb-6"
          >
            Expert Services for{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-orange to-accent-green bg-clip-text text-transparent">
              Every Need
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-content text-xl md:text-2xl text-secondary-300 mb-12 max-w-3xl mx-auto"
          >
            From manufacturing to maintenance, parts supply to technical support - 
            we provide end-to-end solutions to keep your fleet running at peak performance.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="hero-content max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-secondary-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for services (e.g., maintenance, parts, repair...)"
                className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder:text-secondary-400 focus:outline-none focus:border-primary-400 transition-colors"
              />

              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      className="w-full px-6 py-3 text-left text-secondary-900 hover:bg-primary-50 transition-colors"
                    >
                      {result}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            className="hero-content flex flex-wrap items-center justify-center gap-8 mb-12"
          >
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <highlight.icon className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-sm font-semibold">{highlight.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick Service Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {quickServices.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="quick-service-card group"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-semibold">{service.label}</div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-content flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#services-grid"
              onClick={(e) => {
                e.preventDefault()
                scrollToServices()
              }}
              className="btn-primary bg-white text-primary-900 hover:bg-secondary-100 inline-flex items-center gap-2"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#booking"
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              Book a Service
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToServices}
          className="hero-content absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}