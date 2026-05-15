import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Press from './components/Press'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Benefits />
      <Testimonials />
      <Contact />
      <Press />

      <footer className="py-8 px-6 border-t border-navy-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold">
            <span className="text-cyan-500">Open</span>CTO
          </p>
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} OpenCTO. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
