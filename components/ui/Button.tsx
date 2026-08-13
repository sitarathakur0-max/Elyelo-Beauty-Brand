'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'gold'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-3 font-medium tracking-wider uppercase text-sm transition-all duration-300'

  const variants = {
    primary: 'bg-primary text-white hover:bg-gold',
    secondary:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    gold: 'bg-gold text-white hover:bg-gold-dark',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}