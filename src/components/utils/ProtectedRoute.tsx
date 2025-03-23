import { Navigate } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import { ReactNode } from 'react'
import { urlAdmin } from '@constants/constants'
import { Spinner } from '@components/common/Spinner'

export const ProtectedRoute = ({ children }: {children: ReactNode}) => {
  const { user, loadingAdminUser } = useAuth()
  if (loadingAdminUser) return <Spinner />
  if (!user) return <Navigate to={urlAdmin} replace />
  return children
}