// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './config'

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig)
export const authFirebase = getAuth(appFirebase)
export const db = getFirestore(appFirebase)