import { WebContainer } from '@components/layout/WebContainer'
import { Loading } from '@components/common/Loading'
import { sectionAnimation } from '@constants/constants'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { motion } from 'motion/react'
import { AdminPageTitle } from '@components/admin/AdminTitle'
import { EditMenuForm } from '@components/admin/EditMenu/EditMenuForm'

export const EditMenu = () => {
  const loading = useLoadingContext()

  if (loading) return <Loading />
  return (
    <WebContainer pageClass='admin-panel-page'>
      <motion.section className='section' {...sectionAnimation}>
        <div className='container'>
          <AdminPageTitle title='Panel de administración - Editar menú del restaurante' />
          <EditMenuForm />
        </div>
      </motion.section>
    </WebContainer>
  )
}