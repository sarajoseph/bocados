import { authFirebase } from '@src/firebase/client'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { AuthContext } from '@context/AuthContext'
import { FirebaseError } from 'firebase/app'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loadingAdminUser, setLoadingAdminUser] = useState(true)

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(authFirebase, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
      }
      setLoadingAdminUser(false)
    })

    return () => authStateChanged()
  }, [])

  const logout = async () => {
    try {
      await signOut(authFirebase)
      setUser(null)
      return true
    } catch (error) {
      const err = error as FirebaseError
      console.log(err)
      console.log(err.code)
      console.log(err.message)
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ user, loadingAdminUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}