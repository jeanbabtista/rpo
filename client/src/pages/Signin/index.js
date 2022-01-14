import React from 'react'

// styles
import Button from '@mui/material/Button'

// api
import login from '../../api/auth'

const Signin = () => {
  return (
    <div>
      <h1>Login with Google</h1>
      <Button variant="contained" onClick={() => login.google()}>
        Login
      </Button>
    </div>
  )
}

export default Signin
