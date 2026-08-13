'use client'

import { motion } from 'framer-motion'

export function ShopHero() {
  return (
    <section className="bg-soft-neutral py-12 md:py-16 border-b border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3">
            Shop All Beauty Essentials
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Discover our complete collection of skincare, makeup, haircare,
            fragrance, accessories and bundles — carefully selected for your
            everyday beauty routine.
          </p>
        </motion.div>
      </div>
    </section>
  )
}