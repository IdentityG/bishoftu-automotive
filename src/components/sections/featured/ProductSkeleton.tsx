// src/components/home/ProductSkeleton.tsx
export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 bg-secondary-200" />
      
      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="h-4 bg-secondary-200 rounded w-24" />
        
        {/* Title */}
        <div className="h-6 bg-secondary-200 rounded w-3/4" />
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-secondary-200 rounded" />
          <div className="h-4 bg-secondary-200 rounded w-5/6" />
        </div>
        
        {/* Specs */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-secondary-200 rounded" />
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <div className="h-6 bg-secondary-200 rounded w-24" />
          <div className="h-10 bg-secondary-200 rounded w-32" />
        </div>
      </div>
    </div>
  )
}

export function ProductSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  )
}