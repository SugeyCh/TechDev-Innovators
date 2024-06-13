import TechDev from '@c/TechDev'
import Navbar  from '@c/Navbar'
import About   from '@c/About'
import Skills  from '@c/Skills'
import Works   from '@c/Works'
import Footer  from '@c/Footer'

export default function TDI() {
  return (
    <>
      <Navbar />
      <div className="content">
        <TechDev />
        <About />
        <Skills />
        <Works />
        <Footer />
      </div>
    </>
  )
}