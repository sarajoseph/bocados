import '@scss/hero.scss'
import { Link } from 'react-router'
export const Hero = () => {
  return (
    <section>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="../../videos/hero-section.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className='content'>
          <Link to='/menu' className='btn-secondary'>Ver menu</Link>
          <Link to='/contact' className='btn-secondary'>Hacer reserva</Link>
        </div>
      </div>
    </section>
  )
}