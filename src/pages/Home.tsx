import { Description } from '@components/sections/Description'
import { Hero } from '@components/sections/Hero'
import { Location } from '@components/sections/Location'
import { WebContainer } from '@components/layout/WebContainer'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { Loading } from '@components/common/Loading'

export const Home = () => {
  const loading = useLoadingContext()
  if (loading) return <Loading />
  return(
    <WebContainer pageClass='home'>
      <Hero />
      <Description />
      <Location />
    </WebContainer>
  )
}