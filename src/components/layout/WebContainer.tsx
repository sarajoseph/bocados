import { ReactNode } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { AdminPanel } from '@components/admin/AdminPanel'
import { useAuth } from '@hooks/useAuth'

export const WebContainer = ({ children, pageClass }: {children: ReactNode, pageClass: string}) => {
  const { user } = useAuth()
  return (
    <>
      <Header />
      {user && <AdminPanel user={user} />}
      <main className={pageClass}>
        {children}
      </main>
      <Footer />
    </>
  )
}