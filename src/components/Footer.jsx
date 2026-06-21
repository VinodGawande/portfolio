import { motion } from 'framer-motion'
import { Heart, Sparkles, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="section-padding !py-16 bg-gradient-to-b from-transparent to-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
            {/* Brand */}
            <div>
              <a href="#home" className="flex items-center gap-2 mb-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl gradient-text-subtle">
                  Portfolio
                </span>
              </a>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Crafting beautiful digital experiences with passion, precision, and a love for clean code.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-gray-300 mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold text-gray-300 mb-4">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/VinodGawande', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/vinod-gawande-532292273', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass-card shadow-soft flex items-center justify-center text-gray-500 hover:text-primary-400 hover:shadow-glow transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 flex items-center gap-1">
                © {new Date().getFullYear()} Vinod Gawande. Made with{' '}
                <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" />{' '}
                and lots of ☕
              </p>
              <p className="text-xs text-gray-600">
                Built with React, Tailwind CSS & Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
