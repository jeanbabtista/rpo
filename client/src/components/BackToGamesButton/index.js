import React from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import { Button } from '@mui/material'

const BackToGamesButton = () => {
  const navigate = useNavigate()

  return (
    <Button variant="contained" onClick={() => navigate('/rpo/games')}>
      all games
    </Button>
  )
}

export default BackToGamesButton
