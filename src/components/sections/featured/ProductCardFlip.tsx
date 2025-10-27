// src/components/home/ProductCardFlip.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Star, 
  CheckCircle2,
  Eye,
  ShoppingCart
} from 'lucide-react'
import Image from 'next/image'

interface ProductCardFlipProps {
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
  onViewDetails: () => void
}

export function ProductCardFlip({ product, onViewDetails }: ProductCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-[500px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-accent-orange text-white rounded-full text-xs font-bold shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`px-3 py-1.5 ${product.badgeColor} text-white rounded-full text-xs font-bold shadow-lg`}>
              {product.badge}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-secondary-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
              {product.category}
            </span>
            <h3 className="heading-4 mt-2 mb-3">{product.title}</h3>
            <p className="body-small text-secondary-600 line-clamp-3 mb-4">
              {product.description}
            </p>

            {/* Specs Preview */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                <div key={key} className="text-center p-2 bg-secondary-50 rounded-lg">
                  <div className="text-xs text-secondary-500 capitalize">{key}</div>
                  <div className="text-sm font-semibold text-secondary-900">{value}</div>
                </div>
              ))}
            </div>

            <div className="text-center text-sm text-secondary-500 italic">
              Hover to see more details
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-lg p-6 text-white"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="heading-4 mb-4">{product.title}</h3>
          
          <div className="space-y-3 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              {product.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/20">
              <h4 className="font-semibold mb-2">Specifications:</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="text-sm">
                    <span className="opacity-80 capitalize">{key}:</span>
                    <span className="font-semibold ml-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 space-y-3">
            <div className="text-center mb-3">
              <div className="text-sm opacity-80">Starting Price</div>
              <div className="text-2xl font-bold">{product.price}</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onViewDetails}
                className="px-4 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Details
              </button>
              <button className="px-4 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Quote
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}