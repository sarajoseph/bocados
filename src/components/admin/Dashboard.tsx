import { User } from 'firebase/auth'
import { IoMdSettings } from 'react-icons/io'
import { UserLogged } from '@components/admin/UserLogged'
import { ListLinks } from '@components/admin/ListLinks'

export const Dashboard = ({user}: {user: User}) => {
  return (
    <>
      <h1 className='admin-panel-page--title'>
        <IoMdSettings /> Panel de administración - Dashboard
      </h1>
      <div className='dashboard'>
        <ListLinks showDashboard={false} />
        {user.email && <UserLogged email={user.email} /> }
      </div>
    </>
  )
}