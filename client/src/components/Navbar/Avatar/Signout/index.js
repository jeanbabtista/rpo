import { Button } from '@mui/material'
import React from 'react'

const Signout = () => {
  const handleSignout = () => {
    console.log('signin out')
  }

  return (
    <Button variant="outlined" onClick={handleSignout}>
      Signout
    </Button>
  )
}

export default Signout
