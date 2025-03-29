import { Spinner } from '@components/common/Spinner'

export const SubmitButton = ({ isLoading, text }: { isLoading: boolean, text: string }) => {
  return (
    <button type='submit' className='btn-primary'>
      {isLoading ? <Spinner /> : text}
    </button>
  )
}