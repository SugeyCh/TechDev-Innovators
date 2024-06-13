import Image from 'next/image'
import image1 from '@p/image 3.png'
import image2 from '@p/image 4.png'
import image3 from '@p/image 5.png'
import image4 from '@p/image6.jpg'
import image5 from '@p/image7.jpg'
import image6 from '@p/image8.jpg'
import {
  React2,
  Next,
  Nodejs,
  Js,
  Ts,
  Python,
  Mongo,
  Mysql,
  Git,
  Github,
  SQL,
  Django,
  Docker
} from '@c/Icons'

export default function Skills() {
  return (
    <>
      <div className="skill">
        <div>
          <h1>Skills</h1>
        </div>
        <div className="square">
          <div className="carousel-container">
            <div className="carousel" >
              <div className="carousel-slide"><Image src={image1} alt="Image 1" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image2} alt="Image 2" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image3} alt="Image 3" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image4} alt="Image 4" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image5} alt="Image 5" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image6} alt="Image 6" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image1} alt="Image 1" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image2} alt="Image 2" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image3} alt="Image 3" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image4} alt="Image 4" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image5} alt="Image 5" layout="fill" objectFit="cover" /></div>
              <div className="carousel-slide"><Image src={image6} alt="Image 6" layout="fill" objectFit="cover" /></div>
            </div>
          </div>

          <div className='skills'>
            <div className='cuadro1'>
              <div className="len">
                <Js />
                <span>JavaScript</span>
              </div>
              <div className="len">
                <Ts />
                <span>TypeScript</span>
              </div>
              <div className="len">
                <Python />
                <span>Python</span>
              </div>
              <div className="len">
                <SQL />
                <span>SQL</span>
              </div>
            </div>

            <div className='cuadro2'>
              <div className='parte1'>
                <div className="tec">
                  <React2 />
                  <span>React</span>
                </div>
                <div className="tec">
                  <Nodejs />
                  <span>Nodejs</span>
                </div>
                <div className="tec">
                  <Git />
                  <span>Git</span>
                </div>
                <div className="tec">
                  <Github />
                  <span>GitHub</span>
                </div>
                <div className="tec">
                  <Mongo />
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="parte2">
                <div className="tec">
                  <Next />
                  <span>Nextjs</span>
                </div>
                <div className="tec">
                  <Docker />
                  <span>Docker</span>
                </div>
                <div className="tec">
                  <Django />
                  <span>Django</span>
                </div>
                <div className="tec">
                  <Mysql />
                  <span>SQL</span>
                </div>
                <div className="tec">
                  <SQL />
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}