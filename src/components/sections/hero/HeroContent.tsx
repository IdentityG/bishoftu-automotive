'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const headlines = [
  "Driving Ethiopia's Automotive Future",
  "Engineering Excellence Since 1973",
  "Innovation in Motion",
  "Building Tomorrow's Transport Today"
]

export default function HeroContent() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <>
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-orange" />
          <span className="text-sm font-medium">Celebrating 50+ Years of Excellence</span>
        </motion.div>

        {/* Main Headline with Typing Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-1 text-white mb-6"
        >
          <span className="block">Pioneering</span>
          <span className="block mt-2">
            <TypeAnimation
              sequence={[
                'Automotive Innovation',
                2000,
                'Locomotive Excellence',
                2000,
                'Industrial Solutions',
                2000,
                'Sustainable Transport',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Ethiopia's premier automotive and locomotive manufacturer, delivering 
          world-class vehicles and rail solutions across Africa and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          {/* Primary CTA */}
          <Link
            href="/quote"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent-orange to-primary-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center space-x-2">
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Secondary CTA */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="group flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full animate-ping" />
              <Play className="w-5 h-5 relative z-10" />
            </div>
            <span>Watch Video</span>
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Nationwide Service</span>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}