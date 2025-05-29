'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        'min-h-screen py-20 px-4 sm:px-6 lg:px-8',
        'flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </motion.section>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn(
      'text-3xl sm:text-4xl font-extrabold text-white mb-8',
      'relative pb-4 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-dark-700',
      className
    )}>
      {children}
    </h2>
  )
} 