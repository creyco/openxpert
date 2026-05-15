import ScrollReveal from './ScrollReveal'

const services = [
  {
    title: 'Arquitectura de centros de datos y nube híbrida',
    desc: 'Diseñamos entornos de alta disponibilidad que integran infraestructura on-premise, nube privada y nube pública. Aseguramos la continuidad del negocio incluso ante picos de demanda o incidentes imprevistos, con un diseño ajustado a normas y con tolerancia cero a la pérdida de datos.',
    icon: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
  },
  {
    title: 'Migración de sistemas legacy',
    desc: 'Transformamos aplicaciones monolíticas y bases de datos obsoletas en arquitecturas modernas, modulares y gobernables. Reducimos el riesgo de cada transición con procesos de réplica progresiva y ventanas de corte mínimas.',
    icon: 'M4.5 12h15m-11.25 3.75l-3-3 3-3m5.25 6l3-3-3-3'
  },
  {
    title: 'Smart cities e IoT institucional',
    desc: 'Conectamos sensores, sistemas de tráfico, alumbrado, residuos y plataformas de participación ciudadana en una única arquitectura interoperable, con privacidad y soberanía del dato como principios rectores.',
    icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z'
  },
  {
    title: 'Desarrollo de aplicaciones móviles corporativas',
    desc: 'Creamos aplicaciones nativas e híbridas para empleados públicos, inspectores de campo y ciudadanos, siempre integradas de forma segura con los sistemas de back-end y diseñadas para funcionar offline cuando sea necesario.',
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
  },
  {
    title: 'Automatización inteligente con IA',
    desc: 'Aplicamos modelos de aprendizaje automático y procesamiento de lenguaje natural para automatizar procesos administrativos repetitivos, clasificación documental y alertas predictivas. La IA no reemplaza el criterio humano, pero libera horas valiosas del personal público.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
  },
  {
    title: 'Dirección de informática y consultoría estratégica',
    desc: 'Actuamos como directores de informática externos o como refuerzo del equipo directivo, elaborando hojas de ruta tecnológicas realistas y alineadas con los objetivos institucionales. Acompañamos en la selección de proveedores, en la gestión del cambio y en la comunicación entre perfiles técnicos y decisores.',
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
  }
]

export default function Services() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-display text-sm tracking-[0.2em] uppercase mb-4">Servicios</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Capacidades principales</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-hover group bg-navy-800/50 border border-navy-700 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 hover:bg-navy-800/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-cyan-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
