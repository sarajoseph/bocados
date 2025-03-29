import '@scss/toast.scss'
import { MdDone, MdError, MdInfoOutline, MdOutlineWarning } from 'react-icons/md'

type ToastProps = {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
}

export const Toast = ({ message, type = 'success' }: ToastProps) => {
  if (!message) return null

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <MdError />
      case 'warning':
        return <MdOutlineWarning />
      case 'info':
        return <MdInfoOutline />
      default:
        return <MdDone />
    }
  }

  return (
    <div className={'toast '+type}>
      {getIcon()}
      <div className="toast-message">
        {message}
      </div>
    </div>
  )
}