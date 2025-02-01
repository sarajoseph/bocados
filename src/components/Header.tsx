import { Logo } from './Logo'
export const Header = () => {
  return (
    <header>
      <div className='container flex-row'>
        <Logo
          size='lg'
          titleTag='h1'
        />
      </div>
    </header>
  )
}