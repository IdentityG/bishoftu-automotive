// src/components/home/FeaturedProductsEnhanced.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Zap,
  Award,
  TrendingUp,
  Grid3x3,
  List,
  SlidersHorizontal,
  GitCompare,
  Rotate3d
} from 'lucide-react'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'
import { ProductFilter } from './ProductFilter'
import { ProductComparison } from './ProductComparison'
import { Product360Viewer } from './Product360Viewer'
import { ProductCardFlip } from './ProductCardFlip'
import { ProductSkeletonGrid } from './ProductSkeleton'

// Import products data
import { products as productsData } from '../../../data/products'
import { ProductListItem } from './ProductListItem'

type ViewMode = 'grid' | 'list' | 'flip'

export default function FeaturedProductsEnhanced() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState(productsData)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [show360Viewer, setShow360Viewer] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.product-stat', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleFilterChange = (filters: any) => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      let filtered = [...productsData]

      if (filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === filters.category)
      }

      // Sort
      switch (filters.sortBy) {
        case 'newest':
          filtered = filtered.sort((a, b) => b.id - a.id)
          break
        case 'popular':
          filtered = filtered.filter(p => p.featured)
          break
        // Add more sorting logic
      }

      setFilteredProducts(filtered)
      setCurrentIndex(0)
      setIsLoading(false)
    }, 500)
  }

  const visibleProducts = () => {
    const itemsPerPage = viewMode === 'list' ? 5 : 3
    const items = []
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % filteredProducts.length
      items.push(filteredProducts[index])
    }
    return items
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="floating-shape absolute bottom-20 left-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl" />
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
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Featured Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Explore Our{' '}
            <span className="gradient-text">Premium Range</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Discover cutting-edge automotive and locomotive solutions engineered 
            for performance, reliability, and innovation.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Award, label: 'Premium Quality', value: '100%' },
            { icon: TrendingUp, label: 'Products', value: `${productsData.length}+` },
            { icon: Zap, label: 'Fast Delivery', value: '24h' },
            { icon: Award, label: 'Warranty', value: '5 Years' },
          ].map((stat, index) => (
            <div
              key={index}
              className="product-stat bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-primary-500 mb-3" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-secondary-600 hover:bg-secondary-100'
              }`}
              aria-label="Grid view"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-secondary-600 hover:bg-secondary-100'
              }`}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('flip')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'flip' ? 'bg-primary-500 text-white' : 'text-secondary-600 hover:bg-secondary-100'
              }`}
              aria-label="Flip view"
            >
              <Rotate3d className="w-5 h-5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-outline flex items-center gap-2 ${showFilters ? 'bg-primary-500 text-white border-primary-500' : ''}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <button
              onClick={() => setShowComparison(true)}
              className="btn-outline flex items-center gap-2"
            >
              <GitCompare className="w-4 h-4" />
              Compare
            </button>
            <button
              onClick={() => setShow360Viewer(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Rotate3d className="w-4 h-4" />
              360° View
            </button>
          </div>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductFilter onFilterChange={handleFilterChange} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Display */}
        <div className="relative">
          {isLoading ? (
            <ProductSkeletonGrid count={viewMode === 'list' ? 5 : 3} />
          ) : (
            <>
              {/* Navigation Buttons */}
              {filteredProducts.length > (viewMode === 'list' ? 5 : 3) && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
                             w-12 h-12 bg-white rounded-full shadow-xl
                             flex items-center justify-center
                             hover:bg-primary-500 hover:text-white
                             transition-all duration-300 group"
                    aria-label="Previous products"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20
                             w-12 h-12 bg-white rounded-full shadow-xl
                             flex items-center justify-center
                             hover:bg-primary-500 hover:text-white
                             transition-all duration-300 group"
                    aria-label="Next products"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Products Grid/List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${viewMode}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={
                    viewMode === 'list'
                      ? 'space-y-6'
                      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  }
                >
                  {visibleProducts().map((product, index) => (
                    <motion.div
                      key={`${product.id}-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {viewMode === 'flip' ? (
                        <ProductCardFlip
                          product={product}
                          onViewDetails={() => setSelectedProduct(product)}
                        />
                      ) : viewMode === 'list' ? (
                        <ProductListItem
                          product={product}
                          onViewDetails={() => setSelectedProduct(product)}
                        />
                      ) : (
                        <ProductCard
                          product={product}
                          index={index}
                          onViewDetails={() => setSelectedProduct(product)}
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              {filteredProducts.length > (viewMode === 'list' ? 5 : 3) && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ 
                    length: Math.ceil(filteredProducts.length / (viewMode === 'list' ? 5 : 3)) 
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * (viewMode === 'list' ? 5 : 3))}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${Math.floor(currentIndex / (viewMode === 'list' ? 5 : 3)) === index 
                          ? 'w-8 bg-primary-500' 
                          : 'w-2 bg-secondary-300 hover:bg-secondary-400'
                        }
                      `}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/products"
              className="btn-primary group inline-flex items-center gap-2"
            >
              Explore Full Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="btn-outline group inline-flex items-center gap-2"
            >
              Request Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {showComparison && (
        <ProductComparison
          products={filteredProducts}
          onClose={() => setShowComparison(false)}
        />
      )}

      {show360Viewer && (
        <Product360Viewer
          images={[
            '/images/products/360/frame-1.jpg',
            '/images/products/360/frame-2.jpg',
            '/images/products/360/frame-3.jpg',
            '/images/products/360/frame-4.jpg',
            '/images/products/360/frame-5.jpg',
            '/images/products/360/frame-6.jpg',
          ]}
          productName="Heavy Duty Truck Series X1"
          isOpen={show360Viewer}
          onClose={() => setShow360Viewer(false)}
        />
      )}
    </section>
  )
}