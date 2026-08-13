'use client'

import { ProductGrid } from '@/components/shop/ProductGrid'
import { Button } from '@/components/ui/Button'
import { Product } from '@/lib'

interface BestSellersProps {
  products: Product[]
}

export default function BestSellers({ products }: BestSellersProps) {
  return (
    <section className="py-16 md:py-20 bg-soft-neutral">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Best-Selling Beauty Essentials
          </h2>
          <p className="text-gray-600">
            Explore customer favorites and discover beauty essentials for your
            everyday routine.
          </p>
        </div>

        <ProductGrid products={products} columns={4} />

        <div className="text-center mt-12">
          <Button href="/shop" variant="primary">
            Shop All Products
          </Button>
        </div>
      </div>
    </section>
  )
}