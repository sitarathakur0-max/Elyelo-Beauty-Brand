'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiPackage, FiMail, FiHome } from 'react-icons/fi'

export default function OrderSuccessPage() {
  useEffect(() => {
    console.log('Order placed successfully!')
  }, [])

  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 md:py-20">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle className="text-4xl text-green-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-2">Thank you for your order.</p>
          <p className="text-sm text-gray-500 mb-6">
            We've sent a confirmation email with your order details.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            <div className="bg-soft-neutral p-4 rounded-lg">
              <FiPackage className="text-2xl text-gold mx-auto mb-2" />
              <p className="text-sm font-medium">Order #ORD-001</p>
              <p className="text-xs text-gray-400">Processing</p>
            </div>
            <div className="bg-soft-neutral p-4 rounded-lg">
              <FiMail className="text-2xl text-gold mx-auto mb-2" />
              <p className="text-sm font-medium">Email Sent</p>
              <p className="text-xs text-gray-400">Check your inbox</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              href="/account/orders"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <FiHome className="text-sm" />
              View Orders
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}