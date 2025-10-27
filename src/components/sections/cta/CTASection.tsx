// src/components/home/CTASection.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const workingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+251-11-XXX-XXXX',
    description: '24/7 Support Hotline',
    color: 'from-primary-500 to-primary-700',
    action: 'tel:+251-11-XXX-XXXX'
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@bishoftu.com',
    description: 'Quick Response Team',
    color: 'from-accent-orange to-red-600',
    action: 'mailto:info@bishoftu.com'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Bishoftu, Ethiopia',
    description: 'Main Office Location',
    color: 'from-accent-green to-green-700',
    action: '#location'
  },
]

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Video/Pattern */}
      <div className="absolute inset-0 z-0">
        {/* You can replace this with an actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,.1) 35px,
              rgba(255,255,255,.1) 70px
            )`,
            animation: 'slide 20s linear infinite'
          }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div className="text-white">
            <motion.div
              className="cta-element"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Get Started Today</span>
              </div>

              <h2 className="heading-1 mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
                  Transportation?
                </span>
              </h2>

              <p className="body-large text-secondary-300 mb-8">
                Partner with Ethiopia's leading automotive and locomotive solutions provider. 
                Let's discuss how we can drive your success forward.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    className="cta-element group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-lg font-bold text-primary-400">{method.value}</p>
                      <p className="text-sm text-secondary-400">{method.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                className="cta-element bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-400" />
                  <h4 className="font-semibold text-lg">Working Hours</h4>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-secondary-300">{schedule.day}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="cta-element"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="heading-3 mb-2">Request a Quote</h3>
                    <p className="text-secondary-600">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
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

                    {/* Email */}
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

                    {/* Phone & Company */}
                    <div className="grid md:grid-cols-2 gap-4">
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
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
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

                    {/* Service Interest */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-secondary-900 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="railway">Railway Solutions</option>
                        <option value="logistics">Logistics & Transportation</option>
                        <option value="industrial">Industrial Solutions</option>
                        <option value="construction">Construction Equipment</option>
                        <option value="parts">Parts & Components</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Request
                        </>
                      )}
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-xs text-secondary-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms" className="text-primary-600 hover:underline">
                        Terms of Service
                      </a>
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
                  <h3 className="heading-3 mb-4">Thank You!</h3>
                  <p className="text-secondary-600 mb-6">
                    Your request has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <div className="flex items-center justify-center gap-3 text-sm text-secondary-500">
                    <Clock className="w-4 h-4" />
                    <span>Expected response time: 24 hours</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for background animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(70px);
          }
        }
      `}</style>
    </section>
  )
}