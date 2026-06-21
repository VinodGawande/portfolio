import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail, Phone, MapPin, Send, MessageSquare,
  Github, Linkedin, Twitter, Instagram,
  CheckCircle, Loader2, User, AtSign
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vinodgawande4444@gmail.com',
    href: 'mailto:vinodgawande4444@gmail.com',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 78050 16455',
    href: 'tel:+917805016455',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indore, India',
    href: '#',
    color: 'from-purple-400 to-pink-500',
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/VinodGawande', label: 'GitHub', color: 'hover:bg-gray-800 hover:text-white' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vinod-gawande-532292273', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500 hover:text-white' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState('idle') // idle | sending | sent
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')
    // Simulate form submission
    setTimeout(() => {
      setFormState('sent')
      setTimeout(() => {
        setFormState('idle')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950/40 text-primary-400 border border-primary-500/20 text-sm font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text-subtle">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-gray-100 mb-2">
                Let's talk about your project
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 glass-card rounded-2xl p-4 shadow-card hover:shadow-card-hover border border-white/5 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                    <p className="text-sm font-semibold text-gray-200">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-400 mb-4">Follow me on social media</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-11 h-11 rounded-xl glass-card shadow-soft flex items-center justify-center text-gray-400 transition-all duration-300 ${color}`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 shadow-card border border-white/5"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-400 transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-800 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 focus:bg-gray-900/80 text-sm text-gray-200 placeholder:text-gray-600 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-400 transition-colors">
                    <AtSign className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-800 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 focus:bg-gray-900/80 text-sm text-gray-200 placeholder:text-gray-600 transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative group mb-5">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-800 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 focus:bg-gray-900/80 text-sm text-gray-200 placeholder:text-gray-600 transition-all duration-300 outline-none"
                />
              </div>

              {/* Message */}
              <div className="relative group mb-6">
                <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-primary-400 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-800 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 focus:bg-gray-900/80 text-sm text-gray-200 placeholder:text-gray-600 transition-all duration-300 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={formState !== 'idle'}
                className={`btn-primary w-full justify-center text-base ${formState === 'sent' ? '!bg-gradient-to-r !from-green-400 !to-emerald-500' : ''
                  }`}
                whileHover={formState === 'idle' ? { scale: 1.02 } : {}}
                whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
              >
                {formState === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                )}
                {formState === 'sent' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
