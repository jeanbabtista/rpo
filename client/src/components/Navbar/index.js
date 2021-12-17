import React from 'react'

// mui
import AppleIcon from '@mui/icons-material/Apple'

// components
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <AppleIcon />
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
