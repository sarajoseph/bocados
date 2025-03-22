import '@scss/logo.scss'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { Img } from '@components/common/Img'
export const Logo = ({ titleTag: TitleTag = 'p' }: { titleTag?: keyof JSX.IntrinsicElements }) => {
  const { restaurantName } = useRestaurantContext()
  return (
    <div className='logo'>
      <Img src='/images/logo.png' alt='logo' />
      <TitleTag className='logo-title'>{restaurantName}</TitleTag>
    </div>
  )
}