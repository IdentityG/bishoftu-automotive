// src/components/about/StatsCounter.tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import CountUp from 'react-countup'
import { 
  Users,
  Factory,
  Globe,
  TrendingUp,
  Award,
  Package,
  Truck,
  Building2,
  Zap,
  Shield,
  Heart,
  Target,
  Briefcase,
  GraduationCap,
  Rocket,
  Star
} from 'lucide-react'

const statsData = [
  {
    icon: Users,
    value: 2500,
    suffix: '+',
    label: 'Employees',
    description: 'Talented professionals',
    color: 'from-primary-500 to-primary-700',
    category: 'workforce'
  },
  {
    icon: Factory,
    value: 12,
    suffix: '',
    label: 'Facilities',
    description: 'Across Ethiopia',
    color: 'from-accent-green to-green-700',
    category: 'infrastructure'
  },
  {
    icon: Globe,
    value: 15,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global presence',
    color: 'from-accent-orange to-red-600',
    category: 'reach'
  },
  {
    icon: TrendingUp,
    value: 500,
    suffix: 'M+',
    prefix: '$',
    label: 'Annual Revenue',
    description: 'Financial strength',
    color: 'from-blue-500 to-blue-700',
    category: 'financial'
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Awards Won',
    description: 'Industry recognition',
    color: 'from-purple-500 to-purple-700',
    category: 'achievements'
  },
  {
    icon: Package,
    value: 15000,
    suffix: '+',
    label: 'Units Produced',
    description: 'Annual output',
    color: 'from-pink-500 to-pink-700',
    category: 'production'
  },
  {
    icon: Truck,
    value: 1200,
    suffix: '+',
    label: 'Fleet Vehicles',
    description: 'In operation',
    color: 'from-indigo-500 to-indigo-700',
    category: 'assets'
  },
  {
    icon: Building2,
    value: 425000,
    suffix: '',
    label: 'Sq Ft Facility',
    description: 'Total workspace',
    color: 'from-cyan-500 to-cyan-700',
    category: 'infrastructure'
  },
  {
    icon: Zap,
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Quality guarantee',
    color: 'from-yellow-500 to-yellow-700',
    category: 'quality'
  },
  {
    icon: Shield,
    value: 99,
    suffix: '%',
    label: 'Safety Record',
    description: 'Zero incidents',
    color: 'from-green-500 to-green-700',
    category: 'safety'
  },
  {
    icon: Target,
    value: 1000,
    suffix: '+',
    label: 'Active Clients',
    description: 'Trust our services',
    color: 'from-red-500 to-red-700',
    category: 'clients'
  },
  {
    icon: GraduationCap,
    value: 5000,
    suffix: '+',
    label: 'Training Hours',
    description: 'Annual investment',
    color: 'from-teal-500 to-teal-700',
    category: 'development'
  },
]

const milestoneYears = [
  { year: 1995, event: 'Company Founded', icon: Rocket },
  { year: 2000, event: 'First Major Contract', icon: Briefcase },
  { year: 2005, event: 'Railway Division', icon: Factory },
  { year: 2010, event: 'International Expansion', icon: Globe },
  { year: 2015, event: 'Innovation Center', icon: Zap },
  { year: 2020, event: 'Industry Leadership', icon: Award },
  { year: 2024, event: 'Future Forward', icon: Star },
]

export default function StatsCounter() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate stat cards
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })

      // Animate milestone items
      gsap.from('.milestone-item', {
        scrollTrigger: {
          trigger: '.milestones-timeline',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const categories = Array.from(new Set(statsData.map(stat => stat.category)))

  const filteredStats = activeCategory 
    ? statsData.filter(stat => stat.category === activeCategory)
    : statsData

  return (
    <section 
      id="stats"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Numbers */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl font-bold opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Math.floor(Math.random() * 100)}
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">By The Numbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Our Impact in{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Numbers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-300 max-w-3xl mx-auto"
          >
            Three decades of growth, innovation, and excellence reflected in measurable achievements 
            that demonstrate our commitment to being industry leaders.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === null
                ? 'bg-white text-primary-900 shadow-lg'
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
            }`}
          >
            All Stats
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                activeCategory === category
                  ? 'bg-white text-primary-900 shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2">
                    {isInView && (
                      <>
                        {stat.prefix}
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          separator=","
                          suffix={stat.suffix}
                        />
                      </>
                    )}
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-secondary-300">{stat.description}</div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Milestones */}
        <div className="milestones-timeline">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-3 text-center mb-12"
          >
            Key Milestones
          </motion.h3>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2 hidden md:block" />

            {/* Timeline Items */}
            <div className="grid md:grid-cols-7 gap-4">
              {milestoneYears.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="milestone-item relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Node */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-orange rounded-full flex items-center justify-center mb-4 shadow-xl relative z-10 group hover:scale-110 transition-transform">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Year */}
                    <div className="text-2xl font-bold mb-2">{milestone.year}</div>

                    {/* Event */}
                    <div className="text-sm text-secondary-300">{milestone.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
        >
          <h3 className="heading-4 text-center mb-8">Growth Trajectory</h3>
          <div className="grid md:grid-cols-5 gap-6 items-end">
            {[
              { year: '2000', height: '20%', value: '$15M' },
              { year: '2005', height: '35%', value: '$50M' },
              { year: '2010', height: '50%', value: '$120M' },
              { year: '2015', height: '70%', value: '$250M' },
              { year: '2020', height: '85%', value: '$400M' },
              { year: '2024', height: '100%', value: '$500M+' },
            ].map((data, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 'auto' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-full bg-white/10 rounded-t-xl overflow-hidden mb-4" style={{ height: '300px' }}>
                  <motion.div
                    className="w-full bg-gradient-to-t from-primary-500 to-accent-orange rounded-t-xl"
                    initial={{ height: 0 }}
                    whileInView={{ height: data.height }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  />
                </div>
                <div className="text-sm font-semibold mb-1">{data.value}</div>
                <div className="text-xs text-secondary-400">{data.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}