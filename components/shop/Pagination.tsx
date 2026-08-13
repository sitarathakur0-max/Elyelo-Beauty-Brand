'use client'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    const end = Math.min(totalPages, start + maxVisible - 1)

    if (start > 1) pages.push(1, '...')
    for (let i = start; i <= end; i++) pages.push(i)
    if (end < totalPages) pages.push('...', totalPages)

    return pages
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-border hover:border-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
        aria-label="Previous page"
      >
        <FiChevronLeft className="text-lg" />
      </button>

      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors duration-300 ${
              currentPage === page
                ? 'bg-primary text-white'
                : 'hover:bg-soft-neutral'
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="text-gray-400 px-1">
            {page}
          </span>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-border hover:border-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
        aria-label="Next page"
      >
        <FiChevronRight className="text-lg" />
      </button>
    </div>
  )
}