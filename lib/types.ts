export interface Product {
  id: string
  name: string
  slug: string
  brand: string
  category: string
  subcategory: string
  type: 'product' | 'bundle' | 'accessory'
  price: number
  salePrice: number | null
  stock: number
  sku: string
  images: string[]
  description: string
  shortDescription: string
  benefits: string[]
  rating: number
  reviewCount: number
  featured: boolean
  bestSeller: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  image: string
  date: string
  content?: string
  author?: string
}

export interface NavLink {
  name: string
  href: string
}

export interface FooterLink {
  name: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface SearchResult {
  id: string
  name: string
  slug: string
  image: string
  brand: string
  price: number
  category: string
}