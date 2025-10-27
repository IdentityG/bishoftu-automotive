'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle, 
  Factory,
  Users,
  Globe,
  Zap,
  Shield,
  Award
} from 'lucide-react'
import { cn } from '@/lib/utils'
import CountUp from 'react-countup'

const features = [
  {
    icon: Factory,
    title: 'State-of-the-Art Facilities',
    description: 'Modern manufacturing plants equipped with cutting-edge technology',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '5000+ skilled professionals dedicated to excellence',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across Africa and international markets',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'ISO certified with rigorous quality control standards',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 mb-6"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">About Us</span>
            </motion.div>

            {/* Heading */}
            <h2 className="heading-2 text-secondary-900 mb-6">
              Pioneering Ethiopia's Industrial
              <span className="block mt-2 gradient-text">Revolution Since 1973</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Bishoftu Automotive and Locomotive Industry stands as Ethiopia's premier manufacturer, 
              combining five decades of expertise with cutting-edge technology to deliver world-class 
              vehicles and rail solutions.
            </p>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl mb-8"
            >
              <h3 className="font-semibold text-secondary-900 mb-2">Our Mission</h3>
              <p className="text-secondary-700 italic">
                "To drive Africa's transportation future through innovative manufacturing, 
                sustainable practices, and unwavering commitment to quality."
              </p>
            </motion.div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'Over 50,000 vehicles manufactured and delivered',
                'Leading provider of locomotive solutions in East Africa',
                'Committed to sustainable and eco-friendly practices',
                'Continuous innovation and technology advancement',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/history"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-primary-200 text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                <span>Our History</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              style={{ y, scale }}
              className="relative z-10"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/image/bg3.jpg"
                  alt="Bishoftu Automotive Factory"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay with Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Years Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1, type: "spring" }}
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      <CountUp
                        start={0}
                        end={50}
                        duration={2}
                        suffix="+"
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </div>
                    <div className="text-sm text-secondary-600 font-medium">Years</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent-orange/20 rounded-3xl blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"
            />

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-xl p-6 z-20"
            >
              <Zap className="w-8 h-8 text-accent-orange mb-2" />
              <div className="text-sm font-semibold text-secondary-900">Innovation</div>
              <div className="text-xs text-secondary-600">Driven</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-6 bg-gradient-to-br from-white to-secondary-50 rounded-2xl border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary-600">{feature.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}