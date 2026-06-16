import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import CompanyProjects from './components/CompanyProjects'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed animated background layers */}
      <div className="cyber-bg" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <CompanyProjects />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
