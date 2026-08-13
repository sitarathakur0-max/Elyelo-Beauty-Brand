'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiTrash2, FiArrowLeft, FiPlus, FiMinus } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib'

// Demo cart items (will be replaced with API later)
const demoCartItems = [
  {
    id: '1',
    name: 'Niacinamide 10% + Zinc 1% Serum 30ml',
    slug: 'ordinary-niacinamide-serum',
    brand: 'The Ordinary',
    price: 2499,
    image: '/images/products/skincare/ordinary.jpg',
    quantity: 1,
  },
  {
    id: '3',
    name: 'CeraVe Acne Control Cleanser',
    slug: 'cerave-acne-control-cleanser',
    brand: 'CeraVe',
    price: 2899,
    image: '/images/products/skincare/CeraVe Acne.jpg',
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(demoCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal > 5000 ? 0 : 299
  const total = subtotal + shipping

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-soft-neutral rounded-lg">
            <p className="text-gray-500 mb-4">Your cart is currently empty.</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-300 font-medium"
            >
              <FiArrowLeft />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-gold transition-colors duration-300"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 bg-soft-neutral rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-medium line-clamp-1">
                        <Link href={`/products/${item.slug}`} className="hover:text-gold transition-colors duration-300">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      <p className="font-semibold">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:text-gold transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="text-sm" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:text-gold transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="text-sm" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                        aria-label="Remove item"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-300"
              >
                <FiArrowLeft className="text-sm" />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-soft-neutral p-6 rounded-lg sticky top-24">
                <h2 className="text-lg font-serif font-semibold mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2 border-b border-border pb-4 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <Button href="/checkout" variant="gold" className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}