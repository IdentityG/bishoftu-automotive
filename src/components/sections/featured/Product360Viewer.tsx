// src/components/home/Product360Viewer.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, Maximize2, X } from 'lucide-react'

interface Product360ViewerProps {
  images: string[]
  productName: string
  isOpen: boolean
  onClose: () => void
}

export function Product360Viewer({ images, productName, isOpen, onClose }: Product360ViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 100)
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }
  }, [isAutoRotating, images.length])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setIsAutoRotating(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    const sensitivity = 5
    const newIndex = Math.floor(Math.abs(deltaX) / sensitivity)

    if (deltaX > 0) {
      setCurrentIndex((prev) => (prev + newIndex) % images.length)
    } else {
      setCurrentIndex((prev) => (prev - newIndex + images.length) % images.length)
    }

    setStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Viewer Container */}
        <div
          ref={containerRef}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Image Display */}
          <div className="relative aspect-video bg-secondary-100 cursor-grab active:cursor-grabbing">
            <img
              src={images[currentIndex]}
              alt={`${productName} - View ${currentIndex + 1}`}
              className="w-full h-full object-contain select-none"
              draggable={false}
            />

            {/* Drag Instruction Overlay */}
            {!isDragging && !isAutoRotating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none"
              >
                <div className="text-white text-center">
                  <RotateCw className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                  <p className="text-lg font-semibold">Drag to rotate</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="p-6 bg-secondary-50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="heading-5">{productName}</h3>
                <p className="text-sm text-secondary-600">
                  View {currentIndex + 1} of {images.length}
                </p>
              </div>

              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`btn-outline flex items-center gap-2 ${
                  isAutoRotating ? 'bg-primary-500 text-white border-primary-500' : ''
                }`}
              >
                <RotateCw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} />
                {isAutoRotating ? 'Stop Rotation' : 'Auto Rotate'}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-secondary-200 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-primary-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-primary-500 scale-110'
                      : 'border-secondary-300 hover:border-primary-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}