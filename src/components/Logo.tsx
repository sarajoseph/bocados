import '@scss/logo.scss'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
export const Logo = ({ size = 'md', titleTag: TitleTag = 'p' }: { size?: string, titleTag?: keyof JSX.IntrinsicElements }) => {
  const { restaurantName } = useRestaurantContext()
  return (
    <div className='logo'>
      <img src='./images/logo.png' alt='logo' className={size} />
      <TitleTag className='logo-title'>{restaurantName}</TitleTag>
    </div>
  )
}