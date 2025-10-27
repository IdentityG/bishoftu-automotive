// src/components/about/InnovationLab.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Lightbulb,
  Clock,
  Cpu,
  GraduationCap,
  Zap,
  Brain,
  Rocket,
  Code,
  Database,
  Shield,
  Award,
  TrendingUp,
  Users,
  FlaskConical,
  Microscope,
  Atom,
  Binary,
  CircuitBoard,
  Play,
  X,
  ChevronRight,
  FileText,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'

const innovationAreas = [
  {
    id: 1,
    icon: Zap,
    title: 'Electric Propulsion',
    description: 'Next-generation electric locomotive and vehicle technology',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Electric+Tech',
    color: 'from-accent-green to-green-700',
    progress: 92,
    team: 45,
    patents: 12,
    projects: 8,
    highlights: [
      'Zero-emission electric locomotives',
      'Advanced battery management systems',
      'Regenerative braking technology',
      'Fast-charging infrastructure',
      'Energy efficiency optimization'
    ],
    achievements: [
      'First Ethiopian electric locomotive prototype',
      '40% energy consumption reduction',
      '12 patents filed in electric propulsion'
    ]
  },
  {
    id: 2,
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems for predictive maintenance and automation',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=AI+Systems',
    color: 'from-primary-500 to-primary-700',
    progress: 88,
    team: 38,
    patents: 8,
    projects: 12,
    highlights: [
      'AI-powered diagnostics',
      'Predictive maintenance algorithms',
      'Automated quality control',
      'Smart fleet management',
      'Real-time performance optimization'
    ],
    achievements: [
      '95% accuracy in fault prediction',
      '30% reduction in maintenance costs',
      'Industry-leading AI implementation'
    ]
  },
  {
    id: 3,
    icon: Atom,
    title: 'Advanced Materials',
    description: 'Research in lightweight and durable composite materials',
    image: 'https://placehold.co/800x600/F97316/ffffff?text=Materials',
    color: 'from-accent-orange to-red-600',
    progress: 85,
    team: 32,
    patents: 15,
    projects: 6,
    highlights: [
      'Carbon fiber composites',
      'High-strength aluminum alloys',
      'Corrosion-resistant coatings',
      'Thermal management materials',
      'Sustainable material alternatives'
    ],
    achievements: [
      '25% weight reduction achieved',
      '15+ material patents',
      'Industry partnerships established'
    ]
  },
  {
    id: 4,
    icon: Database,
    title: 'IoT & Connectivity',
    description: 'Connected vehicle systems and smart infrastructure',
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=IoT',
    color: 'from-purple-500 to-purple-700',
    progress: 90,
    team: 28,
    patents: 6,
    projects: 10,
    highlights: [
      'Real-time vehicle tracking',
      'Remote diagnostics',
      'Cloud-based fleet management',
      'Sensor integration',
      'Data analytics platform'
    ],
    achievements: [
      'Connected 1000+ vehicles',
      '99.9% system uptime',
      'Real-time data processing'
    ]
  },
]

const rdProjects = [
  {
    id: 1,
    title: 'Autonomous Railway Systems',
    status: 'In Progress',
    completion: 75,
    team: 'Automation Team',
    timeline: 'Q4 2024',
    icon: Rocket,
    color: 'text-primary-500'
  },
  {
    id: 2,
    title: 'Hydrogen Fuel Cell Integration',
    status: 'Research Phase',
    completion: 45,
    team: 'Energy Research',
    timeline: 'Q2 2025',
    icon: FlaskConical,
    color: 'text-accent-green'
  },
  {
    id: 3,
    title: 'Smart Manufacturing 4.0',
    status: 'Testing',
    completion: 85,
    team: 'Production Innovation',
    timeline: 'Q3 2024',
    icon: CircuitBoard,
    color: 'text-accent-orange'
  },
  {
    id: 4,
    title: 'Sustainable Materials Lab',
    status: 'Active',
    completion: 60,
    team: 'Materials Science',
    timeline: 'Q1 2025',
    icon: Microscope,
    color: 'text-purple-500'
  },
]

const patents = [
  { year: '2024', count: 8, category: 'Electric Systems' },
  { year: '2023', count: 12, category: 'AI & Automation' },
  { year: '2022', count: 15, category: 'Materials Science' },
  { year: '2021', count: 10, category: 'IoT Solutions' },
  { year: '2020', count: 5, category: 'Safety Systems' },
]

export default function InnovationLab() {
  const [selectedArea, setSelectedArea] = useState(innovationAreas[0])
  const [showVideo, setShowVideo] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.innovation-card', {
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
      id="innovation"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl" />
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#3B82F6" />
                <line x1="50" y1="50" x2="100" y2="50" stroke="#3B82F6" strokeWidth="1" />
                <line x1="50" y1="50" x2="50" y2="100" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-semibold">Innovation Lab</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Pioneering{' '}
            <span className="gradient-text">Tomorrow's Technology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Our state-of-the-art R&D facilities drive breakthrough innovations in automotive 
            and locomotive technology, shaping the future of transportation.
          </motion.p>
        </div>

        {/* Innovation Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, value: '150+', label: 'R&D Engineers', color: 'bg-primary-500' },
            { icon: FlaskConical, value: '35+', label: 'Active Projects', color: 'bg-accent-green' },
            { icon: Award, value: '50+', label: 'Patents Filed', color: 'bg-accent-orange' },
            { icon: TrendingUp, value: '$25M', label: 'Annual Investment', color: 'bg-purple-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-1">{stat.value}</div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Areas */}
        <div className="mb-16">
          {/* Area Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {innovationAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all
                  ${selectedArea.id === area.id
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'bg-white text-secondary-700 hover:bg-secondary-100 shadow-md'
                  }
                `}
              >
                <area.icon className="w-5 h-5" />
                {area.title}
              </button>
            ))}
          </div>

          {/* Selected Area Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArea.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Image & Video */}
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={selectedArea.image}
                    alt={selectedArea.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </button>

                  {/* Icon Badge */}
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${selectedArea.color} rounded-2xl flex items-center justify-center`}>
                    <selectedArea.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Progress Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-xs text-secondary-600 mb-1">Development Progress</div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-secondary-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${selectedArea.color}`}
                          style={{ width: `${selectedArea.progress}%` }}
                        />
                      </div>
                      <span className="text-xl font-bold text-primary-600">{selectedArea.progress}%</span>
                    </div>
                  </div>
                </div>

                {/* Right - Details */}
                <div className="p-8 md:p-12">
                  <h3 className="heading-3 mb-4">{selectedArea.title}</h3>
                  <p className="body-large text-secondary-700 mb-6">
                    {selectedArea.description}
                  </p>

                  {/* Team Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-primary-50 rounded-xl">
                      <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary-600">{selectedArea.team}</div>
                      <div className="text-xs text-secondary-600">Team Size</div>
                    </div>
                    <div className="text-center p-4 bg-accent-green/10 rounded-xl">
                      <Award className="w-6 h-6 text-accent-green mx-auto mb-2" />
                      <div className="text-2xl font-bold text-accent-green">{selectedArea.patents}</div>
                      <div className="text-xs text-secondary-600">Patents</div>
                    </div>
                    <div className="text-center p-4 bg-accent-orange/10 rounded-xl">
                      <Rocket className="w-6 h-6 text-accent-orange mx-auto mb-2" />
                      <div className="text-2xl font-bold text-accent-orange">{selectedArea.projects}</div>
                      <div className="text-xs text-secondary-600">Projects</div>
                    </div>
                  </div>

                  {/* Research Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-4">Research Focus Areas</h4>
                    <div className="space-y-3">
                      {selectedArea.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-secondary-700">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                    <h4 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary-600" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedArea.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-secondary-700">
                          <Award className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Download Research Paper
                    </button>
                    <button className="btn-outline flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Lab Tour
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Current R&D Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="heading-3 text-center mb-12">Active R&D Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {rdProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="innovation-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">{project.title}</h4>
                      <p className="text-sm text-secondary-600">{project.team}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-secondary-600">Progress</span>
                    <span className="text-sm font-semibold text-primary-600">{project.completion}%</span>
                  </div>
                  <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-orange"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.completion}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <Clock className="w-4 h-4" />
                  <span>Expected completion: {project.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patent Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Patent Portfolio</h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Our commitment to innovation is reflected in our growing portfolio of patents 
              and intellectual property.
            </p>
          </div>

            <div className="grid md:grid-cols-5 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold mb-2">{patent.count}</div>
                  <div className="text-sm text-primary-100 mb-2">{patent.year}</div>
                  <div className="text-xs text-primary-200">{patent.category}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Patents */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl">
              <Award className="w-8 h-8" />
              <div className="text-left">
                <div className="text-sm text-primary-200">Total Patents</div>
                <div className="text-3xl font-bold">50+</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Collaboration & Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="heading-3 mb-6">Research Collaborations</h3>
          <p className="body-large text-secondary-600 max-w-3xl mx-auto mb-12">
            We partner with leading universities, research institutions, and technology 
            companies to accelerate innovation and knowledge transfer.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'MIT', type: 'Research Partnership' },
              { name: 'Stanford University', type: 'Technology Transfer' },
              { name: 'Technical University Munich', type: 'Joint Research' },
              { name: 'Addis Ababa University', type: 'Academic Collaboration' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-secondary-600">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative max-w-6xl w-full aspect-video">
            <video
              src="/videos/innovation-lab.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}