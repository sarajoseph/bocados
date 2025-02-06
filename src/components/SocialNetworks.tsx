import { FaFacebook, FaInstagram } from 'react-icons/fa'

export const SocialNetworks = ({ iconSize = 30 }: {iconSize?: number}) => {
  return (
    <div className='social-networks'>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={iconSize} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={iconSize} />
      </a>
    </div>
  )
}