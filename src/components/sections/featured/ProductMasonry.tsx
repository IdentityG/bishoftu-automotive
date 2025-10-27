// src/components/home/ProductMasonry.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ProductCard } from './ProductCard'

interface ProductMasonryProps {
  products: any[]
  onViewDetails: (product: any) => void
}

export function ProductMasonry({ products, onViewDetails }: ProductMasonryProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.masonry-item', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          grid: [columns, Math.ceil(products.length / columns)],
          from: 'start',
        },
        ease: 'power3.out',
      })
    }, gridRef)

    return () => ctx.revert()
  }, [columns, products.length])

  const getColumnItems = (columnIndex: number) => {
    return products.filter((_, index) => index % columns === columnIndex)
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="space-y-8">
          {getColumnItems(columnIndex).map((product, index) => (
            <motion.div
              key={product.id}
              className="masonry-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                index={index}
                onViewDetails={() => onViewDetails(product)}
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}