import { motion } from 'framer-motion'
import { Code2, Award, Briefcase, GraduationCap } from 'lucide-react'

function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Concepteur Développeur d\'Applications',
      detail: 'AFPA Brest • Diplôme 2026'
    },
    {
      icon: Briefcase,
      title: 'Expérience',
      description: 'Stages EMCA & Creation Design Studio',
      detail: 'E-commerce + Application POS Restaurant'
    },
    {
      icon: Code2,
      title: 'Spécialisation',
      description: 'Full-Stack Development',
      detail: 'Spring Boot • React • Node.js • PostgreSQL'
    },
    {
      icon: Award,
      title: 'Objectif',
      description: 'Poste ou Alternance',
      detail: 'Développeur Full-Stack passionné'
    }
  ]

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      
      {/* Background principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest to-forest-dark" />
      
      {/* Gradient de transition vers Contact (en bas) */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/80 to-forest-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1410]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-orange uppercase mb-6 font-mono">
            À propos
          </p>
          <h2 className="font-clash text-5xl md:text-7xl text-cream mb-8">
            Qui suis-je ?
          </h2>
          <p className="text-xl text-cream-muted max-w-3xl mx-auto leading-relaxed">
            Développeur fullstack orienté Spring Boot et React, je recherche un poste où contribuer 
            à la conception et au développement d'applications web complètes. J'apprécie les 
            architectures propres, les APIs fiables et les interfaces réactives pour une expérience 
            utilisateur fluide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-orange/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange/10 rounded-xl group-hover:bg-orange/20 transition-colors">
                  <item.icon size={28} className="text-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-clash text-xl font-bold text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream-muted mb-1 font-medium">
                    {item.description}
                  </p>
                  <p className="text-sm text-cream-dark">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-12"
        >
          <h3 className="font-clash text-3xl font-bold text-cream mb-6">
            Mon Parcours
          </h3>
          
          <div className="space-y-8">
            
            {/* Stage EMCA */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-orange" />
                <div className="w-0.5 h-full bg-orange/30 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <div className="text-xs font-mono text-orange mb-2">Nov 2025 - Fév 2026</div>
                <h4 className="font-clash text-xl font-bold text-cream mb-2">
                  Stage EMCA - Développeur Full-Stack
                </h4>
                <p className="text-cream-muted mb-3">
                  Réalisation d'un site e-commerce complet avec Astro. Développement du back-end 
                  en Node.js/Express.js pour gérer les produits, utilisateurs et commandes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-orange/30 rounded-full text-cream-muted">
                    Node.js
                  </span>
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-orange/30 rounded-full text-cream-muted">
                    Express.js
                  </span>
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-orange/30 rounded-full text-cream-muted">
                    MySQL
                  </span>
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-orange/30 rounded-full text-cream-muted">
                    Astro
                  </span>
                </div>
              </div>
            </div>

            {/* Formation AFPA */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-lime" />
                <div className="w-0.5 h-full bg-lime/30 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <div className="text-xs font-mono text-lime mb-2">2025 - 2026</div>
                <h4 className="font-clash text-xl font-bold text-cream mb-2">
                  Formation CDA - AFPA Brest
                </h4>
                <p className="text-cream-muted">
                  Formation Concepteur Développeur d'Applications. Maîtrise du développement 
                  full-stack, des architectures modernes et des bonnes pratiques (TDD, UML, Merise).
                </p>
              </div>
            </div>

            {/* Stage Creation Design Studio */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-lime" />
                <div className="w-0.5 h-full bg-lime/30 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <div className="text-xs font-mono text-lime mb-2">Mai - Juil 2024</div>
                <h4 className="font-clash text-xl font-bold text-cream mb-2">
                  Stage Creation Design Studio Paris
                </h4>
                <p className="text-cream-muted mb-3">
                  Développement d'une application POS en React Native : gestion des commandes, 
                  plan de salle et paiements pour restaurant. Conception UI/UX avec Figma.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-lime/30 rounded-full text-cream-muted">
                    React Native
                  </span>
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-lime/30 rounded-full text-cream-muted">
                    Figma
                  </span>
                  <span className="text-xs px-3 py-1 bg-forest-dark border border-lime/30 rounded-full text-cream-muted">
                    MySQL
                  </span>
                </div>
              </div>
            </div>

            {/* CESI */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-cream/50" />
                <div className="w-0.5 h-full bg-cream/20 mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <div className="text-xs font-mono text-cream-muted mb-2">2023 - 2024</div>
                <h4 className="font-clash text-xl font-bold text-cream mb-2">
                  CESI - Bachelor Développement
                </h4>
                <p className="text-cream-muted">
                  Bachelor en développement et conception informatique.
                </p>
              </div>
            </div>

            {/* Objectif */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-orange animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono text-orange mb-2">2026 →</div>
                <h4 className="font-clash text-xl font-bold text-cream mb-2">
                  Recherche Poste ou Alternance
                </h4>
                <p className="text-cream-muted">
                  À la recherche d'un poste ou d'une alternance pour contribuer au développement 
                  d'applications web complètes au sein d'une équipe dynamique.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About