import { useState, useEffect } from 'react'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { BasicDataType, TimetableType } from '@mytypes/types'
import { db } from '@src/firebase/client'
import { doc, setDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'

export const useEditDetails = () => {
  const {
    restaurantName,
    restaurantAddress,
    restaurantPhone,
    restaurantEmail,
    restaurantTown,
    restaurantCity,
    restaurantZipCode,
    restaurantDescription,
    restaurantAboutUs,
    restaurantTimetable
  } = useRestaurantContext()

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [town, setTown] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [description, setDescription] = useState('')
  const [aboutUs, setAboutUs] = useState('')
  const [timetable, setTimetable] = useState<{ [key: number]: TimetableType }>({})

  useEffect(() => {
    setName(restaurantName || '')
    setAddress(restaurantAddress || '')
    setPhone(restaurantPhone || '')
    setEmail(restaurantEmail || '')
    setTown(restaurantTown || '')
    setCity(restaurantCity || '')
    setZipCode(restaurantZipCode || '')
    setDescription(restaurantDescription || '')
    setAboutUs(restaurantAboutUs || '')
    setTimetable(restaurantTimetable || {})
  }, [
    restaurantName,
    restaurantAddress,
    restaurantPhone,
    restaurantEmail,
    restaurantTown,
    restaurantCity,
    restaurantZipCode,
    restaurantDescription,
    restaurantAboutUs,
    restaurantTimetable
  ])

  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('')
        setErrorMessage('')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [successMessage, errorMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const data: BasicDataType = {
      name,
      address,
      phone,
      email,
      town,
      city,
      zip_code: zipCode,
      description,
      about_us: aboutUs,
      timetable
    }

    try {
      await saveRestaurantBasicData(data)
      setSuccessMessage('Cambios guardados correctamente')
    } catch (error) {
      const firebaseError = error as FirebaseError
      setErrorMessage(firebaseError.message)
      console.error(firebaseError.message)
    } finally {
      setIsLoading(false)
    }
  }

  const saveRestaurantBasicData = async (data: BasicDataType) => {
    const docRef = doc(db, 'restaurant', 'basic')
    await setDoc(docRef, data, { merge: true })
  }

  return {
    name, setName,
    address, setAddress,
    phone, setPhone,
    email, setEmail,
    town, setTown,
    city, setCity,
    zipCode, setZipCode,
    description, setDescription,
    aboutUs, setAboutUs,
    timetable, setTimetable,
    isLoading,
    successMessage,
    errorMessage,
    handleSubmit
  }
}