import '@scss/hero.scss'
import { Link } from 'react-router'
import heroSectionVideo from '@videos/hero-section.mp4'
import heroSectionVideoThumbnail from '@videos/hero-section-thumbnail.png'
export const Hero = () => {
  return (
    <section>
      <div className="video-background">
        <video preload='none' poster={heroSectionVideoThumbnail} autoPlay loop muted playsInline>
          <source src={heroSectionVideo} type="video/mp4" />
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