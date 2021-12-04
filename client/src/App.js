import React from 'react'

// mui
import ThemeContext from './theme'
import { CssBaseline } from '@mui/material'

// components
import Auth from './components/Auth'

export default function App() {
  return (
    <ThemeContext>
      <Auth />
      <CssBaseline />
    </ThemeContext>
  )
}
