import { useContext } from 'react'
import { RestaurantContext } from '@context/RestaurantContext'
import { DEFAULT_RESTAURANT_DATA } from '@constants/constants'
import { MenuDataType, RestaurantContextType, TimetableType } from '@mytypes/types'

type UseRestaurantContextType = RestaurantContextType & {
  restaurantName: string
  restaurantAddress: string
  restaurantPhone: string
  restaurantEmail: string
  restaurantTown: string
  restaurantCity: string
  restaurantZipCode: string
  restaurantDescription: string
  restaurantAboutUs: string
  restaurantTimetable: { [key: number]: TimetableType }
  restaurantMenu: MenuDataType | null
}

export const useRestaurantContext = (): UseRestaurantContextType => {
  const context = useContext(RestaurantContext)
  if (!context) {
    throw new Error('useRestaurantContext debe usarse dentro de un RestaurantProvider')
  }

  return {
    restaurantName: context.basic?.name ?? DEFAULT_RESTAURANT_DATA.name,
    restaurantAddress: context.basic?.address ?? DEFAULT_RESTAURANT_DATA.address,
    restaurantPhone: context.basic?.phone ?? DEFAULT_RESTAURANT_DATA.phone,
    restaurantEmail: context.basic?.email ?? DEFAULT_RESTAURANT_DATA.email,
    restaurantTown: context.basic?.town ?? DEFAULT_RESTAURANT_DATA.town,
    restaurantCity: context.basic?.city ?? DEFAULT_RESTAURANT_DATA.city,
    restaurantZipCode: context.basic?.zip_code ?? DEFAULT_RESTAURANT_DATA.zip_code,
    restaurantDescription: context.basic?.description ?? DEFAULT_RESTAURANT_DATA.description,
    restaurantAboutUs: context.basic?.about_us ?? DEFAULT_RESTAURANT_DATA.about_us,
    restaurantTimetable: context.basic?.timetable ?? DEFAULT_RESTAURANT_DATA.timetable,
    restaurantMenu: context.menu,
    ...context,
  }
}