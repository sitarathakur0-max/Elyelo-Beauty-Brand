'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiHeart } from 'react-icons/fi'
import { Rating } from '@/components/ui/Rating'
import { Button } from '@/components/ui/Button'
import { Product, formatPrice } from '@/lib'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, brand, price, salePrice, rating, reviewCount, images, slug, type } =
    product

  const hasSale = salePrice && salePrice < price
  const imageUrl = images && images.length > 0 ? images[0] : '/images/placeholder.webp'

  const getBadge = () => {
    if (type === 'bundle') return 'Bundle'
    if (type === 'accessory') return 'Accessory'
    return null
  }
  const badge = getBadge()

  return (
    <div className="group relative bg-white border border-border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/products/${slug}`} className="block">
        <span className="sr-only">{name}</span>
      </Link>

      <div className="relative aspect-square bg-soft-neutral">
        <Image
          src={imageUrl}
          alt={`${name} by ${brand} - Elyelo beauty product`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <button
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 z-10"
          aria-label="Add to wishlist"
        >
          <FiHeart className="text-lg hover:text-gold transition-colors duration-300" />
        </button>

        {hasSale && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-white text-xs font-semibold tracking-wider uppercase rounded">
            Sale
          </span>
        )}

        {badge && !hasSale && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold tracking-wider uppercase rounded">
            {badge}
          </span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {brand}
          </span>
          <Rating rating={rating} reviewCount={reviewCount} size="sm" />
        </div>

        <h3 className="font-serif font-medium text-base line-clamp-1">
          <Link
            href={`/products/${slug}`}
            className="hover:text-gold transition-colors duration-300"
          >
            {name}
          </Link>
        </h3>

        <div className="flex items-center gap-2">
          {hasSale ? (
            <>
              <span className="text-lg font-semibold text-gold">
                {formatPrice(salePrice)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(price)}
              </span>
            </>
          ) : (
            <span className="text-lg font-semibold">{formatPrice(price)}</span>
          )}
        </div>

        <Button
          variant="primary"
          className="w-full text-sm mt-2 bg-primary text-white hover:bg-gold transition-colors duration-300"
          onClick={() => {
            console.log('Add to cart:', product)
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}