import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import { Button } from '@mui/material'

// context
import { Context } from '../../App'

const BackToGamesButton = () => {
  const { routes } = useContext(Context)
  const navigate = useNavigate()

  return (
    <Button variant="contained" onClick={() => navigate(routes.games)}>
      all games
    </Button>
  )
}

export default BackToGamesButton
