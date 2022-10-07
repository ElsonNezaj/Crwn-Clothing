import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const config = {
  apiKey: 'AIzaSyChDIwn8oTBoWxj78QV0m4SQjVq_FlUx6o',
  authDomain: 'crwn-clothing-db-f8235.firebaseapp.com',
  projectId: 'crwn-clothing-db-f8235',
  storageBucket: 'crwn-clothing-db-f8235.appspot.com',
  messagingSenderId: '590473202452',
  appId: '1:590473202452:web:fb3ac727774acf9b149001',
  measurementId: 'G-ZN2CE5E2E7',
}

// export const firestore = firebase.firestore()

const app = initializeApp(config)
export const auth = getAuth(app)

export const signInWithGoogle = async () => {
  try {
    const provider = await new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
  } catch (err) {
    console.error(err)
  }
}
