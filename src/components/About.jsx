import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6 bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Sala de control · Centro de datos moderno</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-cyan-500/20 rounded-lg hidden md:block" />
          </div>

          <div>
            <h2 className="font-display text-cyan-500 text-sm tracking-[0.2em] uppercase mb-4">Quiénes somos</h2>
            <p className="font-display text-3xl md:text-4xl font-bold mb-6">Somos <span className="text-cyan-500">OpenCTO</span></p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Somos una firma especializada en arquitectura de sistemas y dirección de informática para entidades públicas, municipios y organizaciones con necesidades de infraestructura crítica. Traducimos complejidad técnica en entornos estables, seguros y preparados para escalar.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Diseñamos la columna vertebral tecnológica de instituciones que gestionan servicios esenciales: desde centros de datos que nunca se detienen hasta plataformas de ciudad inteligente que conectan miles de sensores. Nuestra propuesta de valor se basa en combinar visión estratégica con ejecución impecable, manteniendo siempre la continuidad operativa y el control presupuestario. No vendemos horas; entregamos resultados medibles y transferimos conocimiento a cada equipo interno.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
