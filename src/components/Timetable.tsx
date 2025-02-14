import { useTimetable } from '@hooks/useTimetable'
import { GrSchedule } from 'react-icons/gr'

export const Timetable = ({ className, icon = false }: { className?: string, icon?: boolean }) => {
  const formattedTimetable = useTimetable()

  return (
    <div className={className}>
      {icon && <GrSchedule size={50} />}
      <h3>Horario</h3>
      {formattedTimetable.map((schedule, index) =>{
        const [days, time] = schedule.split(' de ')
        return (
          <div key={index}>
            <p>{days}</p>
            <p>{time}</p>
          </div>
        )
      })}
    </div>
  )
}