import React from 'react'

// mui
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    signup: '#1c1f26',
  },
})

export default function ThemeContext({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
