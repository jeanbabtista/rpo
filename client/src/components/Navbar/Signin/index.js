import React, { useContext } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// styles
import { Button } from '@mui/material'

// context
import { Context } from '../../../App'

// api
import { provider } from '../../../api/firebase'

const Signin = () => {
  const { setUser } = useContext(Context)

  const handleLoginFirebase = async () => {
    try {
      const { user } = await signInWithPopup(getAuth(), provider)
      setUser({
        isLoggedIn: true,
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoUrl: user.photoURL,
        token: user.accessToken,
      })
    } catch (e) {
      console.log(
        'Error:',
        e.message,
        'credentials:',
        GoogleAuthProvider.credentialFromError(e)
      )
    }
  }

  return (
    <Button variant="outlined" onClick={handleLoginFirebase}>
      Sign in
    </Button>
  )
}

export default Signin
