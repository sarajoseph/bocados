import { Logo } from '@components/common/Logo'
import { fadeOutAnimation } from '@constants/constants'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Navigation } from '@components/layout/Navigation'
import { LuMenu } from 'react-icons/lu'
import { useState } from 'react'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  return (
    <header>
      <div className='header'>
        <motion.div {...fadeOutAnimation} className='container'>
          <Link to='/'>
            <Logo titleTag='h1' />
          </Link>
          <button className='burger-button' onClick={openMenu}>
            <LuMenu size={40} className='open-menu' />
          </button>
        </motion.div>
      </div>
      <Navigation isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  )
}