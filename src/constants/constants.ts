import { RestaurantDataType, motionPropsType } from '@mytypes/types'

export const LOREM_IPSUM_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export const DEFAULT_RESTAURANT_DATA: RestaurantDataType = {
  name: 'test',
  address: 'test',
  phone: '+XX XXX XX XX XX',
  email: 'hola@test.com',
  town: 'test',
  city: 'test',
  zip_code: 'XXXXX',
  description: LOREM_IPSUM_TEXT,
  about_us: LOREM_IPSUM_TEXT,
  timetable: {
    [0]: {
      day: 'Lunes',
      open: '09:00h',
      close: '23:00h'
    },
    [1]: {
      day: 'Martes',
      open: '08:00h',
      close: '23:00h'
    },
    [2]: {
      day: 'Miércoles',
      open: '09:00h',
      close: '23:00h'
    },
    [3]: {
      day: 'Jueves',
      open: '08:00h',
      close: '23:00h'
    },
    [4]: {
      day: 'Viernes',
      open: '09:00h',
      close: '23:00h'
    },
    [5]: {
      day: 'Sábado',
      open: '09:00h',
      close: '01:00h'
    },
    [6]: {
      day: 'Domingo',
      open: '09:00h',
      close: '01:00h'
    }
  }
}
export const fadeOutFromBottomAnimation: motionPropsType = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: .8, ease: 'easeOut', delay: 0.2 },
  viewport: { once: true }
}
export const sectionAnimation: motionPropsType = fadeOutFromBottomAnimation
export const imgAnimation: motionPropsType = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: 'easeOut' },
  viewport: { once: true }
}
export const fadeOutAnimation: motionPropsType = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: .8, ease: 'easeOut', delay: 0.2 },
  viewport: { once: true }
}
export const buttonsFromBottomAnimation: motionPropsType = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: .8, ease: 'easeIn', delay: 0.5 },
  viewport: { once: true }
}
export const urlHome = '/'
export const urlMenu = '/menu'
export const urlContact = '/contact'
export const urlAdmin = '/admin'
export const urlEditDetails = '/admin/edit-details'
export const urlEditMenu = '/admin/edit-menu'