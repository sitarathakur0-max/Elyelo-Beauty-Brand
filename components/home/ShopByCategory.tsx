'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Skincare',
    href: '/skincare',
    description: 'Carefully selected essentials for your everyday skincare routine.',
    image: '/images/products/skincare/CeraVe Acne.jpg',
  },
  {
    name: 'Haircare',
    href: '/haircare',
    description: 'Discover products for healthier-looking, cared-for hair.',
    image: '/images/products/haircare/hair serum.jpg',
  },
  {
    name: 'Makeup',
    href: '/makeup',
    description: 'Beauty essentials to enhance your everyday look.',
    image: '/images/products/makeup/foundation.webp',
  },
  {
    name: 'Fragrance',
    href: '/fragrance',
    description: 'Find scents that complement your personal style.',
    image: '/images/products/fragrance/afnan fragrance.webp',
  },
  {
    name: 'Accessories',
    href: '/shop?category=accessories',
    description: 'Elevate your beauty ritual with thoughtfully curated jewelry pieces.',
    image: '/images/products/accessories/necklace.jpg',
  },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Shop Beauty by Category
          </h2>
          <p className="text-gray-600">
            Find your everyday beauty essentials in one place, from skincare and
            makeup to haircare and fragrance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              <Link href={category.href} className="absolute inset-0 z-10">
                <span className="sr-only">{category.name}</span>
              </Link>

              <Image
                src={category.image}
                alt={`${category.name} - Elyelo beauty category`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-white/80 mb-3 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
                  <span>Shop {category.name}</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}