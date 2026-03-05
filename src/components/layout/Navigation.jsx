import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const sections = [
    { id: 'hero', label: 'Accueil' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / scrollHeight) * 100
      setScrollProgress(currentProgress)

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-forest-dark/90 backdrop-blur-xl border-b border-lime/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-clash text-2xl font-bold"
          >
            <span className="text-gradient">CD</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === section.id 
                    ? 'text-orange' 
                    : 'text-cream-muted hover:text-cream'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange to-orange-soft rounded-full font-semibold text-sm text-cream hover:scale-105 transition-transform"
          >
            Me contacter
          </button>

        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-orange"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.nav>
  )
}

export default Navigation