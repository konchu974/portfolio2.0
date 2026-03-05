function TechTag({ name }) {
  return (
    <span className="bg-forest-dark/90 border border-orange/40 px-4 py-1.5 rounded-full text-xs font-semibold text-cream font-mono tracking-wide hover:border-orange hover:bg-orange/10 transition-all duration-300 hover:scale-105">
      {name}
    </span>
  )
}

export default TechTag