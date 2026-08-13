'use client'

import { useState, useMemo, useCallback } from 'react'
import { getMockProducts } from '@/data/products'
import { SearchResult } from '@/lib'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])

  const products = useMemo(() => getMockProducts(), [])

  const search = useCallback(
    (searchQuery: string) => {
      setQuery(searchQuery)

      if (!searchQuery.trim()) {
        setResults([])
        return
      }

      const searchLower = searchQuery.toLowerCase().trim()
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
      )

      setResults(
        filtered.map((product) => ({
          id: product.id,
          name: product.name,
          slug: product.slug,
          image: product.images[0] || '/images/placeholder.webp',
          brand: product.brand,
          price: product.price,
          category: product.category,
        }))
      )
    },
    [products]
  )

  const clearSearch = useCallback(() => {
    setQuery('')
    setResults([])
  }, [])

  const openSearch = useCallback(() => {
    setIsOpen(true)
    setQuery('')
    setResults([])
  }, [])

  const closeSearch = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setResults([])
  }, [])

  const popularSearches = useMemo(
    () => [
      'Ordinary Serum',
      'CeraVe',
      'Foundation',
      'Necklace',
      'Perfume',
    ],
    []
  )

  const searchPopular = useCallback(
    (term: string) => {
      search(term)
    },
    [search]
  )

  return {
    query,
    results,
    isOpen,
    openSearch,
    closeSearch,
    search,
    clearSearch,
    popularSearches,
    searchPopular,
  }
}