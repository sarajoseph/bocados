import '@scss/location.scss'
import { GMap } from '@components/common/GMap'
import { Address } from '@components/common/Address'
import { Timetable } from '@components/common/Timetable'
import { ContactData } from '@components/common/ContactData'

export const Location = () => {
  return (
    <section className='section location-section'>
      <div className='container'>
        <h2>¿Dónde encontrarnos?</h2>
        <div className='location-container'>
          <div className='location-info-container'>
            <Address/>
            <Timetable className='hide-sm'/>
            <ContactData className='hide-sm'/>
          </div>
          <GMap/>
        </div>
      </div>
    </section>
  )
}