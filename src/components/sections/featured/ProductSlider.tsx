// src/components/home/ProductSlider.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCard } from './ProductCard'

interface ProductSliderProps {
  products: any[]
  onViewDetails: (product: any) => void
}

export function ProductSlider({ products, onViewDetails }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = products.length - 1
      if (newIndex >= products.length) newIndex = 0
      return newIndex
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div ref={sliderRef} className="relative overflow-hidden">
      <div className="relative h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
                           } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-full max-w-md"
          >
            <ProductCard
              product={products[currentIndex]}
              index={currentIndex}
              onViewDetails={() => onViewDetails(products[currentIndex])}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                 w-12 h-12 bg-white rounded-full shadow-xl
                 flex items-center justify-center
                 hover:bg-primary-500 hover:text-white
                 transition-all duration-300"
        aria-label="Previous product"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                 w-12 h-12 bg-white rounded-full shadow-xl
                 flex items-center justify-center
                 hover:bg-primary-500 hover:text-white
                 transition-all duration-300"
        aria-label="Next product"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`
              h-2 rounded-full transition-all duration-300
              ${index === currentIndex 
                ? 'w-8 bg-primary-500' 
                : 'w-2 bg-secondary-300 hover:bg-secondary-400'
              }
            `}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>

      {/* Product Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-secondary-600">
          {currentIndex + 1} / {products.length}
        </span>
      </div>
    </div>
  )
}