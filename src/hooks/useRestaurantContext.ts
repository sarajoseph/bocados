import { useContext } from 'react'
import { RestaurantContext, defaultRestaurantData } from '@context/RestaurantContext'

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext)
  if (!context) {
    throw new Error('useRestaurantContext debe usarse dentro de un RestaurantProvider')
  }

  return {
    restaurantName: context.restaurant?.name ?? defaultRestaurantData.name,
    restaurantAddress: context.restaurant?.address ?? defaultRestaurantData.address,
    restaurantPhone: context.restaurant?.phone ?? defaultRestaurantData.phone,
    restaurantEmail: context.restaurant?.email ?? defaultRestaurantData.email,
    restaurantTown: context.restaurant?.town ?? defaultRestaurantData.town,
    restaurantCity: context.restaurant?.city ?? defaultRestaurantData.city,
    restaurantZipCode: context.restaurant?.zip_code ?? defaultRestaurantData.zip_code,
    restaurantDescription: context.restaurant?.description ?? defaultRestaurantData.description,
    restaurantAboutUs: context.restaurant?.about_us ?? defaultRestaurantData.about_us,
    ...context,
  }
}