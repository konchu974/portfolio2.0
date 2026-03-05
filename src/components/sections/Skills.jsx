import { motion } from 'framer-motion'
import SkillCircle from '../ui/SkillCircle'
import { skillCategories } from '../../data/skills'

function Skills() {
  return (
    <section id="competences" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <p className="text-xs font-bold tracking-widest text-orange uppercase mb-6 font-mono">
            Expertise Technique
          </p>
          <h2 className="font-clash text-5xl md:text-7xl text-cream">
            Stack & Compétences
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15
              }}
              className={`
                lg:col-span-2 
                ${index === 3 ? 'lg:col-start-2' : ''}
              `}
            >
              <SkillCircle 
                title={category.name}
                description={category.description}
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Skills