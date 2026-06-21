import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Coffee, Award, Zap } from 'lucide-react'

const stats = [
  { icon: Coffee, value: '10+', label: 'Projects Built', color: 'from-amber-400 to-orange-500' },
  { icon: Award, value: '2026', label: 'B.Tech CS Grad', color: 'from-blue-400 to-indigo-500' },
  { icon: Zap, value: 'MERN', label: 'Tech Stack', color: 'from-green-400 to-emerald-500' },
  { icon: Heart, value: '100%', label: 'Passion for Code', color: 'from-pink-400 to-rose-500' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950/40 text-primary-400 border border-primary-500/20 text-sm font-medium mb-4">
            <Heart className="w-3.5 h-3.5" />
            Get to Know Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text-subtle">Me</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-950/50 via-purple-950/30 to-slate-900/50 rotate-6 scale-95" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-950/30 via-slate-900/40 to-emerald-950/20 -rotate-3 scale-95" />
              
              {/* Main card */}
              <div className="relative rounded-3xl glass-card shadow-card overflow-hidden h-full flex items-center justify-center p-8 border border-white/5">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-900/50 to-purple-900/50 mx-auto mb-6 flex items-center justify-center shadow-glow border border-primary-500/15">
                    <span className="text-5xl font-display font-bold gradient-text-subtle">V</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-100 mb-2">Vinod Gawande</h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                  
                  {/* Tech badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-primary-950/40 text-primary-400 border border-primary-500/10 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-100 mb-6">
              Crafting Digital Experiences with{' '}
              <span className="gradient-text-subtle">Passion & Precision</span>
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                I recently graduated with a B.Tech in Computer Science, bringing a strong foundation 
                in software engineering and a deep passion for full-stack web development. I specialize 
                in the MERN stack and enjoy creating responsive, user-centered web applications.
              </p>
              <p>
                My approach focuses on writing clean, maintainable code while delivering intuitive 
                user experiences. As a fresher, I am eager to apply my academic knowledge and project 
                experience to real-world challenges in a professional environment.
              </p>
              <p>
                When I'm not coding, I'm constantly learning new technologies, building side projects, 
                and exploring modern web trends to stay ahead of the curve.
              </p>
            </div>

            {/* Info list */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Vinod Gawande' },
                { label: 'Email', value: 'vinodgawande4444@gmail.com' },
                { label: 'Location', value: 'Indore, MP, India' },
                { label: 'Status', value: 'Available' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                  <p className="text-sm font-semibold text-gray-200">{value}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              <Heart className="w-5 h-5" />
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map(({ icon: Icon, value, label, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover border border-white/5 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-display text-3xl font-bold text-gray-100 mb-1">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
