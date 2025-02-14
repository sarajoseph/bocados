import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { TimetableType } from '@mytypes/types'

export const useTimetable = () => {
  const { restaurantTimetable } = useRestaurantContext()

  // Función para agrupar días consecutivos
  const groupConsecutiveDays = (days: string[]): string[] => {
    const grouped: string[] = []
    let tempGroup: string[] = []
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

    days.forEach((day) => {
      if (tempGroup.length === 0 || daysOfWeek.indexOf(day) === daysOfWeek.indexOf(tempGroup[tempGroup.length - 1]) + 1) {
        tempGroup.push(day)
      } else {
        if (tempGroup.length > 1) {
          grouped.push(`${tempGroup[0]} a ${tempGroup[tempGroup.length - 1]}`)
        } else {
          grouped.push(tempGroup[0])
        }
        tempGroup = [day]
      }
    })

    if (tempGroup.length > 1) {
      grouped.push(`${tempGroup[0]} a ${tempGroup[tempGroup.length - 1]}`)
    } else if (tempGroup.length === 1) {
      grouped.push(tempGroup[0])
    }

    return grouped
  }

  // Agrupamos los horarios
  const groupDaysBySchedule = (timetable: {[key: number]: TimetableType}) => {
    const grouped: { [key: string]: string[] } = {}

    Object.values(timetable).forEach(({ day, open, close }: { day: string, open: string, close: string }) => {
      const schedule = `${open} - ${close}`
      if (!grouped[schedule]) {
        grouped[schedule] = []
      }
      grouped[schedule].push(day)
    })

    return grouped
  }

  const formatGroupedTimetable = (grouped: { [key: string]: string[] }) => {
    return Object.entries(grouped).map(([schedule, days]) => {
      const groupedDays = groupConsecutiveDays(days)
      if (groupedDays.length > 1) {
        // Si hay más de un día, reemplazamos la coma por 'y' en el penúltimo elemento
        const lastDay = groupedDays.pop()
        return `${groupedDays.join(', ')} y ${lastDay} de ${schedule}`
      }
      return `${groupedDays[0]} de ${schedule}`
    })
  }

  const formattedTimetable = restaurantTimetable ? formatGroupedTimetable(groupDaysBySchedule(restaurantTimetable)) : []

  return formattedTimetable
}