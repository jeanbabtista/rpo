import React, { useState } from 'react'
import { Redirect } from '@reach/router'

// mui
import { Button } from '@mui/material'

// components
import Signup from './Signup'

// config
import { getLocalStorage, isAuth } from '../../helpers/auth'
const form = {
  fname: '',
  lname: '',
  email: '',
  password: '',
}

export default function Auth() {
  const [user, setUser] = useState(form)
  const [openModal, setOpenModal] = useState(false)

  return isAuth() ? (
    <>
      <h1>Welcome, {getLocalStorage()}!</h1>
    </>
  ) : (
    <>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
      <Signup
        initialUser={form}
        user={user}
        setUser={setUser}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}
