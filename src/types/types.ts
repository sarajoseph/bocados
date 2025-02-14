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