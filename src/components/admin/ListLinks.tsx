import { ListLink } from '@components/admin/ListLink'
import { urlAdmin, urlEditDetails, urlEditMenu } from '@constants/constants'
import { AiOutlineHome } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

export const ListLinks = ({showDashboard = true}: {showDashboard?: boolean}) => {
  return (
    <ul className='links'>
      {showDashboard && <ListLink to={urlAdmin} icon={AiOutlineHome} label='Dashboard' />}
      <ListLink to={urlEditDetails} icon={FiEdit} label='Editar datos del restaurante' />
      <ListLink to={urlEditMenu} icon={FiEdit} label='Editar menú del restaurante' />
    </ul>
  )
}