'use client'

import { Navigation } from '@/components/Navigation'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiQiita } from 'react-icons/si'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/imlitzia/',
    icon: FaInstagram
  },
  {
    name: 'GitHub',
    href: 'https://github.com/imlitzia',
    icon: FaGithub
  },
  {
    name: 'Qiita',
    href: 'https://qiita.com/imlitzia',
    icon: SiQiita
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aarifsuksai/',
    icon: FaLinkedin
  }
]

export default function Contact() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-screen flex-col bg-dark-950">
        <Navigation />
        
        <section className="flex flex-col items-center justify-center flex-1 px-4 py-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl w-full text-center space-y-12"
          >
            <m.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl font-extrabold tracking-wider text-white"
            >
              CONTACT
            </m.h1>
            
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </m.p>

            <div className="space-y-8">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-2"
              >
                <h2 className="text-sm uppercase tracking-widest text-gray-400">Address</h2>
                <p className="text-white">Khaoliyiski, Seregova 111, AA</p>
              </m.div>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-2"
              >
                <h2 className="text-sm uppercase tracking-widest text-gray-400">Phone</h2>
                <p className="text-white">+380 (96) 777 88 99</p>
              </m.div>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-2"
              >
                <h2 className="text-sm uppercase tracking-widest text-gray-400">E-mail</h2>
                <a href="mailto:tura@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                  tura@gmail.com
                </a>
              </m.div>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-2"
              >
                <h2 className="text-sm uppercase tracking-widest text-gray-400">Social</h2>
                <div className="flex justify-center items-center space-x-6">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <m.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                        className="text-gray-400 hover:text-white transition-colors"
                        title={link.name}
                      >
                        <Icon className="w-6 h-6" />
                      </m.a>
                    )
                  })}
                </div>
              </m.div>
            </div>
          </m.div>
        </section>
      </main>
    </LazyMotion>
  )
} 