import { Hero } from '../components/Hero'
import { Location } from '../components/Location'
import { WebContainer } from '../components/WebContainer'

export const Home = () => {
  return (
    <WebContainer>
      <Hero />
      <section className='section'>
        <div className="container">
          <h2>Bocados</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, enim suscipit laoreet tincidunt, libero tellus porta tortor, in ornare turpis neque sit amet eros. Sed imperdiet tortor ac ante accumsan bibendum. Vestibulum vulputate magna ac venenatis rutrum. Proin dictum mauris turpis, vel laoreet nisl suscipit eget. Proin semper mollis orci, eget auctor nunc dictum vitae. Suspendisse ullamcorper diam sed gravida maximus. Morbi vel luctus justo, sit amet porttitor justo. Donec vitae velit sit amet odio consectetur egestas.</p>
        </div>
      </section>
      <Location />
    </WebContainer>
  )
}