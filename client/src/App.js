import React, { createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// mui
import { CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// components
import Navbar from './components/Navbar'
import GameCards from './components/GameCards'
import TicTacToe from './components/TicTacToe'
import Snake from './components/Snake2'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

// config and context
import routes from './routes'
export const Context = createContext()
const value = { routes }

function App() {
  const theme = createTheme({ palette: { mode: 'dark' } })

  return (
    <Context.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Routes>
              <Route index path={routes.home} element={<Home />} />
              <Route path={routes.games} element={<GameCards />} />
              <Route path={`${routes.games}/tictactoe`} element={<TicTacToe />} />
              <Route path={`${routes.games}/snake`} element={<Snake />} />
              <Route path={`${routes.games}/warrior`} element={<h1>Warrior</h1>} />
              <Route path={routes.about} element={<About />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.signup} element={<Signup />} />
              <Route path={routes.signin} element={<Signin />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
