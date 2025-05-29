import { Navigation } from '@/components/Navigation'
import { Section, SectionTitle } from '@/components/Section'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
    ]
  }
]

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between">
        <span className="text-dark-200">{name}</span>
        <span className="text-dark-400">{level}%</span>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-dark-400"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <Section>
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-dark-900 p-6 rounded-lg space-y-6"
            >
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center max-w-2xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'UI/UX Design',
              'Responsive Design',
              'RESTful APIs',
              'GraphQL',
              'Agile/Scrum',
              'Testing',
              'Performance Optimization',
              'SEO',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-3 py-1 bg-dark-800 text-dark-200 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>
    </main>
  )
} 