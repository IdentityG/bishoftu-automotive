// src/components/about/LeadershipGrid.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Users,
  Linkedin,
  Mail,
  X,
  Award,
  GraduationCap,
  Briefcase,
  Quote
} from 'lucide-react'
import Image from 'next/image'

const leaders = [
  {
    id: 1,
    name: 'Abebe Tadesse',
    title: 'Founder & CEO',
    image: 'https://placehold.co/600x600/3B82F6/ffffff?text=CEO',
    bio: 'Visionary leader with 30+ years of experience in automotive manufacturing and business strategy.',
    quote: 'Innovation and integrity are the pillars of our success.',
    linkedin: 'https://linkedin.com',
    email: 'abebe@bishoftu.com',
    education: 'MBA, Harvard Business School',
    experience: '30+ years',
    achievements: [
      'Led company growth from startup to industry leader',
      'Pioneered electric locomotive development in Ethiopia',
      'Recipient of National Excellence Award 2020'
    ],
    expertise: ['Strategic Leadership', 'Business Development', 'Innovation Management']
  },
  {
    id: 2,
    name: 'Dr. Sarah Mengiste',
    title: 'Chief Technology Officer',
    image: 'https://placehold.co/600x600/10B981/ffffff?text=CTO',
    bio: 'Technology expert driving innovation in electric propulsion and sustainable manufacturing.',
    quote: 'Technology is the bridge between vision and reality.',
    linkedin: 'https://linkedin.com',
    email: 'sarah@bishoftu.com',
    education: 'PhD in Mechanical Engineering, MIT',
    experience: '20+ years',
    achievements: [
      'Developed first Ethiopian electric locomotive',
      'Holds 15+ patents in propulsion technology',
      'Published 30+ research papers'
    ],
    expertise: ['Electric Propulsion', 'R&D Management', 'Sustainable Technology']
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    title: 'Chief Operations Officer',
    image: 'https://placehold.co/600x600/F97316/ffffff?text=COO',
    bio: 'Operations expert ensuring world-class manufacturing efficiency and quality standards.',
    quote: 'Excellence in execution defines our competitive edge.',
    linkedin: 'https://linkedin.com',
    email: 'mohammed@bishoftu.com',
    education: 'MSc Operations Management, Oxford',
    experience: '25+ years',
    achievements: [
      'Achieved 99.8% production quality rate',
      'Implemented ISO 9001 across all facilities',
      'Reduced production costs by 35%'
    ],
    expertise: ['Operations Excellence', 'Quality Management', 'Lean Manufacturing']
  },
  {
    id: 4,
    name: 'Helen Bekele',
    title: 'Chief Financial Officer',
    image: 'https://placehold.co/600x600/8B5CF6/ffffff?text=CFO',
    bio: 'Financial strategist with proven track record in scaling businesses and securing investments.',
    quote: 'Financial discipline enables sustainable growth.',
    linkedin: 'https://linkedin.com',
    email: 'helen@bishoftu.com',
    education: 'CPA, Wharton School of Business',
    experience: '22+ years',
    achievements: [
      'Secured $200M in strategic investments',
      'Maintained 40% annual revenue growth',
      'Led successful IPO preparation'
    ],
    expertise: ['Financial Strategy', 'Investment Management', 'Corporate Finance']
  },
  {
    id: 5,
    name: 'Daniel Wolde',
    title: 'Chief Marketing Officer',
    image: 'https://placehold.co/600x600/2563EB/ffffff?text=CMO',
    bio: 'Marketing visionary building brand recognition across Africa and beyond.',
    quote: 'Our brand is built on customer success stories.',
    linkedin: 'https://linkedin.com',
    email: 'daniel@bishoftu.com',
    education: 'MBA Marketing, INSEAD',
    experience: '18+ years',
    achievements: [
      'Expanded market presence to 15 countries',
      'Increased brand awareness by 300%',
      'Won 10+ marketing excellence awards'
    ],
    expertise: ['Brand Strategy', 'Digital Marketing', 'Market Expansion']
  },
  {
    id: 6,
    name: 'Ruth Desta',
    title: 'Chief Human Resources Officer',
    image: 'https://placehold.co/600x600/EC4899/ffffff?text=CHRO',
    bio: 'People-first leader cultivating a culture of excellence and continuous development.',
    quote: 'Our people are our greatest asset and competitive advantage.',
    linkedin: 'https://linkedin.com',
    email: 'ruth@bishoftu.com',
    education: 'MSc Human Resource Management',
    experience: '20+ years',
    achievements: [
      'Reduced employee turnover to industry-low 5%',
      'Implemented award-winning training programs',
      'Built diverse team of 2,500+ employees'
    ],
    expertise: ['Talent Development', 'Organizational Culture', 'Leadership Training']
  },
]

export default function LeadershipGrid() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.leader-card', {
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

  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedLeader])

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Leadership Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Meet Our{' '}
            <span className="gradient-text">Visionary Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Our executive team brings together decades of experience, innovative thinking, 
            and unwavering commitment to driving excellence across every aspect of our business.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              className="leader-card group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedLeader(leader)}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-secondary-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary-900/80 flex items-center justify-center gap-4"
                  >
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </motion.div>

                  {/* Name & Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="heading-5 mb-1">{leader.name}</h3>
                    <p className="text-sm text-white/90">{leader.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-secondary-600 mb-4 line-clamp-2">
                    {leader.bio}
                  </p>

                  {/* Experience & Education */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-primary-50 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary-600 mb-1" />
                      <div className="text-xs text-secondary-600">Experience</div>
                      <div className="text-sm font-semibold text-primary-600">{leader.experience}</div>
                    </div>
                    <div className="p-3 bg-accent-orange/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-accent-orange mb-1" />
                      <div className="text-xs text-secondary-600">Education</div>
                      <div className="text-sm font-semibold text-accent-orange line-clamp-1">
                        {leader.education.split(',')[0]}
                      </div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button className="btn-outline w-full">
                    View Full Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Board of Directors Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="heading-4 mb-4">Board of Directors</h3>
            <p className="text-secondary-600 max-w-2xl mx-auto mb-6">
              Our distinguished board of directors provides strategic guidance and oversight, 
              ensuring we maintain the highest standards of corporate governance.
            </p>
            <button className="btn-primary">
              View Board Members
            </button>
          </div>
        </motion.div>
      </div>

      {/* Leader Detail Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <LeaderModal
            leader={selectedLeader}
            onClose={() => setSelectedLeader(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

// Leader Modal Component
function LeaderModal({ leader, onClose }: { leader: typeof leaders[0], onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left - Image & Quick Info */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-outline flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${leader.email}`}
                  className="flex-1 btn-outline flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <div className="p-4 bg-primary-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary-600" />
                    <div className="text-xs font-semibold text-secondary-500 uppercase">Education</div>
                  </div>
                  <div className="text-sm font-semibold text-secondary-900">{leader.education}</div>
                </div>

                <div className="p-4 bg-accent-orange/10 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-accent-orange" />
                    <div className="text-xs font-semibold text-secondary-500 uppercase">Experience</div>
                  </div>
                  <div className="text-sm font-semibold text-secondary-900">{leader.experience}</div>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div>
              <h2 className="heading-3 mb-2">{leader.name}</h2>
              <p className="text-lg text-primary-600 font-semibold mb-6">{leader.title}</p>

              {/* Quote */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 mb-6">
                <Quote className="w-8 h-8 text-primary-400 mb-3" />
                <p className="text-lg italic text-secondary-700">
                  "{leader.quote}"
                </p>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h4 className="font-semibold text-secondary-900 mb-3">About</h4>
                <p className="text-secondary-700 leading-relaxed">{leader.bio}</p>
              </div>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="font-semibold text-secondary-900 mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-orange" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {leader.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}