'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiPackage, FiChevronRight } from 'react-icons/fi'

// Demo orders (will be replaced with API later)
const demoOrders = [
  {
    id: 'ORD-001',
    date: 'March 15, 2026',
    total: 5498,
    status: 'Delivered',
    items: 3,
  },
  {
    id: 'ORD-002',
    date: 'March 10, 2026',
    total: 2899,
    status: 'Processing',
    items: 1,
  },
]

export default function OrdersPage() {
  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FiPackage className="text-2xl text-gold" />
          <h1 className="text-3xl md:text-4xl font-serif font-semibold">
            My Orders
          </h1>
        </div>

        {demoOrders.length === 0 ? (
          <div className="text-center py-12 bg-soft-neutral rounded-lg">
            <p className="text-gray-500 mb-4">No orders yet.</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-300"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {demoOrders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-border rounded-lg p-6 hover:border-gold transition-colors duration-300"
              >
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Rs. {order.total.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{order.items} items</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {order.status}
                    </span>
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="p-2 hover:text-gold transition-colors duration-300"
                    >
                      <FiChevronRight className="text-xl" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/account"
            className="text-sm text-gray-500 hover:text-gold transition-colors duration-300"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}