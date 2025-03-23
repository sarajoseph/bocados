import '@scss/hero.scss'
import { Link } from 'react-router'
import heroSectionVideo from '@videos/hero-section.mp4'
import heroSectionVideoThumbnail from '@videos/hero-section-thumbnail.png'
import { motion } from 'motion/react'
import { buttonsFromBottomAnimation, fadeOutAnimation, urlContact, urlMenu } from '@constants/constants'
export const Hero = () => {
  return (
    <section>
      <motion.div {...fadeOutAnimation} className="video-background">
        <video preload='none' poster={heroSectionVideoThumbnail} autoPlay loop muted playsInline>
          <source src={heroSectionVideo} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <motion.div {...buttonsFromBottomAnimation} className='content'>
          <Link to={urlMenu} className='btn-secondary'>Ver menú</Link>
          <Link to={urlContact} className='btn-secondary'>Hacer reserva</Link>
        </motion.div>
      </motion.div>
    </section>
  )
}