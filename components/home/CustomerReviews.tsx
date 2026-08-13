'use client'

import { motion } from 'framer-motion'
import { Rating } from '@/components/ui/Rating'
import { Review } from '@/lib'

interface CustomerReviewsProps {
  reviews: Review[]
}

export default function CustomerReviews({ reviews }: CustomerReviewsProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Loved by Beauty Shoppers
          </h2>
          <p className="text-gray-600">
            See what customers have to say about their Elyelo shopping
            experience and favorite beauty products.
          </p>
          <span className="inline-block mt-3 text-xs text-gold font-medium tracking-wider uppercase bg-soft-neutral px-3 py-1 rounded">
            Demo Reviews
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-soft-neutral rounded-lg p-6 border border-border hover:border-gold transition-colors duration-300"
            >
              <Rating rating={review.rating} size="md" />
              <p className="mt-3 text-gray-700 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-medium text-sm">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}