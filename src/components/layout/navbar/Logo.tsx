'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cpu, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  scrolled?: boolean
}

export default function Logo({ scrolled = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Animated Logo Icon */}
      <div className="relative">
        <motion.div
          className={cn(
            "relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700",
            "flex items-center justify-center shadow-lg",
            "group-hover:shadow-xl transition-shadow duration-300"
          )}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated Icons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-6 h-6 text-white/20" />
          </motion.div>
          
          <motion.div
            className="relative z-10"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <Zap className="w-6 h-6 text-white" />
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-primary-600"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-green"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.div
          className="flex items-center space-x-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className={cn(
            "font-display font-bold text-xl tracking-tight",
            "bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent",
            "group-hover:from-primary-600 group-hover:to-accent-orange transition-all duration-300"
          )}>
            BISHOFTU
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-1 -mt-1"
        >
          <span className="text-[10px] font-medium text-secondary-600 tracking-[0.2em] uppercase">
            Automotive
          </span>
          <span className="text-secondary-400">•</span>
          <span className="text-[10px] font-medium text-secondary-600 tracking-[0.2em] uppercase">
            Locomotive
          </span>
        </motion.div>
      </div>
    </Link>
  )
}