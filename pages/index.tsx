import TechDev from '@c/TechDev'
import Navbar from '@c/Navbar'
import About from '@c/About'
import Skills from '@c/Skills'

export default function TDI() {
  return (
    <>
      <Navbar />
      <div className="content">
        <TechDev />
        <About />
        <Skills />
      </div>
    </>
  )
}