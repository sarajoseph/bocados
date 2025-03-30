type InputProps = {
  id: string,
  type: string,
  value?: string,
  disabled?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
export const Input = ({ id, type, value, disabled = false, onChange }: InputProps) => {
  return <input
    className='input'
    id={id}
    type={type}
    name={id}
    value={value}
    onChange={onChange}
    autoComplete='off'
    required
    disabled={disabled}
  />
}