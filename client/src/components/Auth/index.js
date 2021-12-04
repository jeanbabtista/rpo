import React, { useState } from 'react'

// mui
import { Button } from '@mui/material'

// components
import Signup from './Signup'

// config
const userObj = {
  fname: '',
  lname: '',
  email: '',
  password: '',
}

export default function Auth() {
  const [user, setUser] = useState(userObj)
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Signup
        user={user}
        setUser={setUser}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}
