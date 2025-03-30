import { RestaurantContextType } from '@mytypes/types'
import { DEFAULT_RESTAURANT_DATA } from '@constants/constants'
import { createContext } from 'react'

const defaultContext: RestaurantContextType = {
  basic: DEFAULT_RESTAURANT_DATA,
  menu: {},
  loading: true,
  error: false
}

export const RestaurantContext = createContext<RestaurantContextType>(defaultContext)