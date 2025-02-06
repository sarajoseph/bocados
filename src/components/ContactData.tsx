import { ReactNode } from 'react'
import { LuPhoneCall } from 'react-icons/lu'

export const ContactData = ({ className, children, icon = false }: { className?: string, children?: ReactNode, icon?: boolean }) => {
  return (
    <div className={className}>
      {icon && <LuPhoneCall size={50} />}
      <h3>Contacto</h3>
      <p>+34 XXX XX XX XX</p>
      <p>hola@bocados.com</p>
      {children}
    </div>
  )
}