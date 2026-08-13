'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { BlogPost } from '@/lib'

interface BeautyJournalProps {
  posts: BlogPost[]
}

export default function BeautyJournal({ posts }: BeautyJournalProps) {
  // ✅ Fallback image (kisi existing image ko use karein)
  const fallbackImage = '/images/products/skincare/ordinary.jpg'

  return (
    <section className="py-16 md:py-20 bg-soft-neutral">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            The Elyelo Beauty Journal
          </h2>
          <p className="text-gray-600">
            Discover skincare tips, beauty guides, ingredient insights and
            practical advice to help you make informed beauty choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => {
            // ✅ Agar image missing hai toh fallback use karein
            const imageSrc = post.image || fallbackImage

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg overflow-hidden border border-border hover:border-gold transition-colors duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <span className="sr-only">{post.title}</span>
                </Link>

                <div className="relative aspect-[4/3] overflow-hidden bg-soft-neutral">
                  <Image
                    src={imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => {
                      // ✅ Agar image load na ho toh fallback show karein
                      const target = e.target as HTMLImageElement
                      target.src = fallbackImage
                    }}
                  />
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    {post.date}
                  </p>
                  <h3 className="font-serif font-semibold text-base mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold group-hover:gap-3 transition-all duration-300">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                    <FiArrowRight className="text-sm" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}