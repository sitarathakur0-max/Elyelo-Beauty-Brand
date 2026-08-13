'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
} from 'react-icons/fi'
import { useSearch } from '@/hooks/usesearch'
import { NAV_LINKS, CATEGORY_SUBMENUS } from '@/lib'   // ✅ lib se import

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const {
    query,
    results,
    isOpen,
    openSearch,
    closeSearch,
    search,
    popularSearches,
    searchPopular,
  } = useSearch()

  return (
    <>
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container-custom h-16 md:h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-32 h-12 md:w-40 md:h-14 lg:w-48 lg:h-16">
                <Image
                  src="/images/categories/Elyelo Logo.jpg"
                  alt="ELYELO - Beauty, Thoughtfully Chosen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation — ✅ 6 LINKS ONLY */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const hasSubmenu = CATEGORY_SUBMENUS[link.name]
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => hasSubmenu && setOpenDropdown(link.name)}
                    onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors duration-300 flex items-center gap-1"
                    >
                      {link.name}
                      {hasSubmenu && (
                        <motion.span
                          animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown className="text-xs" />
                        </motion.span>
                      )}
                    </Link>

                    {/* Desktop Dropdown - Column Layout */}
                    {hasSubmenu && (
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg min-w-[220px] p-4 border border-border z-50"
                          >
                            <div className="flex flex-col gap-2">
                              {CATEGORY_SUBMENUS[link.name].map((sub, index) => (
                                <motion.div
                                  key={sub}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={`/${link.name.toLowerCase()}/${sub
                                      .toLowerCase()
                                      .replace(/\s+/g, '-')}`}
                                    className="block text-sm text-gray-700 hover:text-gold hover:bg-soft-neutral px-3 py-2 rounded transition-colors duration-300"
                                  >
                                    {sub}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={openSearch}
                aria-label="Search products"
                className="text-xl hover:text-gold transition-colors duration-300"
              >
                <FiSearch />
              </button>
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="text-xl hover:text-gold transition-colors duration-300"
              >
                <FiHeart />
              </Link>
              <Link
                href="/account"
                aria-label="Account"
                className="text-xl hover:text-gold transition-colors duration-300"
              >
                <FiUser />
              </Link>
              <Link
                href="/cart"
                aria-label="Cart"
                className="text-xl hover:text-gold transition-colors duration-300"
              >
                <FiShoppingBag />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden text-2xl hover:text-gold transition-colors duration-300"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-background shadow-2xl z-50 lg:hidden p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="relative w-28 h-8">
                  <Image
                    src="/images/categories/Elyelo Logo.jpg"
                    alt="ELYELO"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-3xl hover:text-gold transition-colors duration-300"
                >
                  <FiX />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-lg font-serif tracking-wide hover:text-gold transition-colors duration-300 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {CATEGORY_SUBMENUS[link.name] && (
                      <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-gold pl-4">
                        {CATEGORY_SUBMENUS[link.name].map((sub) => (
                          <Link
                            key={sub}
                            href={`/${link.name.toLowerCase()}/${sub
                              .toLowerCase()
                              .replace(/\s+/g, '-')}`}
                            className="text-sm text-gray-600 hover:text-gold transition-colors duration-300 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-12 pt-6 border-t border-border">
                <Link
                  href="/account"
                  className="block text-sm tracking-wider uppercase hover:text-gold transition-colors duration-300 mb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Account
                </Link>
                <Link
                  href="/wishlist"
                  className="block text-sm tracking-wider uppercase hover:text-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Wishlist
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={closeSearch}
            />
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-background shadow-2xl z-50 rounded-lg p-6 mx-4 max-h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <FiSearch className="text-xl text-gold flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search beauty products..."
                  value={query}
                  onChange={(e) => search(e.target.value)}
                  className="flex-1 text-lg bg-transparent outline-none placeholder:text-gray-400"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={() => search('')}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FiX className="text-xl" />
                  </button>
                )}
                <button
                  onClick={closeSearch}
                  className="text-2xl hover:text-gold transition-colors duration-300"
                >
                  <FiX />
                </button>
              </div>

              {query && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  {results.length > 0 ? (
                    <div className="space-y-3">
                      {results.map((result, index) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/products/${result.slug}`}
                            onClick={closeSearch}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-soft-neutral transition-colors duration-300 group"
                          >
                            <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-soft-neutral">
                              <Image
                                src={result.image}
                                alt={result.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium group-hover:text-gold transition-colors duration-300">
                                {result.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {result.brand} • Rs. {result.price.toLocaleString()}
                              </p>
                            </div>
                            <FiArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-8">
                      No products found for "{query}"
                    </p>
                  )}
                </motion.div>
              )}

              {!query && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <motion.button
                        key={term}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => searchPopular(term)}
                        className="px-4 py-2 bg-soft-neutral text-sm rounded-full hover:bg-gold hover:text-white transition-colors duration-300"
                      >
                        {term}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}