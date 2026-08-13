import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

// Demo blog posts (will be replaced with API later)
const blogPosts = [
  {
    id: '1',
    title: 'How to Build a Simple Skincare Routine',
    slug: 'simple-skincare-routine',
    image: '/images/blog/skincare-routine.jpg',
    date: 'March 15, 2026',
    content: `
      Building a simple skincare routine doesn't have to be complicated...
      [Full article content here - will come from backend later]
    `,
  },
  // ... more posts
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-300 mb-6"
        >
          <FiArrowLeft className="text-sm" />
          Back to Beauty Journal
        </Link>

        {/* Article */}
        <article>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            {post.date}
          </p>

          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}