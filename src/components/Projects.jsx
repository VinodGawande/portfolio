import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Folder, Star, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Examora-AI Platform',
    description: 'A MERN-stack exam platform with face detection and tab-switch monitoring, supporting 3 user roles, secure REST APIs, and automated result processing.',
    image: null,
    gradient: 'from-blue-400 via-indigo-400 to-purple-500',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'AI Monitoring'],
    category: 'Full Stack',
    github: 'https://github.com/VinodGawande',
    demo: '#',
    featured: true,
  },
  {
    title: 'TradeX-Trading Platform',
    description: 'A MERN-stack trading platform featuring Portfolio, Holdings, Watchlist, and Order Management modules with sub-second real-time data visualization.',
    image: null,
    gradient: 'from-purple-400 via-pink-400 to-rose-500',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    category: 'Full Stack',
    github: 'https://github.com/VinodGawande',
    demo: '#',
    featured: true,
  },
  {
    title: 'Turf Booking Platform',
    description: 'A sports venue booking platform with conflict-prevention slot management, optimized MongoDB queries, and custom dashboards.',
    image: null,
    gradient: 'from-green-400 via-emerald-400 to-teal-500',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    category: 'Full Stack',
    github: 'https://github.com/VinodGawande',
    demo: '#',
    featured: true,
  },
]

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950/40 text-primary-400 border border-primary-500/20 text-sm font-medium mb-4">
            <Folder className="w-3.5 h-3.5" />
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text-subtle">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of projects I've built with love, creativity, and clean code
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 mx-auto mt-4" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-glow'
                  : 'glass-card text-gray-400 hover:text-white shadow-soft'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-white/5 transition-all duration-500"
              >
                {/* Project Image / Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    <motion.a
                      href={project.github}
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Decorative shapes */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-lg font-bold text-gray-100 group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-gray-900/40 border border-gray-800 text-xs font-medium text-gray-400 group-hover:bg-primary-950/40 group-hover:text-primary-400 group-hover:border-primary-500/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
