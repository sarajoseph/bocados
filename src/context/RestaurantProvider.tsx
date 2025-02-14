import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@src/firebase/client'
import { RestaurantContext } from '@context/RestaurantContext'
import { RestaurantDataType } from '@mytypes/types'

export const RestaurantProvider = ({ children }: { children: React.ReactNode }) => {
  const [restaurant, setRestaurant] = useState<RestaurantDataType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)

      try {
        const docRef = doc(db, 'restaurant', 'basic')
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setRestaurant(docSnap.data() as RestaurantDataType)
        } else {
          console.log('No se encontraron datos')
          setError(true)
        }
      } catch (err) {
        console.error('Error obteniendo los datos:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <RestaurantContext.Provider value={{ restaurant, loading, error }}>
      {children}
    </RestaurantContext.Provider>
  )
}