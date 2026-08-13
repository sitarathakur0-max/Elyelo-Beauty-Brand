import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBySlug } from '@/services/productservice'
import { Rating } from '@/components/ui/Rating'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const hasSale = product.salePrice && product.salePrice < product.price
  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.webp'

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gold transition-colors duration-300">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${product.category}`} className="hover:text-gold transition-colors duration-300">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square bg-soft-neutral rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                {product.brand}
              </span>
              {product.type === 'bundle' && (
                <span className="px-2 py-0.5 bg-gold text-white text-xs font-semibold uppercase tracking-wider rounded">
                  Bundle
                </span>
              )}
              {product.type === 'accessory' && (
                <span className="px-2 py-0.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider rounded">
                  Accessory
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="lg" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              {hasSale ? (
                <>
                  <span className="text-3xl font-bold text-gold">
                    {formatPrice(product.salePrice!)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="min-w-[200px] bg-primary text-white hover:bg-gold transition-colors duration-300">
                Add to Cart
              </Button>
              <Button variant="secondary" className="min-w-[120px]">
                Wishlist
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-sm text-gray-500">
              <p>SKU: {product.sku}</p>
              <p className="mt-1">In Stock: {product.stock} units</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}