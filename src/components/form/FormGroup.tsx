import { ReactNode } from 'react'
type FormGroupProps = {
  label: string,
  id: string,
  children?: ReactNode
}
export const FormGroup = ({ label, id, children }: FormGroupProps) => {
  return (
    <div className='form-group flex-column'>
      <label htmlFor={id} className='label'>{label}</label>
      {children}
    </div>
  )
}