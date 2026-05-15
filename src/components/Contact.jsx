import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setSent(true)
      setForm({ name: '', org: '', email: '', phone: '', message: '' })
    }, 800)
  }

  return (
    <ScrollReveal id="contacto" className="py-20 md:py-28 px-6 bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-cyan-500 font-display text-sm tracking-[0.2em] uppercase mb-4">Contacto</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Estamos donde nos necesitas
            </h2>
            <p className="text-gray-400 mb-8">
              Oficina central en Madrid y equipos desplazables a cualquier punto del territorio.
            </p>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Calle de la Innovación 42, 28046 Madrid, España</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+34 91 123 45 67</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>proyectos@opencto.tech</span>
              </div>
            </div>

            <div className="mt-8 aspect-[16/9] rounded-xl bg-navy-900 border border-navy-700 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-10 h-10 text-cyan-500/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="text-gray-500 text-xs">Madrid · España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 border border-navy-700 rounded-xl p-6 md:p-8">
            {sent ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-emerald mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-display text-xl font-semibold mb-2">¡Solicitud enviada!</h3>
                <p className="text-gray-400 text-sm">Te responderemos en menos de 48 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-300 mb-1.5">Nombre y apellidos</label>
                    <input
                      id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                      placeholder="Juan García"
                    />
                  </div>
                  <div>
                    <label htmlFor="org" className="block text-sm text-gray-300 mb-1.5">Organización</label>
                    <input
                      id="org" name="org" type="text" required value={form.org} onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                      placeholder="Ayuntamiento de..."
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-1.5">Correo electrónico</label>
                    <input
                      id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                      placeholder="juan@ayuntamiento.es"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-300 mb-1.5">Teléfono</label>
                    <input
                      id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-300 mb-1.5">Describa brevemente su proyecto o necesidad</label>
                  <textarea
                    id="message" name="message" rows={4} required value={form.message} onChange={handleChange}
                    className="w-full bg-navy-800 border border-navy-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                    placeholder="Estamos interesados en..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-navy-900 font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,214,0.3)]"
                >
                  Enviar solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
