'use client'

import { motion } from 'framer-motion'
import { Gauge, Users, Globe, Award } from 'lucide-react'
import CountUp from 'react-countup'

const stats = [
  {
    icon: Gauge,
    value: 50000,
    suffix: '+',
    label: 'Vehicles Produced',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Expert Team',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Served',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'Awards Won',
    color: 'from-orange-400 to-orange-600',
  },
]

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute bottom-0 left-0 right-0 z-20"
    >
      <div className="container-custom pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                {/* Label */}
                <p className="text-sm text-white/70">{stat.label}</p>

                {/* Hover Effect Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}