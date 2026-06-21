import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experience = [
  {
    type: 'work',
    title: 'C++ Programming Intern',
    company: 'TechnoHack',
    location: 'Remote',
    period: '2025',
    description: 'Gained hands-on software development experience, designed efficient algorithms, and solved logic-based problem statements using C++.',
    skills: ['C++', 'Data Structures', 'Algorithms'],
  },
  {
    type: 'work',
    title: 'Personal Projects Developer',
    company: 'Self-Directed',
    location: 'Indore, India',
    period: '2025 - 2026',
    description: 'Built and deployed 3 production-grade full-stack projects using MERN stack, Docker, and CI/CD pipelines. Solved data structures and algorithms questions on LeetCode.',
    skills: ['MERN Stack', 'Docker', 'CI/CD', 'LeetCode'],
  }
]

const education = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    company: 'Chameli Devi Group of Institution',
    location: 'Indore, Madhya Pradesh',
    period: '2022 - 2026',
    description: 'Studied Core Computer Science and Engineering. Deeply involved in software engineering, database management, and operating systems.',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'OS'],
  }
]

function TimelineItem({ item, index, isInView, isLeft }) {
  const Icon = item.type === 'work' ? Briefcase : GraduationCap
  const iconColor = item.type === 'work' ? 'from-primary-400 to-indigo-500' : 'from-purple-400 to-pink-500'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconColor} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Content card */}
      <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-white/5 transition-all duration-300 group"
        >
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.period}</span>
            <span className="mx-1">•</span>
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>

          <h3 className="font-display text-lg font-bold text-gray-100 group-hover:text-primary-400 transition-colors duration-300 mb-1">
            {item.title}
          </h3>
          <p className="text-sm font-semibold text-primary-400 mb-3">{item.company}</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-lg bg-gray-900/40 border border-gray-800 text-xs font-medium text-gray-400 group-hover:bg-primary-950/40 group-hover:text-primary-400 group-hover:border-primary-500/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const allItems = [
    ...experience.map(e => ({ ...e })),
    ...education.map(e => ({ ...e })),
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950/40 text-primary-400 border border-primary-500/20 text-sm font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            My Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text-subtle">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth and learning milestones
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 mx-auto mt-4" />
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-indigo-500 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            Work Experience
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-purple-200 to-pink-200" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <TimelineItem
                key={item.title + item.company}
                item={item}
                index={index}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 mb-12"
        >
          <h3 className="font-display text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            Education
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-rose-200" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <TimelineItem
                key={item.title + item.company}
                item={item}
                index={index + experience.length}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
