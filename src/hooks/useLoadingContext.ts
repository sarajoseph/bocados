import { useContext } from 'react'
import { RestaurantContext } from '@context/RestaurantContext'

export const useLoadingContext = () => {
  const context = useContext(RestaurantContext)
  if (!context) {
    throw new Error('useLoadingContext debe usarse dentro de un RestaurantProvider')
  }
  return context.loading
}