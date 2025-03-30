import { IoMdSettings } from 'react-icons/io'

export const AdminPageTitle = ({title}: {title: string}) => {
  return <h1 className='admin-panel-page--title'><IoMdSettings /> {title}</h1>
}