// src/components/services/IndustrySolutions.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Truck,
  Train,
  Construction,
  Wheat,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Award
} from 'lucide-react'
import Image from 'next/image'

const industries = [
  {
    id: 'logistics',
    icon: Truck,
    title: 'Transportation & Logistics',
    subtitle: 'Fleet solutions for maximum efficiency',
    description: 'Comprehensive fleet management and maintenance solutions designed to keep your logistics operations running smoothly.',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=Logistics',
    color: 'from-primary-500 to-primary-700',
    stats: {
      clients: '500+',
      vehicles: '5,000+',
      uptime: '99.5%'
    },
    services: [
      'Fleet maintenance programs',
      'Route optimization consulting',
      'Fuel management solutions',
      'Driver training & certification',
      'Real-time GPS tracking',
      'Breakdown assistance 24/7'
    ],
    packages: [
      {
        name: 'Basic Fleet',
        price: 'From $499/vehicle/month',
        features: ['Scheduled maintenance', 'Parts supply', 'Technical support']
      },
      {
        name: 'Professional Fleet',
        price: 'From $799/vehicle/month',
        features: ['All Basic features', 'GPS tracking', 'Fuel optimization', 'Priority service']
      },
      {
        name: 'Enterprise Fleet',
        price: 'Custom pricing',
        features: ['All Professional features', 'Dedicated account manager', 'Custom reporting', '24/7 emergency support']
      }
    ],
    caseStudy: 'Increased fleet uptime by 35% for major logistics company'
  },
  {
    id: 'railway',
    icon: Train,
    title: 'Railway Operations',
    subtitle: 'Keeping trains on track',
    description: 'Specialized maintenance and support services for railway operators, from locomotives to infrastructure.',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Railway',
    color: 'from-accent-green to-green-700',
    stats: {
      clients: '50+',
      locomotives: '200+',
      uptime: '98.8%'
    },
    services: [
      'Locomotive maintenance & repair',
      'Track inspection services',
      'Signal system maintenance',
      'Rolling stock overhaul',
      'Safety compliance audits',
      'Operator training programs'
    ],
    packages: [
      {
        name: 'Standard Rail',
        price: 'From $5,000/locomotive/month',
        features: ['Preventive maintenance', 'Emergency repairs', 'Parts supply']
      },
      {
        name: 'Premium Rail',
        price: 'From $8,500/locomotive/month',
        features: ['All Standard features', 'Predictive diagnostics', 'Performance optimization', 'Priority response']
      },
      {
        name: 'Total Rail Care',
        price: 'Custom pricing',
        features: ['All Premium features', 'Complete fleet management', 'Infrastructure support', 'Dedicated engineering team']
      }
    ],
    caseStudy: 'Reduced maintenance costs by 40% for national railway operator'
  },
  {
    id: 'construction',
    icon: Construction,
    title: 'Construction & Mining',
    subtitle: 'Heavy-duty equipment solutions',
    description: 'Robust maintenance and support for construction and mining equipment operating in demanding environments.',
    image: 'https://placehold.co/800x600/F97316/ffffff?text=Construction',
    color: 'from-accent-orange to-red-600',
    stats: {
      clients: '200+',
      equipment: '3,000+',
      uptime: '97.5%'
    },
    services: [
      'Heavy equipment maintenance',
      'On-site repair services',
      'Equipment rental programs',
      'Operator training & safety',
      'Parts & consumables supply',
      'Equipment performance analytics'
    ],
    packages: [
      {
        name: 'Basic Heavy Duty',
        price: 'From $1,200/unit/month',
        features: ['Scheduled servicing', 'Breakdown support', 'Parts warranty']
      },
      {
        name: 'Professional Heavy Duty',
        price: 'From $1,800/unit/month',
        features: ['All Basic features', 'On-site service', 'Equipment monitoring', 'Extended hours support']
      },
      {
        name: 'Enterprise Heavy Duty',
        price: 'Custom pricing',
        features: ['All Professional features', 'Equipment replacement', 'Performance guarantees', 'Dedicated field team']
      }
    ],
    caseStudy: 'Minimized downtime by 50% for major mining operation'
  },
  {
    id: 'agriculture',
    icon: Wheat,
    title: 'Agriculture',
    subtitle: 'Farm equipment reliability',
    description: 'Seasonal maintenance and support services tailored to agricultural equipment and farming operations.',
    image: 'https://placehold.co/800x600/22C55E/ffffff?text=Agriculture',
    color: 'from-green-500 to-green-700',
    stats: {
      clients: '300+',
      equipment: '2,500+',
      uptime: '96%'
    },
    services: [
      'Tractor maintenance programs',
      'Harvest season support',
      'Irrigation equipment service',
      'Pre-season equipment checks',
      'Mobile repair units',
      'Agricultural equipment training'
    ],
    packages: [
      {
        name: 'Seasonal Basic',
        price: 'From $299/unit/month',
        features: ['Seasonal maintenance', 'Parts supply', 'Technical hotline']
      },
      {
        name: 'Year-Round Care',
        price: 'From $499/unit/month',
        features: ['All Seasonal features', 'Off-season storage prep', 'Emergency support', 'Equipment monitoring']
      },
      {
        name: 'Farm Fleet Total',
        price: 'Custom pricing',
        features: ['All Year-Round features', 'Equipment replacement', 'Harvest priority service', 'Agronomist consultation']
      }
    ],
    caseStudy: 'Ensured 100% equipment availability during harvest season'
  },
  {
    id: 'government',
    icon: Building2,
    title: 'Government & Public Sector',
    subtitle: 'Public service vehicle solutions',
    description: 'Comprehensive fleet management for government agencies and public transportation services.',
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=Government',
    color: 'from-purple-500 to-purple-700',
    stats: {
      clients: '75+',
      vehicles: '4,000+',
      uptime: '98%'
    },
    services: [
      'Public bus fleet maintenance',
      'Government vehicle servicing',
      'Compliance & reporting',
      'Emergency vehicle priority service',
      'Driver safety training',
      'Fleet modernization consulting'
    ],
    packages: [
      {
        name: 'Public Service Basic',
        price: 'From $399/vehicle/month',
        features: ['Regular maintenance', 'Compliance documentation', 'Technical support']
      },
      {
        name: 'Public Service Plus',
        price: 'From $649/vehicle/month',
        features: ['All Basic features', 'Priority emergency response', 'Fleet analytics', 'Extended warranty']
      },
      {
        name: 'Public Service Total',
        price: 'Custom pricing',
        features: ['All Plus features', 'Complete fleet management', 'Budget planning', 'Dedicated liaison officer']
      }
    ],
    caseStudy: 'Improved public transport reliability by 45%'
  },
  {
    id: 'private',
    icon: Users,
    title: 'Private Fleet Operators',
    subtitle: 'Custom corporate fleet solutions',
    description: 'Tailored fleet management solutions for private companies operating diverse vehicle fleets.',
    image: 'https://placehold.co/800x600/EC4899/ffffff?text=Private+Fleet',
    color: 'from-pink-500 to-pink-700',
    stats: {
      clients: '400+',
      vehicles: '6,000+',
      uptime: '99%'
    },
    services: [
      'Corporate fleet maintenance',
      'Executive vehicle service',
      'Multi-site support',
      'Fleet optimization consulting',
      'Green fleet transition',
      'Cost management programs'
    ],
    packages: [
      {
        name: 'Corporate Basic',
        price: 'From $349/vehicle/month',
        features: ['Scheduled maintenance', 'Parts supply', 'Monthly reporting']
      },
      {
        name: 'Corporate Professional',
        price: 'From $599/vehicle/month',
        features: ['All Basic features', 'Executive priority', 'Fleet analytics', 'Cost optimization']
      },
      {
        name: 'Corporate Enterprise',
        price: 'Custom pricing',
        features: ['All Professional features', 'White-glove service', 'Custom SLA', 'Strategic consulting']
      }
    ],
    caseStudy: 'Reduced total cost of ownership by 30% for corporate fleet'
  },
]

export default function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.industry-card', {
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
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #3B82F6 12%, transparent 12.5%, transparent 87%, #3B82F6 87.5%)`,
          backgroundSize: '80px 140px'
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
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Industry Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Tailored Solutions for{' '}
            <span className="gradient-text">Your Industry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            We understand that different industries have unique needs. Our specialized 
            service packages are designed to address your specific challenges.
          </motion.p>
        </div>

        {/* Industry Selector */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.id}
              className="industry-card group text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIndustry(industry)}
              whileHover={{ y: -5 }}
            >
              <div className={`
                relative bg-white rounded-2xl p-6 shadow-lg transition-all
                ${selectedIndustry.id === industry.id 
                  ? 'ring-4 ring-primary-500 shadow-2xl' 
                  : 'hover:shadow-xl'
                }
              `}>
                <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-5 mb-2 group-hover:text-primary-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-secondary-600 line-clamp-2">
                  {industry.subtitle}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected Industry Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image & Stats */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${selectedIndustry.color} rounded-2xl flex items-center justify-center`}>
                  <selectedIndustry.icon className="w-8 h-8 text-white" />
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedIndustry.title}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedIndustry.stats).map(([key, value], index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                        <div className="text-2xl font-bold text-white">{value as string}</div>
                        <div className="text-xs text-white/80 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                    {selectedIndustry.subtitle}
                  </h4>
                  <p className="body-large text-secondary-700">
                    {selectedIndustry.description}
                  </p>
                </div>

                {/* Services Included */}
                <div className="mb-8">
                  <h4 className="font-semibold text-secondary-900 mb-4">Our Services Include:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedIndustry.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Packages */}
                <div className="mb-8">
                  <h4 className="font-semibold text-secondary-900 mb-4">Service Packages:</h4>
                  <div className="space-y-4">
                    {selectedIndustry.packages.map((pkg, idx) => (
                      <div key={idx} className="p-4 border-2 border-secondary-200 rounded-xl hover:border-primary-500 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-secondary-900">{pkg.name}</h5>
                          <span className="text-sm font-bold text-primary-600">{pkg.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {pkg.features.map((feature, fidx) => (
                            <span key={fidx} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-primary-600 uppercase mb-1">Success Story</div>
                      <div className="text-sm text-secondary-700">{selectedIndustry.caseStudy}</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center gap-2">
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="btn-outline">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}