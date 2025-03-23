import { useLogout } from '@hooks/useLogout'
import { FaRegUserCircle } from 'react-icons/fa'

export const UserLogged = ({email}: {email: string}) => {
  const logout = useLogout()
  return (
    <div className='user-logged'>
      <p className='email'><FaRegUserCircle size={20} /> {email}</p>
      <button onClick={logout} className='btn-logout'>Cerrar sesión</button>
    </div>
  )
}