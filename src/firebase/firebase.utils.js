import { initializeApp } from 'firebase/app'

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore, collection, addDoc, getDoc } from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyChDIwn8oTBoWxj78QV0m4SQjVq_FlUx6o',
  authDomain: 'crwn-clothing-db-f8235.firebaseapp.com',
  projectId: 'crwn-clothing-db-f8235',
  storageBucket: 'crwn-clothing-db-f8235.appspot.com',
  messagingSenderId: '590473202452',
  appId: '1:590473202452:web:fb3ac727774acf9b149001',
  measurementId: 'G-ZN2CE5E2E7',
}

// Initialize Firebase
const app = initializeApp(config)
export const auth = getAuth(app)

// Initialize Cloud Firebase
const db = getFirestore(app)

// export const add = async (displayname, email, id) => {
//   const docRef = await addDoc(collection(db, 'users'), {
//     name: displayname,
//     email: email,
//     id: id,
//   })
//   console.log(docRef.id)
// }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const docRef = await collection(db, `users/${userAuth.uid}`)
  const snapShot = await getDoc(docRef)
  console.log(snapShot)
}

export const signInWithGoogle = async () => {
  try {
    const provider = await new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
  } catch (err) {
    console.error(err)
  }
}
