'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch, FiX } from 'react-icons/fi'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { getMockProducts } from '@/data/products'
import { Product } from '@/lib'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    if (query.trim()) {
      const products = getMockProducts()
      const q = query.toLowerCase().trim()
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-2xl mx-auto">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex items-center border border-border rounded-lg overflow-hidden focus-within:border-gold transition-colors duration-300">
            <FiSearch className="text-xl text-gray-400 ml-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search beauty products..."
              className="flex-1 px-4 py-3 outline-none bg-transparent text-lg"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FiX className="text-xl" />
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-medium hover:bg-gold transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {/* Results */}
        <div>
          {query ? (
            <>
              <p className="text-sm text-gray-500 mb-4">
                {results.length} results for "{query}"
              </p>
              {results.length === 0 ? (
                <div className="text-center py-12 bg-soft-neutral rounded-lg">
                  <p className="text-gray-500">
                    No products found for "{query}"
                  </p>
                  <Link
                    href="/shop"
                    className="inline-block mt-4 text-gold hover:text-gold-dark transition-colors duration-300 font-medium"
                  >
                    Browse all products →
                  </Link>
                </div>
              ) : (
                <ProductGrid products={results} columns={4} />
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-soft-neutral rounded-lg">
              <FiSearch className="text-4xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Search for skincare, makeup, haircare, fragrance and more.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Niacinamide', 'CeraVe', 'Foundation', 'Perfume', 'Necklace'].map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${term}`}
                    className="px-4 py-2 bg-soft-neutral text-sm rounded-full hover:bg-gold hover:text-white transition-colors duration-300"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}