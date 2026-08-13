'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you — drop us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* 📌 FAQ Link */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            Before contacting us, check our{' '}
            <Link href="/faq" className="text-gold hover:text-gold-dark transition-colors duration-300">
              FAQ
            </Link>
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-soft-neutral rounded-lg border border-border">
            <FiMail className="text-3xl text-gold mx-auto mb-3" />
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-gray-500">hello@elyelo.com</p>
          </div>
          <div className="text-center p-6 bg-soft-neutral rounded-lg border border-border">
            <FiPhone className="text-3xl text-gold mx-auto mb-3" />
            <h3 className="font-medium">Phone</h3>
            <p className="text-sm text-gray-500">+92 3XX XXXXXXX</p>
          </div>
          <div className="text-center p-6 bg-soft-neutral rounded-lg border border-border">
            <FiMapPin className="text-3xl text-gold mx-auto mb-3" />
            <h3 className="font-medium">Address</h3>
            <p className="text-sm text-gray-500">Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-border rounded-lg p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded focus:border-gold outline-none transition-colors duration-300"
              />
            </div>
            <Button type="submit" variant="gold" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}