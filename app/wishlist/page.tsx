'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiHeart, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'
import { getMockProducts } from '@/data/products'

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(() => {
    const products = getMockProducts()
    return products.slice(0, 4)
  })

  const removeFromWishlist = (id: string) => {
    setWishlist(items => items.filter(item => item.id !== id))
  }

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <FiHeart className="text-2xl text-gold" />
          <h1 className="text-3xl md:text-4xl font-serif font-semibold">
            Your Wishlist
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-12 bg-soft-neutral rounded-lg">
            <p className="text-gray-500 mb-4">Your wishlist is currently empty.</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-300"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map((product, index) => {
                const imageUrl = product.images && product.images.length > 0 
                  ? product.images[0] 
                  : '/images/placeholder.webp'

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link href={`/products/${product.slug}`} className="block">
                      <span className="sr-only">{product.name}</span>
                    </Link>

                    <div className="relative aspect-square bg-soft-neutral">
                      {/* ✅ Actual Image */}
                      <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 z-10"
                        aria-label="Remove from wishlist"
                      >
                        <FiTrash2 className="text-lg text-red-500" />
                      </button>
                    </div>

                    <div className="p-4">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {product.brand}
                      </span>
                      <h3 className="font-serif font-medium text-base mt-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="font-semibold mt-2">Rs. {product.price.toLocaleString()}</p>
                      <Button
                        variant="primary"
                        className="w-full text-sm mt-3 bg-primary text-white hover:bg-gold transition-colors duration-300"
                        onClick={() => {
                          console.log('Add to cart:', product)
                        }}
                      >
                        <FiShoppingBag className="mr-2 text-sm" />
                        Add to Cart
                      </Button>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/shop"
                className="inline-block px-6 py-3 border border-primary text-primary font-medium uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  )
}