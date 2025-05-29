'use client'

import { Navigation } from '@/components/Navigation'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-screen flex-col bg-dark-950">
        <Navigation />
        
        <section className="flex flex-col items-center justify-center flex-1 px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="text-sm uppercase tracking-widest text-gray-400">
              I AM
            </div>
            
            <m.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[12rem] font-extrabold tracking-wider text-white leading-none"
            >
              REEF
            </m.h1>
            
            <div className="space-y-1">
              <div className="text-sm uppercase tracking-widest text-gray-400">
                A JUNIOR
              </div>
              <div className="text-sm uppercase tracking-widest text-gray-400">
                WEB DESIGNER
              </div>
            </div>
          </m.div>
        </section>
      </main>
    </LazyMotion>
  )
}
