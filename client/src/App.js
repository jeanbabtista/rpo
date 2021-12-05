import React from 'react'
import { Router } from '@reach/router'

// mui
import ThemeContext from './theme'
import { CssBaseline } from '@mui/material'

// components
import Home from './components/Home'

export default function App() {
  return (
    <ThemeContext>
      <Router>
        <Home path="/" />
      </Router>
      <CssBaseline />
    </ThemeContext>
  )
}
