import { Logo } from '@components/common/Logo'
import { fadeOutAnimation } from '@constants/constants'
import { motion } from 'motion/react'
import { Link } from 'react-router'
export const Header = () => {
  return (
    <header>
      <motion.div {...fadeOutAnimation}>
        <Link to='/' className='container flex-row'>
          <Logo titleTag='h1' />
        </Link>
      </motion.div>
    </header>
  )
}