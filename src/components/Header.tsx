import { Logo } from '@components/Logo'
import { Link } from 'react-router'
export const Header = () => {
  return (
    <header>
      <Link to='/' className='container flex-row'>
        <Logo titleTag='h1' />
      </Link>
    </header>
  )
}