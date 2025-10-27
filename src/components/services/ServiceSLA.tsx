// src/components/services/ServiceSLA.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Clock,
  TrendingUp,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  AlertCircle,
  Zap,
  Target
} from 'lucide-react'

const slaCommitments = [
  {
    icon: Clock,
    title: 'Response Time Guarantee',
    description: 'Quick response times based on priority level',
    color: 'from-primary-500 to-primary-700',
    commitments: [
      { level: 'Critical', time: '1 hour', description: 'System down, safety issue' },
      { level: 'High', time: '4 hours', description: 'Major functionality impacted' },
      { level: 'Medium', time: '8 hours', description: 'Moderate impact on operations' },
      { level: 'Low', time: '24 hours', description: 'Minor issues, questions' },
    ]
  },
  {
    icon: TrendingUp,
    title: 'Uptime Commitment',
    description: 'Service availability guarantees',
    color: 'from-accent-green to-green-700',
    commitments: [
      { level: 'Enterprise', time: '99.9%', description: 'Maximum 8 hours downtime/year' },
      { level: 'Professional', time: '99.5%', description: 'Maximum 43 hours downtime/year' },
      { level: 'Standard', time: '99.0%', description: 'Maximum 87 hours downtime/year' },
    ]
  },
  {
    icon: Shield,
    title: 'Performance Metrics',
    description: 'Quality and performance standards',
    color: 'from-accent-orange to-red-600',
    commitments: [
      { level: 'First-Call Resolution', time: '85%', description: 'Issues resolved on first contact' },
      { level: 'Customer Satisfaction', time: '95%', description: 'Positive feedback target' },
      { level: 'On-Time Delivery', time: '98%', description: 'Services completed as scheduled' },
    ]
  },
]

const supportChannels = [
  {
    icon: Phone,
    name: '24/7 Phone Support',
    availability: 'Always Available',
    response: 'Immediate',
    contact: '+251-11-XXX-XXXX',
    color: 'bg-primary-500'
  },
  {
    icon: Mail,
    name: 'Email Support',
    availability: 'Business Hours',
    response: '4 hours',
    contact: 'support@bishoftu.com',
    color: 'bg-accent-green'
  },
  {
    icon: MessageSquare,
    name: 'Live Chat',
    availability: '8 AM - 8 PM',
    response: '5 minutes',
    contact: 'Website Chat',
    color: 'bg-accent-orange'
  },
]

const escalationLevels = [
  { level: 1, title: 'Service Technician', time: '0-4 hours', icon: Zap },
  { level: 2, title: 'Team Lead', time: '4-8 hours', icon: Target },
  { level: 3, title: 'Service Manager', time: '8-24 hours', icon: Shield },
  { level: 4, title: 'Operations Director', time: '24+ hours', icon: AlertCircle },
]

export default function ServiceSLA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.sla-card', {
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
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">Service Level Agreement</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Our Commitment to{' '}
            <span className="gradient-text">Service Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            We stand behind our services with clear, measurable commitments to response 
            times, availability, and performance standards.
          </motion.p>
        </div>

        {/* SLA Commitments */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {slaCommitments.map((sla, index) => (
            <motion.div
              key={index}
              className="sla-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${sla.color} rounded-xl flex items-center justify-center mb-6`}>
                  <sla.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="heading-4 mb-3">{sla.title}</h3>
                <p className="text-secondary-600 mb-6">{sla.description}</p>

                <div className="space-y-4">
                  {sla.commitments.map((commitment, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-secondary-900">{commitment.level}</span>
                        <span className="text-lg font-bold text-primary-600">{commitment.time}</span>
                      </div>
                      <p className="text-sm text-secondary-600">{commitment.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="heading-3 text-center mb-12">Support Channels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                  <channel.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">{channel.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Availability:</span>
                    <span className="font-semibold text-secondary-900">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Response:</span>
                    <span className="font-semibold text-accent-green">{channel.response}</span>
                  </div>
                  <div className="pt-2 border-t border-secondary-200">
                    <span className="text-primary-600 font-semibold">{channel.contact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Escalation Procedure */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="heading-3 text-center mb-12">Escalation Procedure</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {escalationLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <level.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold mb-2">Level {level.level}</div>
                  <div className="text-sm font-semibold mb-2">Level {level.level}</div>
                  <div className="font-bold mb-2">{level.title}</div>
                  <div className="text-xs text-primary-200">{level.time}</div>
                </div>
                {index < escalationLevels.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-white/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-primary-100">
              Issues are automatically escalated if not resolved within the specified timeframe
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}