// src/components/about/ProgressIndicator.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-200 z-50"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: '0%' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-orange"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.div>
  )
}