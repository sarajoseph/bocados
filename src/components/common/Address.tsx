import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { IoLocationOutline } from 'react-icons/io5'

export const Address = ({ className, icon = false }: { className?: string, icon?: boolean }) => {
  const { restaurantAddress, restaurantZipCode, restaurantTown, restaurantCity } = useRestaurantContext()
  return (
    <div className={className}>
      {icon && <IoLocationOutline size={50} />}
      <h3>Dirección</h3>
      <p>{restaurantAddress}</p>
      <p>{restaurantZipCode +' '+ restaurantTown +', '+ restaurantCity}</p>
    </div>
  )
}