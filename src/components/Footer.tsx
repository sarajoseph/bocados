import { Logo } from '@components/Logo'
import { Address } from '@components/Address'
import { Timetable } from '@components/Timetable'
import { ContactData } from '@components/ContactData'
import { SocialNetworks } from '@components/SocialNetworks'

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <Logo />
        <div className="contact-info">
          <ContactData className='flex-column'>
            <SocialNetworks />
          </ContactData>
          <Address className='flex-column' />
          <Timetable className='flex-column' />
        </div>
      </div>
    </footer>
  )
}