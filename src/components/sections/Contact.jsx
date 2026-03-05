import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download } from 'lucide-react'
import { contactLinks } from '../../data/contact'

function Contact() {
  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Background 100% noir avec radial orange */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 70%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
            #0f1410
          `
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-4xl"
      >
        
        <div className="inline-block mb-8">
          <div className="bg-orange/15 border-2 border-orange rounded-full px-6 py-3 font-mono text-xs font-bold tracking-widest text-orange uppercase">
            Disponible
          </div>
        </div>
        
        <h2 className="font-clash text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-8 text-cream">
          Travaillons Ensemble
        </h2>
        
        <p className="text-xl text-cream-muted mb-16">
          À la recherche d'une alternance ou d'un CDI en développement full-stack
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {[
            { Icon: Mail, label: 'Email', subtitle: 'Contactez-moi', link: contactLinks[0].url },
            { Icon: Linkedin, label: 'LinkedIn', subtitle: 'Réseau pro', link: contactLinks[1].url },
            { Icon: Github, label: 'GitHub', subtitle: 'Mes projets', link: contactLinks[2].url }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.link}
              target={item.label !== 'Email' ? '_blank' : undefined}
              rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 glass-card hover:border-orange/50 transition-all duration-300 hover:scale-105"
            >
              <item.Icon size={32} className="mx-auto mb-4 text-orange group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-cream mb-1">{item.label}</div>
              <div className="text-sm text-cream-muted">{item.subtitle}</div>
            </motion.a>
          ))}
          
        </div>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => window.open('/cv.pdf', '_blank')}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange to-orange-soft rounded-full font-clash font-bold text-lg text-cream overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_60px_rgba(255,107,53,0.6)]"
        >
          <Download size={24} className="group-hover:animate-bounce" />
          Télécharger mon CV
        </motion.button>
        
      </motion.div>
      
    </section>
  )
}

export default Contact