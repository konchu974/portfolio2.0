function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 "
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,107,53,.08) 25%, rgba(255,107,53,.08) 26%, transparent 27%, transparent 74%, rgba(255,107,53,.08) 75%, rgba(255,107,53,.08) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255,107,53,.08) 25%, rgba(255,107,53,.08) 26%, transparent 27%, transparent 74%, rgba(255,107,53,.08) 75%, rgba(255,107,53,.08) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Blur Orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full top-[-150px] left-[10%] opacity-40 mix-blend-screen"
        style={{
          background: "rgba(94, 181, 114, 0.5)",
          filter: "blur(120px)",
          animation: "floatOrb 15s ease-in-out infinite",
        }}
      />

      <div
        className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] right-[15%] opacity-40 mix-blend-screen "
        style={{
          background: "rgba(255, 107, 53, 0.3)",
          filter: "blur(120px)",
          animation: "floatOrb 18s ease-in-out infinite reverse",
        }}
      />

      {/* Main Content */}
           <div className="relative z-10 text-center max-w-7xl mt-4 w-full">
             
             {/* Title - Optimisé mobile */}
             <h1 className="font-clash font-bold text-[clamp(3rem,12vw,18rem)] leading-[0.9] tracking-tight md:tracking-super-tight uppercase mb-8 px-4">
               <span className="text-gradient block">CLARENCE</span>
               <span className="text-outline block">DUGAIN</span>
             </h1>
             
             <p className="text-base md:text-xl lg:text-2xl text-cream-muted font-light tracking-wide md:tracking-wider max-w-2xl mx-auto mb-12 md:mb-16 px-4">
               Java/Spring • TypeScript • React • PostgreSQL • Docker • Flutter
             </p>
             
          
             <p className="text-sm md:text-base lg:text-lg text-cream-dark mb-16 md:mb-20 px-4 max-w-xl mx-auto">
               Diplômé Concepteur Développeur d'Applications • RNCP 6 • AFPA Brest 2026
             </p>
             
           </div>
    </section>
  );
}

export default Hero;
