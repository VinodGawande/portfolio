import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2, Database, Layout, Server, Smartphone, Cloud,
  GitBranch, Figma, Terminal, Palette, Globe, Cpu
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-50',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-purple-400 to-violet-500',
    bgColor: 'bg-purple-50',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Cloud/Database',
    icon: Database,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 82 },
      { name: 'AWS', level: 75 },
    ],
  },
]

const tools = [
  { name: 'Git & GitHub', icon: GitBranch, color: 'bg-orange-900/30 text-orange-400 border border-orange-500/20' },
  { name: 'Docker', icon: Cloud, color: 'bg-cyan-900/30 text-cyan-400 border border-cyan-500/20' },
  { name: 'Postman', icon: Terminal, color: 'bg-blue-900/30 text-blue-400 border border-blue-500/20' },
  { name: 'CI/CD', icon: Cpu, color: 'bg-green-900/30 text-green-400 border border-green-500/20' },
  { name: 'Vercel', icon: Globe, color: 'bg-indigo-900/30 text-indigo-400 border border-indigo-500/20' },
  { name: 'Render', icon: Palette, color: 'bg-purple-900/30 text-purple-400 border border-purple-500/20' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent via-primary-950/10 to-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950/40 text-primary-400 border border-primary-500/20 text-sm font-medium mb-4">
            <Code2 className="w-3.5 h-3.5" />
            My Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text-subtle">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated collection of technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 mx-auto mt-4" />
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            const shadowGlowClass = catIndex === 0
              ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/20'
              : catIndex === 1
              ? 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-purple-500/20'
              : 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/20'

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                whileHover={{ y: -8 }}
                className={`glass-card rounded-3xl p-8 shadow-card ${shadowGlowClass} transition-all duration-500 group`}
              >
                <div className="relative mb-6 w-14 h-14 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-20 blur-md group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-gray-100 mb-6">{category.title}</h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.15 + skillIndex * 0.08 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-xs font-semibold text-primary-400">{skill.level}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <motion.div
                          className="progress-bar-fill"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.5 + catIndex * 0.15 + skillIndex * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools & Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold text-center text-gray-100 mb-8">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="glass-card rounded-2xl p-5 text-center shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default group"
                >
                  <div className="relative mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-primary-500/10 opacity-0 group-hover:opacity-100 blur-sm group-hover:scale-125 transition-all duration-300" />
                    <div className={`relative w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors duration-300">{tool.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
