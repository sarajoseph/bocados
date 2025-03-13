import '@scss/menu.scss'
import { WebContainer } from '@components/layout/WebContainer'
import { Loading } from '@components/common/Loading'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useMenu } from '@hooks/useMenu'
import { MenuSection } from '@components/sections/menu/MenuSection'
import { motion } from 'motion/react'
import { fadeOutFromBottomAnimation } from '@constants/constants'

export const Menu = () => {
  const loading = useLoadingContext()
  const { menu, loadingMenu } = useMenu()
  if (loading) return <Loading />
  return (
    <WebContainer pageClass='menu'>
    {loadingMenu
      ? <Loading />
      :
      <section className='section'>
        <div className='container'>
          <motion.h2 {...fadeOutFromBottomAnimation}>Menú</motion.h2>
          <div className='menu-container'>
          {menu && Object.entries(menu).map(([category, items]) => (
            <MenuSection
              key={category}
              category={category}
              items={items}
            />
          ))}
          </div>
        </div>
      </section>
    }
    </WebContainer>
  )
}