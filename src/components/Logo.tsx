'use client'

import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export function Logo() {
  return (
    <LazyMotion features={domAnimation}>
      <Link href="/" className="inline-block">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold tracking-wider text-white"
        >
          RE
          <br />
          EF
        </m.div>
      </Link>
    </LazyMotion>
  )
} 