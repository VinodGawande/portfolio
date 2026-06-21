import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Twitter, Sparkles, Code2, Palette } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #748ffc 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-soft mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Vinod Gawande</span>
              <br />
              <span className="text-gray-400 text-4xl md:text-5xl lg:text-6xl">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
            >
              Recent Computer Science graduate passionate about building scalable web applications. Eager to leverage modern technologies like React and Node.js to create impactful full-stack solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#projects" className="btn-primary">
                <Sparkles className="w-5 h-5" />
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-gray-500 font-medium">Follow me</span>
              <div className="w-12 h-px bg-gray-800" />
              {[
                { icon: Github, href: 'https://github.com/VinodGawande', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/vinod-gawande-532292273', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-card shadow-soft flex items-center justify-center text-gray-400 hover:text-primary-400 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-800/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-dashed border-purple-800/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center avatar placeholder */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-950/70 via-purple-950/40 to-slate-900 flex items-center justify-center shadow-glow-lg border border-primary-500/10">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-display font-bold gradient-text-subtle">V</div>
                  <div className="text-xs font-medium text-gray-500 mt-1">Developer</div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                className="absolute -top-2 right-8 glass-card rounded-2xl px-4 py-3 shadow-card border border-white/5"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-200">Full Stack</div>
                    <div className="text-[10px] text-gray-400">Developer</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-card border border-white/5"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-200">MERN</div>
                    <div className="text-[10px] text-gray-400">Stack</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 glass-card rounded-2xl px-3 py-2 shadow-card border border-white/5"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🎓</span>
                  <div className="text-xs font-semibold text-gray-200">B.Tech CS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
