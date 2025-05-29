'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const navItems = [
  { href: '/projects', label: 'PROJECT' },
  { href: '/contact', label: 'CONTACT' },
]

export function Navigation({ className }: { className?: string }) {
  return (
    <LazyMotion features={domAnimation}>
      <nav className={cn('fixed w-full z-50', className)}>
        <div className="p-8 flex justify-between items-center">
          <Logo />
          
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <m.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm tracking-[0.2em] text-purple-500 hover:text-purple-400 transition-colors uppercase relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </m.div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </LazyMotion>
  )
} 