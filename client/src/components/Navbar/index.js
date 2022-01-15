import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../App'

// styles
import logo from '../../assets/logo.png'
import { Button } from '@mui/material'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavLogo } from './styles'

// components
import Signin from './Signin'
import Avatar from './Avatar'

const Navbar = ({ bgColor }) => {
  const { routes, user } = useContext(Context)
  const navigate = useNavigate()

  // data
  const links = [
    { name: 'about', link: routes.about },
    { name: 'contact', link: routes.contact },
  ]

  return (
    <>
      <Nav bg={bgColor}>
        <NavLink to="/rpo">
          <NavLogo src={logo} alt="Logo" />
        </NavLink>

        <Bars />
        <NavMenu>
          {links.map(({ name, link }, i) => (
            <Button
              key={i}
              sx={{ color: '#fff' }}
              onClick={() => navigate(link)}
            >
              {name}
            </Button>
          ))}
        </NavMenu>

        <NavBtn>{user.isLoggedIn ? <Avatar /> : <Signin />}</NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
