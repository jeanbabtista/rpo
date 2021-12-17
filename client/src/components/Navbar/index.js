import React from 'react'

// components
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo } from './styles'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo src={logo} alt="Logo" />
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
