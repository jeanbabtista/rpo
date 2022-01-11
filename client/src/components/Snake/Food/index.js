import React from 'react'
import { SnakeFood } from './styles'

const Food = ({ dot }) => {
  return (
    <SnakeFood
      style={{
        left: `${dot[0]}%`,
        top: `${dot[1]}%`,
      }}
    />
  )
}

export default Food
