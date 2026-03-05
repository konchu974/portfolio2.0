import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BentoCard from '../ui/BentoCard'
import { projects } from '../../data/projects'

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const currentSection = sectionRef.current
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])
  
  useEffect(() => {
    if (isPaused || !isInView) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPaused, isInView])
  
  return (
    <section 
      ref={sectionRef}
      id="projets" 
        className="py-32 px-6 relative bg-gradient-to-b from-transparent via-forest-dark/50 to-forest-dark"
        
      >
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-xs font-bold tracking-widest text-orange uppercase mb-6 font-mono">
            Work
          </p>
          <h2 className="font-clash text-5xl md:text-7xl text-cream">
            Projets Sélectionnés
          </h2>
        </motion.div>
        
        {/* ✅ AJOUTE onMouseEnter/Leave sur le grid des projets */}
        <div 
          className="grid grid-cols-12 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {projects.map((project, index) => {
            const isMain = index === activeIndex
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  scale: { duration: 0.5, delay: index * 0.1 }
                }}
                className={`
                  cursor-pointer
                  ${isMain 
                    ? 'col-span-12 md:col-span-8 row-span-2' 
                    : 'col-span-12 md:col-span-4'
                  }
                `}
                style={{
                  order: isMain ? -1 : index
                }}
                onClick={() => setActiveIndex(index)}
              >
                <BentoCard 
                  project={project} 
                  isMain={isMain} 
                />
              </motion.div>
            )
          })}
          
        </div>
        
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex 
                  ? 'bg-orange' 
                  : 'bg-cream/30 hover:bg-cream/50'
              }`}
              animate={{ 
                width: index === activeIndex ? 32 : 8 
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Projects