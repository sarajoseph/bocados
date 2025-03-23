import { Spinner } from '@components/common/Spinner'

export const Loading = () => {
  return (
    <div className='loading'>
      <Spinner size={40} />
    </div>
  )
}