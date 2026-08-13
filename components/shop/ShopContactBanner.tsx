'use client'

import Link from 'next/link'
import { FiMail, FiArrowRight } from 'react-icons/fi'

export function ShopContactBanner() {
  return (
    <div className="bg-soft-neutral border border-border rounded-lg p-6 md:p-8 mt-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
            <FiMail className="text-2xl text-gold" />
          </div>
        </div>
        <h3 className="text-lg font-serif font-semibold mb-2">
          Need Help Finding the Right Product?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Our team is here to help you choose the perfect beauty essentials for your routine.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-medium rounded hover:bg-gold-dark transition-colors duration-300"
        >
          Contact Us
          <FiArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  )
}