import { useContext } from 'react'
import { RestaurantContext } from '@context/RestaurantContext'
import { DEFAULT_RESTAURANT_DATA } from '@constants/constants'

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext)
  if (!context) {
    throw new Error('useRestaurantContext debe usarse dentro de un RestaurantProvider')
  }

  return {
    restaurantName: context.restaurant?.name ?? DEFAULT_RESTAURANT_DATA.name,
    restaurantAddress: context.restaurant?.address ?? DEFAULT_RESTAURANT_DATA.address,
    restaurantPhone: context.restaurant?.phone ?? DEFAULT_RESTAURANT_DATA.phone,
    restaurantEmail: context.restaurant?.email ?? DEFAULT_RESTAURANT_DATA.email,
    restaurantTown: context.restaurant?.town ?? DEFAULT_RESTAURANT_DATA.town,
    restaurantCity: context.restaurant?.city ?? DEFAULT_RESTAURANT_DATA.city,
    restaurantZipCode: context.restaurant?.zip_code ?? DEFAULT_RESTAURANT_DATA.zip_code,
    restaurantDescription: context.restaurant?.description ?? DEFAULT_RESTAURANT_DATA.description,
    restaurantAboutUs: context.restaurant?.about_us ?? DEFAULT_RESTAURANT_DATA.about_us,
    restaurantTimetable: context.restaurant?.timetable ?? DEFAULT_RESTAURANT_DATA.timetable,
    ...context,
  }
}