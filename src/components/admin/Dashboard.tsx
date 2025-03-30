import { User } from 'firebase/auth'
import { UserLogged } from '@components/admin/UserLogged'
import { ListLinks } from '@components/admin/ListLinks'
import { AdminPageTitle } from '@components/admin/AdminTitle'

export const Dashboard = ({user}: {user: User}) => {
  return (
    <>
      <AdminPageTitle title='Panel de administración - Dashboard' />
      <div className='dashboard'>
        <ListLinks showDashboard={false} />
        {user.email && <UserLogged email={user.email} /> }
      </div>
    </>
  )
}