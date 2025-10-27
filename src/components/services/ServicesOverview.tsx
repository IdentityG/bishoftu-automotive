// src/components/services/ServicesOverview.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Target,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Shield,
  Clock,
  Zap
} from 'lucide-react'
import CountUp from 'react-countup'

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Satisfied Clients' },
  { icon: Award, value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Support Available' },
  { icon: TrendingUp, value: 15000, suffix: '+', label: 'Services Completed' },
]

const valueProps = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'All services backed by our comprehensive quality assurance program and warranty coverage.',
    color: 'from-primary-500 to-primary-700'
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Quick turnaround times with same-day service availability for urgent requests.',
    color: 'from-accent-orange to-red-600'
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Highly trained and certified professionals with years of industry experience.',
    color: 'from-accent-green to-green-700'
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Personalized service solutions tailored to meet your specific requirements.',
    color: 'from-purple-500 to-purple-700'
  },
]

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.overview-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Target className="w-4 h-4" />
            <span className="text-sm font-semibold">Service Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Comprehensive Solutions for{' '}
            <span className="gradient-text">Every Challenge</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            We deliver industry-leading services designed to maximize your operational 
            efficiency, minimize downtime, and ensure long-term reliability of your fleet.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="overview-card bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                  separator=","
                />
              </div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overview-card group"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-3 mb-6">Our Service Philosophy</h3>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                At Bishoftu Automotive, we believe that exceptional service goes beyond 
                fixing problems—it's about building lasting partnerships. Our commitment 
                to excellence drives everything we do, from preventive maintenance to 
                emergency repairs.
              </p>

              <div className="space-y-4">
                {[
                  'Proactive approach to maintenance',
                  'Transparent communication throughout',
                  'Fair and competitive pricing',
                  'Continuous improvement mindset',
                  'Long-term customer relationships'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="text-primary-100">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '5+', label: 'Years Warranty', icon: Shield },
                { number: '2hr', label: 'Response Time', icon: Clock },
                { number: '100%', label: 'Genuine Parts', icon: CheckCircle2 },
                { number: '24/7', label: 'Emergency Support', icon: Zap },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
                >
                  <item.icon className="w-10 h-10 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{item.number}</div>
                  <div className="text-sm text-primary-200">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}