import '@scss/modal.scss'
import { ReactNode } from 'react'

export const Modal = ({ onClose, children }: { onClose: () => void, children: ReactNode }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-content">
          {children}
          <button className='btn-secondary' onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}