'use client'

import { motion } from 'framer-motion'
import { ANNOUNCEMENTS } from '@/lib'   // ✅ lib se import

export function AnnouncementMarquee() {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((text, index) => (
            <span
              key={index}
              className="text-xs tracking-widest uppercase font-light"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}