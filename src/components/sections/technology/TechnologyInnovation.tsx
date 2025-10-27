// src/components/home/TechnologyInnovation.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Zap,
  Cpu,
  Code,
  Brain,
  Lightbulb,
  Rocket,
  Award,
  TrendingUp,
  Shield,
  Database,
  Cloud,
  Lock,
  ChevronRight
} from 'lucide-react'

const techStack = [
  {
    category: 'Advanced Engineering',
    icon: Cpu,
    technologies: [
      { name: 'AI-Powered Diagnostics', icon: Brain, progress: 95 },
      { name: 'IoT Integration', icon: Database, progress: 90 },
      { name: 'Predictive Maintenance', icon: TrendingUp, progress: 88 },
      { name: 'Smart Automation', icon: Zap, progress: 92 },
    ],
    color: 'from-primary-500 to-primary-700'
  },
  {
    category: 'Digital Solutions',
    icon: Code,
    technologies: [
      { name: 'Cloud Infrastructure', icon: Cloud, progress: 94 },
      { name: 'Real-time Monitoring', icon: Shield, progress: 91 },
      { name: 'Data Analytics', icon: Database, progress: 89 },
      { name: 'Cybersecurity', icon: Lock, progress: 96 },
    ],
    color: 'from-accent-orange to-red-600'
  },
  {
    category: 'Innovation Labs',
    icon: Lightbulb,
    technologies: [
      { name: 'Electric Propulsion', icon: Zap, progress: 87 },
      { name: 'Autonomous Systems', icon: Brain, progress: 85 },
      { name: 'Green Technology', icon: TrendingUp, progress: 90 },
      { name: 'Advanced Materials', icon: Rocket, progress: 88 },
    ],
    color: 'from-accent-green to-green-700'
  },
]

const innovations = [
  {
    year: '2024',
    title: 'AI-Powered Fleet Management System',
    description: 'Revolutionary fleet management using artificial intelligence for optimal route planning and fuel efficiency.',
    icon: Brain,
    status: 'In Development',
    impact: '30% efficiency increase'
  },
  {
    year: '2023',
    title: 'Electric Locomotive Platform',
    description: 'Next-generation electric locomotive with zero emissions and advanced energy recovery systems.',
    icon: Zap,
    status: 'Launched',
    impact: '100% emission reduction'
  },
  {
    year: '2023',
    title: 'Smart Predictive Maintenance',
    description: 'IoT-enabled predictive maintenance system reducing downtime and maintenance costs.',
    icon: TrendingUp,
    status: 'Active',
    impact: '40% cost savings'
  },
  {
    year: '2022',
    title: 'Autonomous Safety Systems',
    description: 'Advanced safety features including collision avoidance and automated emergency braking.',
    icon: Shield,
    status: 'Deployed',
    impact: '95% accident prevention'
  },
]

const patents = [
  { title: 'Advanced Braking System', number: 'ET-2023-001', year: '2023' },
  { title: 'Electric Drivetrain Technology', number: 'ET-2023-045', year: '2023' },
  { title: 'Smart Energy Management', number: 'ET-2022-089', year: '2022' },
  { title: 'Autonomous Navigation System', number: 'ET-2022-134', year: '2022' },
  { title: 'Eco-Friendly Propulsion', number: 'ET-2021-078', year: '2021' },
]

export default function TechnologyInnovation() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate tech cards
      gsap.from('.tech-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Animate timeline
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
        },
        x: -60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      })

      // Animate patent badges
      gsap.from('.patent-badge', {
        scrollTrigger: {
          trigger: '.patents-container',
          start: 'top 80%',
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-6"
          >
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-semibold">Technology & Innovation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6 text-white"
          >
            Pioneering the Future of{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Transportation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-300 max-w-3xl mx-auto"
          >
            Leveraging cutting-edge technology and continuous innovation to deliver 
            world-class solutions that redefine industry standards.
          </motion.p>
        </div>

        {/* Tech Stack Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              className="tech-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stack.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="heading-5 text-white mb-6">{stack.category}</h3>

                {/* Technologies */}
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <tech.icon className="w-4 h-4 text-primary-400" />
                          <span className="text-sm text-white">{tech.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-primary-400">
                          {tech.progress}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Innovation Timeline */}
        <div ref={timelineRef} className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-3 text-white text-center mb-12"
          >
            Innovation Timeline
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-orange to-accent-green" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={index}
                  className="timeline-item relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="ml-16 md:ml-0 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                        {/* Status Badge */}
                        <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-bold mb-3">
                          {innovation.status}
                        </div>

                        <h4 className="heading-5 text-white mb-2">{innovation.title}</h4>
                        <p className="text-secondary-300 mb-4">{innovation.description}</p>
                        
                        {/* Impact */}
                        <div className="flex items-center gap-2 text-accent-green">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-semibold">{innovation.impact}</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center border-4 border-secondary-900 shadow-xl">
                        <innovation.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Year */}
                    <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 text-right'}`}>
                      <div className="text-5xl font-bold text-white/20">{innovation.year}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* R&D Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary-500/10 to-accent-orange/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-12">
              <h3 className="heading-3 text-white mb-4">
                Research & Development Excellence
              </h3>
              <p className="text-secondary-300 max-w-2xl mx-auto">
                Our dedicated R&D facilities drive innovation across all aspects of 
                automotive and locomotive technology.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Lightbulb, value: '$25M+', label: 'Annual R&D Investment' },
                { icon: Brain, value: '150+', label: 'Research Engineers' },
                { icon: Award, value: '50+', label: 'Patents Filed' },
                { icon: Rocket, value: '15+', label: 'Active Projects' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-secondary-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Patents & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="patents-container"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-white mb-4">
              Patents & Intellectual Property
            </h3>
            <p className="text-secondary-300 max-w-2xl mx-auto">
              Our innovation is protected by a growing portfolio of patents and proprietary technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                className="patent-badge group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300 w-64">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-green to-green-700 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-secondary-400">Patent No.</div>
                      <div className="font-mono text-sm text-primary-400">{patent.number}</div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{patent.title}</h4>
                  <div className="text-xs text-secondary-400">Filed: {patent.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/technology"
            className="btn-primary inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-secondary-100"
          >
            Explore Our Technology
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}