import '@scss/notfound.scss'
import { WebContainer } from '@src/components/WebContainer'
import { FaRegSadCry } from 'react-icons/fa'

export const NotFound = ({errorMessage = 'Page not found'}: {errorMessage?: string}) => {
  return (
    <WebContainer>
      <section className='section notfound'>
        <FaRegSadCry size={100} />
        <h2>Error 404</h2>
        <p>{errorMessage}</p>
      </section>
    </WebContainer>
  )
}