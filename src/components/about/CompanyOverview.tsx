// src/components/about/CompanyOverview.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  Zap,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and ethical conduct in all our operations.',
    color: 'from-primary-500 to-primary-700'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously pushing boundaries to deliver cutting-edge solutions and technologies.',
    color: 'from-accent-orange to-red-600'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Putting our customers at the heart of everything we do, ensuring their success.',
    color: 'from-accent-green to-green-700'
  },
  {
    icon: Heart,
    title: 'Excellence',
    description: 'Committed to delivering superior quality in products, services, and relationships.',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: Sparkles,
    title: 'Sustainability',
    description: 'Building a greener future through eco-friendly practices and technologies.',
    color: 'from-green-500 to-emerald-700'
  },
  {
    icon: Target,
    title: 'Accountability',
    description: 'Taking responsibility for our actions and delivering on our commitments.',
    color: 'from-blue-500 to-blue-700'
  },
]

export default function CompanyOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="company-overview"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Target className="w-4 h-4" />
            <span className="text-sm font-semibold">Who We Are</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Leading the Way in{' '}
            <span className="gradient-text">Automotive Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 leading-relaxed"
          >
            Bishoftu Automotive & Locomotive Industry stands as Ethiopia's pioneering force 
            in transportation solutions. Since our establishment in 1995, we have been at 
            the forefront of innovation, manufacturing world-class vehicles and locomotives 
            that power the nation's economic growth and connect communities across the country.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
                        className="overview-card group"
          >
            <div className="relative h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="heading-3 mb-4">Our Mission</h3>
                <p className="text-lg text-primary-100 leading-relaxed mb-6">
                  To revolutionize Ethiopia's transportation sector by delivering innovative, 
                  sustainable, and world-class automotive and locomotive solutions that drive 
                  economic growth, connect communities, and set new industry standards.
                </p>
                
                {/* Key Points */}
                <div className="space-y-3">
                  {[
                    'Manufacturing excellence and innovation',
                    'Customer-centric solutions',
                    'Sustainable and eco-friendly practices',
                    'Empowering local communities'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overview-card group"
          >
            <div className="relative h-full bg-gradient-to-br from-accent-orange to-red-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-10 h-10" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="heading-3 mb-4">Our Vision</h3>
                <p className="text-lg text-orange-100 leading-relaxed mb-6">
                  To become Africa's most trusted and innovative automotive and locomotive 
                  manufacturer, recognized globally for excellence, sustainability, and 
                  transformative impact on transportation infrastructure.
                </p>
                
                {/* Key Points */}
                <div className="space-y-3">
                  {[
                    'Regional leadership by 2030',
                    'Global recognition for quality',
                    'Carbon-neutral operations',
                    'Technology-driven innovation'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-3 mb-4"
            >
              Our <span className="gradient-text">Core Values</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="body-large text-secondary-600 max-w-3xl mx-auto"
            >
              The principles that guide our decisions, actions, and relationships with 
              stakeholders, employees, and the communities we serve.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="overview-card group"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}