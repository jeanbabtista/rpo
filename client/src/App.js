import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// mui
import { CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// components
import Navbar from './components/Navbar'
import GameCards from './components/GameCards'

// pages
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const theme = createTheme({ palette: { mode: 'dark' } })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/rpo" exact element={<GameCards />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
