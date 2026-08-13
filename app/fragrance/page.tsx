import { ProductGrid } from '@/components/shop/ProductGrid'
import { getProductsByCategory } from '@/services/productservice'

export default async function FragrancePage() {
  const products = await getProductsByCategory('fragrance')

  return (
    <main>
      {/* Category Hero */}
      <section className="relative bg-soft-neutral py-16 md:py-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/categories/fragrance-hero.jpg')" }}
          />
        </div>
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
            Fragrance
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Find scents that complement your personal style — 
            from luxurious perfumes to light, everyday mists.
          </p>
          <p className="text-sm text-gold font-medium mt-3">
            {products.length} products
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="container-custom py-12">
        {products.length === 0 ? (
          <div className="text-center py-12 bg-soft-neutral rounded-lg">
            <p className="text-gray-500">No fragrance products available.</p>
          </div>
        ) : (
          <ProductGrid products={products} columns={4} />
        )}
      </section>
    </main>
  )
}