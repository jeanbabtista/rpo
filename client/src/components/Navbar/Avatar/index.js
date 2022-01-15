import React, { useContext } from 'react'
import { Context } from '../../../App'

// styles
import { Box } from '@mui/material'

// components
import Signout from './Signout'

const Avatar = () => {
  const { user } = useContext(Context)

  return (
    <>
      <img src={user.photoUrl} alt={user.name} width="40px" height="40px" />
      <Box ml={2} mr={2}>
        {user.name}
      </Box>
      <Signout />
    </>
  )
}

export default Avatar
