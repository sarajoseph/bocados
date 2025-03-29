type TextareaProps = {
  id: string,
  value: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}
export const Textarea = ({ id, value, onChange }: TextareaProps) => {
  return <textarea
    className='textarea'
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    autoComplete='off'
    required
  />
}