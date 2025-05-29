'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: LinkedinIcon
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: TwitterIcon
  }
]

export function ContactForm() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-extrabold text-white">Let&apos;s Connect</h3>
          <p className="text-dark-200 leading-relaxed font-medium">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-dark-200">
              <MailIcon className="h-5 w-5" />
              <a href="mailto:your.email@example.com" className="hover:text-white transition-colors font-bold">
                your.email@example.com
              </a>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <m.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-200 hover:text-white transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                  </m.a>
                )
              })}
            </div>
          </div>
        </m.div>

        <m.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-dark-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-dark-400 font-medium"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-dark-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-dark-400 font-medium"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-dark-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-dark-400 font-medium"
                required
              />
            </div>
          </div>

          <m.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-3 bg-dark-700 text-white rounded-md hover:bg-dark-600 transition-colors font-extrabold"
            type="submit"
          >
            Send Message
          </m.button>
        </m.form>
      </div>
    </LazyMotion>
  )
} 