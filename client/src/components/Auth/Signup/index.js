import React from 'react'

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

export default function Signup({ user, setUser, open, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('user:', user)
  }

  const handleFirstName = (e) =>
    setUser((user) => ({ ...user, fname: e.target.value }))

  const handleLastName = (e) =>
    setUser((user) => ({ ...user, lname: e.target.value }))

  const handleEmail = (e) =>
    setUser((user) => ({ ...user, email: e.target.value }))

  const handlePassword = (e) =>
    setUser((user) => ({ ...user, password: e.target.value }))

  return (
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
                  onChange={handleFirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lname"
                  label="Last Name"
                  required
                  fullWidth
                  autoComplete="family-name"
                  onChange={handleLastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email Address"
                  required
                  fullWidth
                  autoComplete="email"
                  onChange={handleEmail}
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
                  onChange={handlePassword}
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
  )
}
