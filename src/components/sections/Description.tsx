import '@scss/description.scss'
import dish1 from '@images/dish1.png'
import dish2 from '@images/dish2.png'
import dish3 from '@images/dish3.png'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { Img } from '@components/common/Img'
import { motion } from 'motion/react'
import { imgAnimation, fadeOutFromBottomAnimation } from '@constants/constants'

const dishes = [dish1, dish2, dish3]

export const Description = () => {
  const { restaurantName, restaurantDescription } = useRestaurantContext()
  return (
    <section className='section description-section'>
      <div className='container'>
        <motion.h2 {...fadeOutFromBottomAnimation}>{restaurantName}</motion.h2>
        <motion.p {...fadeOutFromBottomAnimation}>{restaurantDescription}</motion.p>
        <div className='dishes-container'>
        {dishes.map((dish, index) => (
          <Img
            key={dish}
            src={dish}
            alt={'Plato '+(index+1)+' del restaurante '+restaurantName}
            motionProps={{
              ...imgAnimation,
              transition: { ...imgAnimation.transition, delay: 0.2 * (index + 1) }
            }}
          />
        ))}
        </div>
      </div>
    </section>
  )
}