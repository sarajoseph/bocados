import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { authFirebase } from '@src/firebase/client'
import { FirebaseError } from 'firebase/app'
import { getFirebaseErrorMessage } from '@src/firebase/errors'
import { useNavigate } from 'react-router-dom'
import { urlEditDetails } from '@constants/constants'

export const useLogin = () => {
  const navigate = useNavigate()
  const [ isSuccess, setIsSuccess ] = useState<boolean>(false)
  const [ isLoading, setIsLoading] = useState<boolean>(false)
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ errorMessage, setErrorMessage ] = useState<string>('Error')

  const initializeStates = () => {
    setIsSuccess(false)
    setIsLoading(false)
    setIsError(false)
    setErrorMessage('Error')
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      await signInWithEmailAndPassword(authFirebase, email, password)
      setIsLoading(false)
      setIsSuccess(true)
      setIsError(false)
      navigate(urlEditDetails)

    } catch (error) {
      const firebaseError = error as FirebaseError
      const errorMessage = getFirebaseErrorMessage(firebaseError.code, firebaseError.message)
      setErrorMessage(errorMessage)
      setIsLoading(false)
      setIsSuccess(false)
      setIsError(true)
    }
  }

  return {
    login,
    isSuccess,
    isLoading,
    isError,
    errorMessage,
    initializeStates
  }
}