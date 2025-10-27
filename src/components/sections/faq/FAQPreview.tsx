// src/components/home/FAQPreview.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  HelpCircle,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

const faqs = [
  {
    id: 1,
    category: 'Products',
    question: 'What types of vehicles and equipment do you manufacture?',
    answer: 'We manufacture a comprehensive range of products including electric and diesel locomotives, heavy-duty trucks, cargo trailers, industrial vehicles, and specialized equipment for various sectors. Our product line spans railway systems, logistics solutions, construction equipment, and custom-built machinery tailored to specific industry needs.'
  },
  {
    id: 2,
    category: 'Services',
    question: 'Do you provide maintenance and after-sales support?',
    answer: 'Yes, we offer comprehensive after-sales support including 24/7 technical assistance, scheduled maintenance programs, spare parts supply, and on-site repair services. Our team of certified technicians ensures your equipment operates at peak performance with minimal downtime.'
  },
  {
    id: 3,
    category: 'Warranty',
    question: 'What warranty coverage do you offer on your products?',
    answer: 'We provide industry-leading warranty coverage of up to 5 years on most products, depending on the equipment type and usage conditions. Our warranty covers manufacturing defects, parts replacement, and labor costs. Extended warranty options are also available for additional peace of mind.'
  },
  {
    id: 4,
    category: 'Delivery',
    question: 'What is the typical delivery timeframe for orders?',
    answer: 'Delivery timeframes vary based on product type and customization requirements. Standard products typically ship within 2-4 weeks, while custom orders may take 8-12 weeks. We offer expedited delivery options and provide real-time tracking for all shipments.'
  },
  {
    id: 5,
    category: 'Financing',
    question: 'Do you offer financing options for large purchases?',
    answer: 'Yes, we partner with leading financial institutions to offer flexible financing solutions including leasing options, installment plans, and corporate credit facilities. Our financial advisors can help structure a payment plan that aligns with your budget and cash flow requirements.'
  },
]

const quickLinks = [
  { icon: Phone, text: 'Call Support', description: '24/7 Hotline', action: 'tel:+251-11-XXX-XXXX' },
  { icon: Mail, text: 'Email Us', description: 'Quick Response', action: 'mailto:support@bishoftu.com' },
  { icon: MessageCircle, text: 'Live Chat', description: 'Instant Help', action: '#chat' },
]

export default function FAQPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredFaqs, setFilteredFaqs] = useState(faqs)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFaqs(faqs)
    } else {
      const filtered = faqs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredFaqs(filtered)
      setActiveIndex(null)
    }
  }, [searchQuery])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [filteredFaqs])

  return (
    <section 
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
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Got Questions?{' '}
            <span className="gradient-text">We Have Answers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Find answers to commonly asked questions about our products, services, and processes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="bg-secondary-50 rounded-xl p-6">
                <h3 className="heading-5 mb-4">Search FAQs</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>
                {searchQuery && (
                  <div className="mt-3 text-sm text-secondary-600">
                    {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} found
                  </div>
                )}
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
                <h3 className="heading-5 mb-2">Still Have Questions?</h3>
                <p className="text-primary-100 mb-6 text-sm">
                  Our support team is here to help you 24/7
                </p>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.action}
                      className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all group"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{link.text}</div>
                        <div className="text-xs text-primary-200">{link.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Help Center Link */}
              <div className="bg-secondary-50 rounded-xl p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-accent-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Visit Help Center</h4>
                <p className="text-sm text-secondary-600 mb-4">
                  Access our complete knowledge base
                </p>
                <a href="/help" className="btn-outline w-full">
                  Browse All FAQs
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <div className="lg:col-span-2">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="faq-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-primary-200 transition-all">
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                      >
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                            {faq.category}
                          </div>
                          <h3 className="heading-5 group-hover:text-primary-600 transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`
                          w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0
                          transition-all duration-300
                          ${activeIndex === index ? 'bg-primary-500 rotate-180' : 'group-hover:bg-primary-200'}
                        `}>
                          <ChevronDown className={`w-5 h-5 ${activeIndex === index ? 'text-white' : 'text-primary-600'}`} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6">
                              <div className="pt-4 border-t border-secondary-200">
                                <p className="body-medium text-secondary-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <AlertCircle className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                <h3 className="heading-4 text-secondary-600 mb-2">No Results Found</h3>
                <p className="text-secondary-500 mb-6">
                  Try adjusting your search or browse all FAQs
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn-outline"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* View All FAQs CTA */}
            {filteredFaqs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <a
                  href="/faq"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View All FAQs
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}