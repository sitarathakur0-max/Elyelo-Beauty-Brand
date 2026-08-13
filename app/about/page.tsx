import Link from 'next/link'
import { FiCheckCircle, FiShoppingBag, FiHeart, FiStar } from 'react-icons/fi'

export default function AboutPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* ============================================
        HERO
        ============================================ */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
            About Elyelo
          </h1>
          <p className="text-xl md:text-2xl text-gold font-serif font-medium">
            Beauty, thoughtfully chosen.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            Elyelo brings together carefully selected beauty essentials for your everyday 
            skincare, makeup, haircare and fragrance routine.
          </p>
        </div>

        {/* ============================================
        OUR STORY
        ============================================ */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FiHeart className="text-gold text-2xl" />
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
              Our Story
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Elyelo was created with a simple idea: <span className="font-medium">beauty shopping should feel easy, thoughtful and inspiring</span>. 
              We bring together a curated selection of beauty products across skincare, makeup, 
              haircare and fragrance, making it easier to discover products that fit your everyday routine.
            </p>
            <p>
              We believe that the right products can transform your daily routine into something 
              you actually look forward to. That's why we carefully select every product we offer, 
              focusing on quality, effectiveness and thoughtful formulation.
            </p>
          </div>
        </section>

        {/* ============================================
        WHAT WE OFFER
        ============================================ */}
        <section className="mb-16 bg-soft-neutral p-8 md:p-12 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-6">
            <FiShoppingBag className="text-gold text-2xl" />
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
              Beauty Essentials, All in One Place
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skincare */}
            <div className="bg-white p-5 rounded-lg border border-border hover:border-gold transition-colors duration-300">
              <h3 className="font-serif font-semibold text-lg mb-2">Skincare</h3>
              <p className="text-sm text-gray-600">
                Explore cleansers, serums, moisturizers, sun care and other skincare essentials.
              </p>
            </div>

            {/* Makeup */}
            <div className="bg-white p-5 rounded-lg border border-border hover:border-gold transition-colors duration-300">
              <h3 className="font-serif font-semibold text-lg mb-2">Makeup</h3>
              <p className="text-sm text-gray-600">
                Discover everyday makeup essentials designed to complement your beauty routine.
              </p>
            </div>

            {/* Haircare */}
            <div className="bg-white p-5 rounded-lg border border-border hover:border-gold transition-colors duration-300">
              <h3 className="font-serif font-semibold text-lg mb-2">Haircare</h3>
              <p className="text-sm text-gray-600">
                Shop shampoos, hair treatments, masks, serums and other haircare essentials.
              </p>
            </div>

            {/* Fragrance */}
            <div className="bg-white p-5 rounded-lg border border-border hover:border-gold transition-colors duration-300">
              <h3 className="font-serif font-semibold text-lg mb-2">Fragrance</h3>
              <p className="text-sm text-gray-600">
                Find perfumes and body mists for everyday wear and special moments.
              </p>
            </div>

            {/* Accessories */}
            <div className="bg-white p-5 rounded-lg border border-border hover:border-gold transition-colors duration-300">
              <h3 className="font-serif font-semibold text-lg mb-2">Accessories</h3>
              <p className="text-sm text-gray-600">
                Complete your look with carefully selected jewelry and accessories.
              </p>
            </div>

            {/* Bundles */}
            <div className="bg-white p-5 rounded-lg border border-border hover:border-gold transition-colors duration-300">
              <h3 className="font-serif font-semibold text-lg mb-2">Bundles</h3>
              <p className="text-sm text-gray-600">
                Discover thoughtfully grouped products for convenient beauty shopping.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
        WHY ELYELO
        ============================================ */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FiStar className="text-gold text-2xl" />
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">
              Why Elyelo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Point 1 */}
            <div className="text-center p-6 border border-border rounded-lg hover:border-gold transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="text-gold text-2xl" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                Thoughtfully Selected
              </h3>
              <p className="text-sm text-gray-600">
                We focus on bringing together products that fit modern everyday beauty routines.
              </p>
            </div>

            {/* Point 2 */}
            <div className="text-center p-6 border border-border rounded-lg hover:border-gold transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <FiShoppingBag className="text-gold text-2xl" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                Easy Online Shopping
              </h3>
              <p className="text-sm text-gray-600">
                Browse categories, discover products and shop from one convenient place.
              </p>
            </div>

            {/* Point 3 */}
            <div className="text-center p-6 border border-border rounded-lg hover:border-gold transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-gold text-2xl" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                Beauty for Everyday Life
              </h3>
              <p className="text-sm text-gray-600">
                From skincare and haircare to makeup and fragrance — everyday essentials together.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
        OUR VISION
        ============================================ */}
        <section className="mb-16 bg-primary text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            To create a beauty destination where discovering and shopping for everyday 
            essentials feels simple, enjoyable and inspiring.
          </p>
        </section>

        {/* ============================================
        CLOSING CTA
        ============================================ */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Find Your Beauty Essentials
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Explore our collection and discover products for your everyday routine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-primary text-white font-medium uppercase tracking-wider text-sm hover:bg-gold transition-colors duration-300"
            >
              Read Beauty Journal
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}