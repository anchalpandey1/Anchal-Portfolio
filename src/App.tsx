import { About } from '@/components/sections/About'
import { ProfessionalHighlights } from '@/components/sections/ProfessionalHighlights'
import { Contact } from '@/components/sections/Contact'
import { EngineeringSnapshot } from '@/components/sections/EngineeringSnapshot'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ProfessionalHighlights />
        <Contact />
        <EngineeringSnapshot />
      </main>
      <Footer />
    </>
  )
}
