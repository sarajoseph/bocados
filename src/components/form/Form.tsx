import '@scss/form.scss'
import { ReactNode } from 'react'
type FormProps = {
  size?: 'xs' | 'sm' | 'md',
  handleSubmit: ((e: React.FormEvent) => void) | ((e: React.FormEvent<HTMLFormElement>) => Promise<void>),
  adminForm?: boolean,
  children?: ReactNode
}
export const Form = ({ size, handleSubmit, adminForm=false, children }: FormProps) => {
  return (
    <div className={adminForm ? 'form-container admin-form' : 'form-container'}>
      <div className={'form-wrapper '+size}>
        <form onSubmit={handleSubmit} className='form'>
          {children}
        </form>
      </div>
    </div>
  )
}