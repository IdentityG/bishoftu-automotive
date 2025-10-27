'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'
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

const platforms = [
  { name: 'Google Reviews', rating: 4.9, reviews: 1250, icon: '⭐' },
  { name: 'Trustpilot', rating: 4.8, reviews: 890, icon: '⭐' },
  { name: 'Industry Rating', rating: 5.0, reviews: 450, icon: '⭐' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentTestimonial = testimonials[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  const handlePlayVideo = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl" />
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
            <Quote className="w-4 h-4" />
            <span className="text-sm font-semibold">Client Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Trusted by leading organizations across the nation. Here's what they have to say about our services.
          </motion.p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1] // Smooth ease
              }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Image/Video */}
                <div className="relative bg-secondary-100 min-h-[400px] md:min-h-[600px]">
                  {!isPlaying ? (
                    <>
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Play Button */}
                      <button
                        onClick={handlePlayVideo}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                      >
                        <Play className="w-8 h-8 text-primary-600 ml-1 group-hover:scale-110 transition-transform" />
                      </button>

                      {/* Client Info Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                            <Image
                              src={currentTestimonial.companyLogo}
                              alt={currentTestimonial.company}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{currentTestimonial.name}</h3>
                            <p className="text-sm text-white/90">{currentTestimonial.position}</p>
                            <p className="text-sm text-white/80">{currentTestimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <video
                      ref={videoRef}
                      src={currentTestimonial.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      onEnded={handleVideoEnded}
                    />
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-16 h-16 text-primary-200" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent-orange fill-accent-orange" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-secondary-700 mb-8 leading-relaxed flex-1">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Project Info */}
                  <div className="mb-6 p-4 bg-primary-50 rounded-xl">
                    <div className="text-sm text-secondary-600 mb-1">Project</div>
                    <div className="font-semibold text-primary-600">{currentTestimonial.project}</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(currentTestimonial.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-secondary-50 rounded-lg">
                        <div className="text-lg font-bold text-primary-600">{value as string}</div>
                        <div className="text-xs text-secondary-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevious}
                        className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index)
                            setIsPlaying(false)
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'w-8 bg-primary-500' : 'w-2 bg-secondary-300'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Counter */}
                    <div className="text-sm text-secondary-600 font-medium">
                      {currentIndex + 1} / {testimonials.length}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="heading-4 text-center mb-8">Rated Excellent Across Platforms</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h4 className="font-bold text-secondary-900 mb-2">{platform.name}</h4>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(platform.rating)
                          ? 'text-accent-orange fill-accent-orange'
                          : i < platform.rating
                          ? 'text-accent-orange fill-accent-orange/50'
                          : 'text-secondary-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-1">{platform.rating}</div>
                <div className="text-sm text-secondary-600">{platform.reviews.toLocaleString()} reviews</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="heading-5 mb-8 text-secondary-600">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}