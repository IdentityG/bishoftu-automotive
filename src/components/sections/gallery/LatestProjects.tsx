// src/components/home/LatestProjects.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Briefcase,
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react'
import Image from 'next/image'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ProjectModal } from './ProjectModal'
import { ProjectCard } from './ProjectCard'

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'railway', label: 'Railway Systems' },
  { id: 'industrial', label: 'Industrial' },
]

const projects = [
  {
    id: 1,
    title: 'National Railway Expansion Project',
    category: 'railway',
    location: 'Addis Ababa - Djibouti',
    date: '2023',
    image: 'https://placehold.co/1200x800/3B82F6/ffffff?text=Railway+Project',
    beforeImage: 'https://placehold.co/800x600/64748B/ffffff?text=Before',
    afterImage: 'https://placehold.co/800x600/10B981/ffffff?text=After',
    description: 'Modernization of 750km railway network with advanced signaling systems and electric locomotives.',
    client: 'Ethiopian Railways Corporation',
    value: '$2.5B',
    duration: '36 months',
    featured: true,
    stats: {
      locomotives: 50,
      stations: 25,
      jobs: 5000
    },
    caseStudyUrl: '/case-studies/railway-expansion'
  },
  {
    id: 2,
    title: 'Heavy-Duty Fleet Deployment',
    category: 'transportation',
    location: 'Nationwide',
    date: '2023',
    image: 'https://placehold.co/1200x800/F97316/ffffff?text=Fleet+Project',
    beforeImage: 'https://placehold.co/800x600/64748B/ffffff?text=Before',
    afterImage: 'https://placehold.co/800x600/10B981/ffffff?text=After',
    description: 'Delivery and integration of 200+ heavy-duty trucks for major logistics companies.',
    client: 'National Logistics Group',
    value: '$150M',
    duration: '18 months',
    featured: true,
    stats: {
      vehicles: 200,
      routes: 50,
      efficiency: '+40%'
    },
    caseStudyUrl: '/case-studies/fleet-deployment'
  },
  {
    id: 3,
    title: 'Metro System Enhancement',
    category: 'infrastructure',
    location: 'Addis Ababa',
    date: '2024',
    image: 'https://placehold.co/1200x800/10B981/ffffff?text=Metro+Project',
    beforeImage: 'https://placehold.co/800x600/64748B/ffffff?text=Before',
    afterImage: 'https://placehold.co/800x600/10B981/ffffff?text=After',
    description: 'Upgrade of metro infrastructure including stations, tracks, and rolling stock.',
    client: 'Addis Ababa Metro Authority',
    value: '$800M',
    duration: '24 months',
    featured: false,
    stats: {
      stations: 15,
      passengers: '500K/day',
      coverage: '35km'
    },
    caseStudyUrl: '/case-studies/metro-enhancement'
  },
  {
    id: 4,
    title: 'Industrial Park Transportation',
    category: 'industrial',
    location: 'Hawassa',
    date: '2024',
    image: 'https://placehold.co/1200x800/2563EB/ffffff?text=Industrial+Project',
    beforeImage: 'https://placehold.co/800x600/64748B/ffffff?text=Before',
    afterImage: 'https://placehold.co/800x600/10B981/ffffff?text=After',
    description: 'Complete transportation solution for industrial park including cargo vehicles and systems.',
    client: 'Hawassa Industrial Park',
    value: '$95M',
    duration: '12 months',
    featured: false,
    stats: {
      vehicles: 75,
      capacity: '1000 tons',
      automation: '85%'
    },
    caseStudyUrl: '/case-studies/industrial-park'
  },
  {
    id: 5,
    title: 'Public Transit Modernization',
    category: 'transportation',
    location: 'Dire Dawa',
    date: '2023',
    image: 'https://placehold.co/1200x800/64748B/ffffff?text=Transit+Project',
    beforeImage: 'https://placehold.co/800x600/64748B/ffffff?text=Before',
    afterImage: 'https://placehold.co/800x600/10B981/ffffff?text=After',
    description: 'Fleet renewal and infrastructure upgrade for city public transportation.',
    client: 'Dire Dawa Transport Bureau',
    value: '$45M',
    duration: '10 months',
    featured: false,
    stats: {
      buses: 120,
      routes: 28,
      coverage: '95%'
    },
    caseStudyUrl: '/case-studies/public-transit'
  },
  {
    id: 6,
    title: 'Freight Corridor Development',
    category: 'railway',
    location: 'Mekelle - Djibouti',
    date: '2024',
    image: 'https://placehold.co/1200x800/F97316/ffffff?text=Freight+Project',
    beforeImage: 'https://placehold.co/800x600/64748B/ffffff?text=Before',
    afterImage: 'https://placehold.co/800x600/10B981/ffffff?text=After',
    description: 'New freight railway corridor with state-of-the-art cargo handling systems.',
    client: 'Ethiopian Freight Services',
    value: '$1.2B',
    duration: '30 months',
    featured: true,
    stats: {
      length: '450km',
      capacity: '5M tons/year',
      terminals: 8
    },
    caseStudyUrl: '/case-studies/freight-corridor'
  },
]

export default function LatestProjects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeCategory))
    }
  }, [activeCategory])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
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
  }, [filteredProjects])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-secondary-900 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #3B82F6 12%, transparent 12.5%, transparent 87%, #3B82F6 87.5%, #3B82F6),
                           linear-gradient(150deg, #3B82F6 12%, transparent 12.5%, transparent 87%, #3B82F6 87.5%, #3B82F6)`,
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-6"
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Transforming Infrastructure{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Across the Nation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of landmark projects delivering cutting-edge 
            transportation solutions and infrastructure development.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={() => setSelectedProject(project)}
                onViewBeforeAfter={() => {
                  setSelectedProject(project)
                  setShowBeforeAfter(true)
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
                        href="/projects"
            className="btn-primary inline-flex items-center gap-2 bg-white text-secondary-900 hover:bg-secondary-100"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && !showBeforeAfter && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Before/After Slider */}
      {selectedProject && showBeforeAfter && (
        <BeforeAfterSlider
          project={selectedProject}
          onClose={() => {
            setShowBeforeAfter(false)
            setSelectedProject(null)
          }}
        />
      )}
    </section>
  )
}