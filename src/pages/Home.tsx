import { Description } from '@components/Description'
import { Hero } from '@components/Hero'
import { Location } from '@components/Location'
import { WebContainer } from '@components/WebContainer'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { Loading } from '@components/Loading'

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