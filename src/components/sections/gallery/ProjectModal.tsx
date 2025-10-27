// src/components/home/ProjectModal.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  X, 
  Calendar, 
  MapPin, 
  DollarSign,
  Clock,
  Users,
  CheckCircle2,
  ExternalLink,
  Download
} from 'lucide-react'
import Image from 'next/image'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header with Image */}
        <div className="relative h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3">
              {project.category}
            </div>
            <h2 className="heading-2 mb-2">{project.title}</h2>
            <p className="text-lg text-white/90">{project.client}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-primary-50 rounded-xl">
              <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-600">{project.value}</div>
              <div className="text-sm text-secondary-600">Project Value</div>
            </div>
            <div className="text-center p-4 bg-accent-orange/10 rounded-xl">
              <Clock className="w-8 h-8 text-accent-orange mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent-orange">{project.duration}</div>
              <div className="text-sm text-secondary-600">Duration</div>
            </div>
            <div className="text-center p-4 bg-accent-green/10 rounded-xl">
              <MapPin className="w-8 h-8 text-accent-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent-green">{project.location}</div>
              <div className="text-sm text-secondary-600">Location</div>
            </div>
            <div className="text-center p-4 bg-secondary-100 rounded-xl">
              <Calendar className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary-900">{project.date}</div>
              <div className="text-sm text-secondary-600">Completed</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="heading-4 mb-4">Project Overview</h3>
            <p className="body-large text-secondary-700 mb-4">
              {project.description}
            </p>
            <p className="body-medium text-secondary-600">
              This landmark project represents a significant milestone in our portfolio, 
              showcasing our capability to deliver complex, large-scale infrastructure 
              solutions that transform transportation networks and drive economic growth.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <h3 className="heading-4 mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'On-time delivery within scheduled timeline',
                'Zero safety incidents throughout project duration',
                'Exceeded quality standards and specifications',
                'Created over 5,000 direct and indirect jobs',
                'Implemented sustainable and eco-friendly practices',
                'Advanced technology integration and innovation'
              ].map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Statistics */}
          <div className="mb-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
            <h3 className="heading-4 mb-6">Project Statistics</h3>
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {value as string}
                  </div>
                  <div className="text-sm text-secondary-600 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.caseStudyUrl}
              className="btn-primary flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Full Case Study
            </a>
            <button className="btn-outline flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Project Brief
            </button>
            <button className="btn-ghost flex items-center gap-2">
              <Users className="w-4 h-4" />
              Contact Project Team
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}