// src/components/home/LocationMap.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Building2,
  Users,
  Factory,
  ArrowRight,
  ExternalLink,
  Globe
} from 'lucide-react'

const locations = [
  {
    id: 1,
    name: 'Headquarters',
    type: 'Main Office',
    address: 'Bishoftu Road, Addis Ababa',
    city: 'Addis Ababa',
    coordinates: { lat: 8.7832, lng: 38.6996 },
    phone: '+251-11-XXX-XXXX',
    email: 'headquarters@bishoftu.com',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    image: 'https://placehold.co/600x400/3B82F6/ffffff?text=HQ',
    services: ['Sales', 'Support', 'Administration'],
    icon: Building2,
    color: 'from-primary-500 to-primary-700'
  },
  {
    id: 2,
    name: 'Manufacturing Plant',
    type: 'Production Facility',
    address: 'Hawassa Industrial Park',
    city: 'Hawassa',
    coordinates: { lat: 7.0621, lng: 38.4761 },
    phone: '+251-46-XXX-XXXX',
    email: 'manufacturing@bishoftu.com',
    hours: 'Mon-Sat: 7AM-7PM',
    image: 'https://placehold.co/600x400/10B981/ffffff?text=Manufacturing',
    services: ['Production', 'Quality Control', 'R&D'],
    icon: Factory,
    color: 'from-accent-green to-green-700'
  },
  {
    id: 3,
    name: 'Service Center',
    type: 'Customer Support',
    address: 'Dire Dawa Main Street',
    city: 'Dire Dawa',
    coordinates: { lat: 9.5930, lng: 41.8662 },
    phone: '+251-25-XXX-XXXX',
    email: 'service@bishoftu.com',
    hours: '24/7 Support Available',
    image: 'https://placehold.co/600x400/F97316/ffffff?text=Service+Center',
    services: ['Maintenance', 'Repairs', 'Parts'],
    icon: Users,
    color: 'from-accent-orange to-red-600'
  },
]

export default function LocationMap() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.location-card', {
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
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Locations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Visit Our{' '}
            <span className="gradient-text">Facilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            With strategic locations across Ethiopia, we're always close to serve you better.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Location Cards */}
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="location-card group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedLocation(location)}
              whileHover={{ y: -8 }}
            >
              <div className={`
                relative bg-white rounded-2xl shadow-lg overflow-hidden
                transition-all duration-300
                ${selectedLocation.id === location.id 
                  ? 'ring-4 ring-primary-500 shadow-2xl' 
                  : 'hover:shadow-xl'
                }
              `}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary-100">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`
                    absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${location.color}
                    rounded-xl flex items-center justify-center
                    transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12
                  `}>
                    <location.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold">
                    {location.type}
                  </div>

                  {/* City */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">{location.city}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
                    {location.name}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-3 text-sm text-secondary-600">
                    <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <a 
                      href={`tel:${location.phone}`}
                      className="flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {location.phone}
                    </a>
                    <a 
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {location.email}
                    </a>
                    <div className="flex items-center gap-2 text-sm text-secondary-600">
                      <Clock className="w-4 h-4" />
                      {location.hours}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-50 text-primary-600 rounded text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <button className="btn-outline w-full group/btn flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Selected Location Info */}
              <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedLocation.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <selectedLocation.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="heading-4 mb-2">{selectedLocation.name}</h3>
                <p className="text-sm text-secondary-600 mb-6">{selectedLocation.type}</p>

                {/* Detailed Contact */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-2">
                      Address
                    </div>
                    <p className="text-secondary-900">{selectedLocation.address}, {selectedLocation.city}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-2">
                      Phone
                    </div>
                    <a href={`tel:${selectedLocation.phone}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                      {selectedLocation.phone}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-2">
                      Email
                    </div>
                    <a href={`mailto:${selectedLocation.email}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                      {selectedLocation.email}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-2">
                      Working Hours
                    </div>
                    <p className="text-secondary-900">{selectedLocation.hours}</p>
                  </div>
                </div>

                {/* Services Available */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-secondary-500 uppercase tracking-wide mb-3">
                    Services Available
                  </div>
                  <div className="space-y-2">
                    {selectedLocation.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-sm text-secondary-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="btn-outline w-full flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div ref={mapRef} className="md:col-span-2 h-96 md:h-auto bg-secondary-100 relative">
                {/* Replace this with actual map integration (Google Maps, Mapbox, etc.) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-600 mb-2">Interactive Map</p>
                    <p className="text-sm text-secondary-500">
                      Showing: {selectedLocation.name}
                    </p>
                  </div>
                </div>

                {/* Simple Map Mockup */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23f1f5f9\'/%3E%3Cpath d=\'M20 20h60v60H20z\' fill=\'%23e2e8f0\'/%3E%3C/svg%3E")',
                    backgroundSize: '100px 100px'
                  }}
                />

                {/* Location Pin */}
                <motion.div
                  initial={{ scale: 0, y: -50 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
                >
                  <div className="relative">
                    <MapPin className="w-12 h-12 text-primary-500 drop-shadow-lg" fill="currentColor" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="heading-4 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help you find the right location or answer any questions you may have.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-secondary-100">
                Contact Us
              </a>
              <a href="/locations" className="btn-outline border-white text-white hover:bg-white/10">
                View All Locations
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
      