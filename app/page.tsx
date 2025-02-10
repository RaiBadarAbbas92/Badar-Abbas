import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import HowIWork from "./components/HowIWork"
import SkillsShowcase from "./components/SkillsShowcase"
import FavoriteBooks from "./components/FavoriteBooks"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

export default function Home() {
  return (
    <main className="bg-background text-text">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SkillsShowcase />
      <Projects />
      <HowIWork />
      <FavoriteBooks />
      <CallToAction />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

