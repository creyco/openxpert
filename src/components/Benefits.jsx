import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    title: 'Estabilidad operativa 24/7',
    desc: 'Infraestructuras diseñadas para mantenerse activas incluso durante actualizaciones, fallos de componentes o ataques.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Escalabilidad sin límites',
    desc: 'Capacidad de crecer en carga y en funcionalidades sin rediseñar desde cero.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
  },
  {
    title: 'Seguridad desde el diseño',
    desc: 'Cada capa del sistema incorpora medidas de protección y cumple los marcos normativos de la administración pública.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
  },
  {
    title: 'Control presupuestario',
    desc: 'Definición precisa de costes de infraestructura, evitando sorpresas y optimizando licenciamiento.',
    icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Continuidad del conocimiento',
    desc: 'Formamos a los equipos internos y documentamos cada decisión para que la dependencia del proveedor sea mínima.',
    icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342'
  },
  {
    title: 'Integración real',
    desc: 'Unificamos sistemas dispersos para que hablen entre sí, eliminando islas de información y duplicidades.',
    icon: 'M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
  }
]

export default function Benefits() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-display text-sm tracking-[0.2em] uppercase mb-4">Beneficios</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Por qué trabajar con nosotros</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mt-1">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-base mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
