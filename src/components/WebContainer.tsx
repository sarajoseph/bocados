import { ReactNode } from 'react'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

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