import { Spinner } from '@components/common/Spinner'

export const SubmitButton = ({ isLoading, text, className = 'btn-primary' }: { isLoading: boolean, text: string, className?: string }) => {
  return (
    <button type='submit' className={'btn '+className}>
      {isLoading ? <Spinner /> : text}
    </button>
  )
}