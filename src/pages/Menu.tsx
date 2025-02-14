import { WebContainer } from '@components/WebContainer'
import { Loading } from '@components/Loading'
import { useLoadingContext } from '@hooks/useLoadingContext'

export const Menu = () => {
  const loading = useLoadingContext()
  if (loading) return <Loading />
  return (
    <WebContainer pageClass='menu'>
      Menu
    </WebContainer>
  )
}