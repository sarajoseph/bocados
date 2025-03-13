import '@scss/navigation.scss'
import { motion } from 'motion/react'
import { LuX } from 'react-icons/lu'
import { Link, useLocation } from 'react-router'

export const Navigation = ({isOpen, closeMenu}: {isOpen: boolean, closeMenu: () => void}) => {
  const location = useLocation()

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      closeMenu()
    }
  }

  return (
    <motion.nav
      className={`navigation container ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='nav-links'>
        <LuX size={60} className='close-menu' onClick={closeMenu} />
        <ul>
          <li><Link to='/' onClick={() => handleLinkClick('/')}>Inicio</Link></li>
          <li><Link to='/menu' onClick={() => handleLinkClick('/menu')}>Menú</Link></li>
          <li><Link to='/contact' onClick={() => handleLinkClick('/contact')}>Contacto</Link></li>
        </ul>
      </div>
    </motion.nav>
  )
}