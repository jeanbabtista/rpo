import React from 'react'
import GoogleLogin from 'react-google-login'

// api
import login from '../../api/auth'

const Signin = () => {
  const handleLogin = async (googleData) => {
    try {
      const response = await login.google(googleData)
      console.log('Successfully posted google login:', response)
    } catch (e) {
      console.log('Error handling login:', e.message)
    }
  }

  return (
    <div>
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Signin
