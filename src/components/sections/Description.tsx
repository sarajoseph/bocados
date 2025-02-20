import '@scss/description.scss'
import dish1 from '@images/dish1.png'
import dish2 from '@images/dish2.png'
import dish3 from '@images/dish3.png'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { Img } from '@components/common/Img'
import { motion } from 'motion/react'
import { sectionMotionPropsType } from '@mytypes/types'

const sectionMotionProps: sectionMotionPropsType = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: .5, ease: 'easeOut', delay: 0.2 },
  viewport: { once: false }
}

const imgMotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: .3, ease: 'easeOut' },
  viewport: { once: false }
}

const dish1Props = {
  ...imgMotionProps,
  transition: { ...imgMotionProps.transition, delay: 0.2 }
}

const dish2Props = {
  ...imgMotionProps,
  transition: { ...imgMotionProps.transition, delay: 0.4 }
}

const dish3Props = {
  ...imgMotionProps,
  transition: { ...imgMotionProps.transition, delay: 0.6 }
}

export const Description = () => {
  const { restaurantName, restaurantDescription } = useRestaurantContext()
  return (
    <section className='section description-section'>
      <div className='container'>
        <motion.h2 {...sectionMotionProps}>{restaurantName}</motion.h2>
        <motion.p {...sectionMotionProps}>{restaurantDescription}</motion.p>
        <div className='dishes-container'>
          <Img src={dish1} alt={'Plato del restaurante '+restaurantName} motionProps={dish1Props} />
          <Img src={dish2} alt={'Plato del restaurante '+restaurantName} motionProps={dish2Props} />
          <Img src={dish3} alt={'Plato del restaurante '+restaurantName} motionProps={dish3Props} />
        </div>
      </div>
    </section>
  )
}