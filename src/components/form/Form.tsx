import '@scss/form.scss'
import { ReactNode } from 'react'
type FormProps = {
  size?: 'xs' | 'sm' | 'md',
  handleSubmit: ((e: React.FormEvent) => void) | ((e: React.FormEvent<HTMLFormElement>) => Promise<void>),
  children?: ReactNode
  className?: string
}
export const Form = ({ size, handleSubmit, children, className = 'flex-column' }: FormProps) => {
  return (
    <div className='form-container'>
      <div className={'form-content '+size}>
        <form onSubmit={handleSubmit} className={'form '+className}>
          {children}
        </form>
      </div>
    </div>
  )
}