import React from 'react'

// components
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
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
