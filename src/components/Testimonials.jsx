import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    text: 'OpenCTO digitalizó nuestro sistema de gestión de tráfico en menos de seis meses sin interrumpir el servicio ni un solo minuto. Ahora podemos predecir congestiones y ajustar semáforos en tiempo real.',
    name: 'Director de Movilidad',
    role: 'Ayuntamiento de una capital de provincia'
  },
  {
    text: 'Migrar nuestro ERP legacy era una decisión que llevábamos años posponiendo. Su metodología eliminó el riesgo y hoy gestionamos el doble de expedientes con la misma plantilla.',
    name: 'Responsable de Modernización Administrativa',
    role: 'Gobierno Regional'
  },
  {
    text: 'Gracias a su arquitectura escalable, soportamos sin caídas el crecimiento de trámites digitales durante la pandemia. La plataforma se convirtió en un ejemplo para otras administraciones.',
    name: 'CIO',
    role: 'Organismo autónomo estatal'
  }
]

export default function Testimonials() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-display text-sm tracking-[0.2em] uppercase mb-4">Clientes</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Confían en nuestra arquitectura</h2>
          <p className="text-gray-400">Colaboramos con entidades que confían en nuestra arquitectura</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-navy-800/50 border border-navy-700 rounded-xl p-6 md:p-8 relative">
              <svg className="w-8 h-8 text-cyan-500/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
              <div className="border-t border-navy-700 pt-4">
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
          {['Ayuntamiento', 'Diputación', 'Gobierno Regional', 'Organismo Autónomo', 'Ministerio'].map((org, i) => (
            <div key={i} className="h-8 flex items-center">
              <span className="text-gray-400 text-sm font-display font-semibold tracking-wider uppercase">{org}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
