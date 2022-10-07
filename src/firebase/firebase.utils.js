import firebase from 'firebase/compat/app'
import 'firebase/compat/auth' // for authentication
import 'firebase/compat/firestore' // for db

const config = {
  apiKey: 'AIzaSyChDIwn8oTBoWxj78QV0m4SQjVq_FlUx6o',
  authDomain: 'crwn-clothing-db-f8235.firebaseapp.com',
  projectId: 'crwn-clothing-db-f8235',
  storageBucket: 'crwn-clothing-db-f8235.appspot.com',
  messagingSenderId: '590473202452',
  appId: '1:590473202452:web:fb3ac727774acf9b149001',
  measurementId: 'G-ZN2CE5E2E7',
}

////////////////////////////////////////////
firebase.initializeApp(config)
////////////////////////////////////////////

/**
 * SIGN IN WITH GOOGLE
 */
export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
