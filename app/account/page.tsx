'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FiUser, 
  FiPackage, 
  FiHeart, 
  FiLogOut, 
  FiSettings,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi'

export default function AccountPage() {
  // Demo user data (will be replaced with API later)
  const [user] = useState({
    name: 'User',
    email: 'user@elyelo.com',
    phone: '+92 3XX XXXXXXX',
    address: 'House #123, Street 4, Lahore',
  })

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
          My Account
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-soft-neutral p-4 rounded-lg border border-border sticky top-24">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center text-2xl font-serif mx-auto mb-2">
                  {user.name.charAt(0)}
                </div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <nav className="space-y-2">
                <Link
                  href="/account"
                  className="flex items-center gap-2 px-3 py-2 bg-gold text-white rounded transition-colors duration-300"
                >
                  <FiUser className="text-sm" />
                  Dashboard
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-soft-neutral rounded transition-colors duration-300"
                >
                  <FiPackage className="text-sm" />
                  Orders
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-soft-neutral rounded transition-colors duration-300"
                >
                  <FiHeart className="text-sm" />
                  Wishlist
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-soft-neutral rounded transition-colors duration-300"
                >
                  <FiSettings className="text-sm" />
                  Settings
                </Link>
                <button className="flex items-center gap-2 px-3 py-2 w-full text-left text-red-500 hover:bg-red-50 rounded transition-colors duration-300">
                  <FiLogOut className="text-sm" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-soft-neutral p-6 rounded-lg border border-border">
              <h2 className="text-xl font-serif font-semibold mb-4">
                Welcome back, {user.name}!
              </h2>
              <p className="text-gray-600">
                Here you can manage your orders, wishlist and account settings.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-border text-center hover:border-gold transition-colors duration-300">
                <FiPackage className="text-2xl text-gold mx-auto mb-2" />
                <p className="font-medium">0</p>
                <p className="text-sm text-gray-500">Orders</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border text-center hover:border-gold transition-colors duration-300">
                <FiHeart className="text-2xl text-gold mx-auto mb-2" />
                <p className="font-medium">4</p>
                <p className="text-sm text-gray-500">Wishlist</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border text-center hover:border-gold transition-colors duration-300">
                <FiUser className="text-2xl text-gold mx-auto mb-2" />
                <p className="font-medium">1</p>
                <p className="text-sm text-gray-500">Profile</p>
              </div>
            </div>

            {/* Profile Info */}
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-serif font-semibold text-lg mb-4">
                Profile Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <FiUser className="text-gold" />
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiMail className="text-gold" />
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone className="text-gold" />
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">{user.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiMapPin className="text-gold" />
                  <span className="text-gray-600">Address:</span>
                  <span className="font-medium">{user.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="px-6 py-3 bg-primary text-white font-medium text-sm hover:bg-gold transition-colors duration-300"
              >
                Continue Shopping
              </Link>
              <Link
                href="/wishlist"
                className="px-6 py-3 border border-border text-primary font-medium text-sm hover:border-gold hover:text-gold transition-colors duration-300"
              >
                View Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}