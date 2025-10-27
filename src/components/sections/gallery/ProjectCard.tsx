// src/components/home/ProjectCard.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  TrendingUp,
  Play,
  Eye
} from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: any
  index: number
  onViewDetails: () => void
  onViewBeforeAfter: () => void
}

export function ProjectCard({ project, index, onViewDetails, onViewBeforeAfter }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1.5 bg-accent-orange text-white rounded-full text-xs font-bold shadow-lg">
            Featured
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-secondary-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Hover Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
        >
          <motion.button
            onClick={onViewDetails}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-500 hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={onViewBeforeAfter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-500 hover:text-white transition-colors"
          >
            <Play className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Project Value Badge */}
        <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg">
          <div className="text-xs text-secondary-600">Project Value</div>
          <div className="text-lg font-bold text-primary-600">{project.value}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
          {project.category}
        </div>

        {/* Title */}
        <h3 className="heading-5 mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="body-small text-secondary-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <MapPin className="w-4 h-4 text-primary-500" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <Calendar className="w-4 h-4 text-primary-500" />
            <span>{project.date} • {project.duration}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-secondary-200">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg font-bold text-primary-600">{value as string}</div>
              <div className="text-xs text-secondary-500 capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-secondary-200">
          <a
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link"
          >
            Read Case Study
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}