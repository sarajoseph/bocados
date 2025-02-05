import { ReactNode } from 'react'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

export const WebContainer = ({ children }: {children: ReactNode}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}