'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  ChevronRight,
  Send,
  Award,
  Shield,
  Truck,
  Users,
  Zap,
  Cpu,
  ExternalLink,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'
import FooterNewsletter from './FooterNewsletter'
import FooterStats from './FooterStats'
import FooterBottom from './FooterBottom'

// Footer Links Data
const footerLinks = {
  company: [
    { name: 'About Us', href: '/about', badge: null },
    { name: 'Our Team', href: '/about/team', badge: null },
    { name: 'Careers', href: '/careers', badge: 'Hiring' },
    { name: 'Press & Media', href: '/press', badge: null },
    { name: 'Sustainability', href: '/sustainability', badge: 'New' },
    { name: 'Investors', href: '/investors', badge: null },
  ],
  services: [
    { name: 'Automotive Manufacturing', href: '/services/manufacturing' },
    { name: 'Locomotive Solutions', href: '/services/locomotive' },
    { name: 'Parts & Components', href: '/services/parts' },
    { name: 'Maintenance & Repair', href: '/services/maintenance' },
    { name: 'Custom Engineering', href: '/services/engineering' },
    { name: 'Technical Support', href: '/services/support' },
  ],
  industries: [
    { name: 'Transportation', href: '/industries/transportation' },
    { name: 'Railways', href: '/industries/railways' },
    { name: 'Commercial Vehicles', href: '/industries/commercial' },
    { name: 'Electric Vehicles', href: '/industries/ev' },
    { name: 'Defense', href: '/industries/defense' },
    { name: 'Agriculture', href: '/industries/agriculture' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog & News', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Support', href: '/support' },
  ],
}

// Social Links
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
]

// Features/Badges
const features = [
  { icon: Shield, text: 'ISO Certified', color: 'text-green-500' },
  { icon: Award, text: 'Award Winning', color: 'text-yellow-500' },
  { icon: Users, text: '5000+ Employees', color: 'text-blue-500' },
  { icon: Truck, text: 'Nationwide Delivery', color: 'text-purple-500' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  }

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${80 - i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Stats Section */}
      <FooterStats />

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative container-custom py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <motion.div
                  className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Cpu className="w-7 h-7 text-white/20" />
                  </motion.div>
                  <Zap className="w-7 h-7 text-white relative z-10" />
                </motion.div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-white">BISHOFTU</div>
                <div className="text-xs text-white/60 tracking-wider">AUTOMOTIVE & LOCOMOTIVE</div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-white/70 mb-6 leading-relaxed">
              Leading Ethiopia's automotive and locomotive industry with over 50 years of excellence in manufacturing, innovation, and sustainable transportation solutions.
            </p>

            {/* Features/Badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className="flex items-center space-x-2 text-sm"
                >
                  <feature.icon className={cn("w-4 h-4", feature.color)} />
                  <span className="text-white/70">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative group p-2.5 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10",
                    "hover:bg-white hover:border-white transition-all duration-300"
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-primary-900 transition-colors" />
                  <motion.div
                    className={cn(
                      "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10",
                      social.color
                    )}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <span>Company</span>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-primary-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8 }}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <span className="flex items-center space-x-1">
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          <span>{link.name}</span>
                        </span>
                        {link.badge && (
                          <span className="px-1.5 py-0.5 bg-accent-orange/20 text-accent-orange text-xs rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <span>Services</span>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-primary-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Industries Links */}
              <div>
                <h3 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <span>Industries</span>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-primary-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0 }}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.industries.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.0 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <span>Resources</span>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-primary-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.1 }}
                  />
                </h3>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <FooterNewsletter />

        {/* Contact Info Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <motion.a
              href="tel:+251111234567"
              className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2.5 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                <Phone className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-white/60">Call Us</p>
                <p className="text-sm font-semibold text-white">+251 11 123 4567</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@bishoftu-automotive.com"
              className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2.5 rounded-lg bg-accent-orange/20 group-hover:bg-accent-orange/30 transition-colors">
                <Mail className="w-5 h-5 text-accent-orange" />
              </div>
              <div>
                <p className="text-xs text-white/60">Email Us</p>
                <p className="text-sm font-semibold text-white">info@bishoftu-automotive.com</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2.5 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-white/60">Visit Us</p>
                <p className="text-sm font-semibold text-white">Bishoftu, Ethiopia</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <FooterBottom />
    </footer>
  )
}