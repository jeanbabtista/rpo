import React from 'react'

// styles
import { DetailsContainer, PlayButton } from './styles'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Details = ({ label, link }) => {
  const navigate = useNavigate()

  return (
    <DetailsContainer>
      <Typography variant="caption">GameZ</Typography>
      <Box>
        <Typography variant="h4">{label}</Typography>
      </Box>

      <Box sx={{ mt: '1.2em' }} />

      <Box display="flex" alignSelf="flex-end">
        <PlayButton onClick={() => navigate(link)}>Play</PlayButton>
      </Box>
    </DetailsContainer>
  )
}

export default Details
