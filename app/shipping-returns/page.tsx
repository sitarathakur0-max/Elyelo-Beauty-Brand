import Link from 'next/link'

export default function ShippingReturnsPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8 text-center">
          Shipping & Returns
        </h1>

        <div className="space-y-8">
          {/* Shipping */}
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">Shipping Policy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold">Delivery Time</h3>
                <p>Orders are delivered within 3-5 business days across Pakistan.</p>
              </div>
              <div>
                <h3 className="font-semibold">Shipping Charges</h3>
                <p>Free shipping on orders above Rs. 5,000. A flat fee of Rs. 299 applies to orders below Rs. 5,000.</p>
              </div>
              <div>
                <h3 className="font-semibold">Order Tracking</h3>
                <p>You will receive a tracking number via email once your order is shipped.</p>
              </div>
            </div>
          </section>

          {/* Returns */}
          <section className="bg-soft-neutral p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-4">Returns Policy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold">Eligibility</h3>
                <p>Returns are accepted within 7 days of delivery for damaged or incorrect products.</p>
              </div>
              <div>
                <h3 className="font-semibold">Return Process</h3>
                <p>Please contact us at <Link href="/contact" className="text-gold hover:text-gold-dark transition-colors duration-300">our contact page</Link> to initiate a return.</p>
              </div>
              <div>
                <h3 className="font-semibold">Refund</h3>
                <p>Refunds will be processed within 3-5 business days after the returned item is received.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}