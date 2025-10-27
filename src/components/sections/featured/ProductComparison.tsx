// src/components/home/ProductComparison.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Check, AlertCircle } from 'lucide-react'
import Image from 'next/image'

interface ProductComparisonProps {
  products: any[]
  onClose: () => void
}

export function ProductComparison({ products: allProducts, onClose }: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  const maxProducts = 3

  const addProduct = (product: any) => {
    if (selectedProducts.length < maxProducts) {
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const removeProduct = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId))
  }

  const isSelected = (productId: number) => {
    return selectedProducts.some(p => p.id === productId)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="heading-3">Compare Products</h2>
                <p className="text-primary-100 mt-2">
                  Select up to {maxProducts} products to compare
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Product Selection */}
            {selectedProducts.length < maxProducts && (
              <div className="mb-8 p-4 bg-primary-50 rounded-lg border-2 border-primary-100">
                <h3 className="font-semibold text-secondary-900 mb-4">
                  Available Products ({allProducts.length - selectedProducts.length} remaining)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {allProducts.filter(p => !isSelected(p.id)).map((product) => (
                    <button
                      key={product.id}
                      onClick={() => addProduct(product)}
                      className="group relative aspect-square rounded-lg overflow-hidden border-2 border-secondary-200 hover:border-primary-500 transition-colors"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Plus className="w-8 h-8 text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Comparison Table */}
            {selectedProducts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-secondary-200">
                      <th className="text-left p-4 font-semibold text-secondary-700 sticky left-0 bg-white z-10">
                        Feature
                      </th>
                      {selectedProducts.map((product) => (
                        <th key={product.id} className="p-4 min-w-[250px]">
                          <div className="relative">
                            <button
                              onClick={() => removeProduct(product.id)}
                              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                              <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-semibold text-secondary-900">{product.title}</h4>
                            <p className="text-sm text-secondary-600">{product.category}</p>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Price Row */}
                    <tr className="border-b border-secondary-200 bg-primary-50">
                      <td className="p-4 font-semibold sticky left-0 bg-primary-50 z-10">Price</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="p-4 text-center">
                          <span className="text-lg font-bold text-primary-600">{product.price}</span>
                        </td>
                      ))}
                    </tr>

                    {/* Badge Row */}
                    <tr className="border-b border-secondary-200">
                      <td className="p-4 font-semibold sticky left-0 bg-white z-10">Status</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="p-4 text-center">
                          <span className={`inline-block px-3 py-1 ${product.badgeColor} text-white rounded-full text-sm font-bold`}>
                            {product.badge}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Specs Rows */}
                    {selectedProducts.length > 0 &&
                      Object.keys(selectedProducts[0].specs).map((specKey) => (
                        <tr key={specKey} className="border-b border-secondary-200 hover:bg-secondary-50 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-white hover:bg-secondary-50 z-10 capitalize">
                            {specKey}
                          </td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="p-4 text-center text-secondary-700">
                              {product.specs[specKey]}
                            </td>
                          ))}
                        </tr>
                      ))}

                    {/* Highlights Rows */}
                    <tr className="border-b border-secondary-200 bg-secondary-50">
                      <td className="p-4 font-semibold sticky left-0 bg-secondary-50 z-10">Key Features</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="p-4">
                          <ul className="space-y-2 text-left text-sm">
                            {product.highlights.map((highlight: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Featured Status */}
                    <tr className="border-b border-secondary-200">
                      <td className="p-4 font-semibold sticky left-0 bg-white z-10">Featured Product</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="p-4 text-center">
                          {product.featured ? (
                            <Check className="w-6 h-6 text-accent-green mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-secondary-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>

                    {/* Action Row */}
                    <tr className="bg-white">
                      <td className="p-4 sticky left-0 bg-white z-10"></td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="p-4">
                          <div className="space-y-2">
                            <button className="btn-primary w-full">
                              Request Quote
                            </button>
                            <button className="btn-outline w-full">
                              View Details
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-20">
                <AlertCircle className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                <h3 className="heading-4 text-secondary-600 mb-2">No Products Selected</h3>
                <p className="text-secondary-500">
                  Select products from above to start comparing
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}