import Image from "next/image"
import robot from '@p/robot.png'
import logo from '@p/logo2.png'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TechDev() {
  const el = useRef(null)
  
  useEffect(() => {
    const options = {
      strings: ['Innovamos con tecnología', 'Codificamos el futuro', 'Desarrollamos soluciones'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    }

    const typed = new Typed(el.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="fondo">
        <div className="tech"></div>
        <div className="robot">
          <Image className="robot-img" src={robot} alt="Imagen de robot" priority />
        </div>

        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

        <div className="info">
          <div className="title">
            <Image className="logo" src={logo} alt="Logo" priority />
            <span ref={el} className="info-title" />
          </div>

          <div className="text-dev">
            <span>
              Nuestro enfoque se centra en la creación de soluciones tecnológicas personalizadas que impulsan la innovación y la eficiencia en cada proyecto. Nos especializamos en desarrollar software a medida que se adapta perfectamente a las necesidades únicas de cada cliente, utilizando las últimas tecnologías y metodologías ágiles.
            </span>

            <div className="autor">
              <div className="frase">
                <span className="span1">“The best way to predict the future is to invent it”</span>
              </div>
              <div className="names"> 
                <span className="span2">Alan Kay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}