import { Navigation } from '@/components/Navigation'
import { Section, SectionTitle } from '@/components/Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <Section className="gap-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-dark-200 leading-relaxed">
              I am a passionate Full Stack Developer with a keen eye for design and a strong foundation in modern web technologies. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a professional career building robust and scalable applications.
            </p>
            <p className="text-dark-200 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-dark-700 pl-4">
                <h4 className="text-white font-medium">Education</h4>
                <p className="text-dark-200">Bachelor&apos;s in Computer Science</p>
                <p className="text-dark-400 text-sm">2018 - 2022</p>
              </div>
              
              <div className="border-l-2 border-dark-700 pl-4">
                <h4 className="text-white font-medium">Work Experience</h4>
                <p className="text-dark-200">Senior Full Stack Developer</p>
                <p className="text-dark-400 text-sm">2022 - Present</p>
              </div>
              
              <div className="border-l-2 border-dark-700 pl-4">
                <h4 className="text-white font-medium">Freelance</h4>
                <p className="text-dark-200">Independent Developer</p>
                <p className="text-dark-400 text-sm">2020 - Present</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 w-full max-w-6xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">My Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality First',
                description: 'Every line of code is written with attention to detail and best practices in mind.'
              },
              {
                title: 'Continuous Learning',
                description: 'Technology evolves rapidly, and I&apos;m committed to staying at the forefront.'
              },
              {
                title: 'User-Centric',
                description: 'Creating solutions that not only work well but are intuitive and enjoyable to use.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-dark-900 p-6 rounded-lg"
              >
                <h4 className="text-white font-medium mb-2">{value.title}</h4>
                <p className="text-dark-200 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </main>
  )
} 