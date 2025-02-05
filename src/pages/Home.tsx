import { Description } from '@components/Description'
import { Hero } from '@components/Hero'
import { Location } from '@components/Location'
import { WebContainer } from '@components/WebContainer'

export const Home = () => {
  return (
    <WebContainer>
      <Hero />
      <Description />
      <Location />
    </WebContainer>
  )
}