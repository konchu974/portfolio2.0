import TechTag from './TechTag'
import { Github, ExternalLink } from 'lucide-react'

function BentoCard({ project, isMain = false }) {
  // Vérifie si les liens sont valides (pas "#" ni vide)
  const hasGithub = project.links?.github && project.links.github !== '#'
  const hasLive = project.links?.live && project.links.live !== '#'
  const hasAnyLink = hasGithub || hasLive

  return (
    <div className="rounded-3xl overflow-hidden relative transition-all duration-700 hover:-translate-y-2 h-full">
      <div className="glass-card p-8 md:p-10 h-full flex flex-col justify-between group hover:shadow-[0_20px_60px_rgba(74,157,95,0.15)] transition-all duration-500">
        
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange/5 pointer-events-none" />
        
        {/* Image du projet (uniquement si isMain) */}
        {isMain && project.image && (
          <div className="relative -mx-8 -mt-8 md:-mx-10 md:-mt-10 mb-6 h-64 md:h-80 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent" />
          </div>
        )}
        
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase text-orange mb-6 font-mono tracking-widest">
            {project.category}
          </p>
          
          <h3 className={`font-clash font-bold text-cream mb-4 ${isMain ? 'text-5xl md:text-7xl' : 'text-3xl'} leading-none tracking-tighter transition-all duration-300`}>
            {project.title}
          </h3>
          
          <p className={`text-cream-muted leading-relaxed ${isMain ? 'text-lg' : 'text-sm'} mb-6 transition-all duration-300`}>
            {project.description}
          </p>
          
          {isMain && project.metrics && (
            <div className="flex gap-8 mt-8 pt-8 border-t border-lime/20">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="font-clash text-4xl font-bold text-orange" style={{ WebkitTextStroke: '1px #ff6b35', WebkitTextFillColor: 'transparent' }}>
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold uppercase text-cream-dark font-mono tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, idx) => (
              <TechTag key={idx} name={tag} />
            ))}
          </div>
        </div>
        
        {/* Links - N'affiche que si au moins un lien valide existe */}
        {hasAnyLink && (
          <div className="flex gap-3 mt-6 relative z-10">
            {hasGithub && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:border-orange/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} className="text-cream" />
              </a>
            )}
            {hasLive && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:border-orange/50 transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={20} className="text-cream" />
              </a>
            )}
          </div>
        )}
        
      </div>
    </div>
  )
}

export default BentoCard