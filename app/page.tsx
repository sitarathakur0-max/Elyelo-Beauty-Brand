import {
  HeroSection,
  ShopByCategory,
  BestSellers,
  WhyElyelo,
  FeaturedCollection,
  ShopByConcern,
  CustomerReviews,
  BeautyJournal,
} from '@/components/home'
import { Newsletter } from '@/components/global/Newsletter'
import { getBestSellers } from '@/services/productservice'

// ✅ Demo reviews (will be replaced with API later)
const demoReviews = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    rating: 5,
    text: 'Elyelo has completely transformed my skincare routine. The products are carefully curated and the quality is exceptional.',
    date: 'January 2026',
  },
  {
    id: '2',
    name: 'Zara Khan',
    rating: 5,
    text: 'Finally a beauty store in Pakistan that offers genuine products with clear information. The shipping was fast and everything arrived beautifully packaged.',
    date: 'February 2026',
  },
  {
    id: '3',
    name: 'Ayesha Malik',
    rating: 4,
    text: 'Great selection of international brands. The customer service team was helpful and guided me to choose the right products for my sensitive skin.',
    date: 'March 2026',
  },
]

// app/page.tsx

const demoBlogPosts = [
  {
    id: '1',
    title: 'How to Build a Simple Skincare Routine',
    excerpt: 'Discover a straightforward skincare routine tailored to your skin type...',
    slug: 'simple-skincare-routine',
    image: '/images/products/skincare/ordinary.jpg',          // ✅ Existing image
    date: 'March 15, 2026',
  },
  {
    id: '2',
    title: 'How to Choose the Right Serum for Your Skin',
    excerpt: 'Not all serums are created equal. Learn how to select the right serum...',
    slug: 'choose-right-serum',
    image: '/images/products/skincare/cerave sunscreen.webp', // ✅ Existing image
    date: 'March 10, 2026',
  },
  {
    id: '3',
    title: 'Niacinamide: Benefits and How to Use It',
    excerpt: 'Discover the science behind niacinamide, its benefits for your skin...',
    slug: 'niacinamide-benefits',
    image: '/images/products/skincare/dermive.jpg',           // ✅ Existing image
    date: 'March 5, 2026',
  },
  {
    id: '4',
    title: 'A Beginner\'s Guide to Skincare Ingredients',
    excerpt: 'Understand the key ingredients in your skincare products...',
    slug: 'skincare-ingredients-guide',
    image: '/images/products/skincare/rivaj face wash.jpg',   // ✅ Existing image
    date: 'February 28, 2026',
  },
]

export default async function Home() {
  const bestSellers = await getBestSellers()

  return (
    <>
      <HeroSection />
      <ShopByCategory />
      <BestSellers products={bestSellers} />
      <WhyElyelo />
      <FeaturedCollection />
      <ShopByConcern />
      <CustomerReviews reviews={demoReviews} />
      <BeautyJournal posts={demoBlogPosts} />
      <Newsletter />
    </>
  )
}