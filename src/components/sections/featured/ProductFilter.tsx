// src/components/home/ProductFilter.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, X, ChevronDown } from 'lucide-react'

interface ProductFilterProps {
  onFilterChange: (filters: any) => void
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'featured',
  })

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'locomotives', label: 'Locomotives' },
    { value: 'parts', label: 'Parts & Components' },
    { value: 'equipment', label: 'Equipment' },
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' },
  ]

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const defaultFilters = {
      category: 'all',
      priceRange: 'all',
      sortBy: 'featured',
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  const hasActiveFilters = filters.category !== 'all' || filters.priceRange !== 'all' || filters.sortBy !== 'featured'

  return (
    <div className="relative">
      {/* Filter Toggle Button - Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden btn-outline w-full flex items-center justify-center gap-2 mb-4"
      >
        <Filter className="w-4 h-4" />
        Filters & Sort
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Filter Panel */}
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0 
        }}
        className="lg:h-auto lg:opacity-100 overflow-hidden"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="heading-5 flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary-500" />
              Filter Products
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-secondary-600 hover:text-primary-600 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                Category
              </label>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleFilterChange('category', cat.value)}
                    className={`
                      w-full text-left px-4 py-2 rounded-lg transition-all
                      ${filters.category === cat.value
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'bg-secondary-50 text-secondary-700 hover:bg-secondary-100'
                      }
                    `}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="input"
              >
                <option value="all">All Prices</option>
                <option value="0-50000">Under $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-250000">$100,000 - $250,000</option>
                <option value="250000+">$250,000+</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="input"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-6 pt-6 border-t border-secondary-200">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-secondary-700">Active Filters:</span>
                {filters.category !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {categories.find(c => c.value === filters.category)?.label}
                    <button onClick={() => handleFilterChange('category', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {filters.priceRange}
                    <button onClick={() => handleFilterChange('priceRange', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}