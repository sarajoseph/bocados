import '@scss/notfound.scss'
import { WebContainer } from '@components/layout/WebContainer'
import { FaRegSadCry } from 'react-icons/fa'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { Loading } from '@components/common/Loading'

export const NotFound = ({errorMessage = 'Page not found'}: {errorMessage?: string}) => {
  const loading = useLoadingContext()
  if (loading) return <Loading />
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