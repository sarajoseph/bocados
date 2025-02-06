import '@scss/contact.scss'
import { Address } from '@components/Address'
import { ContactData } from '@components/ContactData'
import { GMap } from '@components/GMap'
import { Timetable } from '@components/Timetable'
import { WebContainer } from '@components/WebContainer'
import { ContactForm } from '@components/ContactForm'
import { SocialNetworks } from '@components/SocialNetworks'

export const Contact = () => {
  return (
    <WebContainer pageClass='contact'>
      <section className='section'>
        <div className="container">
          <h2>Contacto</h2>
          <p>Reserva tu mesa o contáctanos por email <strong>hola@bocados.com</strong>, por teléfono <strong>+34 XXX XX XX XX</strong> o a través del siguiente formulario. Estaremos encantados de atenderte y resolver cualquier duda.</p>
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