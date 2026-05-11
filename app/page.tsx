import { Navbar } from "@/components/navbar"
import { SpotlightBackground } from "@/components/spotlight-background"
import { Hero } from "@/components/hero"
import { SkillsMarquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SpotlightBackground />
      <div className="noise-overlay" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <SkillsMarquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
