import React from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import logo from '../../assets/logo.png'
import { Button, Fab } from '@mui/material'
import SignInIcon from '@mui/icons-material/Login'

// components
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavLogo } from './styles'

const Navbar = ({ bgColor }) => {
  const navigate = useNavigate()

  return (
    <>
      <Nav bg={bgColor}>
        <NavLink to="/rpo">
          <NavLogo src={logo} alt="Logo" />
        </NavLink>

        <Bars />
        <NavMenu>
          <Button sx={{ color: '#fff' }} onClick={() => navigate('/about')}>
            About
          </Button>
          <Button sx={{ color: '#fff' }} onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
          <Button sx={{ color: '#fff' }} onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
        </NavMenu>

        <NavBtn>
          <Fab color="primary" variant="extended" onClick={() => navigate('/signin')}>
            <SignInIcon sx={{ mr: 1 }} />
            Sign In
          </Fab>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
