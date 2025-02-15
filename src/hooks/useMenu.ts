import { db } from '@src/firebase/client'
import { MenuDataType } from '@mytypes/types'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuDataType>({})
  const [loadingMenu, setLoadingMenu] = useState(true)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const subcollections = ['entrantes', 'pizzas', 'burgers', 'principales', 'postres', 'bebidas']
        const menuData: MenuDataType = {}

        await Promise.all(
          subcollections.map(async (subcollection) => {
            const querySnapshot = await getDocs(collection(db, 'restaurant', 'menu', subcollection))
            menuData[subcollection] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          })
        )
        setMenu(menuData)

      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setLoadingMenu(false)
      }
    }

    fetchMenu()
  }, [])

  return { menu, loadingMenu }
}