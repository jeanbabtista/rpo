import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'

// mui
import {
  Typography,
  Container,
  Avatar,
  Grid,
  TextField,
  Button,
  Link,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { StyledBox, BoxForm, StyledModal } from './styles'

// config
import urls from '../../../helpers/routes'

export default function Signup({ initialUser, user, setUser, open, onClose }) {
  const [openToast, setOpenToast] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setOpenToast(true)

    try {
      const response = await axios.post(urls.signup)
      setUser({ ...initialUser })
      const { message } = response.data
      toast.success(message)
    } catch (e) {
      const { message } = e.response.data
      toast.error(message)
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  return (
    <>
      <Container maxWidth="sm">
        <StyledModal open={open} onClose={onClose}>
          <StyledBox>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Sign up
            </Typography>

            <BoxForm component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="fname"
                    label="First Name"
                    required
                    fullWidth
                    autoComplete="given-name"
                    autoFocus
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lname"
                    label="Last Name"
                    required
                    fullWidth
                    autoComplete="family-name"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email Address"
                    required
                    fullWidth
                    autoComplete="email"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    autoComplete="new-password"
                    onChange={handleOnChange}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </BoxForm>
          </StyledBox>
        </StyledModal>
      </Container>

      {openToast && <ToastContainer theme="dark" />}
    </>
  )
}
