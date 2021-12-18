import React from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import { Typography, Button } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Typography variant="h3">Welcome to GameZ!</Typography>
      <Button color="primary" onClick={() => navigate('/rpo/games')}>
        Search games
      </Button>
    </>
  )
}

export default Home
