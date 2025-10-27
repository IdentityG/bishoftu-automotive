'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Factory,
  Wrench,
  HeadphonesIcon,
  Package,
  Users,
  CreditCard,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Shield,
  Zap,
  X,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'

const serviceCategories = [
  { id: 'all', label: 'All Services', count: 24 },
  { id: '000', label: 'Manufacturing', count: 6 },
  { id: 'maintenance', label: 'Maintenance & Repair', count: 8 },
  { id: 'support', label: 'Technical Support', count: 5 },
  { id: 'parts', label: 'Parts Supply', count: 3 },
  { id: 'training', label: 'Training', count: 4 },
  { id: 'financing', label: 'Financing', count: 2 },
]

const services = [
  // Manufacturing Services
  {
    id: 1,
    category: 'manufacturing',
    icon: Factory,
    title: 'Vehicle Manufacturing',
    tagline: 'Custom-built vehicles for your needs',
    description: 'End-to-end vehicle manufacturing services from design to delivery, with customization options for specific requirements.',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=Manufacturing',
    color: 'from-primary-500 to-primary-700',
    features: [
      'Custom vehicle design',
      'Quality manufacturing process',
      'Rigorous testing standards',
      'On-time delivery guarantee',
      'Post-delivery support'
    ],
    pricing: 'Custom Quote',
    duration: '3-6 months',
    warranty: '5 years',
    popular: true
  },
  {
    id: 2,
    category: 'manufacturing',
    icon: Factory,
    title: 'Locomotive Production',
    tagline: 'Advanced railway solutions',
    description: 'State-of-the-art locomotive manufacturing with electric and diesel options for modern rail networks.',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Locomotive',
    color: 'from-accent-green to-green-700',
    features: [
      'Electric & diesel locomotives',
      'Advanced propulsion systems',
      'Safety-certified designs',
      'Energy-efficient technology',
      'Comprehensive training included'
    ],
    pricing: 'Custom Quote',
    duration: '6-12 months',
    warranty: '7 years',
    popular: false
  },
  // Maintenance Services
  {
    id: 3,
    category: 'maintenance',
    icon: Wrench,
    title: 'Preventive Maintenance',
    tagline: 'Keep your fleet running smoothly',
    description: 'Scheduled maintenance programs to prevent breakdowns and extend vehicle lifespan.',
    image: 'https://placehold.co/800x600/F97316/ffffff?text=Maintenance',
    color: 'from-accent-orange to-red-600',
    features: [
      'Scheduled inspections',
      'Oil & filter changes',
      'Brake system checks',
      'Tire rotation & alignment',
      'Fluid level monitoring'
    ],
    pricing: 'From $299/month',
    duration: 'Ongoing',
    warranty: '1 year parts',
    popular: true
  },
  {
    id: 4,
    category: 'maintenance',
    icon: Wrench,
    title: 'Emergency Repairs',
    tagline: '24/7 rapid response service',
    description: 'Round-the-clock emergency repair services with mobile units for on-site assistance.',
    image: 'https://placehold.co/800x600/EF4444/ffffff?text=Emergency',
    color: 'from-red-500 to-red-700',
    features: [
      '24/7 emergency hotline',
      'Mobile repair units',
      '2-hour response time',
      'Priority service',
      'Roadside assistance'
    ],
    pricing: 'From $150/hour',
    duration: 'Immediate',
    warranty: '90 days',
    popular: true
  },
  {
    id: 5,
    category: 'maintenance',
    icon: Wrench,
    title: 'Overhaul Services',
    tagline: 'Complete vehicle restoration',
    description: 'Comprehensive overhaul and refurbishment services to restore vehicles to peak condition.',
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=Overhaul',
    color: 'from-purple-500 to-purple-700',
    features: [
      'Engine overhaul',
      'Transmission rebuild',
      'Electrical system upgrade',
      'Body restoration',
      'Performance testing'
    ],
    pricing: 'From $5,000',
    duration: '2-4 weeks',
    warranty: '2 years',
    popular: false
  },
  // Support Services
  {
    id: 6,
    category: 'support',
    icon: HeadphonesIcon,
    title: '24/7 Technical Support',
    tagline: 'Expert help whenever you need it',
    description: 'Round-the-clock technical assistance from certified experts for all your service needs.',
    image: 'https://placehold.co/800x600/2563EB/ffffff?text=Support',
    color: 'from-blue-500 to-blue-700',
    features: [
      'Phone & email support',
      'Live chat assistance',
      'Remote diagnostics',
      'Technical documentation',
      'Troubleshooting guides'
    ],
    pricing: 'Included in warranty',
    duration: 'Always available',
    warranty: 'N/A',
    popular: true
  },
  {
    id: 7,
    category: 'support',
    icon: HeadphonesIcon,
    title: 'Fleet Management Consulting',
    tagline: 'Optimize your operations',
    description: 'Expert consulting services to improve fleet efficiency, reduce costs, and maximize uptime.',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Consulting',
    color: 'from-accent-green to-green-700',
    features: [
      'Operational analysis',
      'Cost optimization strategies',
      'Route planning assistance',
      'Performance metrics tracking',
      'Custom reporting'
    ],
    pricing: 'From $2,500/month',
    duration: '3-12 months',
    warranty: 'N/A',
    popular: false
  },
  // Parts Services
  {
    id: 8,
    category: 'parts',
    icon: Package,
    title: 'Genuine Parts Supply',
    tagline: 'Original equipment quality',
    description: 'Extensive inventory of genuine OEM parts with fast delivery and warranty coverage.',
    image: 'https://placehold.co/800x600/EC4899/ffffff?text=Parts',
    color: 'from-pink-500 to-pink-700',
    features: [
      'OEM certified parts',
      'Large inventory stock',
      'Same-day delivery available',
      'Parts warranty included',
      'Bulk order discounts'
    ],
    pricing: 'Competitive pricing',
    duration: '24-48 hours',
    warranty: '1 year',
    popular: true
  },
  {
    id: 9,
    category: 'parts',
    icon: Package,
    title: 'Custom Parts Manufacturing',
    tagline: 'Specialized components on demand',
    description: 'Custom part fabrication and manufacturing for specialized or discontinued components.',
    image: 'https://placehold.co/800x600/F59E0B/ffffff?text=Custom+Parts',
    color: 'from-yellow-500 to-orange-600',
    features: [
      'Custom fabrication',
      'Reverse engineering',
      'Quality materials',
      'Precision manufacturing',
      'Technical drawings provided'
    ],
    pricing: 'Custom Quote',
    duration: '2-6 weeks',
    warranty: '1 year',
    popular: false
  },
  // Training Services
  {
    id: 10,
    category: 'training',
    icon: Users,
    title: 'Operator Training Programs',
    tagline: 'Certified professional development',
    description: 'Comprehensive training programs for vehicle operators with certification upon completion.',
    image: 'https://placehold.co/800x600/06B6D4/ffffff?text=Training',
    color: 'from-cyan-500 to-cyan-700',
    features: [
      'Hands-on training',
      'Safety procedures',
      'Operational best practices',
      'Certification program',
      'Ongoing support'
    ],
    pricing: 'From $500/person',
    duration: '1-2 weeks',
    warranty: 'N/A',
    popular: true
  },
  {
    id: 11,
    category: 'training',
    icon: Users,
    title: 'Technical Certification',
    tagline: 'Advanced technician training',
    description: 'Professional certification courses for maintenance technicians and service personnel.',
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=Certification',
    color: 'from-purple-500 to-purple-700',
    features: [
      'Advanced technical training',
      'Industry certification',
      'Practical assessments',
      'Continuing education',
      'Career development'
    ],
    pricing: 'From $1,500/person',
    duration: '3-4 weeks',
    warranty: 'N/A',
    popular: false
  },
  // Financing Services
  {
    id: 12,
    category: 'financing',
    icon: CreditCard,
    title: 'Vehicle Leasing',
    tagline: 'Flexible leasing solutions',
    description: 'Competitive leasing options with flexible terms for vehicles and equipment.',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=Leasing',
    color: 'from-primary-500 to-primary-700',
    features: [
      'Flexible lease terms',
      'Low initial payment',
      'Maintenance included options',
      'Upgrade programs',
      'Buy-out options'
    ],
    pricing: 'Custom terms',
    duration: '12-60 months',
    warranty: 'Included',
    popular: true
  },
]

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory)

  return (
    <section 
      id="services-grid"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
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
            <span className="text-sm font-semibold">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Complete Service{' '}
            <span className="gradient-text">Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Browse our comprehensive range of services designed to meet every need 
            from manufacturing to maintenance and beyond.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 shadow-md'
                }
              `}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.8, 0.25, 1]
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1.5 bg-accent-orange text-white rounded-full text-xs font-bold shadow-lg">
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-secondary-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                      {service.tagline}
                    </div>
                    
                    <h3 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-secondary-200">
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                        <div className="text-xs text-secondary-600">{service.duration}</div>
                      </div>
                      <div className="text-center">
                        <Shield className="w-5 h-5 text-accent-green mx-auto mb-1" />
                        <div className="text-xs text-secondary-600">{service.warranty}</div>
                      </div>
                      <div className="text-center">
                        <Award className="w-5 h-5 text-accent-orange mx-auto mb-1" />
                        <div className="text-xs text-secondary-600">Certified</div>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-secondary-700">
                          <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-primary-600 font-semibold">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-secondary-500">Starting from</div>
                        <div className="font-bold text-primary-600">{service.pricing}</div>
                      </div>
                      <button className="btn-primary group/btn flex items-center gap-2">
                        Details
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary inline-flex items-center gap-2">
            View Complete Service Catalog
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}

// Service Detail Modal Component
function ServiceDetailModal({ service, onClose }: { service: typeof services[0], onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Image */}
            <div className="relative h-96 md:h-auto">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Icon Badge */}
              <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-accent-orange text-white rounded-full text-sm font-bold shadow-lg">
                    Popular Choice
                  </div>
                </div>
              )}
            </div>

            {/* Right - Details */}
            <div className="p-8 md:p-12">
              <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                {service.tagline}
              </div>
              
              <h2 className="heading-3 mb-4">{service.title}</h2>
              
              <p className="body-large text-secondary-700 mb-6">
                {service.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-secondary-900">{service.duration}</div>
                  <div className="text-xs text-secondary-600">Timeline</div>
                </div>
                <div className="text-center p-4 bg-accent-green/10 rounded-xl">
                  <Shield className="w-6 h-6 text-accent-green mx-auto mb-2" />
                  <div className="text-sm font-semibold text-secondary-900">{service.warranty}</div>
                  <div className="text-xs text-secondary-600">Warranty</div>
                </div>
                <div className="text-center p-4 bg-accent-orange/10 rounded-xl">
                  <Award className="w-6 h-6 text-accent-orange mx-auto mb-2" />
                  <div className="text-sm font-semibold text-secondary-900">Certified</div>
                  <div className="text-xs text-secondary-600">Quality</div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="font-semibold text-secondary-900 mb-4">What's Included:</h3>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-secondary-600 mb-1">Pricing</div>
                    <div className="text-2xl font-bold text-primary-600">{service.pricing}</div>
                  </div>
                  <Zap className="w-10 h-10 text-primary-400" />
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <button className="btn-primary w-full">
                  Request Quote
                </button>
                <button className="btn-outline w-full">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}