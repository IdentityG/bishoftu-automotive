// src/components/services/EmergencyServices.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  AlertCircle,
  Phone,
  Truck,
  Clock,
  MapPin,
  Wrench,
  Package,
  Shield,
  Zap,
  Navigation,
  Users,
  CheckCircle2
} from 'lucide-react'

const emergencyServices = [
  {
    icon: Phone,
    title: '24/7 Emergency Hotline',
    description: 'Round-the-clock emergency support with immediate response',
    number: '+251-11-911-HELP',
    color: 'from-red-500 to-red-700',
    features: ['Always available', 'Multi-language support', 'Direct technician dispatch', 'Priority handling']
  },
  {
    icon: Truck,
    title: 'Rapid Response Team',
    description: 'Mobile units ready to deploy within 30 minutes',
    number: '2-hour average arrival',
    color: 'from-accent-orange to-red-600',
    features: ['GPS-tracked units', 'Fully equipped', 'Certified technicians', 'Real-time updates']
  },
  {
    icon: Wrench,
    title: 'On-Site Repairs',
    description: 'Complete repair capabilities at your location',
    number: '90% first-visit fix rate',
    color: 'from-primary-500 to-primary-700',
    features: ['Mobile workshops', 'Diagnostic equipment', 'Common parts stock', 'Safety certified']
  },
  {
    icon: Package,
    title: 'Emergency Parts Supply',
    description: 'Critical parts delivered within hours',
    number: '4-hour delivery',
    color: 'from-accent-green to-green-700',
    features: ['Large inventory', 'Express delivery', 'Genuine parts', '24/7 warehouse access']
  },
]

const roadAssistanceFeatures = [
  { icon: Zap, title: 'Jump Start', time: '30 min' },
  { icon: Wrench, title: 'Tire Change', time: '45 min' },
  { icon: Package, title: 'Fuel Delivery', time: '1 hour' },
  { icon: Truck, title: 'Towing Service', time: '1 hour' },
  { icon: Users, title: 'Lockout Service', time: '30 min' },
  { icon: Shield, title: 'Accident Recovery', time: 'Priority' },
]

const responseCommitments = [
  { priority: 'Critical', description: 'Safety hazard, complete breakdown', response: '30 minutes', icon: AlertCircle, color: 'text-red-500' },
  { priority: 'High', description: 'Major malfunction, can\'t operate', response: '1 hour', icon: Clock, color: 'text-orange-500' },
  { priority: 'Medium', description: 'Reduced functionality, can limp', response: '2 hours', icon: Clock, color: 'text-yellow-500' },
  { priority: 'Standard', description: 'Minor issues, still operational', response: '4 hours', icon: Clock, color: 'text-green-500' },
]

export default function EmergencyServices() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.emergency-card', {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,.1) 35px,
              rgba(255,255,255,.1) 70px
            )`,
          }} />
        </div>

        {/* Pulsing alert circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border-4 border-white/20 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border-2 border-white/20"
          >
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold">Emergency Services - Available 24/7</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-1 mb-6"
          >
            Help is Just a{' '}
            <span className="text-yellow-400">Call Away</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-red-100 max-w-3xl mx-auto mb-8"
          >
            When emergencies strike, our rapid response team is ready to get you back on 
            the road quickly and safely.
          </motion.p>

          {/* Emergency Hotline */}
          <motion.a
            href="tel:+251-11-911-HELP"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-8 py-5 bg-white text-red-600 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all"
          >
            <Phone className="w-8 h-8" />
            +251-11-911-HELP
          </motion.a>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {emergencyServices.map((service, index) => (
            <motion.div
              key={index}
              className="emergency-card"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-5 mb-2">{service.title}</h3>
                <p className="text-sm text-red-100 mb-3">{service.description}</p>
                <div className="text-2xl font-bold text-yellow-400 mb-4">{service.number}</div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-red-100">
                      <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Response Time Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="heading-3 text-center mb-12">Response Time Guarantees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseCommitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <commitment.icon className={`w-10 h-10 ${commitment.color} mb-4`} />
                <div className="text-sm font-semibold text-yellow-400 mb-2">{commitment.priority}</div>
                <div className="text-xs text-red-100 mb-3">{commitment.description}</div>
                <div className="text-2xl font-bold">{commitment.response}</div>
                <div className="text-xs text-red-200">Average Response</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadside Assistance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <Navigation className="w-16 h-16 mx-auto mb-4" />
            <h3 className="heading-3 mb-4">Roadside Assistance Services</h3>
            <p className="text-red-100 max-w-2xl mx-auto">
              Comprehensive roadside support to handle any situation and get you moving again
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {roadAssistanceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="font-semibold mb-1">{feature.title}</div>
                <div className="text-xs text-red-200">{feature.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}