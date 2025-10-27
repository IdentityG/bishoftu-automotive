// src/components/home/IndustrySolutions.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Factory,
  Train,
  Truck,
  Building2,
  Plane,
  Ship,
  ArrowRight,
  TrendingUp,
  Users,
  Package,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import CountUp from 'react-countup'

const industries = [
  {
    id: 'railway',
    icon: Train,
    title: 'Railway & Metro',
    subtitle: 'Modern Rail Solutions',
    description: 'Comprehensive railway solutions including locomotives, signaling systems, and infrastructure.',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=Railway+Solutions',
    color: 'from-primary-500 to-primary-700',
    stats: [
      { icon: Train, value: 150, suffix: '+', label: 'Locomotives Delivered' },
      { icon: Users, value: 500, suffix: 'K', label: 'Daily Passengers' },
      { icon: TrendingUp, value: 95, suffix: '%', label: 'Uptime Rate' },
    ],
    solutions: [
      'Electric & Diesel Locomotives',
      'Metro Train Systems',
      'Railway Signaling & Control',
      'Track Maintenance Equipment',
      'Station Infrastructure',
      'Safety & Security Systems'
    ],
    caseStudies: 3,
    projects: 25
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics & Transportation',
    subtitle: 'Fleet Management Excellence',
    description: 'Advanced logistics solutions with smart fleet management and tracking systems.',
    image: 'https://placehold.co/800x600/F97316/ffffff?text=Logistics+Solutions',
    color: 'from-accent-orange to-red-600',
    stats: [
      { icon: Truck, value: 1200, suffix: '+', label: 'Vehicles in Service' },
      { icon: Package, value: 40, suffix: '%', label: 'Efficiency Gain' },
      { icon: Zap, value: 24, suffix: '/7', label: 'Support Available' },
    ],
    solutions: [
      'Heavy-Duty Trucks',
      'Cargo Trailers',
      'Fleet Management Software',
      'GPS Tracking Systems',
      'Maintenance Services',
      'Driver Training Programs'
    ],
    caseStudies: 5,
    projects: 45
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Manufacturing',
    subtitle: 'Production Line Solutions',
    description: 'Specialized equipment and vehicles for industrial parks and manufacturing facilities.',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Industrial+Solutions',
    color: 'from-accent-green to-green-700',
    stats: [
      { icon: Factory, value: 30, suffix: '+', label: 'Industrial Parks' },
      { icon: Users, value: 10, suffix: 'K+', label: 'Workers Served' },
      { icon: TrendingUp, value: 98, suffix: '%', label: 'Reliability' },
    ],
    solutions: [
      'Material Handling Equipment',
      'Industrial Vehicles',
      'Automated Guided Vehicles',
      'Safety Equipment',
      'Warehouse Solutions',
      'Custom Machinery'
    ],
    caseStudies: 4,
    projects: 32
  },
  {
    id: 'construction',
    icon: Building2,
    title: 'Construction & Mining',
    subtitle: 'Heavy Equipment Solutions',
    description: 'Robust machinery and equipment for construction and mining operations.',
    image: 'https://placehold.co/800x600/64748B/ffffff?text=Construction+Solutions',
    color: 'from-secondary-600 to-secondary-800',
    stats: [
      { icon: Building2, value: 200, suffix: '+', label: 'Projects Supported' },
      { icon: Users, value: 85, suffix: '%', label: 'Client Retention' },
      { icon: Package, value: 50, suffix: '+', label: 'Equipment Types' },
    ],
    solutions: [
      'Excavators & Loaders',
      'Dump Trucks',
      'Cranes & Lifting Equipment',
      'Mining Vehicles',
      'Site Management Systems',
      'Safety & Training'
    ],
    caseStudies: 6,
    projects: 38
  },
  {
    id: 'aviation',
    icon: Plane,
    title: 'Aviation Ground Support',
    subtitle: 'Airport Solutions',
    description: 'Ground support equipment and vehicles for airport operations.',
    image: 'https://placehold.co/800x600/2563EB/ffffff?text=Aviation+Solutions',
    color: 'from-primary-600 to-blue-800',
    stats: [
      { icon: Plane, value: 15, suffix: '+', label: 'Airports Served' },
      { icon: Package, value: 300, suffix: '+', label: 'Vehicles Deployed' },
      { icon: TrendingUp, value: 99, suffix: '%', label: 'Uptime' },
    ],
    solutions: [
      'Aircraft Tugs',
      'Baggage Handling',
      'Passenger Stairs',
      'Fuel Trucks',
      'Maintenance Equipment',
      'Ground Power Units'
    ],
    caseStudies: 2,
    projects: 18
  },
  {
    id: 'maritime',
    icon: Ship,
    title: 'Maritime & Port',
    subtitle: 'Port Logistics',
    description: 'Port equipment and cargo handling solutions for maritime operations.',
    image: 'https://placehold.co/800x600/0EA5E9/ffffff?text=Maritime+Solutions',
    color: 'from-blue-500 to-blue-700',
    stats: [
      { icon: Ship, value: 8, suffix: '+', label: 'Ports Equipped' },
      { icon: Package, value: 2, suffix: 'M', label: 'Tons Handled' },
      { icon: Zap, value: 35, suffix: '%', label: 'Faster Loading' },
    ],
    solutions: [
      'Port Cranes',
      'Container Handlers',
      'Cargo Trucks',
      'Terminal Tractors',
      'Storage Solutions',
      'Port Management Systems'
    ],
    caseStudies: 3,
    projects: 12
  },
]

export default function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.industry-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Factory className="w-4 h-4" />
            <span className="text-sm font-semibold">Industry Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Tailored Solutions for{' '}
            <span className="gradient-text">Every Industry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            From railways to ports, we deliver specialized solutions that drive 
            efficiency and innovation across diverse sectors.
          </motion.p>
        </div>

        {/* Industry Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="industry-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setIsHovered(industry.id)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => setSelectedIndustry(industry)}
            >
              <div className={`
                relative h-full bg-white rounded-2xl shadow-lg overflow-hidden
                cursor-pointer transition-all duration-500
                ${selectedIndustry.id === industry.id 
                  ? 'ring-4 ring-primary-500 shadow-2xl scale-105' 
                  : 'hover:shadow-xl hover:scale-102'
                }
              `}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary-100">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`
                    absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${industry.color}
                    rounded-xl flex items-center justify-center
                    transition-transform duration-500
                    ${isHovered === industry.id ? 'scale-110 rotate-12' : ''}
                  `}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="heading-5 mb-1">{industry.title}</h3>
                    <p className="text-sm text-white/90">{industry.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-secondary-600 mb-4 line-clamp-2">
                    {industry.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-3 bg-primary-50 rounded-lg">
                      <div className="text-xl font-bold text-primary-600">
                        {industry.caseStudies}
                      </div>
                      <div className="text-xs text-secondary-600">Case Studies</div>
                    </div>
                    <div className="text-center p-3 bg-accent-orange/10 rounded-lg">
                      <div className="text-xl font-bold text-accent-orange">
                        {industry.projects}+
                      </div>
                      <div className="text-xs text-secondary-600">Projects</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="btn-outline w-full group/btn flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Selection Indicator */}
                {selectedIndustry.id === industry.id && (
                  <motion.div
                    layoutId="selectedIndustry"
                    className="absolute inset-0 border-4 border-primary-500 rounded-2xl pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Image & Stats */}
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                  <Image
                    src={selectedIndustry.image}
                    alt={selectedIndustry.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  {selectedIndustry.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      className="text-center p-4 bg-white rounded-xl shadow-md"
                    >
                      <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                        <CountUp
                          end={stat.value}
                          duration={2}
                          suffix={stat.suffix}
                        />
                      </div>
                      <div className="text-xs text-secondary-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Solutions & Details */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedIndustry.color} rounded-xl flex items-center justify-center`}>
                    <selectedIndustry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-3">{selectedIndustry.title}</h3>
                    <p className="text-secondary-600">{selectedIndustry.subtitle}</p>
                  </div>
                </div>

                <p className="body-large text-secondary-700 mb-6">
                  {selectedIndustry.description}
                </p>

                {/* Solutions List */}
                <div className="mb-6">
                  <h4 className="heading-5 mb-4">Our Solutions Include:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedIndustry.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0" />
                        <span className="text-sm text-secondary-700">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`/industries/${selectedIndustry.id}`}
                    className="btn-primary flex items-center gap-2"
                  >
                    View Full Solutions
                    <ChevronRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="btn-outline flex items-center gap-2"
                  >
                    Request Consultation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}