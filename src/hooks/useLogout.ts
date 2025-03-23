import { useNavigate } from 'react-router-dom'
import { urlHome } from '@constants/constants'
import { useAuth } from '@hooks/useAuth'

export const useLogout = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = async () => {
    const response = await logout()
    if (response) navigate(urlHome)
  }

  return handleLogout
}