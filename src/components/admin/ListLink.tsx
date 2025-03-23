import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
export const ListLink = ({to, icon: Icon, label}: {to: string, icon: IconType, label: string}) => {
  return (
    <li className='link'>
      <Link to={to}>
        {<Icon />} {label}
      </Link>
    </li>
  )
}