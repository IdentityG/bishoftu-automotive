// src/components/home/ProductModal.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  X, 
  ChevronRight,
  Star,
  CheckCircle2,
  Download,
  Share2,
  Phone,
  Mail
} from 'lucide-react'
import Image from 'next/image'

interface ProductModalProps {
  product: {
    id: number
    title: string
    category: string
    image: string
    badge: string
    badgeColor: string
    specs: Record<string, string>
    price: string
    featured: boolean
    description: string
    highlights: string[]
  } | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (product && modalRef.current) {
      gsap.from('.modal-content', {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
      })
    }
  }, [product])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (product) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="modal-content bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {product.featured && (
                <div className="flex items-center gap-1 px-3 py-1.5 bg-accent-orange text-white rounded-full text-xs font-bold shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}
              <div className={`px-3 py-1.5 ${product.badgeColor} text-white rounded-full text-xs font-bold shadow-lg`}>
                {product.badge}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8 max-h-[90vh] overflow-y-auto">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-xl overflow-hidden bg-secondary-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="btn-outline flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                  Download Specs
                </button>
                <button className="btn-outline flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Category */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide px-3 py-1 bg-primary-50 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="heading-3 mb-3">{product.title}</h2>
                <p className="body-large text-secondary-600">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="p-4 bg-primary-50 rounded-xl border-2 border-primary-100">
                <div className="text-sm text-secondary-600 mb-1">Starting Price</div>
                <div className="text-2xl font-bold text-primary-600">{product.price}</div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="heading-5 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="p-4 bg-secondary-50 rounded-lg">
                      <div className="text-xs text-secondary-500 mb-1 uppercase tracking-wide">
                        {key}
                      </div>
                      <div className="text-lg font-semibold text-secondary-900">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="heading-5 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-secondary-200">
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  Request Quote
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="tel:+1234567890"
                    className="btn-outline flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a 
                    href="mailto:sales@bishoftu.com"
                    className="btn-outline flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-4 bg-accent-green/10 rounded-lg border border-accent-green/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-secondary-700">
                    <strong>Available Now:</strong> In stock and ready for immediate delivery. 
                    Contact our sales team for volume pricing and customization options.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}