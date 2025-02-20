import '@scss/location.scss'
import { GMap } from '@components/common/GMap'
import { Address } from '@components/common/Address'
import { Timetable } from '@components/common/Timetable'
import { ContactData } from '@components/common/ContactData'
import { motion } from 'motion/react'
import { sectionMotionProps } from '@constants/constants'

export const Location = () => {
  return (
    <section className='section location-section'>
      <motion.div className='container' {...sectionMotionProps}>
        <h2>¿Dónde encontrarnos?</h2>
        <div className='location-container'>
          <div className='location-info-container'>
            <Address/>
            <Timetable className='hide-sm'/>
            <ContactData className='hide-sm'/>
          </div>
          <GMap/>
        </div>
      </motion.div>
    </section>
  )
}