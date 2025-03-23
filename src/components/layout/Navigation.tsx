import '@scss/navigation.scss'
import { urlContact, urlHome, urlMenu } from '@constants/constants'
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
          <li><Link to={urlHome} onClick={() => handleLinkClick(urlHome)}>Inicio</Link></li>
          <li><Link to={urlMenu} onClick={() => handleLinkClick(urlMenu)}>Menú</Link></li>
          <li><Link to={urlContact} onClick={() => handleLinkClick(urlContact)}>Contacto</Link></li>
        </ul>
      </div>
    </motion.nav>
  )
}