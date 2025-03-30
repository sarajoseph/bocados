import { db } from '@src/firebase/client'
import { MenuDataType } from '@mytypes/types'
import { doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { FirebaseError } from 'firebase/app'
import { useRestaurantContext } from '@hooks/useRestaurantContext'

export const useMenu = () => {
  const { restaurantMenu } = useRestaurantContext()
  const [carta, setCarta] = useState<MenuDataType | null>(restaurantMenu)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const toggleCategory = (category: string) => {
    setActiveCategory(prev => (prev === category ? null : category))
  }

  const updateMenuItem = (category: string, itemID: string, updates: { [key: string]: string }) => {
    setCarta(prevMenu => {
      if (!prevMenu) return prevMenu
      return {
        ...prevMenu,
        [category]: prevMenu[category].map(item =>
          item.id === itemID ? { ...item, ...updates } : item
        ),
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    //console.log(JSON.stringify(carta, null, 2))
    try {
      if (!carta) throw new Error('No hay datos para guardar')
      await savemenu(carta)
      setSuccessMessage('Cambios guardados correctamente')
    } catch (error) {
      const firebaseError = error as FirebaseError
      setErrorMessage(firebaseError.message)
      console.error(firebaseError.message)
    } finally {
      setIsLoading(false)
    }
  }

  const savemenu = async (data: MenuDataType) => {
    const menuRef = doc(db, 'restaurant', 'menu')
    const promises = Object.entries(data).flatMap(([category, items]) => {
      if (category === 'bebidas') {
        return items.map(item => {
          const docRef = doc(menuRef, category, item.id)
          return setDoc(docRef, item, { merge: true })
        })
      }

      // The other categories
      return items.map(item => {
        const { id, ...rest } = item
        const docRef = doc(menuRef, category, id)
        return setDoc(docRef, rest, { merge: true })
      })
    })

    await Promise.all(promises)
  }

  return {
    carta,
    activeCategory,
    toggleCategory,
    updateMenuItem,
    isLoading,
    successMessage,
    errorMessage,
    handleSubmit
  }
}