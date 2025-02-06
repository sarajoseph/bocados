import { GrSchedule } from 'react-icons/gr'

export const Timetable = ({ className, icon = false }: { className?: string, icon?: boolean }) => {
  return (
    <div className={className}>
      {icon && <GrSchedule size={50} />}
      <h3>Horario</h3>
      <p>Lunes a Jueves</p>
      <p>12:00h - 23:00h</p>
      <p>Viernes a Domingo</p>
      <p>12:00h - 01:00h</p>
    </div>
  )
}