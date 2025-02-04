import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Logo } from './Logo'

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <Logo />
        <div className='flex-column'>
          <h3>Contacto</h3>
          <span>+34 XXX XX XX XX</span>
          <span>hola@bocados.com</span>
          <div className='social-networks'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
        <div className='flex-column'>
          <h3>Dirección</h3>
          <span>Calle Inventada 5</span>
          <span>08840 Viladecans, Barcelona</span>
        </div>
        <div className='flex-column'>
          <h3>Horario</h3>
          <span>Lunes a Jueves</span>
          <span>12:00h - 23:00h</span>
          <span>Viernes a Domingo</span>
          <span>12:00h - 01:00h</span>
        </div>
      </div>
    </footer>
  )
}