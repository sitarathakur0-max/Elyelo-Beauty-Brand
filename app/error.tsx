'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <main className="min-h-[70vh] flex items-center justify-center py-16 md:py-20">
      <div className="container-custom text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-serif font-semibold text-gold mb-4">
          Oops!
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
          Something Went Wrong
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, but something unexpected happened. Please try again later.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={reset} variant="gold" className="min-w-[180px]">
            Try Again
          </Button>
          <Button href="/" variant="primary" className="min-w-[180px]">
            Go Home
          </Button>
        </div>
      </div>
    </main>
  )
}