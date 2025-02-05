import '@scss/logo.scss'
export const Logo = ({ size = 'md', titleTag: TitleTag = 'p' }: { size?: string, titleTag?: keyof JSX.IntrinsicElements }) => {
  return (
    <div className='logo'>
      <img src='./images/logo.png' alt='logo' className={size} />
      <TitleTag className='logo-title'>Bocados</TitleTag>
    </div>
  )
}