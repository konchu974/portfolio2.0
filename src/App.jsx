import NoiseOverlay from './components/layout/NoiseOverlay'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <NoiseOverlay />
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App