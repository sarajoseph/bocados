import '@scss/description.scss'
import dish1 from '@images/dish1.png'
import dish2 from '@images/dish2.png'
import dish3 from '@images/dish3.png'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { Img } from '@components/Img'

export const Description = () => {
  const { restaurantName, restaurantDescription } = useRestaurantContext()
  return (
    <section className='section description-section'>
      <div className="container">
        <h2>{restaurantName}</h2>
        <p>{restaurantDescription}</p>
        <div className='dishes-container'>
          <Img src={dish1} alt={'Plato del restaurante '+restaurantName} />
          <Img src={dish2} alt={'Plato del restaurante '+restaurantName} />
          <Img src={dish3} alt={'Plato del restaurante '+restaurantName} />
        </div>
      </div>
    </section>
  )
}