'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Factory, Users, Trophy, Globe } from 'lucide-react'
import CountUp from 'react-countup'
import { cn } from '../../../lib/utils'

const stats = [
  {
    icon: Factory,
    value: 50,
    suffix: '+',
    label: 'Years of Excellence',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Skilled Employees',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    value: 100,
    suffix: '+',
    label: 'Awards Won',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Served',
    color: 'from-green-500 to-teal-500',
  },
]

export default function FooterStats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="relative border-b border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 to-accent-orange/20 opacity-30" />
      
      <div ref={ref} className="relative container-custom py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Counter */}
              <div className="text-3xl font-bold text-white mb-1">
                {isInView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </div>

              {/* Label */}
              <p className="text-sm text-white/70">{stat.label}</p>

              {/* Animated Underline */}
              <motion.div
                className={cn(
                  "h-0.5 mt-3 rounded-full bg-gradient-to-r",
                  stat.color
                )}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}