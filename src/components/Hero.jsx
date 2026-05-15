import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ScrollReveal className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-anthracite" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 200, 214, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 200, 214, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,214,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cyan-500 font-display text-sm md:text-base tracking-[0.2em] uppercase mb-6 animate-fade-in">
          Arquitectura de sistemas · Transformación digital
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          Hacemos que la infraestructura crítica
          <span className="block text-cyan-500">funcione sin pausa y evolucione sin límites</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Arquitectura de sistemas, migración legacy, smart cities y automatización con IA para gobiernos y organizaciones que no pueden permitirse un solo fallo.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-navy-900 font-semibold px-8 py-4 rounded-lg text-base md:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,214,0.4)] hover:-translate-y-0.5 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Solicita una consultoría inicial sin costo
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </ScrollReveal>
  )
}
