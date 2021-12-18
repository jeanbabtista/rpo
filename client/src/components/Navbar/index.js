import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../App'

// styles
import logo from '../../assets/logo.png'
import { Button, Fab } from '@mui/material'
import SignInIcon from '@mui/icons-material/Login'

// components
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavLogo } from './styles'

const Navbar = ({ bgColor }) => {
  const { routes } = useContext(Context)
  const navigate = useNavigate()

  return (
    <>
      <Nav bg={bgColor}>
        <NavLink to="/rpo">
          <NavLogo src={logo} alt="Logo" />
        </NavLink>

        <Bars />
        <NavMenu>
          <Button sx={{ color: '#fff' }} onClick={() => navigate(routes.about)}>
            About
          </Button>
          <Button sx={{ color: '#fff' }} onClick={() => navigate(routes.contact)}>
            Contact Us
          </Button>
          <Button sx={{ color: '#fff' }} onClick={() => navigate(routes.signup)}>
            Sign Up
          </Button>
        </NavMenu>

        <NavBtn>
          <Fab color="primary" variant="extended" onClick={() => navigate(routes.signin)}>
            <SignInIcon sx={{ mr: 1 }} />
            Sign In
          </Fab>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
