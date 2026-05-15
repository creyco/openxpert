import ScrollReveal from './ScrollReveal'

const techs = [
  'VMware vSphere', 'Nutanix AHV', 'Cisco UCS', 'Dell PowerEdge',
  'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes',
  'Docker', 'Red Hat OpenShift', 'Ansible', 'Terraform',
  'Python', 'Node.js', 'React Native', 'TensorFlow',
  'Apache Kafka', 'PostgreSQL', 'MongoDB', 'Elastic Stack',
  'Splunk', 'ISO 27001', 'ENS'
]

export default function TechStack() {
  return (
    <ScrollReveal className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0v60M0 30h60\' stroke=\'%2300C8D6\' stroke-width=\'0.5\'/%3E%3C/svg%3E")'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-500 font-display text-sm tracking-[0.2em] uppercase mb-4">Tecnología</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Plataformas clave</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trabajamos con un stack abierto, de alto rendimiento y alineado con los estándares más exigentes del sector público.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((t, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-lg border border-navy-600 text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-500/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
