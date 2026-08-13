'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-16 md:py-20">
      <div className="container-custom text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-serif font-semibold text-gold mb-4">
            404
          </h1>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="gold" className="min-w-[180px]">
              <FiHome className="mr-2" />
              Go Home
            </Button>
            <Button href="/shop" variant="primary" className="min-w-[180px]">
              <FiArrowLeft className="mr-2" />
              Browse Shop
            </Button>
          </div>

          {/* Help Text */}
          <p className="text-sm text-gray-400 mt-8">
            Need help? <Link href="/contact" className="text-gold hover:text-gold-dark transition-colors duration-300">Contact us</Link>
          </p>
        </motion.div>
      </div>
    </main>
  )
}