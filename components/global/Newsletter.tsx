'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-soft-neutral">
      <div className="container-custom text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Stay in the Elyelo World
        </h2>
        <p className="text-gray-600 mb-8">
          Get beauty tips, new product launches, skincare guides and exclusive
          offers delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-white border border-border rounded focus:border-gold outline-none transition-colors duration-300"
            required
            aria-label="Email address"
          />
          <Button type="submit" variant="gold">
            Subscribe
          </Button>
        </form>

        <p className="text-sm text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}