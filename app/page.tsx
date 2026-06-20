import CustomCursor from '@/components/CustomCursor'
import TweaksPanel from '@/components/TweaksPanel'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
// import Writing from '@/components/Writing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <TweaksPanel />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Writing /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
