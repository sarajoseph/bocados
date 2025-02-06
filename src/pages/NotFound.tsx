import '@scss/notfound.scss'
import { WebContainer } from '@components/WebContainer'
import { FaRegSadCry } from 'react-icons/fa'

export const NotFound = ({errorMessage = 'Page not found'}: {errorMessage?: string}) => {
  return (
    <WebContainer pageClass='notfound'>
      <section className='section notfound'>
        <FaRegSadCry size={100} />
        <h2>Error 404</h2>
        <p>{errorMessage}</p>
      </section>
    </WebContainer>
  )
}