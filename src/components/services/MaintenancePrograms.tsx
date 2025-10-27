// src/components/services/MaintenancePrograms.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Calendar,
  Brain,
  Activity,
  Truck,
  Sun,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react'

const maintenancePrograms = [
  {
    icon: Calendar,
    title: 'Scheduled Maintenance Plans',
    subtitle: 'Preventive care on your schedule',
    description: 'Regular maintenance intervals based on manufacturer recommendations and your usage patterns.',
    color: 'from-primary-500 to-primary-700',
    features: [
      'Customized service schedules',
      'Automated reminders',
      'Priority booking',
      'Service history tracking',
      'Parts replacement planning',
      'Cost predictability'
    ],
    benefits: [
      'Prevent unexpected breakdowns',
      'Extend vehicle lifespan',
      'Maintain warranty compliance',
      'Reduce long-term costs'
    ],
    pricing: 'From $299/month per vehicle',
    included: ['Oil changes', 'Filter replacements', 'Fluid checks', 'Brake inspections'],
    ideal: 'Fleet operators with predictable usage patterns'
  },
  {
    icon: Brain,
    title: 'Predictive Maintenance',
    subtitle: 'AI-powered proactive care',
    description: 'Advanced analytics and IoT sensors predict potential issues before they become problems.',
    color: 'from-accent-green to-green-700',
    features: [
      'Real-time sensor monitoring',
      'AI failure prediction',
      'Automated alerts',
      'Performance analytics',
      'Trend analysis',
      'Optimization recommendations'
    ],
    benefits: [
      'Minimize unplanned downtime',
      'Optimize maintenance timing',
      'Reduce repair costs by 40%',
      'Improve fleet efficiency'
    ],
    pricing: 'From $499/month per vehicle',
    included: ['IoT sensors', 'AI diagnostics', 'Real-time alerts', 'Performance reports'],
    ideal: 'High-value assets and critical operations'
  },
  {
    icon: Activity,
    title: 'Condition-Based Maintenance',
    subtitle: 'Service when actually needed',
    description: 'Maintenance based on actual vehicle condition rather than fixed intervals.',
    color: 'from-accent-orange to-red-600',
    features: [
      'Condition monitoring',
      'Diagnostic testing',
      'Performance tracking',
      'Wear analysis',
      'Flexible scheduling',
      'Cost optimization'
    ],
    benefits: [
      'Avoid unnecessary service',
      'Service only when needed',
      'Reduce maintenance costs',
      'Maximize vehicle availability'
    ],
    pricing: 'From $399/month per vehicle',
    included: ['Regular inspections', 'Diagnostic scans', 'Condition reports', 'As-needed service'],
    ideal: 'Variable usage patterns and mixed fleets'
  },
  {
    icon: Truck,
    title: 'Fleet Maintenance Programs',
    subtitle: 'Complete fleet solutions',
    description: 'Comprehensive maintenance management for your entire fleet with dedicated support.',
    color: 'from-purple-500 to-purple-700',
    features: [
      'Dedicated fleet manager',
      'Multi-vehicle scheduling',
      'Bulk service discounts',
      'Fleet performance dashboard',
      'Custom reporting',
      'Priority emergency support'
    ],
    benefits: [
      'Centralized management',
      'Volume discounts',
      'Improved fleet uptime',
      'Detailed analytics'
    ],
    pricing: 'Custom pricing for fleets 10+',
    included: ['All maintenance types', 'Fleet manager', 'Custom reports', '24/7 support'],
    ideal: 'Companies with 10+ vehicles'
  },
  {
    icon: Sun,
    title: 'Seasonal Service Packages',
    subtitle: 'Prepare for changing conditions',
    description: 'Specialized maintenance packages to prepare your vehicles for seasonal challenges.',
    color: 'from-blue-500 to-blue-700',
    features: [
      'Pre-season inspections',
      'Climate-specific services',
      'Emergency prep',
      'Storage preparation',
      'Performance optimization',
      'Seasonal parts discounts'
    ],
    benefits: [
      'Ready for any season',
      'Prevent weather-related issues',
      'Optimize performance',
      'Peace of mind'
    ],
    pricing: 'From $199 per season',
    included: ['Inspection', 'Fluid changes', 'Battery check', 'Tire service'],
    ideal: 'Agricultural and seasonal operations'
  },
  {
    icon: Shield,
    title: 'Extended Warranty Options',
    subtitle: 'Comprehensive coverage',
    description: 'Extended warranty coverage beyond manufacturer warranties with flexible terms.',
    color: 'from-pink-500 to-pink-700',
    features: [
      'Comprehensive coverage',
      'Flexible terms (1-5 years)',
      'Transferable warranties',
      'Zero deductible options',
      'Roadside assistance',
      'Rental vehicle coverage'
    ],
    benefits: [
      'Financial protection',
      'Budget predictability',
      'Increased resale value',
      'Complete peace of mind'
    ],
    pricing: 'From $99/month per vehicle',
    included: ['Parts & labor', 'Towing', 'Rental car', 'Emergency service'],
    ideal: 'All vehicle types and ages'
  },
]

export default function MaintenancePrograms() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.program-card', {
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
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Maintenance Programs</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Proactive{' '}
            <span className="gradient-text">Maintenance Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Choose the maintenance program that best fits your operational needs and budget. 
            All programs include genuine parts and certified technicians.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maintenancePrograms.map((program, index) => (
            <motion.div
              key={index}
              className="program-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full border-2 border-transparent hover:border-primary-200 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-br ${program.color} p-6 text-white`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <program.icon className="w-7 h-7" />
                  </div>
                  <h3 className="heading-5 mb-2">{program.title}</h3>
                  <p className="text-sm opacity-90">{program.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-secondary-600 mb-6">{program.description}</p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-primary-50 rounded-xl">
                    <div className="text-xs text-secondary-600 mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-primary-600">{program.pricing}</div>
                  </div>

                  {/* Included Services */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-secondary-900 mb-3">What's Included:</div>
                    <div className="flex flex-wrap gap-2">
                      {program.included.map((item, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-secondary-900 mb-3">Key Benefits:</div>
                     <div className="space-y-2">
                      {program.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-secondary-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 bg-secondary-50 rounded-lg">
                    <div className="text-xs font-semibold text-secondary-600 uppercase mb-1">Ideal For:</div>
                    <div className="text-sm text-secondary-900">{program.ideal}</div>
                  </div>

                  {/* CTA */}
                  <button className="btn-primary w-full flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 text-center"
        >
          <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="heading-4 mb-4">Not Sure Which Program is Right for You?</h3>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-6">
            Our maintenance specialists can help you choose the perfect program based on your 
            fleet size, usage patterns, and budget requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="btn-primary">
              Schedule Consultation
            </button>
            <button className="btn-outline">
              Compare All Programs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}