import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBEWG5Y6xT9mVnkNpas00absA0fil78Crk',
  authDomain: 'gamez-auth-57a74.firebaseapp.com',
  projectId: 'gamez-auth-57a74',
  storageBucket: 'gamez-auth-57a74.appspot.com',
  messagingSenderId: '17174504282',
  appId: '1:17174504282:web:473b70009109f7d3e8c963',
  measurementId: 'G-VFJVZ8F4K5',
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

export { app, provider }
