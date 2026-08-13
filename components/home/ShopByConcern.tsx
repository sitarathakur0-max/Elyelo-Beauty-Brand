'use client'

import { motion } from 'framer-motion'

const concerns = [
  'Acne-Prone Skin',
  'Dry Skin',
  'Oily Skin',
  'Hydration',
  'Dull Skin',
  'Sensitive Skin',
]

export default function ShopByConcern() {
  return (
    <section className="py-16 md:py-20 bg-soft-neutral">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Find Beauty Products for Your Needs
          </h2>
          <p className="text-gray-600">
            Explore products by common skin concerns to make finding the right
            beauty essentials easier.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-border rounded-lg p-6 text-center transition-all duration-300 hover:border-gold hover:shadow-lg">
                <h3 className="font-serif text-base md:text-lg font-medium group-hover:text-gold transition-colors duration-300">
                  {concern}
                </h3>
                <div className="mt-2 w-8 h-0.5 bg-gold mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}