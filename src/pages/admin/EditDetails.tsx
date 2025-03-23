import { WebContainer } from '@components/layout/WebContainer'
import { Loading } from '@components/common/Loading'
import { sectionAnimation } from '@constants/constants'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { motion } from 'motion/react'

export const EditDetails = () => {
  const loading = useLoadingContext()
  if (loading) return <Loading />
  return (
    <WebContainer pageClass='admin-panel-page'>
      <motion.section className='section' {...sectionAnimation}>
        <div className='container'>
          <h1 className='admin-panel-page--title'>Panel de administración - Editar información del restaurante</h1>
        </div>
      </motion.section>
    </WebContainer>
  )
}