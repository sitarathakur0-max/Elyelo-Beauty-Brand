'use client'

import { useState, useEffect, useMemo } from 'react'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { ShopHero } from '@/components/shop/ShopHero'
import { ProductFilters } from '@/components/shop/ProductFilters'
import { Pagination } from '@/components/shop/Pagination'
import { ShopContactBanner } from '@/components/shop/ShopContactBanner'
import { getProducts } from '@/services/productservice'
import { Product } from '@/lib'

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [products, selectedCategory, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredProducts.slice(start, end)
  }, [filteredProducts, currentPage])

  const handleFilterChange = (filters: { category: string; sort: string }) => {
    setSelectedCategory(filters.category)
    setSortBy(filters.sort)
    setCurrentPage(1)
  }

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category))
    return ['all', ...Array.from(cats)]
  }, [products])

  return (
    <main>
      <ShopHero />
      <section className="container-custom py-8">
        <ProductFilters categories={categories} onFilterChange={handleFilterChange} />

        {/* 📌 Contact Banner — Proper Button */}
        <ShopContactBanner />

        {paginatedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found.</p>
          </div>
        ) : (
          <ProductGrid products={paginatedProducts} columns={4} />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </main>
  )
}