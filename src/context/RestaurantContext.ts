import { RestaurantContextType } from '@mytypes/types'
import { DEFAULT_RESTAURANT_DATA } from '@constants/constants'
import { createContext } from 'react'

const defaultContext = {
  restaurant: DEFAULT_RESTAURANT_DATA,
  loading: true,
  error: false
}

export const RestaurantContext = createContext<RestaurantContextType>(defaultContext)