import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cursor glow effect */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(92,124,250,0.12) 0%, transparent 70%)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Background decorative shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="floating-shape w-[600px] h-[600px] bg-accent-lavender top-[-200px] right-[-200px] animate-float" />
        <div className="floating-shape w-[400px] h-[400px] bg-accent-sky bottom-[10%] left-[-100px] animate-float-delayed" />
        <div className="floating-shape w-[300px] h-[300px] bg-accent-mint top-[40%] right-[-50px] animate-float" />
        <div className="floating-shape w-[350px] h-[350px] bg-accent-peach bottom-[-100px] left-[30%] animate-float-delayed" />
        <div className="floating-shape w-[250px] h-[250px] bg-accent-gold top-[20%] left-[10%] animate-float" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
