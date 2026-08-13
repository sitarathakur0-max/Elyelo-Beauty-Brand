'use client'

import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface ProductFiltersProps {
  categories: string[]
  onFilterChange: (filters: { category: string; sort: string }) => void
}

export function ProductFilters({ categories, onFilterChange }: ProductFiltersProps) {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('featured')

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    onFilterChange({ category: value, sort })
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    onFilterChange({ category, sort: value })
  }

  const displayNames: Record<string, string> = {
    all: 'All',
    skincare: 'Skincare',
    haircare: 'Haircare',
    makeup: 'Makeup',
    fragrance: 'Fragrance',
    accessories: 'Accessories',
    bundles: 'Bundles',
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b border-border">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
              category === cat
                ? 'bg-primary text-white'
                : 'bg-soft-neutral text-gray-600 hover:bg-border'
            }`}
          >
            {displayNames[cat] || cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <label htmlFor="sort" className="text-gray-500 font-medium">
          Sort by:
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="appearance-none bg-soft-neutral border border-border rounded-lg px-4 py-2 pr-8 text-sm font-medium focus:outline-none focus:border-gold transition-colors duration-300"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}