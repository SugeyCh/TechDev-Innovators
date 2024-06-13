import { Youtube, Instagram, Gmail } from './Icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="f1">
          <h1>TechDev Innovators</h1>
          <span>&quot;Transformando ideas en soluciones tecnológicas.&quot;</span>

          <div className="fo">
            <span>Powered by TechDev Innovators 2024</span>
          </div>
        </div>

        <div className="f2">
          <span className='red'>
            <Youtube />
            <Link className='link' href='https://www.youtube.com/@TechDev-ez9oe'>https://www.youtube.com/@TechDev-ez9oe</Link>
          </span>
          <span className='red'>
            <Instagram />
          </span>
          <span className='red'>
            <Gmail />
            <p>tdi.techdev03@gmail.com</p>
          </span>
        </div>
      </div>
    </>
  )
}