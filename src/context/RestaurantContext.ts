import { createContext } from 'react'

export type RestaurantDataType = {
  name: string
  address: string
  phone: string
  email: string
  town: string
  city: string
  zip_code: string
  description: string
  about_us: string
}

type RestaurantContextType = {
  restaurant: RestaurantDataType | null
  loading: boolean
  error: boolean
}

const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export const defaultRestaurantData = {
  name: 'test',
  address: 'test',
  phone: '+XX XXX XX XX XX',
  email: 'hola@test.com',
  town: 'test',
  city: 'test',
  zip_code: 'XXXXX',
  description: loremIpsumText,
  about_us: loremIpsumText,
}

const defaultContext = {
  restaurant: defaultRestaurantData,
  loading: true,
  error: false
}

export const RestaurantContext = createContext<RestaurantContextType>(defaultContext)