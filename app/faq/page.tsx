import Link from 'next/link'

const faqs = [
  {
    question: 'What products does Elyelo offer?',
    answer: 'Elyelo offers a carefully curated selection of skincare, haircare, makeup, fragrance and accessories.',
  },
  {
    question: 'How do I place an order?',
    answer: 'Simply browse our collection, add products to your cart, and proceed to checkout. You will receive an order confirmation via email.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We currently offer Cash on Delivery (COD) and credit/debit card payments.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Orders are typically delivered within 3-5 business days across Pakistan.',
  },
  {
    question: 'Do you offer free shipping?',
    answer: 'Yes, we offer free shipping on orders above Rs. 5,000.',
  },
  {
    question: 'Can I return a product?',
    answer: 'Please refer to our Shipping & Returns policy for detailed information.',
  },
]

export default function FAQPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about shopping with Elyelo.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:border-gold transition-colors duration-300">
              <h2 className="font-serif font-semibold text-lg mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-gold-dark transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}