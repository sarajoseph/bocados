import { Description } from '@components/Description'
import { Hero } from '@components/Hero'
import { Location } from '@components/Location'
import { WebContainer } from '@components/WebContainer'

export const Home = () => {
  return (
    <WebContainer pageClass='home'>
      <Hero />
      <Description />
      <Location />
    </WebContainer>
  )
}