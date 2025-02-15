import '@scss/menu.scss'
import { WebContainer } from '@components/WebContainer'
import { Loading } from '@components/Loading'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useMenu } from '@hooks/useMenu'
import { MenuSection } from '@components/MenuSection'

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
          <h2>Menu</h2>
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