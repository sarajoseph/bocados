import '../styles/location.scss'
import { Map } from '../components/Map'

export const Location = () => {
  return (
    <section className='section location-section'>
      <div className="container">
        <h2>¿Dónde encontrarnos?</h2>
        <div className='location-container'>
          <div className='location-info-container'>
            <div className='location-info'>
              <h3>Dirección</h3>
              <p>Calle Inventada 5</p>
              <p>08840 Viladecans, Barcelona</p>
            </div>
            <div className='location-info hide-sm'>
              <h3>Horario</h3>
              <p>Lunes a Jueves</p>
              <p>12:00h - 23:00h</p>
              <p>Viernes a Domingo</p>
              <p>12:00h - 01:00h</p>
            </div>
            <div className='location-info hide-sm'>
              <h3>Contacto</h3>
              <p>+34 XXX XX XX XX</p>
              <p>hola@bocados.com</p>
            </div>
          </div>
          <Map />
        </div>
      </div>
    </section>
  )
}