'use client'

import { FiStar, FiStar as FiStarOutline } from 'react-icons/fi'

interface RatingProps {
  rating: number
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
}

export function Rating({ rating, reviewCount, size = 'sm' }: RatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const totalStars = 5

  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  const iconSizeMap = {
    sm: 14,
    md: 16,
    lg: 20,
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <FiStar
            key={`full-${i}`}
            className={`fill-gold text-gold ${sizeMap[size]}`}
            size={iconSizeMap[size]}
          />
        ))}
        {hasHalfStar && (
          <FiStar
            key="half"
            className="text-gold"
            size={iconSizeMap[size]}
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        )}
        {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <FiStarOutline
            key={`empty-${i}`}
            className="text-gray-300"
            size={iconSizeMap[size]}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-sm text-gray-500">({reviewCount})</span>
      )}
    </div>
  )
}