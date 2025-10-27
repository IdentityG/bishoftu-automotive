// src/components/home/WhyChooseUs.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Award,
  Clock,
  Shield,
  Users,
  Zap,
  TrendingUp,
  CheckCircle2,
  Star,
  Globe,
  Headphones,
  Leaf,
  Target
} from 'lucide-react'
import CountUp from 'react-countup'

const uspFeatures = [
  {
    icon: Award,
    title: 'Industry Leading Quality',
    description: 'ISO certified manufacturing processes ensuring premium quality in every product.',
    color: 'bg-primary-500',
    stats: { value: 100, suffix: '%', label: 'Quality Assured' }
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and customer service for uninterrupted operations.',
    color: 'bg-accent-orange',
    stats: { value: 24, suffix: '/7', label: 'Available' }
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: 'Industry-best warranty coverage with comprehensive after-sales service.',
    color: 'bg-accent-green',
    stats: { value: 5, suffix: ' Years', label: 'Warranty' }
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Over 500+ skilled engineers and technicians committed to excellence.',
    color: 'bg-secondary-600',
    stats: { value: 500, suffix: '+', label: 'Experts' }
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient logistics network ensuring quick delivery across the country.',
    color: 'bg-primary-600',
    stats: { value: 48, suffix: 'hrs', label: 'Delivery' }
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'Products meeting international quality and safety standards.',
    color: 'bg-accent-orange',
    stats: { value: 15, suffix: '+', label: 'Countries' }
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable manufacturing practices reducing environmental impact.',
    color: 'bg-accent-green',
    stats: { value: 40, suffix: '%', label: 'Emission Cut' }
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored solutions designed to meet your specific requirements.',
    color: 'bg-primary-500',
    stats: { value: 1000, suffix: '+', label: 'Custom Projects' }
  },
]

const certifications = [
  { name: 'ISO 9001:2015', image: '/images/certs/iso-9001.png', year: '2015' },
  { name: 'ISO 14001', image: '/images/certs/iso-14001.png', year: '2018' },
  { name: 'OHSAS 18001', image: '/images/certs/ohsas.png', year: '2019' },
  { name: 'CE Marking', image: '/images/certs/ce.png', year: '2020' },
  { name: 'RoHS Compliant', image: '/images/certs/rohs.png', year: '2021' },
]

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate USP cards
      gsap.from('.usp-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Animate certification badges
      gsap.from('.cert-badge', {
        scrollTrigger: {
          trigger: '.certifications-container',
          start: 'top 80%',
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })

      // Parallax effect for background shapes
      gsap.to('.why-shape-1', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: 150,
        rotation: 45,
      })

      gsap.to('.why-shape-2', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        rotation: -30,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % uspFeatures.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="why-shape-1 absolute top-20 -right-32 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        <div className="why-shape-2 absolute bottom-20 -left-32 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Your Trusted Partner for{' '}
            <span className="gradient-text">Automotive Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            With decades of expertise and commitment to innovation, we deliver 
            world-class automotive and locomotive solutions that drive your success.
          </motion.p>
        </div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {uspFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="usp-card group relative"
              onMouseEnter={() => setActiveFeature(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`
                relative p-6 bg-white rounded-2xl shadow-lg
                border-2 transition-all duration-300
                ${activeFeature === index 
                  ? 'border-primary-500 shadow-2xl scale-105' 
                  : 'border-transparent hover:border-primary-200 hover:shadow-xl'
                }
              `}>
                {/* Icon Container */}
                <div className={`
                  w-16 h-16 ${feature.color} rounded-xl
                  flex items-center justify-center mb-4
                  transition-all duration-300
                  ${activeFeature === index ? 'scale-110 rotate-6' : 'group-hover:scale-110'}
                `}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="body-small text-secondary-600 mb-4">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="pt-4 border-t border-secondary-200">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {isInView && (
                      <CountUp
                        end={feature.stats.value}
                        duration={2.5}
                        suffix={feature.stats.suffix}
                      />
                    )}
                  </div>
                  <div className="text-xs text-secondary-500 uppercase tracking-wide">
                    {feature.stats.label}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300
                  bg-gradient-to-br from-primary-500/5 to-transparent
                  ${activeFeature === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
              <h3 className="heading-4">How We Compare</h3>
              <p className="text-primary-100 mt-2">
                See why industry leaders choose Bishoftu Automotive
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-secondary-200">
                    <th className="text-left p-6 font-semibold text-secondary-700">Features</th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        Bishoftu
                      </div>
                    </th>
                    <th className="p-6 text-center text-secondary-600">Competitor A</th>
                    <th className="p-6 text-center text-secondary-600">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Quality Certification', us: true, compA: true, compB: false },
                    { feature: '24/7 Support', us: true, compA: false, compB: true },
                    { feature: 'Custom Solutions', us: true, compA: true, compB: false },
                    { feature: 'Extended Warranty (5+ years)', us: true, compA: false, compB: false },
                    { feature: 'Fast Delivery (48hrs)', us: true, compA: false, compB: true },
                    { feature: 'Eco-Friendly Manufacturing', us: true, compA: false, compB: false },
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-secondary-100 hover:bg-secondary-50 transition-colors"
                    >
                      <td className="p-6 font-medium text-secondary-900">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.us ? (
                          <CheckCircle2 className="w-6 h-6 text-accent-green mx-auto" />
                        ) : (
                          <div className="w-6 h-6 border-2 border-secondary-300 rounded-full mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.compA ? (
                          <CheckCircle2 className="w-6 h-6 text-secondary-400 mx-auto" />
                        ) : (
                          <div className="w-6 h-6 border-2 border-secondary-300 rounded-full mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.compB ? (
                          <CheckCircle2 className="w-6 h-6 text-secondary-400 mx-auto" />
                        ) : (
                          <div className="w-6 h-6 border-2 border-secondary-300 rounded-full mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Certifications Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="certifications-container"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">
              Certified <span className="gradient-text">Excellence</span>
            </h3>
            <p className="body-large text-secondary-600">
              Our commitment to quality is backed by international certifications
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-badge group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center border-2 border-secondary-100 group-hover:border-primary-300 transition-colors">
                    <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-2 flex items-center justify-center">
                      <Award className="w-10 h-10 text-primary-500" />
                    </div>
                    <div className="text-xs font-bold text-secondary-900 text-center">
                      {cert.name}
                    </div>
                    <div className="text-xs text-secondary-500 mt-1">
                      Since {cert.year}
                    </div>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="/about" className="btn-primary inline-flex items-center gap-2">
            Learn More About Us
            <TrendingUp className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}