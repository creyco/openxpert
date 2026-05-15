import ScrollReveal from './ScrollReveal'

const press = [
  { source: 'El País', section: 'Tecnología', headline: 'La ciudad inteligente que ya funciona: el caso de OpenCTO en la gestión del agua' },
  { source: 'Expansión', section: '', headline: 'Digitalizar una administración entera exige más arquitectura que código' },
  { source: 'CIO España', section: '', headline: 'Entrevista a los fundadores de OpenCTO: cómo convertir sistemas heredados en plataformas de futuro' },
  { source: 'Diario de Innovación Pública', section: '', headline: 'El 80% de los municipios españoles aún dependen de sistemas legacy. OpenCTO muestra la ruta de salida' }
]

export default function Press() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-500 font-display text-sm tracking-[0.2em] uppercase mb-4">Presencia</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Redes y prensa</h2>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          {[
            { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
          ].map((social, i) => (
            <a
              key={i}
              href="#"
              className="group w-12 h-12 rounded-full border border-navy-600 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label={social.name}
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {press.map((p, i) => (
            <div key={i} className="bg-navy-900/50 border border-navy-700 rounded-lg p-5 hover:border-cyan-500/20 transition-colors">
              <p className="text-cyan-500 text-xs font-semibold tracking-wider uppercase mb-1">
                {p.source}{p.section ? ` · ${p.section}` : ''}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">{p.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
