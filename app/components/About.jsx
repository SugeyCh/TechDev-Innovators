import Image from "next/image"
import grupo from '@p/group.jpg'

export default function About() {
  return(
    <>
      <div className="about">
        <div className="about-us">
          <div className="cuadro">
              <div className="text-about">
                <h1>About Us</h1>
                <div className="texts">
                  <span className="text1">
                    En TechDev Innovators, creemos que la mejor manera de predecir el futuro es inventándolo. Somos una empresa de desarrollo de software dedicada a transformar ideas en soluciones innovadoras. Nuestra misión es proporcionar tecnologías personalizadas y avanzadas que impulsen el éxito de nuestros clientes, mejorando su eficiencia y competitividad en el mercado.
                  </span>
                  <span className="text2">
                    Estamos comprometidos con la excelencia en cada proyecto que emprendemos. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus metas a través de soluciones tecnológicas personalizadas y efectivas. Creemos en la combinación perfecta de tecnología, innovación y un enfoque centrado en el cliente para ofrecer resultados excepcionales.
                  </span>
                </div>
              </div>

              <div className="image">
                <Image src={grupo} className="grupo" alt="Foto de grupo" priority />        
              </div>
            </div>
          </div>
        </div>
    </>
  )
}