import React from 'react'

// styles
import { DetailsContainer, PlayButton } from './styles'
import { Box, Typography } from '@mui/material'

const Details = ({ label }) => {
  return (
    <DetailsContainer>
      <Typography variant="caption">GameZ</Typography>
      <Box>
        <Typography variant="h4">{label}</Typography>
      </Box>

      <Box sx={{ mt: '1.2em' }} />

      <Box display="flex" alignSelf="flex-end">
        <PlayButton>Play</PlayButton>
      </Box>
    </DetailsContainer>
  )
}

export default Details
