import { ReactNode } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'

export const WebContainer = ({ children, pageClass }: {children: ReactNode, pageClass: string}) => {
  return (
    <>
      <Header />
      <main className={pageClass}>
        {children}
      </main>
      <Footer />
    </>
  )
}