import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">1. General</h2>
            <p>
              By using the Elyelo website, you agree to comply with and be bound by these terms and conditions. 
              Please read them carefully before placing an order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">2. Products</h2>
            <p>
              All products displayed on Elyelo are carefully selected and described as accurately as possible. 
              However, we do not guarantee that product descriptions, images, or other content are error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">3. Pricing</h2>
            <p>
              Prices are listed in Pakistani Rupees (PKR) and are subject to change without notice. 
              We strive to ensure all prices are accurate, but errors may occur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">4. Orders</h2>
            <p>
              We reserve the right to refuse or cancel any order for any reason. 
              If your order is cancelled, you will be notified via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">5. Returns</h2>
            <p>
              Please refer to our Shipping & Returns policy for details on returns and exchanges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">6. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-3">7. Contact</h2>
            <p>
              If you have any questions about these terms, please contact us at{' '}
              <Link href="/contact" className="text-gold hover:text-gold-dark transition-colors duration-300">
                our contact page
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