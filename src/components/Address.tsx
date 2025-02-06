import { IoLocationOutline } from 'react-icons/io5'

export const Address = ({ className, icon = false }: { className?: string, icon?: boolean }) => {
  return (
    <div className={className}>
      {icon && <IoLocationOutline size={50} />}
      <h3>Dirección</h3>
      <p>Calle Inventada 5</p>
      <p>08840 Viladecans, Barcelona</p>
    </div>
  )
}