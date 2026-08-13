'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheckCircle, FiShield, FiTruck } from 'react-icons/fi'

const reasons = [
  {
    icon: FiCheckCircle,
    title: 'Carefully Selected',
    description:
      'Beauty products chosen with quality, usefulness and everyday routines in mind.',
  },
  {
    icon: FiShield,
    title: 'Quality You Can Trust',
    description:
      'We focus on sourcing genuine products and providing clear product information.',
  },
  {
    icon: FiTruck,
    title: 'Delivered With Care',
    description:
      'Reliable order processing and secure delivery across Pakistan.',
  },
]

export default function WhyElyelo() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Why Choose Elyelo?
          </h2>
          <p className="text-gray-600">
            We make discovering beauty products easier with carefully selected
            products, clear information and a shopping experience designed
            around you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-border hover:border-gold transition-colors duration-300"
            >
              <reason.icon className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 📌 Contact Link Added Here */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-300 font-medium"
          >
            Have questions? Get in touch →
          </Link>
        </div>
      </div>
    </section>
  )
}