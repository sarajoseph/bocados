import { Logo } from '@components/common/Logo'
import { Address } from '@components/common/Address'
import { Timetable } from '@components/common/Timetable'
import { ContactData } from '@components/common/ContactData'
import { SocialNetworks } from '@components/common/SocialNetworks'

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