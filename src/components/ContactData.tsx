import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { ReactNode } from 'react'
import { LuPhoneCall } from 'react-icons/lu'

export const ContactData = ({ className, children, icon = false }: { className?: string, children?: ReactNode, icon?: boolean }) => {
  const { restaurantPhone, restaurantEmail } = useRestaurantContext()
  return (
    <div className={className}>
      {icon && <LuPhoneCall size={50} />}
      <h3>Contacto</h3>
      <p>{restaurantPhone}</p>
      <p>{restaurantEmail}</p>
      {children}
    </div>
  )
}