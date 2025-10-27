// src/components/services/TechnologyTools.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Smartphone,
  Globe,
  BarChart3,
  MapPin,
  Shield,
  CheckCircle2,
  Wifi,
  Database,
  Cloud,
  Lock,
  Zap,
  Download
} from 'lucide-react'
import Image from 'next/image'

const techFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile Service App',
    description: 'Request service, track progress, and manage your fleet from anywhere',
    color: 'from-primary-500 to-primary-700',
    features: [
      'One-tap service requests',
      'Real-time status updates',
      'Digital service history',
      'Push notifications',
      'Technician chat',
      'Photo documentation'
    ],
    platforms: ['iOS', 'Android'],
    image: 'https://placehold.co/400x800/3B82F6/ffffff?text=Mobile+App'
  },
  {
    icon: Globe,
    title: 'Customer Web Portal',
    description: 'Comprehensive online platform for all your service management needs',
    color: 'from-accent-green to-green-700',
    features: [
      'Fleet dashboard',
      'Service scheduling',
      'Invoice management',
      'Parts ordering',
      'Document repository',
      'Analytics & insights'
    ],
    platforms: ['Web Browser'],
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Web+Portal'
  },
  {
    icon: MapPin,
    title: 'Real-Time GPS Tracking',
    description: 'Live location tracking for service vehicles and mobile units',
    color: 'from-accent-orange to-red-600',
    features: [
      'Live vehicle location',
      'Geofencing alerts',
      'Route optimization',
      'ETA notifications',
      'Historical tracking',
      'Driver behavior monitoring'
    ],
    platforms: ['Web', 'Mobile'],
    image: 'https://placehold.co/800x600/F97316/ffffff?text=GPS+Tracking'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Data-driven insights to optimize your fleet operations',
    color: 'from-purple-500 to-purple-700',
    features: [
      'Performance metrics',
      'Cost analysis',
      'Maintenance trends',
      'Custom reports',
      'Predictive analytics',
      'Export capabilities'
    ],
    platforms: ['Web', 'Mobile'],
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=Analytics'
  },
  {
    icon: Wifi,
    title: 'IoT Integration',
    description: 'Connected vehicle sensors for proactive maintenance',
    color: 'from-blue-500 to-blue-700',
    features: [
      'Engine diagnostics',
      'Fuel monitoring',
      'Temperature sensors',
      'Tire pressure alerts',
      'Battery health',
      'Predictive alerts'
    ],
    platforms: ['Cloud-based'],
    image: 'https://placehold.co/800x600/2563EB/ffffff?text=IoT+Sensors'
  },
  {
    icon: Database,
    title: 'Service Management System',
    description: 'Centralized system for complete service lifecycle management',
    color: 'from-cyan-500 to-cyan-700',
    features: [
      'Work order management',
      'Parts inventory',
      'Technician scheduling',
      'Quality control',
      'SLA monitoring',
      'Customer communication'
    ],
    platforms: ['Enterprise'],
    image: 'https://placehold.co/800x600/06B6D4/ffffff?text=Management+System'
  },
]

const integrations = [
  { name: 'SAP', logo: 'https://placehold.co/200x80/000000/ffffff?text=SAP' },
  { name: 'Oracle', logo: 'https://placehold.co/200x80/000000/ffffff?text=Oracle' },
  { name: 'Microsoft Dynamics', logo: 'https://placehold.co/200x80/000000/ffffff?text=MS+Dynamics' },
  { name: 'QuickBooks', logo: 'https://placehold.co/200x80/000000/ffffff?text=QuickBooks' },
]

const securityFeatures = [
  { icon: Lock, text: 'End-to-end encryption' },
  { icon: Shield, text: 'ISO 27001 certified' },
  { icon: Cloud, text: 'Secure cloud backup' },
  { icon: Zap, text: '99.9% uptime guarantee' },
]

export default function TechnologyTools() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.tech-card', {
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
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
                <line x1="20" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5" />
                <line x1="20" y1="20" x2="20" y2="40" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>
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
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Technology & Tools</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Digital Platform
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-300 max-w-3xl mx-auto"
          >
            Manage your entire fleet and service needs through our integrated technology 
            platform - accessible anytime, anywhere.
          </motion.p>
        </div>

        {/* Technology Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techFeatures.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="heading-5 mb-3">{tech.title}</h3>
                <p className="text-secondary-300 mb-6">{tech.description}</p>

                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-secondary-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {tech.platforms.map((platform, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-3 mb-4">Download Our Mobile App</h3>
              <p className="text-lg text-secondary-300 mb-8">
                Take control of your fleet management on the go. Request services, 
                track repairs, and stay connected with real-time updates.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-6 py-3 bg-white text-secondary-900 rounded-xl font-semibold hover:bg-secondary-100 transition-colors flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </button>
                <button className="px-6 py-3 bg-white text-secondary-900 rounded-xl font-semibold hover:bg-secondary-100 transition-colors flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Security Features */}
              <div className="grid grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5 text-accent-green" />
                    <span className="text-sm text-secondary-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[9/16] max-w-sm mx-auto">
                <Image
                  src="https://placehold.co/400x800/3B82F6/ffffff?text=Mobile+App+Screen"
                  alt="Mobile App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="heading-4 mb-8">Seamless Integrations</h3>
          <p className="text-secondary-300 mb-12 max-w-2xl mx-auto">
            Our platform integrates with your existing business systems for streamlined operations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={150}
                  height={60}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}