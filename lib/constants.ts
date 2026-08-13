// lib/constants.ts

import { NavLink, FooterColumn, SocialLink } from './types'

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAV_LINKS: NavLink[] = [
  { name: 'Shop', href: '/shop' },
  { name: 'Skincare', href: '/skincare' },
  { name: 'Haircare', href: '/haircare' },
  { name: 'Makeup', href: '/makeup' },
  { name: 'Fragrance', href: '/fragrance' },
  { name: 'About', href: '/about' },
]

export const CATEGORY_SUBMENUS: Record<string, string[]> = {
  Skincare: ['Cleansers', 'Serums', 'Toners', 'Moisturizers', 'Eye Care'],
  Haircare: ['Shampoos', 'Conditioners', 'Hair Masks', 'Oils', 'Serums'],
  Makeup: ['Foundation', 'Concealer', 'Lip Gloss', 'Mascara', 'Face Cover'],
  Fragrance: ['Perfumes', 'Mists'],
}

// ============================================
// ANNOUNCEMENTS
// ============================================

export const ANNOUNCEMENTS: string[] = [
  'FREE DELIVERY ACROSS PAKISTAN',
  'DISCOVER YOUR EVERYDAY BEAUTY ESSENTIALS',
  'SHOP AUTHENTIC BEAUTY PRODUCTS',
]

// ============================================
// FOOTER COLUMNS
// ============================================

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { name: 'Shop', href: '/shop' },
      { name: 'Skincare', href: '/skincare' },
      { name: 'Haircare', href: '/haircare' },
      { name: 'Makeup', href: '/makeup' },
      { name: 'Fragrance', href: '/fragrance' },
      { name: 'Accessories', href: '/shop?category=accessories' },
      { name: 'Bundles', href: '/bundles' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Beauty Journal', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping & Returns', href: '/shipping-returns' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms', href: '/terms' },
    ],
  },
]

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', href: '#', icon: 'FiInstagram' },
  { name: 'Facebook', href: '#', icon: 'FiFacebook' },
  { name: 'Twitter', href: '#', icon: 'FiTwitter' },
  { name: 'WhatsApp', href: '#', icon: 'FiSend' },
]

// ============================================
// BRAND — ✅ Ye Footer aur layout ke liye zaroori hai
// ============================================

export const BRAND = {
  name: 'ELYELO',
  tagline: 'Beauty, thoughtfully chosen.',
  description:
    'Discover carefully selected skincare, makeup, haircare and fragrance essentials for your everyday beauty routine.',
  copyright: `© ${new Date().getFullYear()} ELYELO. All rights reserved.`,
}

// ============================================
// SITE METADATA — ✅ Layout ke liye zaroori
// ============================================

export const SITE = {
  name: 'Elyelo',
  url: 'https://elyelo.com',
  title: 'Elyelo — Beauty, Skincare, Makeup & Haircare in Pakistan',
  description:
    'Discover skincare, makeup, haircare and fragrance at Elyelo. Shop carefully selected beauty essentials online in Pakistan for your everyday beauty routine.',
  keywords:
    'beauty products Pakistan, skincare online, makeup, haircare, fragrance, Elyelo',
}