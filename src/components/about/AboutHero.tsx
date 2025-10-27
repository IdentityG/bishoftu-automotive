// src/components/about/AboutHero.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ChevronDown, Award, Users, Globe, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Animate particles
      gsap.to('.particle', {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: 'random'
        }
      })

      // Animate hero content
      gsap.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContent = () => {
    const nextSection = document.getElementById('company-overview')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900"
    >
      {/* Video Background (Optional) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-secondary-900/50 z-10" />
        {/* Replace with actual video or keep gradient background */}
        <div className="absolute inset-0 bg-[url('/images/about/hero-pattern.png')] bg-cover bg-center" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center text-white">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content flex items-center justify-center gap-2 text-sm text-secondary-300 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">About Us</span>
        </motion.nav>

        {/* Founding Year Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="hero-content inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
        >
          <Award className="w-5 h-5 text-accent-orange" />
          <span className="text-sm font-semibold">Established 1995 • 29+ Years of Excellence</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-content heading-1 mb-6 max-w-5xl mx-auto"
        >
          Driving Ethiopia's{' '}
          <span className="bg-gradient-to-r from-primary-400 via-accent-orange to-accent-green bg-clip-text text-transparent">
            Transportation Revolution
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="hero-content text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto mb-12"
        >
          From humble beginnings to becoming the nation's premier automotive and 
          locomotive solutions provider, our journey is built on innovation, 
          quality, and unwavering commitment to excellence.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="hero-content grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { icon: Users, value: '2,500+', label: 'Employees' },
            { icon: Globe, value: '15+', label: 'Countries Served' },
            { icon: Award, value: '50+', label: 'Awards Won' },
            { icon: TrendingUp, value: '$500M+', label: 'Annual Revenue' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-secondary-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hero-content flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#company-overview"
            onClick={(e) => {
              e.preventDefault()
              scrollToContent()
            }}
            className="btn-primary bg-white text-primary-900 hover:bg-secondary-100"
          >
            Discover Our Story
          </Link>
          <Link href="/contact" className="btn-outline border-white text-white hover:bg-white/10">
            Get In Touch
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToContent}
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