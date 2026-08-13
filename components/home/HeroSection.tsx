'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/categories/hero.jpg"
        >
          <source
            src="/videos/hero-bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase mb-6 border-b border-white/30 pb-2">
              Beauty, Thoughtfully Chosen
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover Beauty,
            <br />
            Thoughtfully Chosen
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore skincare, makeup, haircare and fragrance products carefully
            selected to make your everyday beauty routine simple, effective and
            enjoyable.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/shop" variant="gold" className="min-w-[160px]">
              Shop Now
            </Button>
            <Button
              href="/about"
              variant="primary"
              className="min-w-[160px] border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Elyelo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}