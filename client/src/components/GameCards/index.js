import React from 'react'

// styles
import TicTacToeIcon from '../../assets/tictactoe.png'
import SnakeIcon from '../../assets/snake.jpg'
import WarriorIcon from '../../assets/warrior.webp'
import { Box } from '@mui/material'

// components
import Card from './Card'

const GameCards = () => {
  return (
    <Box mt={12}>
      <Box display="flex" justifyContent="space-between">
        <Card
          icon={TicTacToeIcon}
          label="Tic Tac Toe"
          bgGradDeg="80"
          bgGradFrom="#000"
          bgGradTo="#2c3e50"
          circleGradDeg="190"
          circleGradFrom="#6617cb"
          circleGradTo="#cb218e"
        />

        <Card
          icon={SnakeIcon}
          label="Snake"
          bgGradDeg="80"
          bgGradFrom="#000"
          bgGradTo="#55efc4"
          circleGradDeg="200"
          circleGradFrom="#000"
          circleGradTo="#923cb5"
        />

        <Card
          icon={WarriorIcon}
          label="Warrior"
          bgGradDeg="80"
          bgGradFrom="#000"
          bgGradTo="#923cb5"
          circleGradDeg="120"
          circleGradFrom="#2c3e50"
          circleGradTo="#000"
        />
      </Box>
    </Box>
  )
}

export default GameCards
