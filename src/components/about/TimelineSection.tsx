// src/components/about/TimelineSection.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Calendar,
  Award,
  TrendingUp,
  Factory,
  Users,
  Globe,
  Rocket,
  Building2,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'

const milestones = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'Bishoftu Automotive was established with a vision to revolutionize Ethiopia\'s transportation sector.',
    icon: Rocket,
    image: 'https://placehold.co/800x600/64748B/ffffff?text=1995+Foundation',
    highlights: [
      'First manufacturing facility established',
      '50 initial employees',
      'Partnership with government initiated'
    ],
    stats: { employees: 50, facilities: 1, revenue: '$1M' }
  },
  {
    year: '2000',
    title: 'First Major Contract',
    description: 'Secured landmark contract to supply 100 heavy-duty trucks to national logistics companies.',
    icon: Award,
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=2000+Contract',
    highlights: [
      '100 trucks delivered successfully',
      'ISO 9001 certification achieved',
      'Expanded to 200 employees'
    ],
    stats: { employees: 200, facilities: 2, revenue: '$15M' }
  },
  {
    year: '2005',
    title: 'Railway Division Launch',
    description: 'Entered the locomotive manufacturing sector, marking a pivotal expansion of our capabilities.',
    icon: Factory,
    image: 'https://placehold.co/800x600/10B981/ffffff?text=2005+Railway',
    highlights: [
      'First locomotive prototype completed',
      'R&D center established',
      'Technology partnerships formed'
    ],
    stats: { employees: 500, facilities: 3, revenue: '$50M' }
  },
  {
    year: '2010',
    title: 'International Expansion',
    description: 'Began exporting to neighboring countries, establishing Bishoftu as a regional leader.',
    icon: Globe,
    image: 'https://placehold.co/800x600/F97316/ffffff?text=2010+Expansion',
    highlights: [
      'Export to 5 African countries',
      'International quality certifications',
      '1,000+ employees milestone'
    ],
    stats: { employees: 1000, facilities: 5, revenue: '$120M' }
  },
  {
    year: '2015',
    title: 'Innovation Center',
    description: 'Opened state-of-the-art R&D facility focusing on electric and sustainable technologies.',
    icon: Sparkles,
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=2015+Innovation',
    highlights: [
      'Electric locomotive development',
      'Green technology adoption',
      'Patent portfolio initiated'
    ],
    stats: { employees: 1500, facilities: 7, revenue: '$250M' }
  },
  {
    year: '2020',
    title: 'Industry Leadership',
    description: 'Recognized as Ethiopia\'s leading automotive manufacturer with multiple industry awards.',
    icon: TrendingUp,
    image: 'https://placehold.co/800x600/2563EB/ffffff?text=2020+Leadership',
    highlights: [
      'Market leader in Ethiopia',
      '15+ international awards',
      'Sustainability initiatives launched'
    ],
    stats: { employees: 2000, facilities: 10, revenue: '$400M' }
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Continuing innovation with AI-powered systems and carbon-neutral manufacturing goals.',
    icon: Building2,
    image: 'https://placehold.co/800x600/10B981/ffffff?text=2024+Future',
    highlights: [
      'AI integration in production',
      'Carbon neutrality roadmap',
      'Regional hub expansion'
    ],
    stats: { employees: 2500, facilities: 12, revenue: '$500M+' }
  },
]

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const activeMilestone = milestones[activeIndex]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handlePrevious = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1))
  }

  return (
    <section 
      id="timeline"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl" />
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
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Three Decades of{' '}
            <span className="gradient-text">Innovation & Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            From a small workshop to a leading manufacturer - explore the milestones 
            that shaped our journey to excellence.
          </motion.p>
        </div>

        {/* Interactive Timeline Display */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Timeline Content */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait" custom={direction}>
               <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Year Badge */}
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                      <activeMilestone.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary-600">{activeMilestone.year}</div>
                      <div className="text-sm text-secondary-500 uppercase tracking-wide">Milestone</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="heading-3 mb-4">{activeMilestone.title}</h3>
                  <p className="body-large text-secondary-600 mb-6">
                    {activeMilestone.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {activeMilestone.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-secondary-700">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <Users className="w-6 h-6 text-primary-500 mb-2" />
                      <div className="text-2xl font-bold text-primary-600">{activeMilestone.stats.employees}</div>
                      <div className="text-xs text-secondary-600">Employees</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <Factory className="w-6 h-6 text-accent-orange mb-2" />
                      <div className="text-2xl font-bold text-accent-orange">{activeMilestone.stats.facilities}</div>
                      <div className="text-xs text-secondary-600">Facilities</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <TrendingUp className="w-6 h-6 text-accent-green mb-2" />
                      <div className="text-2xl font-bold text-accent-green">{activeMilestone.stats.revenue}</div>
                      <div className="text-xs text-secondary-600">Revenue</div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-4 mt-8">
                    <button
                      onClick={handlePrevious}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="text-sm text-secondary-600">
                      {activeIndex + 1} / {milestones.length}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={activeMilestone.image}
                    alt={activeMilestone.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm font-semibold mb-1">{activeMilestone.year}</div>
                    <div className="text-lg font-bold">{activeMilestone.title}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Year Navigation Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-full max-w-5xl">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200 -translate-y-1/2" />

              {/* Timeline Items */}
              <div className="relative flex justify-between">
                {milestones.map((milestone, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1)
                      setActiveIndex(index)
                    }}
                    className="timeline-item group relative flex flex-col items-center"
                  >
                    {/* Dot */}
                    <div className={`
                      w-6 h-6 rounded-full border-4 border-white transition-all duration-300
                      ${activeIndex === index 
                        ? 'bg-primary-500 scale-150 shadow-lg' 
                        : 'bg-secondary-300 hover:bg-primary-400 hover:scale-125'
                      }
                    `} />

                    {/* Year Label */}
                    <div className={`
                      mt-4 text-sm font-semibold transition-all
                      ${activeIndex === index 
                        ? 'text-primary-600 scale-110' 
                        : 'text-secondary-500 group-hover:text-primary-600'
                      }
                    `}>
                      {milestone.year}
                    </div>

                    {/* Hover Title */}
                    <div className={`
                      absolute top-full mt-8 px-3 py-2 bg-white rounded-lg shadow-lg
                      text-xs font-medium text-secondary-900 whitespace-nowrap
                      opacity-0 group-hover:opacity-100 transition-opacity
                      pointer-events-none
                    `}>
                      {milestone.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Message (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://placehold.co/400x400/64748B/ffffff?text=CEO"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="md:col-span-2">
              <div className="text-6xl font-serif text-primary-300 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-6">
                Our journey from a small workshop to Ethiopia's leading automotive manufacturer 
                is a testament to our team's dedication, our customers' trust, and our 
                unwavering commitment to excellence. As we look to the future, we remain 
                focused on innovation, sustainability, and making a positive impact on the 
                communities we serve.
              </blockquote>
              <div>
                <div className="font-bold text-xl">Abebe Tadesse</div>
                <div className="text-primary-200">Founder & CEO</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
                