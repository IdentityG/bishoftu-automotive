// src/components/home/ProductListItem.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Star, 
  Eye,
  ShoppingCart,
  CheckCircle2
} from 'lucide-react'
import Image from 'next/image'

interface ProductListItemProps {
  product: any
  onViewDetails: () => void
}

export function ProductListItem({ product, onViewDetails }: ProductListItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {/* Image */}
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden bg-secondary-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
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

        {/* Content */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="heading-4 mt-2">{product.title}</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-secondary-500 mb-1">Price</div>
                <div className="text-xl font-bold text-primary-600">{product.price}</div>
              </div>
            </div>

            <p className="body-medium text-secondary-600 mb-4">
              {product.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="p-3 bg-secondary-50 rounded-lg">
                  <div className="text-xs text-secondary-500 mb-1 capitalize">{key}</div>
                  <div className="text-sm font-semibold text-secondary-900">{value as string}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-2 mb-4">
              {product.highlights.slice(0, 4).map((highlight: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-secondary-700">
                  <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-secondary-200">
            <button
              onClick={onViewDetails}
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
            <button className="btn-outline flex-1 flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Request Quote
            </button>
            <button className="btn-ghost p-3">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}