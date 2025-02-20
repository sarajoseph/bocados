import '@scss/contact.scss'
import { Address } from '@components/common/Address'
import { ContactData } from '@components/common/ContactData'
import { GMap } from '@components/common/GMap'
import { Timetable } from '@components/common/Timetable'
import { WebContainer } from '@components/layout/WebContainer'
import { ContactForm } from '@components/common/ContactForm'
import { SocialNetworks } from '@components/common/SocialNetworks'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { Loading } from '@components/common/Loading'
import { motion } from 'motion/react'
import { sectionAnimation } from '@constants/constants'

export const Contact = () => {
  const loading = useLoadingContext()
  const { restaurantPhone, restaurantEmail } = useRestaurantContext()
  if (loading) return <Loading />
  return (
    <WebContainer pageClass='contact'>
      <motion.section className='section' {...sectionAnimation}>
        <div className='container'>
          <h2>Contacto</h2>
          <p>Reserva tu mesa o contáctanos por email <strong>{restaurantEmail}</strong>, por teléfono <strong>{restaurantPhone}</strong> o a través del siguiente formulario. Estaremos encantados de atenderte y resolver cualquier duda.</p>
          <ContactForm />
        </div>
      </motion.section>
      <motion.section className='section' {...sectionAnimation}>
        <div className='container contact-info'>
          <Address className='contact-box' icon={true}/>
          <ContactData className='contact-box' icon={true}>
            <SocialNetworks iconSize={40} />
          </ContactData>
          <Timetable className='contact-box' icon={true}/>
        </div>
      </motion.section>
      <motion.section className='section' {...sectionAnimation}>
        <GMap/>
      </motion.section>
    </WebContainer>
  )
}