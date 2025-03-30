import { useEffect, useMemo, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '@src/firebase/client'
import { RestaurantContext } from '@context/RestaurantContext'
import { MenuDataType, BasicDataType } from '@mytypes/types'

export const RestaurantProvider = ({ children }: { children: React.ReactNode }) => {
  const [basic, setBasic] = useState<BasicDataType | null>(null)
  const [menu, setMenu] = useState<MenuDataType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)

      try {
        // Get basic restaurant data
        const docRef = doc(db, 'restaurant', 'basic')
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setBasic(docSnap.data() as BasicDataType)
        } else {
          console.log('No se encontraron datos')
          setError(true)
        }

        // Get menu restaurant data
        const subcollections = ['entrantes', 'pizzas', 'burgers', 'principales', 'postres', 'bebidas']
        const menuData: MenuDataType = {}

        await Promise.all(
          subcollections.map(async (subcollection) => {
            const querySnapshot = await getDocs(collection(db, 'restaurant', 'menu', subcollection))
            menuData[subcollection] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          })
        )
        setMenu(menuData)


      } catch (err) {
        console.error('Error obteniendo los datos:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const value = useMemo(() => ({ basic, menu, loading, error }), [basic, menu, loading, error])

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  )
}