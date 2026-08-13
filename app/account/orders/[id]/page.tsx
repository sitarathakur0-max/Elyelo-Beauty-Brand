'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiPackage, FiTruck, FiCheckCircle } from 'react-icons/fi'
import { formatPrice } from '@/lib'

// Demo order detail (will be replaced with API later)
const demoOrderDetail = {
  id: 'ORD-001',
  date: 'March 15, 2026',
  status: 'Delivered',
  subtotal: 4999,
  shipping: 299,
  tax: 200,
  total: 5498,
  items: [
    {
      name: 'Niacinamide 10% + Zinc 1% Serum 30ml',
      brand: 'The Ordinary',
      price: 2499,
      quantity: 1,
    },
    {
      name: 'CeraVe Acne Control Cleanser',
      brand: 'CeraVe',
      price: 2899,
      quantity: 1,
    },
  ],
  shippingAddress: {
    name: 'John Doe',
    address: 'House #123, Street 4, Lahore',
    city: 'Lahore',
    phone: '+92 3XX XXXXXXX',
  },
}

interface OrderDetailPageProps {
  params: {
    id: string
  }
}

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  const order = demoOrderDetail

  // If order not found (demo only)
  if (!order) {
    notFound()
  }

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/account/orders"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-300 mb-6"
        >
          <FiArrowLeft className="text-sm" />
          Back to Orders
        </Link>

        {/* Order Header */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-semibold">
              Order {order.id}
            </h1>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>
          <span
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              order.status === 'Delivered'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Order Timeline */}
        <div className="bg-soft-neutral p-6 rounded-lg border border-border mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FiPackage className="text-2xl text-gold" />
              <div>
                <p className="font-medium">Order Placed</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {order.status === 'Delivered' ? (
                <FiCheckCircle className="text-2xl text-green-500" />
              ) : (
                <FiTruck className="text-2xl text-gold" />
              )}
              <div>
                <p className="font-medium">{order.status}</p>
                <p className="text-sm text-gray-500">
                  {order.status === 'Delivered' ? 'Delivered' : 'In Transit'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white border border-border rounded-lg p-6 mb-6">
          <h2 className="text-lg font-serif font-semibold mb-4">Items</h2>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatPrice(item.price)}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-soft-neutral p-6 rounded-lg border border-border mb-6">
          <h2 className="text-lg font-serif font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>{formatPrice(order.shipping)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span>{formatPrice(order.tax)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h2 className="text-lg font-serif font-semibold mb-4">
            Shipping Address
          </h2>
          <div className="space-y-1 text-sm">
            <p className="font-medium">{order.shippingAddress.name}</p>
            <p className="text-gray-600">{order.shippingAddress.address}</p>
            <p className="text-gray-600">{order.shippingAddress.city}</p>
            <p className="text-gray-600">{order.shippingAddress.phone}</p>
          </div>
        </div>
      </div>
    </main>
  )
}