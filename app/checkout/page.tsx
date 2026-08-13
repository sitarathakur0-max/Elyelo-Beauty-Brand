'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiTruck, FiCreditCard, FiCheckCircle } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    payment: 'cod',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = () => {
    console.log('Order placed:', formData)
    // Future: API call
    setStep(3)
  }

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/cart"
            className="text-gray-400 hover:text-gold transition-colors duration-300"
          >
            <FiArrowLeft className="text-xl" />
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold">
            Checkout
          </h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  s <= step
                    ? 'bg-gold text-white'
                    : 'bg-soft-neutral text-gray-400'
                }`}
              >
                {s < step ? <FiCheckCircle className="text-lg" /> : s}
              </div>
              <span className={`text-sm ${s <= step ? 'text-primary' : 'text-gray-400'}`}>
                {s === 1 && 'Info'}
                {s === 2 && 'Shipping'}
                {s === 3 && 'Payment'}
              </span>
              {s < 3 && <div className="w-8 h-0.5 bg-soft-neutral" />}
            </div>
          ))}
        </div>

        {/* Step 1: Contact Information */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-lg font-serif font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>
            </div>
            <Button onClick={() => setStep(2)} variant="gold" className="w-full">
              Continue to Shipping
            </Button>
          </motion.div>
        )}

        {/* Step 2: Shipping Address */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-lg font-serif font-semibold mb-4">
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">
                    Full Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House #, Street, Area"
                    className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="00000"
                    className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button onClick={() => setStep(1)} variant="secondary" className="flex-1">
                Back
              </Button>
              <Button onClick={() => setStep(3)} variant="gold" className="flex-1">
                Continue to Payment
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Payment + Review */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-6 border border-border rounded-lg">
              <h2 className="text-lg font-serif font-semibold mb-4">
                Payment Method
              </h2>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-border rounded hover:bg-soft-neutral transition-colors duration-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.payment === 'cod'}
                    onChange={handleChange}
                    id="payment"
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded hover:bg-soft-neutral transition-colors duration-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.payment === 'card'}
                    onChange={handleChange}
                    id="payment"
                  />
                  <span>Credit / Debit Card</span>
                </label>
              </div>
            </div>

            <div className="p-6 bg-soft-neutral rounded-lg">
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span>Rs. 2,499</span>
              </div>
              <Button onClick={() => handleSubmit()} variant="gold" className="w-full">
                Place Order
              </Button>
            </div>

            <Button onClick={() => setStep(2)} variant="secondary" className="w-full">
              Back
            </Button>
          </motion.div>
        )}
      </div>
    </main>
  )
}