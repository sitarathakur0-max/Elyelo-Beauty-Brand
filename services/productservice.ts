import { getMockProducts } from '@/data/products'
import { Product } from '@/lib'

// Phase 1: Mock data
// 🔄 Phase 2: Replace with API calls

export async function getProducts(): Promise<Product[]> {
  return getMockProducts()
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find((p) => p.slug === slug)
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((p) => p.category === category)
}

export async function getBundles(): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((p) => p.type === 'bundle')
}

export async function getBestSellers(): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((p) => p.bestSeller === true)
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getProducts()
  const q = query.toLowerCase().trim()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  )
}