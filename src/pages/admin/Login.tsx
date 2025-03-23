import '@scss/adminpanel.scss'
import { Dashboard } from '@components/admin/Dashboard'
import { Loading } from '@components/common/Loading'
import { LoginForm } from '@components/admin/LoginForm'
import { motion } from 'motion/react'
import { sectionAnimation } from '@constants/constants'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useAuth } from '@hooks/useAuth'
import { WebContainer } from '@components/layout/WebContainer'

export const Login = () => {
  const { user, loadingAdminUser } = useAuth()
  const loading = useLoadingContext()
  if (loading || loadingAdminUser) return <Loading />
  return (
    <WebContainer pageClass='admin-panel-page'>
      <motion.section className='section' {...sectionAnimation}>
        <div className='container'>
          {user ? <Dashboard user={user} /> : <LoginForm /> }
        </div>
      </motion.section>
    </WebContainer>
  )
}