// src/components/home/ProductQuickView.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Eye, Heart, Share2 } from 'lucide-react'
import Image from 'next/image'

interface ProductQuickViewProps {
  product: any
  isOpen: boolean
  onClose: () => void
  onViewFull: () => void
}

export function ProductQuickView({ product, isOpen, onClose, onViewFull }: ProductQuickViewProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 md:h-auto bg-secondary-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1.5 ${product.badgeColor} text-white rounded-full text-xs font-bold`}>
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="heading-4 mt-2">{product.title}</h3>
                  <p className="body-small text-secondary-600 mt-2">
                    {product.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="p-3 bg-secondary-50 rounded-lg">
                      <div className="text-xs text-secondary-500 capitalize">{key}</div>
                      <div className="text-sm font-semibold">{value as string}</div>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-sm text-secondary-600">Price</div>
                  <div className="text-xl font-bold text-primary-600">{product.price}</div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={onViewFull}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Full Details
                  </button>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <button className="btn-outline p-3 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                    <button className="btn-outline p-3 flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="btn-outline p-3 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}