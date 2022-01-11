import React from 'react'
import { SnakeDot } from './styles'

const SnakeCharacter = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => (
        <SnakeDot
          key={i}
          style={{
            left: `${dot[0]}%`,
            top: `${dot[1]}%`,
          }}
        ></SnakeDot>
      ))}
    </div>
  )
}

export default SnakeCharacter
