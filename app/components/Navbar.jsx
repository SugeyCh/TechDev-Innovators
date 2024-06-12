import Image from "next/image"
import logo2 from '@p/logo2.png'

export default function Navbar() {
  return(
    <>
      <div className="nav">
        <nav className="navbar">
          <div className="empresa">
            <Image className="logo2" src={logo2} alt="Logo pequeño de la empresa" priority />
            <span>TechDev Innovators</span>
          </div>

          <div className="opciones">
            <ul>
              <li>About us</li>
              <li>Skills</li>
              <li>What we offer</li>
              <li className="li">Platform TechDev</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}