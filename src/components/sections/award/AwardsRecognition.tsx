// src/components/home/AwardsRecognition.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Award,
  Trophy,
  Medal,
  Star,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'

const awards = [
  {
    id: 1,
    title: 'Best Transportation Company',
    organization: 'East Africa Business Awards',
    year: '2023',
    category: 'Excellence',
    icon: Trophy,
    image: 'https://placehold.co/400x400/FFD700/ffffff?text=Award+1',
    description: 'Recognized for outstanding contributions to the transportation sector.',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 2,
    title: 'Innovation Leader Award',
    organization: 'African Tech Summit',
    year: '2023',
    category: 'Innovation',
    icon: Sparkles,
    image: 'https://placehold.co/400x400/3B82F6/ffffff?text=Award+2',
    description: 'For groundbreaking advancements in electric locomotive technology.',
    color: 'from-primary-500 to-primary-700'
  },
  {
    id: 3,
    title: 'Sustainability Excellence',
    organization: 'Green Business Forum',
    year: '2023',
    category: 'Environment',
    icon: Globe,
    image: 'https://placehold.co/400x400/10B981/ffffff?text=Award+3',
    description: 'Commitment to eco-friendly manufacturing and carbon reduction.',
    color: 'from-accent-green to-green-700'
  },
  {
    id: 4,
    title: 'Employer of the Year',
    organization: 'HR Excellence Awards',
    year: '2022',
    category: 'Workplace',
    icon: Users,
    image: 'https://placehold.co/400x400/F97316/ffffff?text=Award+4',
    description: 'Outstanding workplace culture and employee development programs.',
    color: 'from-accent-orange to-red-600'
  },
  {
    id: 5,
    title: 'Quality Assurance Excellence',
    organization: 'ISO Certification Board',
    year: '2022',
    category: 'Quality',
    icon: Medal,
    image: 'https://placehold.co/400x400/8B5CF6/ffffff?text=Award+5',
    description: 'Maintaining highest standards in product quality and safety.',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 6,
    title: 'Export Excellence Award',
    organization: 'Ministry of Trade',
    year: '2022',
    category: 'Trade',
    icon: TrendingUp,
    image: 'https://placehold.co/400x400/2563EB/ffffff?text=Award+6',
    description: 'Outstanding performance in international trade and exports.',
    color: 'from-blue-500 to-blue-700'
  },
]

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management',
    year: '2015',
    color: 'bg-primary-500'
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    year: '2018',
    color: 'bg-accent-green'
  },
  {
    name: 'OHSAS 18001',
    description: 'Occupational Health & Safety',
    year: '2019',
    color: 'bg-accent-orange'
  },
  {
    name: 'CE Certification',
    description: 'European Conformity',
    year: '2020',
    color: 'bg-secondary-600'
  },
]

const mediaFeatures = [
  {
    outlet: 'Financial Times',
    title: 'How Bishoftu is Revolutionizing African Transportation',
    date: 'Dec 2023',
    logo: 'https://placehold.co/200x80/000000/ffffff?text=FT'
  },
  {
    outlet: 'Forbes Africa',
    title: 'Top 50 Most Innovative Companies in Africa',
    date: 'Nov 2023',
    logo: 'https://placehold.co/200x80/000000/ffffff?text=Forbes'
  },
  {
    outlet: 'Bloomberg',
    title: 'Ethiopia\'s Railway Renaissance',
    date: 'Oct 2023',
    logo: 'https://placehold.co/200x80/000000/ffffff?text=Bloomberg'
  },
  {
    outlet: 'Reuters',
    title: 'Green Technology in African Manufacturing',
    date: 'Sep 2023',
    logo: 'https://placehold.co/200x80/000000/ffffff?text=Reuters'
  },
]

const achievements = [
  { year: '2023', count: 6, milestone: 'Major Awards Won' },
  { year: '2023', count: 15, milestone: 'International Certifications' },
  { year: '2022', count: 25, milestone: 'Industry Recognition' },
  { year: '2021', count: 10, milestone: 'Excellence Awards' },
]

export default function AwardsRecognition() {
  const [selectedAward, setSelectedAward] = useState(awards[0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate award cards
      gsap.from('.award-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })

      // Animate timeline
      gsap.from('.achievement-item', {
        scrollTrigger: {
          trigger: '.achievements-timeline',
          start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      })

      // Animate certifications
      gsap.from('.cert-badge', {
        scrollTrigger: {
          trigger: '.certifications-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">Awards & Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Celebrated for{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-accent-orange bg-clip-text text-transparent">
              Excellence & Innovation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-300 max-w-3xl mx-auto"
          >
            Our commitment to excellence has earned us prestigious recognition 
            from industry leaders and international organizations.
          </motion.p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              className="award-card group cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => setSelectedAward(award)}
            >
              <div className={`
                relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                hover:border-yellow-400/50 transition-all duration-300
                ${selectedAward.id === award.id ? 'ring-2 ring-yellow-400' : ''}
              `}>
                {/* Award Icon */}
                <div className={`
                  w-20 h-20 bg-gradient-to-br ${award.color} rounded-2xl
                  flex items-center justify-center mb-4
                  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12
                `}>
                  <award.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold mb-3">
                    {award.year}
                  </span>
                  <h3 className="heading-5 mb-2">{award.title}</h3>
                  <p className="text-sm text-secondary-300 mb-2">{award.organization}</p>
                  <p className="text-xs text-secondary-400">{award.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs">
                    {award.category}
                  </span>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="achievements-timeline mb-20"
        >
          <h3 className="heading-3 text-center mb-12">Our Journey of Excellence</h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-primary-500 to-accent-green transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-item relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="w-5/12">
                      <div className={`p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-4xl font-bold text-yellow-400 mb-2">
                          {achievement.count}+
                        </div>
                        <div className="text-lg font-semibold mb-1">{achievement.milestone}</div>
                        <div className="text-sm text-secondary-300">{achievement.year}</div>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-accent-orange rounded-full flex items-center justify-center border-4 border-secondary-900 shadow-xl z-10">
                        <Trophy className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="w-5/12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="certifications-grid mb-20"
        >
          <h3 className="heading-3 text-center mb-12">International Certifications</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-badge group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all">
                  <div className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-center mb-2">{cert.name}</h4>
                  <p className="text-sm text-secondary-300 text-center mb-2">{cert.description}</p>
                  <div className="text-xs text-center text-secondary-400">Since {cert.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="heading-3 text-center mb-12">Featured In</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mediaFeatures.map((feature, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={feature.logo}
                      alt={feature.outlet}
                      width={80}
                      height={80}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold">{feature.outlet}</h4>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-secondary-300 mb-2">{feature.title}</p>
                    <div className="text-xs text-secondary-400">{feature.date}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/about/awards"
            className="btn-primary inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-secondary-100"
          >
            View All Awards & Certifications
            <Trophy className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}