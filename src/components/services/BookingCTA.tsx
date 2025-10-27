// src/components/services/BookingCTA.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  User,
  Truck,
  FileText,
  MapPin,
  Zap
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us Now',
    value: '+251-11-XXX-XXXX',
    description: 'Speak directly with our service team',
    availability: '24/7 Available',
    color: 'from-primary-500 to-primary-700',
    action: 'tel:+251-11-XXX-XXXX'
  },
  {
    icon: Mail,
    title: 'Email Support',
    value: 'service@bishoftu.com',
    description: 'Get a detailed quote via email',
    availability: 'Response within 4 hours',
    color: 'from-accent-green to-green-700',
    action: 'mailto:service@bishoftu.com'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    value: 'Chat with Expert',
    description: 'Instant answers to your questions',
    availability: '8 AM - 8 PM Daily',
    color: 'from-accent-orange to-red-600',
    action: '#chat'
  },
]

const serviceTypes = [
  'Preventive Maintenance',
  'Emergency Repair',
  'Vehicle Inspection',
  'Parts Replacement',
  'Overhaul Service',
  'Consultation',
  'Training',
  'Other'
]

const workingHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Emergency Service', hours: '24/7 Available' },
]

export default function BookingCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    vehicleType: '',
    preferredDate: '',
    location: '',
    message: '',
    urgent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.cta-element', {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        vehicleType: '',
        preferredDate: '',
        location: '',
        message: '',
        urgent: false
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Request Service</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Ready to{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Get Started?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary-300 max-w-3xl mx-auto"
          >
            Book your service appointment or get in touch with our expert team. 
            We're here to help 24/7.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="cta-element group block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                        <p className="text-lg font-bold text-primary-400 mb-1">{method.value}</p>
                        <p className="text-sm text-secondary-300 mb-1">{method.description}</p>
                        <div className="flex items-center gap-2 text-xs text-accent-green">
                          <CheckCircle2 className="w-3 h-3" />
                          {method.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            <motion.div
              className="cta-element bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4 text-white">
                <Clock className="w-6 h-6 text-primary-400" />
                <h4 className="font-semibold text-lg">Working Hours</h4>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-secondary-300">{schedule.day}</span>
                    <span className="font-semibold text-white">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Notice */}
            <motion.div
              className="cta-element bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Zap className="w-10 h-10 mb-3" />
              <h4 className="font-bold text-lg mb-2">Emergency Service</h4>
              <p className="text-sm text-red-100 mb-4">
                For urgent breakdowns and emergencies, call our 24/7 hotline immediately.
              </p>
              <a 
                href="tel:+251-11-911-HELP"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Emergency: 911-HELP
              </a>
            </motion.div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="cta-element bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="heading-3 mb-2">Book Your Service</h3>
                    <p className="text-secondary-600">
                      Fill out the form below and we'll get back to you within 2 hours during business hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="+251-XXX-XXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Type & Vehicle Type */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select service type</option>
                          {serviceTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="vehicleType" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Vehicle/Equipment Type *
                        </label>
                        <div className="relative">
                          <Truck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="text"
                            id="vehicleType"
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="e.g., Heavy Truck, Locomotive"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferred Date & Location */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Service Location *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                            placeholder="City or Service Center"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                        Additional Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                        placeholder="Please describe your service needs, any specific issues, or questions..."
                      />
                    </div>

                    {/* Urgent Checkbox */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="urgent"
                        name="urgent"
                        checked={formData.urgent}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-600 border-2 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="urgent" className="text-sm font-semibold text-secondary-900">
                        This is an urgent request (requires immediate attention)
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Service Request
                        </>
                      )}
                    </button>

                    {/* Response Time Notice */}
                    <div className="flex items-center justify-center gap-2 text-sm text-secondary-600">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span>Expected response time: 2 hours during business hours</span>
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-xs text-secondary-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-accent-green" />
                  </div>
                  <h3 className="heading-3 mb-4">Request Submitted Successfully!</h3>
                  <p className="text-secondary-600 mb-6 max-w-md mx-auto">
                    Thank you for choosing Bishoftu Automotive. Our service team will contact you 
                    within 2 hours to confirm your appointment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3 text-sm text-secondary-600">
                      <Mail className="w-5 h-5 text-primary-500" />
                      <span>Confirmation email sent to {formData.email}</span>
                    </div>
                    {formData.urgent && (
                      <div className="flex items-center justify-center gap-3 text-sm text-red-600 font-semibold">
                        <Zap className="w-5 h-5" />
                        <span>Urgent request - Priority processing activated</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}