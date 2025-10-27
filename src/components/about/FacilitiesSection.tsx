// src/components/about/FacilitiesSection.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Factory,
  Building2,
  MapPin,
  Users,
  Package,
  TrendingUp,
  ChevronRight,
  Zap,
  Shield,
  Award,
  Clock,
  Globe,
  Play,
  X,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'

const facilities = [
  {
    id: 1,
    name: 'Addis Ababa Headquarters',
    type: 'Corporate Office',
    location: 'Addis Ababa, Ethiopia',
    image: 'https://placehold.co/1200x800/3B82F6/ffffff?text=HQ+Building',
    year: '1995',
    size: '50,000 sq ft',
    employees: 500,
    icon: Building2,
    color: 'from-primary-500 to-primary-700',
    features: [
      'Executive Offices',
      'Sales & Marketing Center',
      'Customer Service Hub',
      'Training Facilities',
      'R&D Innovation Lab',
      'Conference Rooms'
    ],
    stats: {
      area: '50,000',
      employees: 500,
      departments: 8
    },
    videoUrl: '/videos/hq-tour.mp4',
    virtualTourUrl: '#',
    description: 'Our flagship headquarters houses executive leadership, sales, marketing, and customer service teams. A modern workspace designed to foster collaboration and innovation.'
  },
  {
    id: 2,
    name: 'Hawassa Manufacturing Plant',
    type: 'Production Facility',
    location: 'Hawassa Industrial Park',
    image: 'https://placehold.co/1200x800/10B981/ffffff?text=Manufacturing',
    year: '2010',
    size: '200,000 sq ft',
    employees: 1200,
    icon: Factory,
    color: 'from-accent-green to-green-700',
    features: [
      'Assembly Lines (5 Units)',
      'Quality Control Lab',
      'Parts Warehouse',
      'Logistics Center',
      'Safety Testing Facility',
      'Employee Training Center'
    ],
    stats: {
      area: '200,000',
      employees: 1200,
      capacity: '5,000'
    },
    videoUrl: '/videos/manufacturing-tour.mp4',
    virtualTourUrl: '#',
    description: 'State-of-the-art manufacturing facility with advanced production lines, robotics integration, and stringent quality control processes ensuring world-class output.'
  },
  {
    id: 3,
    name: 'Bishoftu R&D Center',
    type: 'Research & Development',
    location: 'Bishoftu, Ethiopia',
    image: 'https://placehold.co/1200x800/F97316/ffffff?text=R%26D+Center',
    year: '2015',
    size: '75,000 sq ft',
    employees: 300,
    icon: Zap,
    color: 'from-accent-orange to-red-600',
    features: [
      'Testing Laboratories',
      'Prototype Workshop',
      'Electric Propulsion Lab',
      'Materials Science Lab',
      'Computer Simulation Center',
      'Innovation Think Tank'
    ],
    stats: {
      area: '75,000',
      employees: 300,
      patents: 50
    },
    videoUrl: '/videos/rnd-tour.mp4',
    virtualTourUrl: '#',
    description: 'Cutting-edge research and development center where our engineers and scientists develop next-generation automotive and locomotive technologies.'
  },
  {
    id: 4,
    name: 'Dire Dawa Service Center',
    type: 'After-Sales Support',
    location: 'Dire Dawa, Ethiopia',
    image: 'https://placehold.co/1200x800/8B5CF6/ffffff?text=Service+Center',
    year: '2018',
    size: '40,000 sq ft',
    employees: 200,
    icon: Shield,
    color: 'from-purple-500 to-purple-700',
    features: [
      'Repair Workshops (10 Bays)',
      'Parts Inventory',
      'Diagnostic Center',
      'Customer Lounge',
      '24/7 Support Desk',
      'Training Facility'
    ],
    stats: {
      area: '40,000',
      employees: 200,
      vehicles: '500/month'
    },
    videoUrl: '/videos/service-tour.mp4',
    virtualTourUrl: '#',
    description: 'Comprehensive after-sales service center providing maintenance, repairs, and technical support with certified technicians and genuine parts.'
  },
  {
    id: 5,
    name: 'Mekelle Distribution Hub',
    type: 'Logistics Center',
    location: 'Mekelle, Ethiopia',
    image: 'https://placehold.co/1200x800/2563EB/ffffff?text=Distribution',
    year: '2020',
    size: '60,000 sq ft',
    employees: 150,
    icon: Package,
    color: 'from-blue-500 to-blue-700',
    features: [
      'Automated Warehouse',
      'Fleet Management Center',
      'Parts Distribution',
      'Loading Docks (12 Units)',
      'Inventory Management System',
      'Regional Office'
    ],
    stats: {
      area: '60,000',
      employees: 150,
      capacity: '10,000'
    },
    videoUrl: '/videos/distribution-tour.mp4',
    virtualTourUrl: '#',
    description: 'Strategic distribution hub ensuring timely delivery of products and parts across northern Ethiopia and neighboring regions.'
  },
  {
    id: 6,
    name: 'Bahir Dar Assembly Plant',
    type: 'Production Facility',
    location: 'Bahir Dar, Ethiopia',
    image: 'https://placehold.co/1200x800/EC4899/ffffff?text=Assembly+Plant',
    year: '2022',
    size: '120,000 sq ft',
    employees: 600,
    icon: Factory,
    color: 'from-pink-500 to-pink-700',
    features: [
      'Vehicle Assembly Lines',
      'Paint Shop',
      'Quality Inspection',
      'Component Manufacturing',
      'Testing Track',
      'Employee Facilities'
    ],
    stats: {
      area: '120,000',
      employees: 600,
      capacity: '3,000'
    },
    videoUrl: '/videos/assembly-tour.mp4',
    virtualTourUrl: '#',
    description: 'Modern assembly plant focusing on commercial vehicle production with advanced automation and eco-friendly processes.'
  },
]

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState(facilities[0])
  const [showVideo, setShowVideo] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.facility-card', {
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
      id="facilities"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Facilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            World-Class{' '}
            <span className="gradient-text">Manufacturing & Operations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Our strategically located facilities across Ethiopia ensure efficient production, 
            distribution, and service delivery to meet customer needs nationwide.
          </motion.p>
        </div>

        {/* Facility Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              className="facility-card group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedFacility(facility)}
              whileHover={{ y: -8 }}
            >
              <div className={`
                relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300
                ${selectedFacility.id === facility.id 
                  ? 'ring-4 ring-primary-500 shadow-2xl' 
                  : 'hover:shadow-xl'
                }
              `}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary-100">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center`}>
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-secondary-900">
                    Est. {facility.year}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold mb-1 opacity-90">{facility.type}</div>
                    <h3 className="font-bold text-lg line-clamp-1">{facility.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-secondary-600 mb-4">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{facility.location}</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-primary-50 rounded-lg">
                      <div className="text-lg font-bold text-primary-600">{facility.size}</div>
                      <div className="text-xs text-secondary-600">Facility Size</div>
                    </div>
                    <div className="text-center p-3 bg-accent-green/10 rounded-lg">
                      <div className="text-lg font-bold text-accent-green">{facility.employees}</div>
                      <div className="text-xs text-secondary-600">Employees</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Facility View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFacility.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image & Video */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Play Button */}
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                >
                  <Play className="w-8 h-8 text-primary-600 ml-1" />
                </button>

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${selectedFacility.color} rounded-full mb-3`}>
                    <selectedFacility.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{selectedFacility.type}</span>
                  </div>
                    <h3 className="text-2xl font-bold mb-1">{selectedFacility.name}</h3>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedFacility.location}</span>
                  </div>
                </div>
              </div>

              {/* Right - Details */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="heading-4 mb-4">{selectedFacility.name}</h3>
                  <p className="body-large text-secondary-700 leading-relaxed">
                    {selectedFacility.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(selectedFacility.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      className="text-center p-4 bg-white rounded-xl shadow-md"
                    >
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {value}{key === 'area' ? ' sq ft' : key === 'capacity' ? ' units/yr' : ''}
                      </div>
                      <div className="text-xs text-secondary-600 capitalize">
                        {key === 'area' ? 'Total Area' : key === 'capacity' ? 'Production' : key}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-500" />
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedFacility.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Video Tour
                  </button>
                  <a
                    href={selectedFacility.virtualTourUrl}
                    className="btn-outline flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    360° Virtual Tour
                  </a>
                  <a
                    href="#contact"
                    className="btn-ghost flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit This Facility
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Overall Capacity Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="heading-3 text-center mb-12">Combined Operational Capacity</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Building2, label: 'Total Facilities', value: '12+', suffix: '' },
              { icon: Users, label: 'Total Workforce', value: '2,500', suffix: '+' },
              { icon: Factory, label: 'Production Capacity', value: '15K', suffix: ' units/year' },
              { icon: Package, label: 'Storage Capacity', value: '50K', suffix: ' sq ft' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-primary-100">{stat.label}</div>
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
              src={selectedFacility.videoUrl}
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