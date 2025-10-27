// src/components/home/TestimonialGrid.tsx
'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Abebe Tadesse',
    position: 'CEO',
    company: 'Ethiopian Railways Corporation',
    companyLogo: 'https://placehold.co/200x80/3B82F6/ffffff?text=ERC',
    image: 'https://placehold.co/400x400/64748B/ffffff?text=AT',
    rating: 5,
    text: 'Bishoftu Automotive has been instrumental in modernizing our railway infrastructure. Their expertise, dedication, and innovative solutions have exceeded our expectations. The quality of their locomotives and support services is world-class.',
    project: 'National Railway Expansion',
    videoUrl: '/videos/testimonial-1.mp4',
    stats: {
      projectValue: '$2.5B',
      duration: '36 months',
      satisfaction: '99%'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Operations Director',
    company: 'National Logistics Group',
    companyLogo: 'https://placehold.co/200x80/F97316/ffffff?text=NLG',
    image: 'https://placehold.co/400x400/64748B/ffffff?text=SJ',
    rating: 5,
    text: 'The heavy-duty fleet we received has transformed our operations. The vehicles are reliable, efficient, and come with exceptional after-sales support. Bishoftu\'s commitment to quality and customer service is unmatched.',
    project: 'Fleet Modernization Program',
    videoUrl: '/videos/testimonial-2.mp4',
    stats: {
      projectValue: '$150M',
      vehicles: '200+',
      efficiency: '+40%'
    }
  },
  {
    id: 3,
    name: 'Dr. Alemayehu Worku',
    position: 'Technical Director',
    company: 'Addis Ababa Metro Authority',
    companyLogo: 'https://placehold.co/200x80/10B981/ffffff?text=AAMA',
    image: 'https://placehold.co/400x400/64748B/ffffff?text=AW',
    rating: 5,
    text: 'Working with Bishoftu on our metro enhancement project was a pleasure. Their technical expertise and project management capabilities ensured timely delivery without compromising quality. Highly recommended!',
    project: 'Metro System Enhancement',
    videoUrl: '/videos/testimonial-3.mp4',
    stats: {
      projectValue: '$800M',
      stations: '15',
      passengers: '500K/day'
    }
  },
  {
    id: 4,
    name: 'Mohammed Ali',
    position: 'Plant Manager',
    company: 'Hawassa Industrial Park',
    companyLogo: 'https://placehold.co/200x80/2563EB/ffffff?text=HIP',
    image: 'https://placehold.co/400x400/64748B/ffffff?text=MA',
    rating: 5,
    text: 'The transportation solutions provided by Bishoftu have significantly improved our logistics efficiency. Their custom-built vehicles perfectly match our requirements, and the maintenance support is outstanding.',
    project: 'Industrial Transportation Solution',
    videoUrl: '/videos/testimonial-4.mp4',
    stats: {
      projectValue: '$95M',
      vehicles: '75',
      uptime: '98%'
    }
  },
]

export function TestimonialGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                <p className="text-sm text-secondary-600">{testimonial.position}</p>
              </div>
            </div>
            <Quote className="w-8 h-8 text-primary-200" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-accent-orange fill-accent-orange" />
            ))}
          </div>

          {/* Text */}
          <p className="text-secondary-700 mb-4 line-clamp-4">
            "{testimonial.text}"
          </p>

          {/* Company */}
          <div className="pt-4 border-t border-secondary-200">
            <div className="flex items-center gap-2">
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.company}
                width={80}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}