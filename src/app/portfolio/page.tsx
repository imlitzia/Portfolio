import { Navigation } from '@/components/Navigation'
import { Section, SectionTitle } from '@/components/Section'
import { motion } from 'framer-motion'
import { GithubIcon, Globe } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com'
    }
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/projects/taskmanager.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    links: {
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://taskmanager-demo.com'
    }
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Framer Motion for smooth animations.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://portfolio-demo.com'
    }
  }
]

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <Section>
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-900 rounded-lg overflow-hidden"
            >
              <div className="aspect-video relative bg-dark-800">
                {/* Add actual project images later */}
                <div className="absolute inset-0 flex items-center justify-center text-dark-400">
                  [Project Image]
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-dark-200 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-dark-800 text-dark-200 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-200 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-200 hover:text-white transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  )
} 