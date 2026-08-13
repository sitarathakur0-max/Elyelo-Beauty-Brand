import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address, phone number, 
              and shipping address when you place an order or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">2. How We Use Your Information</h2>
            <p>
              We use your information to process orders, communicate with you about your orders, 
              and send you updates about our products and promotions (if you opt in).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">3. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, 
              use, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell or share your personal information with third parties except as necessary 
              to process your orders (e.g., shipping providers).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">6. Contact</h2>
            <p>
              If you have any questions about this privacy policy, please{' '}
              <Link href="/contact" className="text-gold hover:text-gold-dark transition-colors duration-300">
                contact us
              </Link>.
            </p>
          </section>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-gray-400">
            Last updated: March 2026
          </p>
        </div>
      </div>
    </main>
  )
}