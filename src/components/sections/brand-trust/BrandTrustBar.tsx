'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// Brand logos data
const brands = [
  { name: 'Toyota', logo: '/images/brands/toyota.png' },
  { name: 'Mercedes-Benz', logo: '/images/brands/mercedes.png' },
  { name: 'Volvo', logo: '/images/brands/volvo.png' },
  { name: 'Scania', logo: '/images/brands/scania.png' },
  { name: 'MAN', logo: '/images/brands/man.png' },
  { name: 'Isuzu', logo: '/images/brands/isuzu.png' },
  { name: 'Hino', logo: '/images/brands/hino.png' },
  { name: 'DAF', logo: '/images/brands/daf.png' },
]

// Duplicate for seamless loop
const duplicatedBrands = [...brands, ...brands]

export default function BrandTrustBar() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 bg-gradient-to-b from-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 mb-4"
          >
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">Trusted Partners</span>
          </motion.div>
          
          <h2 className="heading-3 text-secondary-900 mb-4">
            Trusted by Leading Global Brands
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We're proud to partner with the world's most renowned automotive and locomotive manufacturers
          </p>
        </motion.div>

        {/* Brand Logos Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, -50 * brands.length],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex items-center space-x-16"
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * (index % brands.length) }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    {/* Placeholder for logo */}
                    <div className="w-full h-full flex items-center justify-center bg-secondary-100 rounded-lg group-hover:bg-secondary-50 transition-colors">
                      <span className="text-secondary-400 font-medium text-sm">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '50+', label: 'Partner Brands' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '15+', label: 'Countries' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}