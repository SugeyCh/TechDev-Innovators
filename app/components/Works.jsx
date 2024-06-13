import { Cel, Desktop, Graph } from '@c/Icons'

export default function Works() {
  return(
    <>
      <div className="work">
        <h1>What we offer</h1>

        <div className="work2">
          <div className="app e-card playing">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">    
              <i className='icon'>
                <Cel />
              </i>
              Aplicaciones Móviles
              <div class="name">Desarrollo de aplicaciones móviles nativas y multiplataforma con tecnologías como React Native</div>
            </div>
          </div>

          <div className="app e-card playing">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">    
              <i className='icon'>
                <Desktop />
              </i>
              Aplicaciones Web
              <div class="name">Creación de aplicaciones web robustas y escalables utilizando frameworks modernos como React, Nodejs y Django</div>
            </div>
          </div>

          <div className="app e-card playing">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">    
              <i className='icon'>
                <Graph />
              </i>
              Software Empresarial
              <div class="name">Soluciones personalizadas para gestión empresarial, incluyendo CRM, ERP y sistemas de gestión de inventarios</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}