export type TimetableType = {
  day: string
  open: string
  close: string
}

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
  timetable: {[key: number]: TimetableType}
}

export type RestaurantContextType = {
  restaurant: RestaurantDataType | null
  loading: boolean
  error: boolean
}

export type FormData = {
  name: string;
  email: string;
  message: string;
}

export type Errors = {
  name: string;
  email: string;
  message: string;
}

export type MenuSubitemType = {
  name?: string
  bottle_price?: string
  drink_price?: string
  price?: string
}

export type MenuItemType = {
  id: string
  name?: string
  description?: string
  price?: string
}

export type MenuDataType = {
  [category: string]: MenuItemType[]
}

export type motionPropsType = {
  initial: { opacity: number, y?: number, scale?: number }
  whileInView: { opacity: number, y?: number, scale?: number }
  transition: { duration: number, ease: string, delay?: number }
  viewport: { once: boolean }
}