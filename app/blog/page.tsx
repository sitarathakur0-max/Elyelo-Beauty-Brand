import Link from 'next/link'
import Image from 'next/image'

// Demo blog posts (will be replaced with API later)
const blogPosts = [
  {
    id: '1',
    title: 'How to Build a Simple Skincare Routine',
    excerpt: 'Discover a straightforward skincare routine tailored to your skin type. Learn about cleansing, moisturizing, and protecting your skin.',
    slug: 'simple-skincare-routine',
    image: '/images/blog/skincare-routine.jpg',
    date: 'March 15, 2026',
  },
  {
    id: '2',
    title: 'How to Choose the Right Serum for Your Skin',
    excerpt: 'Not all serums are created equal. Learn how to select the right serum based on your skin concerns and goals.',
    slug: 'choose-right-serum',
    image: '/images/blog/choose-serum.jpg',
    date: 'March 10, 2026',
  },
  {
    id: '3',
    title: 'Niacinamide: Benefits and How to Use It',
    excerpt: 'Discover the science behind niacinamide, its benefits for your skin, and how to incorporate it into your daily routine.',
    slug: 'niacinamide-benefits',
    image: '/images/blog/niacinamide.jpg',
    date: 'March 5, 2026',
  },
  {
    id: '4',
    title: 'A Beginner\'s Guide to Skincare Ingredients',
    excerpt: 'Understand the key ingredients in your skincare products and how they work to improve your skin health.',
    slug: 'skincare-ingredients-guide',
    image: '/images/blog/skincare-ingredients.jpg',
    date: 'February 28, 2026',
  },
]

export default function BlogPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            The Elyelo Beauty Journal
          </h1>
          <p className="text-gray-600">
            Explore beauty guides, skincare tips, routines and product insights
            to help you make informed beauty choices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden border border-border hover:border-gold transition-colors duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <span className="sr-only">{post.title}</span>
              </Link>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  {post.date}
                </p>
                <h2 className="font-serif font-semibold text-lg mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}