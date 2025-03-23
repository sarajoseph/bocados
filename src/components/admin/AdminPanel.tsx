import '@scss/adminpanel.scss'
import { User } from 'firebase/auth'
import { IoMdSettings } from 'react-icons/io'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { UserLogged } from '@components/admin/UserLogged'
import { ListLinks } from '@components/admin/ListLinks'

export const AdminPanel = ({user}: {user: User}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const togglePanel = () => setIsPanelOpen(prev => !prev)
  return (
    <div className={`admin-panel ${isPanelOpen ? 'open' : 'closed'}`}>
      <button className='toggle-button settings-button' onClick={togglePanel}>
        <IoMdSettings />
      </button>
      {isPanelOpen &&
      <div className='admin-panel-container'>
        <button className='toggle-button close-button' onClick={togglePanel}>
          <IoClose />
        </button>
        <div className='admin-panel-content'>
          <h1 className="title">Panel de administración</h1>
          <ListLinks />
          {user.email && <UserLogged email={user.email} /> }
        </div>
      </div>
      }
    </div>
  )
}