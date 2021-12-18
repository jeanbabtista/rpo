import React from 'react'

// styles
import { Grid } from '@mui/material'

// components
import Card from './Card'

// cards data
import data from './data'

const GameCards = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
      {data.map((card, i) => (
        <Grid item lg={4} md={6} xs={12} key={i} display="flex" justifyContent="center">
          <Card {...card} />
        </Grid>
      ))}
    </Grid>
  )
}

export default GameCards
