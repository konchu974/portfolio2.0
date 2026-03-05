function SkillCircle({ title, description }) {
  return (
    <div className="relative h-[300px] flex flex-col items-center justify-center">
      
      {/* Cercles concentriques */}
      <div className="relative w-[200px] h-[200px]">
        
        {/* Cercle 1 (petit) */}
        <div className="absolute border-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] border-orange/30" />
        
        {/* Cercle 2 (moyen) */}
        <div className="absolute border-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] border-orange/25" />
        
        {/* Cercle 3 (grand) */}
        <div className="absolute border-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border-orange/20" />
        
        {/* Dot central animé */}
        <div 
          className="absolute w-3 h-3 bg-orange rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'dotPulse 3s ease-in-out infinite' }}
        />
      </div>
      
      {/* Titre de la catégorie */}
      <h3 className="font-clash text-2xl font-bold mt-8 text-center text-cream">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-xs text-cream-muted mt-2 text-center font-mono tracking-wide">
        {description}
      </p>
      
    </div>
  )
}

export default SkillCircle