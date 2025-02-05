import '@scss/hero.scss'
export const Hero = () => {
  return (
    <section>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="../../videos/hero-section.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className='content'>
          <button className='btn-secondary'>Ver menu</button>
          <button className='btn-secondary'>Hacer reserva</button>
        </div>
      </div>
    </section>
  )
}