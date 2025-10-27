// src/components/services/ProcessFlow.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  PhoneCall,
  FileSearch,
  Calendar,
  Wrench,
  CheckCircle2,
  Star,
  ArrowRight
} from 'lucide-react'

const processSteps = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Reach out via phone, email, or online form to discuss your service needs.',
    duration: '5 minutes',
    color: 'from-primary-500 to-primary-700',
    details: [
      'Multiple contact channels',
      'Quick response time',
      'Initial needs assessment'
    ]
  },
  {
    icon: FileSearch,
    title: 'Assessment',
    description: 'Our experts evaluate your requirements and recommend the best solution.',
    duration: '1-2 hours',
    color: 'from-accent-green to-green-700',
    details: [
      'Technical evaluation',
      'Cost estimation',
      'Timeline planning'
    ]
  },
  {
    icon: Calendar,
    title: 'Scheduling',
    description: 'Book a convenient time slot that fits your schedule.',
    duration: 'Flexible',
    color: 'from-accent-orange to-red-600',
    details: [
      'Online booking available',
      'Flexible time slots',
      'Confirmation sent'
    ]
  },
  {
    icon: Wrench,
    title: 'Service Delivery',
    description: 'Our certified technicians perform the service with precision and care.',
    duration: 'Varies',
    color: 'from-purple-500 to-purple-700',
    details: [
      'Expert technicians',
      'Quality parts used',
      'Real-time updates'
    ]
  },
  {
    icon: CheckCircle2,
    title: 'Quality Check',
    description: 'Rigorous quality inspection ensures everything meets our standards.',
    duration: '30 minutes',
    color: 'from-blue-500 to-blue-700',
    details: [
      'Multi-point inspection',
      'Performance testing',
      'Documentation provided'
    ]
  },
  {
    icon: Star,
    title: 'Follow-up',
    description: 'Post-service support and feedback collection to ensure satisfaction.',
    duration: 'Ongoing',
    color: 'from-pink-500 to-pink-700',
    details: [
      'Customer satisfaction survey',
      'Ongoing support',
      'Warranty activation'
    ]
  },
]

export default function ProcessFlow() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate process line
      gsap.from('.process-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scaleX: 0,
        duration: 1.5,
        ease: 'power2.out',
      })

      // Animate process cards
      gsap.from('.process-step', {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
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
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Simple & Streamlined{' '}
            <span className="gradient-text">Service Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            From initial contact to post-service follow-up, we've designed our process 
            to be transparent, efficient, and customer-focused at every step.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <div className="process-line h-full bg-gradient-to-r from-primary-500 via-accent-orange to-accent-green origin-left" />
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary-500 flex items-center justify-center font-bold text-primary-600 z-10 shadow-lg">
                  {index + 1}
                </div>

                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="heading-5 group-hover:text-primary-600 transition-colors">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-secondary-600 mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-secondary-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <CheckCircle2 className="w-16 h-16 mx-auto mb-6" />
          <h3 className="heading-3 mb-4">Quality Guaranteed Every Step</h3>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">
            Our systematic approach ensures consistent quality, transparency, and customer 
            satisfaction throughout the entire service journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              '100% Transparency',
              'Real-time Updates',
              'Quality Checkpoints',
              'Customer Feedback'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}