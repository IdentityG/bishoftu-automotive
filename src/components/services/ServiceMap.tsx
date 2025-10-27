// src/components/services/ServiceMap.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Building2,
  Truck,
  Users,
  CheckCircle2,
  ExternalLink
} from 'lucide-react'

const serviceLocations = [
  {
    id: 1,
    name: 'Addis Ababa Service Center',
    type: 'Main Hub',
    address: 'Bishoftu Road, Addis Ababa',
    city: 'Addis Ababa',
    coordinates: { lat: 8.9806, lng: 38.7578 },
    phone: '+251-11-XXX-XXXX',
    email: 'addis@bishoftu.com',
    hours: 'Mon-Sat: 7AM-7PM, Sun: 9AM-5PM',
    services: ['Full Service', 'Parts Supply', 'Emergency 24/7', 'Training Center'],
    technicians: 45,
    bays: 12,
    color: 'bg-primary-500',
    coverage: '200km radius'
  },
  {
    id: 2,
    name: 'Dire Dawa Service Station',
    type: 'Regional Center',
    address: 'Main Street, Dire Dawa',
    city: 'Dire Dawa',
    coordinates: { lat: 9.5930, lng: 41.8662 },
    phone: '+251-25-XXX-XXXX',
    email: 'diredawa@bishoftu.com',
    hours: 'Mon-Sat: 8AM-6PM',
    services: ['Maintenance', 'Repairs', 'Parts Supply', 'Emergency Support'],
    technicians: 25,
    bays: 8,
    color: 'bg-accent-green',
    coverage: '150km radius'
  },
  {
    id: 3,
    name: 'Hawassa Service Point',
    type: 'Service Center',
    address: 'Industrial Park, Hawassa',
    city: 'Hawassa',
    coordinates: { lat: 7.0621, lng: 38.4761 },
    phone: '+251-46-XXX-XXXX',
    email: 'hawassa@bishoftu.com',
    hours: 'Mon-Fri: 8AM-5PM',
    services: ['Maintenance', 'Parts Supply', 'Technical Support'],
    technicians: 18,
    bays: 6,
    color: 'bg-accent-orange',
    coverage: '100km radius'
  },
  {
    id: 4,
    name: 'Mekelle Service Hub',
    type: 'Regional Center',
    address: 'Airport Road, Mekelle',
    city: 'Mekelle',
    coordinates: { lat: 13.4967, lng: 39.4753 },
    phone: '+251-34-XXX-XXXX',
    email: 'mekelle@bishoftu.com',
    hours: 'Mon-Sat: 8AM-6PM',
    services: ['Full Service', 'Parts Distribution', 'Emergency Support'],
    technicians: 30,
    bays: 10,
    color: 'bg-purple-500',
    coverage: '180km radius'
  },
  {
    id: 5,
    name: 'Bahir Dar Service Station',
    type: 'Service Center',
    address: 'Tana Road, Bahir Dar',
    city: 'Bahir Dar',
    coordinates: { lat: 11.5742, lng: 37.3615 },
    phone: '+251-58-XXX-XXXX',
    email: 'bahirdar@bishoftu.com',
    hours: 'Mon-Sat: 8AM-6PM',
    services: ['Maintenance', 'Repairs', 'Parts Supply'],
    technicians: 20,
    bays: 7,
    color: 'bg-blue-500',
    coverage: '120km radius'
  },
]

const mobileUnits = [
  { id: 1, name: 'Mobile Unit North', coverage: 'Northern Ethiopia', vehicles: 3 },
  { id: 2, name: 'Mobile Unit South', coverage: 'Southern Ethiopia', vehicles: 3 },
  { id: 3, name: 'Mobile Unit East', coverage: 'Eastern Ethiopia', vehicles: 2 },
  { id: 4, name: 'Mobile Unit West', coverage: 'Western Ethiopia', vehicles: 2 },
]

export default function ServiceMap() {
  const [selectedLocation, setSelectedLocation] = useState(serviceLocations[0])
  const sectionRef = useRef<HTMLDivElement>(null)

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
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold">Service Coverage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Nationwide{' '}
            <span className="gradient-text">Service Network</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            With strategically located service centers and mobile units across Ethiopia, 
            we're always close when you need us.
          </motion.p>
        </div>

        {/* Coverage Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Building2, value: '12', label: 'Service Centers' },
            { icon: Truck, value: '10', label: 'Mobile Units' },
            { icon: Users, value: '200+', label: 'Technicians' },
            { icon: MapPin, value: '95%', label: 'Coverage' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Map & Locations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Location List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="heading-5 mb-6">Service Locations</h3>
            {serviceLocations.map((location, index) => (
              <motion.button
                key={location.id}
                className="location-card w-full text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className={`
                  p-4 rounded-xl transition-all
                  ${selectedLocation.id === location.id 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'bg-white hover:bg-secondary-50 shadow-md'
                  }
                `}>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 ${selectedLocation.id === location.id ? 'bg-white/20' : location.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <MapPin className={`w-5 h-5 ${selectedLocation.id === location.id ? 'text-white' : 'text-white'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-semibold uppercase mb-1 ${selectedLocation.id === location.id ? 'text-primary-100' : 'text-primary-600'}`}>
                        {location.type}
                      </div>
                      <div className="font-semibold mb-1">{location.name}</div>
                      <div className={`text-sm ${selectedLocation.id === location.id ? 'text-primary-100' : 'text-secondary-600'}`}>
                        {location.city}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Map Placeholder & Selected Location Details */}
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-secondary-100 rounded-2xl overflow-hidden mb-6 shadow-xl">
              {/* Simple map mockup - replace with actual map integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                  <p className="text-secondary-600 mb-2">Interactive Map</p>
                  <p className="text-sm text-secondary-500">
                    Showing: {selectedLocation.name}
                  </p>
                </div>
              </div>

              {/* Map pins mockup */}
              {serviceLocations.map((loc, index) => (
                <motion.button
                  key={loc.id}
                  className="absolute"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 2) * 20}%`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  onClick={() => setSelectedLocation(loc)}
                >
                  <div className={`relative ${selectedLocation.id === loc.id ? 'scale-125' : ''} transition-transform`}>
                    <MapPin className={`w-8 h-8 ${loc.color === selectedLocation.color ? 'text-primary-500' : 'text-secondary-400'} drop-shadow-lg`} fill="currentColor" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Selected Location Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                      {selectedLocation.type}
                    </div>
                    <h3 className="heading-4 mb-2">{selectedLocation.name}</h3>
                    <p className="text-secondary-600">{selectedLocation.address}</p>
                  </div>
                  <div className={`w-12 h-12 ${selectedLocation.color} rounded-xl flex items-center justify-center`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <div>
                      <div className="text-xs text-secondary-500">Phone</div>
                      <a href={`tel:${selectedLocation.phone}`} className="font-semibold text-primary-600 hover:text-primary-700">
                        {selectedLocation.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <div>
                      <div className="text-xs text-secondary-500">Email</div>
                      <a href={`mailto:${selectedLocation.email}`} className="font-semibold text-primary-600 hover:text-primary-700">
                        {selectedLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-secondary-50 rounded-xl">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <div>
                    <div className="text-xs text-secondary-500">Working Hours</div>
                    <div className="font-semibold text-secondary-900">{selectedLocation.hours}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-primary-50 rounded-lg">
                    <Users className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary-600">{selectedLocation.technicians}</div>
                    <div className="text-xs text-secondary-600">Technicians</div>
                  </div>
                  <div className="text-center p-3 bg-accent-green/10 rounded-lg">
                    <Building2 className="w-5 h-5 text-accent-green mx-auto mb-1" />
                    <div className="text-lg font-bold text-accent-green">{selectedLocation.bays}</div>
                    <div className="text-xs text-secondary-600">Service Bays</div>
                  </div>
                  <div className="text-center p-3 bg-accent-orange/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent-orange mx-auto mb-1" />
                    <div className="text-lg font-bold text-accent-orange">{selectedLocation.coverage}</div>
                    <div className="text-xs text-secondary-600">Coverage</div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white border-2 border-primary-200 text-primary-700 rounded-lg text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a href={`tel:${selectedLocation.phone}`} className="btn-outline flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Service Units */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <Truck className="w-16 h-16 mx-auto mb-4" />
            <h3 className="heading-3 mb-4">Mobile Service Units</h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Our fleet of mobile service units brings expert maintenance and repairs directly to your location
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {mobileUnits.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <Truck className="w-10 h-10 mx-auto mb-3" />
                <div className="font-bold mb-2">{unit.name}</div>
                <div className="text-sm text-primary-200 mb-3">{unit.coverage}</div>
                <div className="text-2xl font-bold">{unit.vehicles}</div>
                <div className="text-xs text-primary-200">Active Units</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}   