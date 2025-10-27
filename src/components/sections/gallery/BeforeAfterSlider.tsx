// src/components/home/BeforeAfterSlider.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  project: any
  onClose: () => void
}

export function BeforeAfterSlider({ project, onClose }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setSliderPosition(prev => Math.max(0, prev - 5))
      if (e.key === 'ArrowRight') setSliderPosition(prev => Math.min(100, prev + 5))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Info */}
        <div className="absolute -top-12 left-0 text-white z-10">
          <h3 className="font-bold text-xl mb-1">{project.title}</h3>
          <p className="text-sm text-secondary-300">Drag slider to compare before and after</p>
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="relative aspect-video bg-secondary-900 rounded-2xl overflow-hidden cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Full) */}
          <div className="absolute inset-0">
            <Image
              src={project.beforeImage}
              alt="Before"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-lg font-semibold">
              Before
            </div>
          </div>

          {/* After Image (Clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={project.afterImage}
              alt="After"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-lg font-semibold">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-secondary-900 -mr-2" />
              <ChevronRight className="w-5 h-5 text-secondary-900 -ml-2" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between text-white">
          <button
            onClick={() => setSliderPosition(Math.max(0, sliderPosition - 10))}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Show More Before
          </button>

          <div className="text-center">
            <div className="text-sm text-secondary-400 mb-1">Slider Position</div>
            <div className="text-2xl font-bold">{Math.round(sliderPosition)}%</div>
          </div>

          <button
            onClick={() => setSliderPosition(Math.min(100, sliderPosition + 10))}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            Show More After
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}