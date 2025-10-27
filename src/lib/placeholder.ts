// src/lib/placeholder.ts
export function getProductPlaceholder(id: number): string {
  // Using placeholder service - replace with actual images later
  return `https://placehold.co/800x600/3B82F6/ffffff?text=Product+${id}`
}

// Update the products array to use placeholders
export const productImages = {
  truck1: '/images/products/truck-1.jpg',
  locomotive1: '/images/products/locomotive-1.jpg',
  trailer1: '/images/products/trailer-1.jpg',
  engine1: '/images/products/engine-1.jpg',
  hydraulic1: '/images/products/hydraulic-1.jpg',
  brake1: '/images/products/brake-1.jpg',
}