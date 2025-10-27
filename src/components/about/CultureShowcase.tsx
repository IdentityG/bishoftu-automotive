// src/components/about/CultureShowcase.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Heart,
  Users,
  TrendingUp,
  Award,
  Smile,
  Coffee,
  GraduationCap,
  Globe,
  Play,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'

const cultureHighlights = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'We foster teamwork and open communication across all levels.',
    color: 'from-primary-500 to-primary-700'
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career advancement programs.',
    color: 'from-accent-green to-green-700'
  },
  {
    icon: Award,
    title: 'Recognition & Rewards',
    description: 'Performance-based incentives and appreciation programs.',
    color: 'from-accent-orange to-red-600'
  },
  {
    icon: Smile,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and comprehensive wellness programs.',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: GraduationCap,
    title: 'Learning Culture',
    description: 'Training programs, workshops, and skill development.',
    color: 'from-blue-500 to-blue-700'
  },
  {
    icon: Globe,
    title: 'Diversity & Inclusion',
    description: 'Celebrating diversity and fostering inclusive workplace.',
    color: 'from-pink-500 to-pink-700'
  },
]

const galleryImages = [
  { id: 1, src: 'https://placehold.co/800x600/3B82F6/ffffff?text=Team+Meeting', caption: 'Team Collaboration Sessions' },
  { id: 2, src: 'https://placehold.co/800x600/10B981/ffffff?text=Innovation+Lab', caption: 'Innovation Lab' },
  { id: 3, src: 'https://placehold.co/800x600/F97316/ffffff?text=Team+Building', caption: 'Team Building Activities' },
  { id: 4, src: 'https://placehold.co/800x600/8B5CF6/ffffff?text=Office+Space', caption: 'Modern Workspace' },
  { id: 5, src: 'https://placehold.co/800x600/EC4899/ffffff?text=Celebration', caption: 'Celebrating Success' },
  { id: 6, src: 'https://placehold.co/800x600/2563EB/ffffff?text=Training', caption: 'Training Programs' },
]

const employeeTestimonials = [
  {
    name: 'Samuel Tesfaye',
    role: 'Senior Engineer',
    image: 'https://placehold.co/400x400/3B82F6/ffffff?text=ST',
    quote: 'Working at Bishoftu has been transformative. The collaborative culture and growth opportunities are exceptional.',
    rating: 5
  },
  {
    name: 'Mekdes Alemayehu',
    role: 'Product Manager',
    image: 'https://placehold.co/400x400/10B981/ffffff?text=MA',
    quote: 'The company truly values innovation and encourages us to think creatively. I\'ve grown tremendously here.',
    rating: 5
  },
  {
    name: 'Dawit Mulugeta',
    role: 'Operations Specialist',
    image: 'https://placehold.co/400x400/F97316/ffffff?text=DM',
    quote: 'Best decision of my career. The leadership is supportive, and the work-life balance is excellent.',
    rating: 5
  },
]

const benefits = [
  { icon: Heart, text: 'Comprehensive Health Insurance' },
  { icon: GraduationCap, text: 'Education & Training Support' },
  { icon: Coffee, text: 'Flexible Working Hours' },
  { icon: Award, text: 'Performance Bonuses' },
  { icon: Users, text: 'Team Building Events' },
  { icon: Globe, text: 'International Opportunities' },
]

export default function CultureShowcase() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.culture-card', {
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % employeeTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + employeeTestimonials.length) % employeeTestimonials.length)
  }

  return (
    <section 
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
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Culture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            A Culture of{' '}
            <span className="gradient-text">Excellence & Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            We believe our people are our greatest asset. Our culture nurtures talent, 
            encourages innovation, and creates an environment where everyone can thrive.
          </motion.p>
        </div>

        {/* Culture Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cultureHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="culture-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-secondary-600">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Office Tour Video/Gallery */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Video/Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <Image
                  src="https://placehold.co/1200x675/3B82F6/ffffff?text=Office+Tour"
                  alt="Office Tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                
                {/* Play Button */}
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 text-primary-600 ml-1" />
                </button>

                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Take a Virtual Tour</h3>
                  <p className="text-white/90">Explore our state-of-the-art facilities</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="heading-3 mb-6">Employee Benefits & Perks</h3>
              <p className="body-large text-secondary-600 mb-8">
                We offer comprehensive benefits designed to support your professional 
                growth and personal well-being.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="font-semibold text-secondary-900">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="heading-3 text-center mb-12">Life at Bishoftu</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Employee Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="heading-3 text-center mb-12">What Our Team Says</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={employeeTestimonials[currentTestimonial].image}
                    alt={employeeTestimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Testimonial */}
              <div className="md:col-span-2">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(employeeTestimonials[currentTestimonial].rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{employeeTestimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author */}
                <div className="mb-6">
                  <div className="font-bold text-xl">{employeeTestimonials[currentTestimonial].name}</div>
                  <div className="text-primary-200">{employeeTestimonials[currentTestimonial].role}</div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="text-sm">
                    {currentTestimonial + 1} / {employeeTestimonials.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative max-w-6xl w-full aspect-[4/3]">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].caption}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-xl font-semibold">{galleryImages[selectedImage].caption}</p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage((prev) => (prev! + 1) % galleryImages.length)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

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
              src="/videos/office-tour.mp4"
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