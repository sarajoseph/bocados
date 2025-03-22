import '@scss/form.scss'
import { ReactNode } from 'react'
type FormProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  handleSubmit: ((e: React.FormEvent) => void) | ((e: React.FormEvent<HTMLFormElement>) => Promise<void>),
  children?: ReactNode
}
export const Form = ({ size, handleSubmit, children }: FormProps) => {
  return (
    <div className='form-container'>
      <div className={'form-content '+size}>
        <form onSubmit={handleSubmit} className='form flex-column'>
          {children}
        </form>
      </div>
    </div>
  )
}