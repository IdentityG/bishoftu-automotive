'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight,
  Wrench,
  Train,
  Cpu,
  Settings,
  Truck,
  Battery,
  Gauge,
  Shield,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'automotive',
    icon: Truck,
    title: 'Automotive Manufacturing',
    description: 'State-of-the-art vehicle production with cutting-edge technology and precision engineering.',
    features: ['Assembly Lines', 'Quality Control', 'Custom Solutions'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    link: '/services/automotive',
  },
  {
    id: 'locomotive',
    icon: Train,
    title: 'Locomotive Solutions',
    description: 'Comprehensive rail transport manufacturing and maintenance services for modern railways.',
    features: ['Train Manufacturing', 'Rail Components', 'Modernization'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    link: '/services/locomotive',
  },
  {
    id: 'parts',
    icon: Settings,
    title: 'Parts & Components',
    description: 'High-quality OEM and aftermarket parts for all vehicle types and models.',
    features: ['Genuine Parts', 'Fast Delivery', 'Warranty Support'],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    link: '/services/parts',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Expert maintenance services to keep your fleet running at peak performance.',
    features: ['Preventive Care', '24/7 Support', 'Mobile Service'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    link: '/services/maintenance',
  },
  {
    id: 'electric',
    icon: Battery,
    title: 'Electric Vehicle Solutions',
    description: 'Leading the transition to sustainable transport with advanced EV technology.',
    features: ['EV Assembly', 'Battery Systems', 'Charging Infrastructure'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-100',
    link: '/services/electric',
  },
  {
    id: 'engineering',
    icon: Cpu,
    title: 'Custom Engineering',
    description: 'Tailored engineering solutions to meet your specific industrial needs.',
    features: ['R&D Services', 'Prototyping', 'Technical Consulting'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    link: '/services/engineering',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-b from-secondary-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </motion.div>

          <h2 className="heading-2 text-secondary-900 mb-6">
            Comprehensive Industrial
            <span className="block mt-2 gradient-text">Solutions & Services</span>
          </h2>

          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            From manufacturing to maintenance, we provide end-to-end solutions for all your 
            automotive and locomotive needs with unmatched expertise and quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              <Link href={service.link}>
                <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    service.bgColor
                  )} />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={cn(
                        "inline-flex p-4 rounded-2xl bg-gradient-to-br text-white mb-6",
                        service.color
                      )}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-600 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredService === service.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full bg-gradient-to-r",
                            service.color
                          )} />
                          <span className="text-secondary-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "bg-gradient-to-br",
                      service.color
                    )}
                    style={{
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Animated Corner Accent */}
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className={cn(
                          "absolute -top-2 -right-2 w-24 h-24 rounded-full blur-2xl",
                          service.bgColor
                        )}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* Service Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Gauge, value: '99.9%', label: 'Uptime Guarantee' },
            { icon: Shield, value: '100%', label: 'Quality Assured' },
            { icon: Truck, value: '50K+', label: 'Vehicles Serviced' },
            { icon: Settings, value: '24/7', label: 'Technical Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-2xl bg-secondary-100 text-secondary-600 mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}