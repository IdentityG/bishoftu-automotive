'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Play, 
  ChevronDown,
  Zap,
  Shield,
  Gauge,
  Award
} from 'lucide-react'
import { cn } from '@/lib/utils'
import HeroStats from './HeroStats'
import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <HeroBackground />

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 container-custom py-20"
      >
        <HeroContent />
      </motion.div>

      {/* Stats Overlay */}
      <HeroStats />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }}
        >
          <span className="text-sm font-medium">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}