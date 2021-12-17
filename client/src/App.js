import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// mui
import { CssBaseline, Container } from '@mui/material'

// components
import Navbar from './components/Navbar'
import GameCards from './components/GameCards'

// pages
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" exact element={<GameCards />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
