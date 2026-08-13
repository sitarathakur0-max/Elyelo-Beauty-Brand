import Link from 'next/link'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { getBundles } from '@/services/productservice'

export default async function BundlesPage() {
  const bundles = await getBundles()

  return (
    <main>
      {/* Hero */}
      <section className="bg-soft-neutral py-12 md:py-16 border-b border-border">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-3">
            Bundles
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Curated product combinations for your everyday beauty routine — 
            thoughtfully grouped to make shopping easier.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="container-custom py-12">
        {bundles.length === 0 ? (
          <div className="text-center py-12 bg-soft-neutral rounded-lg">
            <p className="text-gray-500">No bundles available.</p>
            <Link
              href="/shop"
              className="inline-block mt-4 px-6 py-3 bg-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-300"
            >
              Shop All Products
            </Link>
          </div>
        ) : (
          <>
            <ProductGrid products={bundles} columns={4} />
            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-block px-6 py-3 border border-primary text-primary font-medium uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Shop All Products
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  )
}