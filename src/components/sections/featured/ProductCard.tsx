// src/components/home/ProductCard.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Eye, 
  ShoppingCart, 
  Star,
  Info,
  ArrowUpRight,
  Zap,
  CheckCircle2
} from 'lucide-react'
import Image from 'next/image'

interface ProductCardProps {
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
  }
  index: number
  onViewDetails: () => void
}

export function ProductCard({ product, index, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return

    const card = cardRef.current
    const image = imageRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-accent-orange text-white rounded-full text-xs font-bold shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className={`px-3 py-1.5 ${product.badgeColor} text-white rounded-full text-xs font-bold shadow-lg`}>
          {product.badge}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-secondary-100">
        <div ref={imageRef} className="w-full h-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Overlay with Quick Actions */}
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent flex items-end justify-center pb-6 gap-3"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            onClick={onViewDetails}
            className="p-3 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors shadow-lg"
            aria-label="View details"
          >
            <Eye className="w-5 h-5" />
          </motion.button>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.15 }}
            className="p-3 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors shadow-lg"
            aria-label="Request quote"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="p-3 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors shadow-lg"
            aria-label="More info"
          >
            <Info className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-primary-500" />
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="heading-5 mb-3 group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="body-small text-secondary-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-secondary-200">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xs text-secondary-500 mb-1 capitalize">
                {key}
              </div>
              <div className="text-sm font-semibold text-secondary-900">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-4 space-y-2">
          {product.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-secondary-600">
              <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-secondary-500 mb-1">Price</div>
            <div className="font-bold text-primary-600">{product.price}</div>
          </div>

          <button
            onClick={onViewDetails}
            className="btn-primary group/btn flex items-center gap-2"
          >
            View Details
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3D Effect Border */}
      <div 
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors pointer-events-none"
        style={{ transform: 'translateZ(1px)' }}
      />
    </motion.div>
  )
}