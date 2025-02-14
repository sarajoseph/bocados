import '@scss/contact.scss'
import { Address } from '@components/Address'
import { ContactData } from '@components/ContactData'
import { GMap } from '@components/GMap'
import { Timetable } from '@components/Timetable'
import { WebContainer } from '@components/WebContainer'
import { ContactForm } from '@components/ContactForm'
import { SocialNetworks } from '@components/SocialNetworks'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { Loading } from '@components/Loading'

export const Contact = () => {
  const loading = useLoadingContext()
  const { restaurantPhone, restaurantEmail } = useRestaurantContext()
  if (loading) return <Loading />
  return (
    <WebContainer pageClass='contact'>
      <section className='section'>
        <div className="container">
          <h2>Contacto</h2>
          <p>Reserva tu mesa o contáctanos por email <strong>{restaurantEmail}</strong>, por teléfono <strong>{restaurantPhone}</strong> o a través del siguiente formulario. Estaremos encantados de atenderte y resolver cualquier duda.</p>
          <ContactForm />
        </div>
      </section>
      <section className='section'>
        <div className='container contact-info'>
          <Address className='contact-box' icon={true}/>
          <ContactData className='contact-box' icon={true}>
            <SocialNetworks iconSize={40} />
          </ContactData>
          <Timetable className='contact-box' icon={true}/>
        </div>
        <GMap/>
      </section>
    </WebContainer>
  )
}