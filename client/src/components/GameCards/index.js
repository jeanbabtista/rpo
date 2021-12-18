import React from 'react'

// styles
import { Box, useMediaQuery, useTheme } from '@mui/material'

// components
import Card from './Card'

// cards data
import data from './data'

const GameCards = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box mt={12}>
      <Box display={matches ? 'block' : 'flex'} justifyContent="space-between" {...(matches && { width: '100%' })}>
        {data.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </Box>
    </Box>
  )
}

export default GameCards
